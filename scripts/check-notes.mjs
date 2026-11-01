// Checks that every topic in the plan has a well-formed note.
// Run with: node scripts/check-notes.mjs
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'src', 'data', 'notes')
const plan = JSON.parse(readFileSync(join(root, 'src', 'data', 'plan.json'), 'utf8'))
const subjects = readFileSync(join(root, 'src', 'lib', 'subjects.ts'), 'utf8')
const REVISION = eval(subjects.match(/const REVISION = (\/.*\/i)/)[1])

const notes = new Map()
for (const file of readdirSync(dir).filter((f) => /^n[^.]*\.ts$/.test(f) && f !== 'index.ts')) {
  const js = ts.transpileModule(readFileSync(join(dir, file), 'utf8'), { compilerOptions: { module: 'ESNext', target: 'ES2022' } }).outputText
  const { note } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`)
  notes.set(note.day, { file, note })
}

const expected = [
  ...plan.days.filter((d) => !REVISION.test(d.topic)).map((d) => d.date),
  ...plan.sociology.map((r) => Object.values(r)[0]).filter((w) => /^Week \d+/.test(w)).map((w) => `soc-${w.replace(/\D/g, '').padStart(2, '0')}`),
  'lang-english', 'lang-kannada', 'essay',
]
const VISUAL = new Set(['table', 'timeline', 'flow', 'compare', 'strata', 'wheel', 'svg', 'img'])
const textOf = (v) => (typeof v === 'string' ? v : Array.isArray(v) ? v.map(textOf).join(' ') : v && typeof v === 'object' ? Object.entries(v).filter(([k]) => !['t', 'id', 'kind', 'file', 'credit', 'license'].includes(k)).map(([, x]) => textOf(x)).join(' ') : '')

let problems = 0
const fail = (m) => { problems++; console.log('PROBLEM', m) }
const missing = expected.filter((k) => !notes.has(k))
if (missing.length) fail(`no note for: ${missing.join(', ')}`)
for (const k of notes.keys()) if (!expected.includes(k)) fail(`note not in plan: ${k}`)

const stats = []
for (const [key, { note }] of notes) {
  const words = textOf(note.blocks).split(/\s+/).length
  const visuals = note.blocks.filter((b) => VISUAL.has(b.t)).length
  stats.push({ key, words, visuals, hero: !!note.hero })
  if (visuals < 2) fail(`${key}: only ${visuals} visual blocks`)
  if (words < 350) fail(`${key}: only ${words} words`)
  if (!note.sources?.length) fail(`${key}: no sources`)
  if (!note.blocks.some((b) => b.t === 'h')) fail(`${key}: no headings`)
}
const w = stats.map((s) => s.words).sort((a, b) => a - b)
console.log(`${notes.size} of ${expected.length} topics. Words: min ${w[0]}, median ${w[w.length >> 1]}, max ${w[w.length - 1]}, total ${w.reduce((a, b) => a + b, 0)}. With hero image: ${stats.filter((s) => s.hero).length}. With own references: ${[...notes.values()].filter((n) => n.note.beyond).length}`)
console.log('Shortest:', stats.sort((a, b) => a.words - b.words).slice(0, 6).map((s) => `${s.key} ${s.words}`).join(', '))
console.log(problems ? `${problems} problems` : 'All checks passed')
process.exit(problems ? 1 : 0)
