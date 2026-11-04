import { chapterFor } from './sociology'

// The month-wise Sociology and language targets you set: first reading of Sociology by end of January.
const SOCIOLOGY_MONTHS: Record<string, string> = {
  '2026-11': 'Start Paper I: fundamentals, thinkers and basic concepts.',
  '2026-12': 'Continue Paper I and begin Paper II: Indian Society.',
  '2027-01': 'Complete the first reading of both papers.',
  '2027-02': 'First revision and answer-writing practice.',
  '2027-03': 'Light maintenance alongside Prelims.',
  '2027-04': 'Light maintenance alongside Prelims.',
  '2027-05': 'Light maintenance until Prelims. After Prelims: intensive revision, tests and answers.',
}

const LANGUAGE_MONTHS: Record<string, string> = {
  '2026-11': 'Kannada basics, grammar and comprehension.',
  '2026-12': 'Grammar, vocabulary, précis and translation.',
  '2027-01': 'Essay writing and comprehension.',
  '2027-02': 'Previous-year language papers.',
  '2027-03': 'A timed practice paper every two weeks.',
  '2027-04': 'A timed practice paper every two weeks.',
  '2027-05': 'Light revision.',
}

/** The Sociology chapter for a date, paced to finish the first reading by 31 January. */
export function sociologyFor(date: string) {
  const c = chapterFor(date)
  return { key: c.key, title: `Paper ${c.paper}, unit ${c.unit}: ${c.title}`, focus: SOCIOLOGY_MONTHS[date.slice(0, 7)] ?? '' }
}

export const languageFocus = (date: string) => LANGUAGE_MONTHS[date.slice(0, 7)] ?? ''

export const weeklyLoad = [
  ['General Studies', 'Main daily study priority'],
  ['Sociology', 'About 8-10 hours a week at first'],
  ['Kannada and English', 'Two sessions a week, 30-40 minutes each'],
  ['Current affairs', '30-45 minutes a day'],
]
