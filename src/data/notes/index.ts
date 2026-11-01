import type { TopicNote } from './types'

const modules = import.meta.glob<{ note: TopicNote }>('./n*.ts', { eager: true })

export const notes = Object.values(modules).map((m) => m.note)
const byDay = new Map(notes.map((n) => [n.day, n]))
export const noteForDay = (date: string) => byDay.get(date)
