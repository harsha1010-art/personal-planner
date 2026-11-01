import { useSyncExternalStore } from 'react'
import type { AppState } from './types'

const KEY = 'upsc-desk:v1'

const initial: AppState = {
  version: 1,
  days: {},
  attempts: [],
  mistakes: {},
  drafts: {},
  mains: [],
  mainsDrafts: {},
  books: {},
  cards: [],
  checks: {},
  weekly: {},
  theme: 'system',
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...initial, ...JSON.parse(raw) }
  } catch {
    // Blocked or corrupt storage: start clean rather than crash.
  }
  return initial
}

let state = load()
const listeners = new Set<() => void>()

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Storage full or blocked: the session keeps working in memory.
  }
}

export function update(fn: (s: AppState) => AppState) {
  state = fn(state)
  persist()
  listeners.forEach((l) => l())
}

export function useStore<T>(select: (s: AppState) => T): T {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => select(state),
  )
}

export function getState() {
  return state
}

export function exportBackup() {
  const blob = new Blob([JSON.stringify(state, null, 1)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `upsc-desk-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(a.href)
}

export async function importBackup(file: File) {
  const parsed = JSON.parse(await file.text())
  if (parsed?.version !== 1 || !parsed.days) throw new Error('That file is not a UPSC Desk backup.')
  update(() => ({ ...initial, ...parsed }))
}
