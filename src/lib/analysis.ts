import { questionById } from '../data/bank'
import type { AppState, Attempt, Difficulty, Question } from './types'

export const MARK_RIGHT = 2
export const MARK_WRONG = 2 / 3

export interface Tally {
  total: number
  attempted: number
  correct: number
  wrong: number
}

const empty = (): Tally => ({ total: 0, attempted: 0, correct: 0, wrong: 0 })

function add(t: Tally, q: Question, picked: number | null | undefined) {
  t.total++
  if (picked === null || picked === undefined) return
  t.attempted++
  if (picked === q.answer) t.correct++
  else t.wrong++
}

export const accuracy = (t: Tally) => (t.attempted ? Math.round((t.correct / t.attempted) * 100) : null)
export const marks = (t: Tally) => t.correct * MARK_RIGHT - t.wrong * MARK_WRONG

export interface AttemptStats {
  all: Tally
  byDifficulty: Record<Difficulty, Tally>
  pyq: Tally
  predicted: Tally
  weakConcepts: string[]
}

export function attemptStats(a: Attempt): AttemptStats {
  const stats: AttemptStats = {
    all: empty(),
    byDifficulty: { easy: empty(), moderate: empty(), hard: empty() },
    pyq: empty(),
    predicted: empty(),
    weakConcepts: [],
  }
  for (const id of a.questionIds) {
    const q = questionById.get(id)
    if (!q) continue
    const picked = a.answers[id]
    add(stats.all, q, picked)
    add(stats.byDifficulty[q.difficulty], q, picked)
    add(q.kind === 'pyq' ? stats.pyq : stats.predicted, q, picked)
    if (picked !== null && picked !== undefined && picked !== q.answer) stats.weakConcepts.push(q.concept)
  }
  return stats
}

/** Questions whose latest answer was wrong, newest first. A later correct answer clears one. */
export function openMistakes(state: AppState) {
  const latest = new Map<string, boolean>()
  for (const attempt of [...state.attempts].sort((x, y) => y.at.localeCompare(x.at))) {
    for (const id of attempt.questionIds) {
      const picked = attempt.answers[id]
      const q = questionById.get(id)
      if (!q || latest.has(id) || picked === null || picked === undefined) continue
      latest.set(id, picked === q.answer)
    }
  }
  return [...latest.entries()].filter(([, right]) => !right).map(([id]) => questionById.get(id)!)
}

export interface Finding {
  title: string
  detail: string
}

const MISTAKE_READING: Record<string, string> = {
  knowledge: 'You did not know the fact or concept. Go back to the source chapter, because more tests will not fix this.',
  misread: 'You knew enough but misread the wording. Slow down on words like "only", "all", "not" and "correctly", and underline them on paper.',
  elimination: 'You narrowed it down and then chose badly. Practise testing each statement on its own before looking at the option combinations.',
  guess: 'You guessed and lost marks. Each wrong answer costs a third of a right one, so guess only after removing at least two options.',
}

/** Rule-based reading of the record: it needs enough attempts before it says anything. */
export function diagnose(state: AppState): Finding[] {
  const findings: Finding[] = []
  const totals = { all: empty(), easy: empty(), hard: empty(), pyq: empty(), predicted: empty() }
  const formats = new Map<string, Tally>()
  const concepts = new Map<string, Tally>()

  for (const attempt of state.attempts) {
    for (const id of attempt.questionIds) {
      const q = questionById.get(id)
      if (!q) continue
      const picked = attempt.answers[id]
      add(totals.all, q, picked)
      if (q.difficulty === 'easy') add(totals.easy, q, picked)
      if (q.difficulty === 'hard') add(totals.hard, q, picked)
      add(q.kind === 'pyq' ? totals.pyq : totals.predicted, q, picked)
      if (!formats.has(q.format)) formats.set(q.format, empty())
      add(formats.get(q.format)!, q, picked)
      if (!concepts.has(q.concept)) concepts.set(q.concept, empty())
      add(concepts.get(q.concept)!, q, picked)
    }
  }
  if (totals.all.attempted < 20) return findings

  const easy = accuracy(totals.easy)
  const hard = accuracy(totals.hard)
  if (easy !== null && totals.easy.attempted >= 8 && easy < 70) {
    findings.push({
      title: `Easy questions are at ${easy}%`,
      detail: 'These are direct questions from the source, so this points to thin first reading rather than exam technique. Re-read before testing again.',
    })
  }
  if (easy !== null && hard !== null && totals.hard.attempted >= 8 && easy - hard >= 30) {
    findings.push({
      title: `Your accuracy drops from ${easy}% on easy to ${hard}% on hard`,
      detail: 'You hold the facts but struggle when they are combined or framed indirectly. Write comparison tables instead of adding more facts.',
    })
  }
  const pyq = accuracy(totals.pyq)
  const predicted = accuracy(totals.predicted)
  if (pyq !== null && predicted !== null && totals.pyq.attempted >= 8 && predicted - pyq >= 15) {
    findings.push({
      title: `PYQs at ${pyq}% against ${predicted}% on predicted questions`,
      detail: "UPSC's own framing is catching you out. Spend more time on why its wrong options look right.",
    })
  }
  const attemptRate = totals.all.attempted / totals.all.total
  const acc = accuracy(totals.all)!
  if (attemptRate > 0.9 && acc < 50) {
    findings.push({
      title: `You attempt ${Math.round(attemptRate * 100)}% of questions at ${acc}% accuracy`,
      detail: 'Negative marking is eating your score. Leave questions where you cannot remove two options.',
    })
  }
  if (attemptRate < 0.6 && acc > 75) {
    findings.push({
      title: `You attempt only ${Math.round(attemptRate * 100)}% of questions, at ${acc}% accuracy`,
      detail: 'You are leaving marks behind. With accuracy this high, you can afford to attempt more of the questions where you can remove one or two options.',
    })
  }

  const weakFormats = [...formats.entries()]
    .filter(([, t]) => t.attempted >= 6 && (accuracy(t) ?? 100) < 50)
    .sort((a, b) => (accuracy(a[1]) ?? 0) - (accuracy(b[1]) ?? 0))
  if (weakFormats[0]) {
    findings.push({
      title: `Weakest format: ${weakFormats[0][0].replace('-', ' ')} (${accuracy(weakFormats[0][1])}%)`,
      detail: 'Practise this format deliberately. It may be the way the question is asked, not the subject, that is costing you.',
    })
  }

  const kinds = Object.values(state.mistakes)
  if (kinds.length >= 5) {
    const count = new Map<string, number>()
    kinds.forEach((k) => count.set(k, (count.get(k) ?? 0) + 1))
    const [top, n] = [...count.entries()].sort((a, b) => b[1] - a[1])[0]
    findings.push({
      title: `${Math.round((n / kinds.length) * 100)}% of the mistakes you tagged are "${top}"`,
      detail: MISTAKE_READING[top],
    })
  }
  return findings
}

export function weakConceptTable(state: AppState) {
  const concepts = new Map<string, Tally & { subject: string }>()
  for (const attempt of state.attempts) {
    for (const id of attempt.questionIds) {
      const q = questionById.get(id)
      if (!q) continue
      if (!concepts.has(q.concept)) concepts.set(q.concept, { ...empty(), subject: attempt.subject })
      add(concepts.get(q.concept)!, q, attempt.answers[id])
    }
  }
  return [...concepts.entries()]
    .filter(([, t]) => t.wrong > 0)
    .map(([concept, t]) => ({ concept, ...t, accuracy: accuracy(t)! }))
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)
}
