import { extraTopics } from './extras'
import { days, subjectOf, type Day } from './plan'

/** Each subject's block colour, always paired with white text at a passing contrast. */
const COLORS: Record<string, string> = {
  'Ancient History': '#b8401f',
  'Medieval History': '#7b3f8c',
  'Modern History': '#0f6e56',
  'Art & Culture': '#b02a5b',
  Polity: '#1f4fc4',
  Geography: '#0b7285',
  Economy: '#9a5b00',
  Environment: '#2f7d32',
  'Science & Technology': '#3a5168',
  'International Relations': '#2d4a8a',
  Governance: '#4a5a1e',
  'Society & Social Justice': '#a13d7a',
  Agriculture: '#5b7016',
  'Disaster Management': '#a33a1a',
  'Internal Security': '#3b3f46',
  Ethics: '#5a4bb0',
  'World History': '#7a5230',
  'Post-independence India': '#176b6b',
  Infrastructure: '#4d5660',
  'Current Affairs': '#b3261e',
  CSAT: '#245f9e',
  'Sociology Optional': '#8a2f6b',
  'Languages and Essay': '#1d6f8a',
}

export const subjectColor = (subject: string) => COLORS[subject] ?? '#14130f'

const REVISION = /revision|PYQ|buffer|mock|test|audit|repair|consolidation|rapid recall|backlog|syllabus mapping|^Rest|Light final|Map and places|Map, species|CSAT final/i

/** Plan days that introduce a topic to learn, as opposed to revision and tests. */
export const isLearningDay = (d: Day) => !REVISION.test(d.topic) && subjectOf(d) !== 'Mixed'

export const learningDays = days.filter(isLearningDay)

export interface TopicEntry {
  key: string
  title: string
  when: string
}

export const subjectsInOrder = [
  ...new Set([...learningDays.map(subjectOf), ...extraTopics.map((t) => t.subject)]),
]

export const topicsOf = (subject: string): TopicEntry[] => [
  ...learningDays.filter((d) => subjectOf(d) === subject).map((d) => ({ key: d.date, title: d.topic, when: d.date })),
  ...extraTopics.filter((t) => t.subject === subject).map((t) => ({ key: t.key, title: t.title, when: t.when })),
]

export const totalTopics = learningDays.length + extraTopics.length
