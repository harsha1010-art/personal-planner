import { questions, questionsForDay } from '../data/bank'
import { openMistakes } from './analysis'
import { isLearningDay } from './subjects'
import { dayByDate, days, formatDate, subjectOf, weeks } from './plan'
import { getState } from './store'
import type { Question } from './types'

export interface TestSet {
  id: string
  title: string
  subject: string
  questions: Question[]
  /** How many questions this kind of test should hold when the bank is complete. */
  target: number
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 13), 1274126177)
    const j = Math.abs(h) % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function subjectQuestions(subject: string) {
  return questions.filter((q) => {
    const d = dayByDate(q.day)
    return d && subjectOf(d) === subject
  })
}

export function buildSet(id: string): TestSet | null {
  const [type, value] = id.split(':')
  if (type === 'day') {
    const day = dayByDate(value)
    if (!day) return null
    const own = questionsForDay(value)
    if (own.length > 0 || isLearningDay(day)) {
      return { id, title: day.topic, subject: subjectOf(day), questions: seededShuffle(own, id), target: 30 }
    }
    // Revision, test and mock days draw from what is already written for that subject.
    const subject = subjectOf(day)
    const pool = subject === 'Mixed' ? questions : subjectQuestions(subject)
    const target = Number(day.output.match(/(\d+)[^\d]*(MCQs|questions|PYQs)/)?.[1]) || (/mock/i.test(day.topic) ? 100 : 30)
    return { id, title: day.topic, subject, questions: seededShuffle(pool, id).slice(0, target), target }
  }
  if (type === 'week') {
    const week = weeks[Number(value)]
    if (!week) return null
    const pool = days
      .filter((d) => d.date >= week.from && d.date <= week.to)
      .flatMap((d) => questionsForDay(d.date))
    return {
      id,
      title: `${week.week} cumulative test`,
      subject: 'Weekly',
      questions: seededShuffle(pool, id).slice(0, 50),
      target: 50,
    }
  }
  if (type === 'subject') {
    return {
      id,
      title: `${value}: subject test`,
      subject: value,
      questions: seededShuffle(subjectQuestions(value), id).slice(0, 100),
      target: 100,
    }
  }
  if (type === 'revise') {
    return {
      id,
      title: `Mistake repair, ${formatDate(value)}`,
      subject: 'Revision',
      questions: seededShuffle(openMistakes(getState()), id).slice(0, 30),
      target: 30,
    }
  }
  return null
}

export const secondsFor = (count: number) => Math.round(count * 72) // Prelims pace: 100 questions in 120 minutes
