import { extraByKey, sociologyKeyForWeek } from './extras'
import { daysBetween, weeks } from './plan'

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

const READING_TOPICS = 14 // Weeks 1-14 of the Sociology plan are new reading.
const READING_DAYS = 92 // 1 November to 31 January.

/** The Sociology topic for a date, paced to finish the first reading by 31 January. */
export function sociologyFor(date: string) {
  const elapsed = daysBetween(weeks[0].from, date)
  const index = elapsed < READING_DAYS
    ? Math.floor((Math.max(0, elapsed) / READING_DAYS) * READING_TOPICS)
    : Math.min(15, READING_TOPICS + Math.floor((elapsed - READING_DAYS) / 14))
  const key = sociologyKeyForWeek(index)
  return { key, title: extraByKey.get(key)?.title ?? '', focus: SOCIOLOGY_MONTHS[date.slice(0, 7)] ?? '' }
}

export const languageFocus = (date: string) => LANGUAGE_MONTHS[date.slice(0, 7)] ?? ''

export const weeklyLoad = [
  ['General Studies', 'Main daily study priority'],
  ['Sociology', 'About 8-10 hours a week at first'],
  ['Kannada and English', 'Two sessions a week, 30-40 minutes each'],
  ['Current affairs', '30-45 minutes a day'],
]
