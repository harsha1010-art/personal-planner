// Checks the question bank against the rules for a complete daily set.
// Run with: npm run check:bank
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'bank')
const all = []
const mains = []
for (const file of readdirSync(dir).filter((f) => /^d.*\.ts$/.test(f))) {
  const js = ts.transpileModule(readFileSync(join(dir, file), 'utf8'), { compilerOptions: { module: 'ESNext', target: 'ES2022' } }).outputText
  const mod = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)
  all.push(...(mod.questions ?? []))
  mains.push(...(mod.mains ?? []))
}

let problems = 0
const fail = (msg) => { problems++; console.log('PROBLEM', msg) }
const seen = new Set()
const stems = new Map()
for (const q of all) {
  if (seen.has(q.id)) fail(`${q.id}: duplicate id`)
  seen.add(q.id)
  const key = q.stem + (q.lines ?? []).join('')
  if (stems.has(key)) fail(`${q.id}: same text as ${stems.get(key)}`)
  stems.set(key, q.id)
  if (q.options.length !== 4) fail(`${q.id}: needs 4 options`)
  if (new Set(q.options).size !== 4) fail(`${q.id}: repeated option`)
  if (![0, 1, 2, 3].includes(q.answer)) fail(`${q.id}: bad answer`)
  q.whyWrong.forEach((w, i) => { if (i !== q.answer && !w?.trim()) fail(`${q.id}: no reason for option ${i}`) })
  for (const field of ['explanation', 'source', 'concept', 'takeaway', 'whyAsked']) if (!q[field]?.trim()) fail(`${q.id}: no ${field}`)
  if (q.kind === 'pyq' && !q.pyq) fail(`${q.id}: PYQ without paper reference`)
  if (q.kind === 'predicted' && q.pyq) fail(`${q.id}: predicted question has a PYQ reference`)
}

const days = [...new Set(all.map((q) => q.day))].sort()
for (const day of days) {
  const set = all.filter((q) => q.day === day)
  const count = (d) => set.filter((q) => q.difficulty === d).length
  const pyq = set.filter((q) => q.kind === 'pyq').length
  const formats = new Set(set.map((q) => q.format)).size
  const m = mains.filter((x) => x.day === day).length
  console.log(`${day}: ${set.length} MCQs (E${count('easy')} M${count('moderate')} H${count('hard')}), ${pyq} PYQ, ${formats} formats, ${m} Mains`)
  if (set.length !== 30) fail(`${day}: has ${set.length} questions, needs 30`)
  if (count('easy') !== 8 || count('moderate') !== 14 || count('hard') !== 8) fail(`${day}: difficulty mix must be 8/14/8`)
  if (m < 3) fail(`${day}: needs at least 3 Mains questions`)
}
const answers = [0, 1, 2, 3].map((a) => all.filter((q) => q.answer === a).length)
for (const m of mains) { const w = m.model.trim().split(/s+/).length; if (w > m.words * 1.1) fail(`${m.id}: model answer has ${w} words, limit ${m.words}`) }
console.log(`Total ${all.length} MCQs, ${all.filter((q) => q.kind === 'pyq').length} PYQ, ${mains.length} Mains. Answer spread a/b/c/d: ${answers.join('/')}`)
console.log(problems ? `${problems} problems` : 'All checks passed')
process.exit(problems ? 1 : 0)
