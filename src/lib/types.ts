export type Difficulty = 'easy' | 'moderate' | 'hard'
export type Kind = 'pyq' | 'predicted'
export type Format =
  | 'statement'
  | 'multi-statement'
  | 'match'
  | 'assertion-reason'
  | 'chronology'
  | 'application'
  | 'map'
  | 'current-static'
  | 'factual'

export interface Question {
  id: string
  /** Date of the plan day this question was written for. */
  day: string
  kind: Kind
  /** PYQ only: where it appears in the official paper. */
  pyq?: { year: number; pdfPage: number; keyStatus: 'official' | 'reasoned' }
  difficulty: Difficulty
  format: Format
  stem: string
  /** Numbered statements or match-list rows, shown between stem and options. */
  lines?: string[]
  /** Text after the lines, such as "How many of the above are correct?" */
  ask?: string
  options: [string, string, string, string]
  answer: 0 | 1 | 2 | 3
  explanation: string
  /** Why each option is wrong, in option order. The entry for the right answer is ignored. */
  whyWrong: [string, string, string, string]
  source: string
  concept: string
  takeaway: string
  whyAsked: string
}

export interface MainsQuestion {
  id: string
  day: string
  marks: 10 | 15
  words: 150 | 250
  directive: string
  question: string
  mustCover: string[]
  model: string
}

export type DayStatus = 'Not started' | 'In progress' | 'Done' | 'Partial' | 'Skipped'
export type MistakeType = 'knowledge' | 'misread' | 'elimination' | 'guess'

export interface DayRecord {
  status: DayStatus
  confidence?: number
  notes?: string
  doneOn?: string
}

export interface Attempt {
  id: string
  setId: string
  title: string
  subject: string
  at: string
  seconds: number
  questionIds: string[]
  answers: Record<string, number | null>
  review: string[]
}

export interface MainsAttempt {
  id: string
  questionId: string
  at: string
  text: string
  words: number
  /** Rubric criterion to self-mark from 0 to 2. */
  rubric?: Record<string, number>
  score?: number
  notes?: string
}

export interface IssueCard {
  id: string
  title: string
  paper: string
  facts: string
  source: string
  at: string
}

export interface BookState {
  lastPage?: number
  furthestPage?: number
  bookmarks?: number[]
  pageNotes?: Record<string, string>
}

export interface TestDraft {
  answers: Record<string, number | null>
  review: string[]
  seconds: number
  current: number
}

export interface AppState {
  version: 1
  days: Record<string, DayRecord>
  attempts: Attempt[]
  mistakes: Record<string, MistakeType>
  drafts: Record<string, TestDraft>
  mains: MainsAttempt[]
  mainsDrafts: Record<string, string>
  books: Record<string, BookState>
  cards: IssueCard[]
  checks: Record<string, boolean>
  weekly: Record<string, { gaps?: string; mockDone?: boolean }>
  theme: 'light' | 'dark' | 'system'
}
