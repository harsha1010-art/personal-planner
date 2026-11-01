import { guide } from './plan'

/** Topics that run alongside the daily plan rather than on one date. */
export interface ExtraTopic {
  key: string
  title: string
  subject: string
  when: string
}

const sociologyWeeks = guide.sociology
  .map((row) => Object.values(row))
  .filter(([week]) => /^Week \d+/.test(week))

export const extraTopics: ExtraTopic[] = [
  ...sociologyWeeks.map(([week, paper, topic]) => ({
    key: `soc-${week.replace(/\D/g, '').padStart(2, '0')}`,
    title: topic,
    subject: 'Sociology Optional',
    when: `${week}, ${paper}`,
  })),
  { key: 'lang-english', title: 'English Compulsory (Paper B)', subject: 'Languages and Essay', when: 'Qualifying paper' },
  { key: 'lang-kannada', title: 'Kannada Compulsory (Paper A)', subject: 'Languages and Essay', when: 'Qualifying paper' },
  { key: 'essay', title: 'The Essay Paper', subject: 'Languages and Essay', when: 'From January, one every two weeks' },
]

export const extraByKey = new Map(extraTopics.map((t) => [t.key, t]))
export const sociologyKeyForWeek = (weekIndex: number) => `soc-${String(weekIndex + 1).padStart(2, '0')}`
