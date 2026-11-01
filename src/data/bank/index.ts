import type { MainsQuestion, Question } from '../../lib/types'

// Each file in this folder holds one plan day: `questions` and `mains`.
type Module = { questions?: Question[]; mains?: MainsQuestion[] }
const modules = import.meta.glob<Module>('./d*.ts', { eager: true })

// Keeps the option order of PYQs (as printed by UPSC) and of ordered codes such as
// "Only one, Only two". Everything else gets a fixed shuffle so answers don't cluster on (a).
const KEEP_ORDER = /^(Only |Both |Statement |I correct|None$|\d( only| and)|[A-D]-\d)/

function shuffleOptions(q: Question): Question {
  if (q.kind === 'pyq' || q.options.some((o) => KEEP_ORDER.test(o))) return q
  let h = 2166136261
  for (const c of q.id) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  const order = [0, 1, 2, 3]
  for (let i = 3; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 13), 1274126177)
    const j = Math.abs(h) % (i + 1)
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  const pick = <T,>(a: [T, T, T, T]) => order.map((i) => a[i]) as [T, T, T, T]
  return { ...q, options: pick(q.options), whyWrong: pick(q.whyWrong), answer: order.indexOf(q.answer) as Question['answer'] }
}

export const questions: Question[] = Object.values(modules).flatMap((m) => m.questions ?? []).map(shuffleOptions)
export const mainsQuestions: MainsQuestion[] = Object.values(modules).flatMap((m) => m.mains ?? [])

export const questionById = new Map(questions.map((q) => [q.id, q]))
export const mainsById = new Map(mainsQuestions.map((m) => [m.id, m]))

const byDay = new Map<string, Question[]>()
for (const q of questions) byDay.set(q.day, [...(byDay.get(q.day) ?? []), q])

export const questionsForDay = (date: string) => byDay.get(date) ?? []
export const mainsForDay = (date: string) => mainsQuestions.filter((m) => m.day === date)
