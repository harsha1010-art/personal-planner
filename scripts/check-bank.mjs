// Checks the question bank against the rules for a complete daily set.
// Run with: npm run check:bank
// Add dates to report on those days only: node scripts/check-bank.mjs 2027-01-01 2027-01-02
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'src', 'data', 'bank')
const only = process.argv.slice(2)
const shown = (day) => !only.length || only.includes(day)

let problems = 0
const fail = (msg) => { problems++; console.log('PROBLEM', msg) }

const all = []
const mains = []
for (const file of readdirSync(dir).filter((f) => /^d.*\.ts$/.test(f))) {
  const js = ts.transpileModule(readFileSync(join(dir, file), 'utf8'), { compilerOptions: { module: 'ESNext', target: 'ES2022' } }).outputText
  try {
    const mod = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)
    all.push(...(mod.questions ?? []))
    mains.push(...(mod.mains ?? []))
  } catch (e) {
    fail(`${file}: could not load: ${e.message}`)
  }
}

const FORMATS = new Set(['statement', 'multi-statement', 'match', 'assertion-reason', 'chronology', 'application', 'map', 'current-static', 'factual'])
const KEEP_ORDER = /^(Only |Both |Statement |I correct|None$|\d( only| and)|[A-D]-\d)/
// The first sets were written before these stricter rules, so they are counted, not failed.
const FIRST_SETS_END = '2026-11-12'
const strict = (day) => day > FIRST_SETS_END
const CSAT = /^CSAT/

const plan = JSON.parse(readFileSync(join(root, 'src', 'data', 'plan.json'), 'utf8'))
const REVISION = eval(readFileSync(join(root, 'src', 'lib', 'subjects.ts'), 'utf8').match(/const REVISION = (\/.*\/i)/)[1])
const topics = plan.days.filter((d) => !REVISION.test(d.topic))
const topicOf = new Map(plan.days.map((d) => [d.date, d.topic]))

const seen = new Set()
const stems = new Map()
let thinReasons = 0
for (const q of all) {
  if (seen.has(q.id)) fail(`${q.id}: duplicate id`)
  seen.add(q.id)
  const key = q.stem + (q.lines ?? []).join('')
  if (stems.has(key)) fail(`${q.id}: same text as ${stems.get(key)}`)
  stems.set(key, q.id)
  if (!shown(q.day)) continue
  if (!topicOf.has(q.day)) fail(`${q.id}: day ${q.day} is not in the plan`)
  if (!FORMATS.has(q.format)) fail(`${q.id}: unknown format ${q.format}`)
  if (q.options.length !== 4) fail(`${q.id}: needs 4 options`)
  if (new Set(q.options).size !== 4) fail(`${q.id}: repeated option`)
  if (![0, 1, 2, 3].includes(q.answer)) fail(`${q.id}: bad answer`)
  q.whyWrong.forEach((w, i) => {
    if (i === q.answer) return
    if (!w?.trim()) fail(`${q.id}: no reason for option ${i}`)
    else if (w.trim().length < 15) {
      if (strict(q.day)) fail(`${q.id}: reason for option ${i} is too thin: "${w}"`)
      else thinReasons++
    }
  })
  for (const field of ['explanation', 'source', 'concept', 'takeaway', 'whyAsked']) if (!q[field]?.trim()) fail(`${q.id}: no ${field}`)
  if (strict(q.day) && q.explanation.trim().length < 40) fail(`${q.id}: explanation is too thin`)
  if (q.kind === 'pyq' && !q.pyq) fail(`${q.id}: PYQ without paper reference`)
  if (q.kind === 'predicted' && q.pyq) fail(`${q.id}: predicted question has a PYQ reference`)
}

const days = [...new Set([...all.map((q) => q.day), ...mains.map((m) => m.day)])].sort().filter(shown)
for (const day of days) {
  const set = all.filter((q) => q.day === day)
  const m = mains.filter((x) => x.day === day).length
  // Essay and language exercises are writing practice, so only Sociology weeks need three.
  if (!set.length) { console.log(`${day}: ${m} Mains`); if (m < 3 && day.startsWith('soc-')) fail(`${day}: needs at least 3 Mains questions`); continue }
  const count = (d) => set.filter((q) => q.difficulty === d).length
  const pyq = set.filter((q) => q.kind === 'pyq').length
  const formats = new Set(set.map((q) => q.format)).size
  console.log(`${day}: ${set.length} MCQs (E${count('easy')} M${count('moderate')} H${count('hard')}), ${pyq} PYQ, ${formats} formats, ${m} Mains`)
  if (set.length !== 30) fail(`${day}: has ${set.length} questions, needs 30`)
  if (count('easy') !== 8 || count('moderate') !== 14 || count('hard') !== 8) fail(`${day}: difficulty mix must be 8/14/8`)
  if (pyq > 10) fail(`${day}: has ${pyq} PYQs, the most is 10`)
  if (m < 3 && !CSAT.test(topicOf.get(day) ?? '')) fail(`${day}: needs at least 3 Mains questions`)
  if (strict(day)) {
    if (formats < 4) fail(`${day}: only ${formats} question formats`)
    // These options keep their order on screen, so a favourite answer position would be a giveaway.
    const fixed = set.filter((q) => q.kind === 'predicted' && q.options.some((o) => KEEP_ORDER.test(o)))
    for (const a of [0, 1, 2, 3]) {
      const n = fixed.filter((q) => q.answer === a).length
      if (fixed.length >= 5 && n / fixed.length > 0.5) fail(`${day}: ${n} of ${fixed.length} coded-option questions have the same answer position (${a})`)
    }
  }
}

for (const m of mains) {
  if (!shown(m.day)) continue
  const w = m.model.trim().split(/\s+/).length
  if (w > m.words * 1.1) fail(`${m.id}: model answer has ${w} words, limit ${m.words}`)
  if (!m.mustCover?.length) fail(`${m.id}: no mustCover list`)
}

const answers = [0, 1, 2, 3].map((a) => all.filter((q) => q.answer === a).length)
console.log(`Total ${all.length} MCQs, ${all.filter((q) => q.kind === 'pyq').length} PYQ, ${mains.length} Mains. Answer spread a/b/c/d before shuffling: ${answers.join('/')}`)
if (!only.length) {
  const missing = topics.filter((d) => all.filter((q) => q.day === d.date).length !== 30)
  console.log(`Topics with a full test: ${topics.length - missing.length} of ${topics.length}`)
  if (missing.length) console.log(`Still to write: ${missing.map((d) => d.date.slice(5)).join(', ')}`)
  const socWeeks = plan.sociology.map((r) => Object.values(r)[0]).filter((w) => /^Week \d+/.test(w)).map((w) => `soc-${w.replace(/\D/g, '').padStart(2, '0')}`)
  console.log(`Sociology weeks with 3 Mains: ${socWeeks.filter((k) => mains.filter((m) => m.day === k).length >= 3).length} of ${socWeeks.length}`)
  if (thinReasons) console.log(`Note: ${thinReasons} one-word reasons remain in the first sets (to ${FIRST_SETS_END})`)
}
console.log(problems ? `${problems} problems` : 'All checks passed')
process.exit(problems ? 1 : 0)
