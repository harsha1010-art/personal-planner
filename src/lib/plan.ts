import plan from '../data/plan.json'

export type Day = (typeof plan.days)[number]
export const days: Day[] = plan.days
export const weeks = plan.weeks
export const guide = plan

export const PRELIMS_DATE = '2027-05-23'

export function isoToday() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const parse = (iso: string) => new Date(`${iso}T00:00:00`)

export function addDays(iso: string, n: number) {
  const d = parse(iso)
  d.setDate(d.getDate() + n)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function daysBetween(a: string, b: string) {
  return Math.round((parse(b).getTime() - parse(a).getTime()) / 86400000)
}

export function formatDate(iso: string, style: 'long' | 'short' = 'short') {
  return parse(iso).toLocaleDateString('en-IN', style === 'long'
    ? { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    : { day: 'numeric', month: 'short' })
}

export function dayByDate(iso: string) {
  return days.find((d) => d.date === iso)
}

/** Today's plan day, clamped to the plan window. */
export function currentDay() {
  const t = isoToday()
  return dayByDate(t) ?? (t < days[0].date ? days[0] : days[days.length - 1])
}

const SUBJECT_RULES: [RegExp, string][] = [
  [/CSAT/i, 'CSAT'],
  [/mock|sectional test|monthly test|cumulative|mixed|audit|repair|consolidation: (GS|6)|backlog|^Rest|Light final/i, 'Mixed'],
  [/Ancient and Medieval|Ancient\/Medieval|Ancient, Medieval/i, 'History (Ancient & Medieval)'],
  [/Polity/i, 'Polity'],
  [/Modern History/i, 'Modern History'],
  [/Geography|Map and places/i, 'Geography'],
  [/Economy/i, 'Economy'],
  [/Environment|Map, species/i, 'Environment'],
  [/Science & Technology/i, 'Science & Technology'],
  [/Current affairs/i, 'Current Affairs'],
  [/Art & Culture|architecture: |Sculpture|dance, music|Literature, languages/i, 'Art & Culture'],
  [/Delhi Sultanate|Vijayanagara|Mughal|Marathas|Bhakti|Medieval/i, 'Medieval History'],
  [/^IR:/i, 'International Relations'],
  [/Governance/i, 'Governance'],
  [/Indian Society|Women, population|Globalisation|Social Justice/i, 'Society & Social Justice'],
  [/Agriculture/i, 'Agriculture'],
  [/Disaster/i, 'Disaster Management'],
  [/Internal Security/i, 'Internal Security'],
  [/Ethics/i, 'Ethics'],
  [/World History/i, 'World History'],
  [/Post-independence/i, 'Post-independence India'],
  [/Infrastructure/i, 'Infrastructure'],
]

export function subjectOf(day: Day) {
  if (day.date <= '2026-11-14') return 'Ancient History'
  for (const [re, subject] of SUBJECT_RULES) if (re.test(day.topic)) return subject
  return 'Mixed'
}

export function weekOf(iso: string) {
  return weeks.findIndex((w) => iso >= w.from && iso <= w.to)
}

export function monthKey(iso: string) {
  return iso.slice(0, 7)
}

export function monthName(key: string) {
  return parse(`${key}-01`).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
}
