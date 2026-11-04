import { guide } from './plan'
import { chapterDates, chapters } from './sociology'

/** Topics that run alongside the daily plan rather than on one date. */
export interface ExtraTopic {
  key: string
  title: string
  subject: string
  when: string
}

const short = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })

export const extraTopics: ExtraTopic[] = [
  ...chapters.map((c) => {
    const d = chapterDates.get(c.key)!
    return { key: c.key, title: c.title, subject: 'Sociology Optional', when: `Paper ${c.paper}, unit ${c.unit}, ${short(d.from)} to ${short(d.to)}` }
  }),
  { key: 'lang-english', title: 'English Compulsory (Paper B)', subject: 'Languages and Essay', when: 'Qualifying paper' },
  { key: 'lang-kannada', title: 'Kannada Compulsory (Paper A)', subject: 'Languages and Essay', when: 'Qualifying paper' },
  { key: 'essay', title: 'The Essay Paper', subject: 'Languages and Essay', when: 'From January, one every two weeks' },
]

/** The first Sociology notes, one per plan week. They stay readable until each chapter is rewritten from the books. */
export const sociologyDrafts: ExtraTopic[] = guide.sociology
  .map((row) => Object.values(row))
  .filter(([week]) => /^Week \d+/.test(week))
  .map(([week, paper, topic]) => ({ key: `soc-${week.replace(/\D/g, '').padStart(2, '0')}`, title: topic, subject: 'Sociology Optional', when: `Earlier draft, ${week}, ${paper}` }))

export const extraByKey = new Map([...extraTopics, ...sociologyDrafts].map((t) => [t.key, t]))
