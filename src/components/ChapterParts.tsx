import { Link } from 'react-router-dom'
import { mainsForDay } from '../data/bank'
import type { ChapterExtras } from '../data/notes/types'
import { update, useStore } from '../lib/store'
import { NoteBlock } from './NoteBlocks'

/** Learning objectives and the source map, shown before the chapter's teaching. */
export function ChapterTop({ c }: { c: ChapterExtras }) {
  return (
    <>
      <NoteBlock block={{ t: 'h', text: 'Learning objectives' }} />
      <NoteBlock block={{ t: 'list', items: c.objectives }} />
      <NoteBlock block={{ t: 'h', text: 'Source mapping' }} />
      <NoteBlock block={{ t: 'table', head: ['Topic', 'Book', 'Chapter', 'Section', 'Pages'], rows: c.sourceMap.map((s) => [s.topic, s.book, s.chapter, s.section, s.pages]) }} />
      {c.notVerified.length > 0 && (
        <NoteBlock block={{ t: 'note', kind: 'trap', title: 'Not checked against', text: `${c.notVerified.join('; ')}. These books were not available, so nothing in this chapter is checked against them.` }} />
      )}
    </>
  )
}

/** Terms, the revision sheet, recall questions, questions and the checklist, after the teaching. */
export function ChapterEnd({ chapterKey, c }: { chapterKey: string; c: ChapterExtras }) {
  const checks = useStore((s) => s.checks)
  const mains = mainsForDay(chapterKey)
  const pyqs = mains.filter((m) => m.pyq)
  const practice = mains.filter((m) => !m.pyq)
  const toggle = (k: string) => update((s) => ({ ...s, checks: { ...s.checks, [k]: !s.checks[k] } }))

  return (
    <>
      <NoteBlock block={{ t: 'h', text: 'Important terms' }} />
      <dl className="not-prose grid gap-2 sm:grid-cols-2">
        {c.terms.map((t) => (
          <div key={t.term} className="rounded-[14px] border-[1.5px] border-rule p-3">
            <dt className="font-semibold">{t.term}</dt>
            <dd className="mt-0.5 text-[15px] text-soft">{t.meaning}</dd>
          </div>
        ))}
      </dl>

      <NoteBlock block={{ t: 'h', text: 'One-page revision' }} />
      <div className="not-prose rounded-[18px] bg-tint p-5">
        <ul className="list-disc space-y-1.5 pl-5 text-[15.5px]">{c.revision.map((r) => <li key={r}>{r}</li>)}</ul>
      </div>

      <NoteBlock block={{ t: 'h', text: 'Recall questions' }} />
      <p className="!text-[15px] text-soft">Answer each in your head before opening it.</p>
      <div className="not-prose space-y-1.5">
        {c.recall.map((r, i) => (
          <details key={r.q} className="rounded-[14px] border-[1.5px] border-rule px-4 py-2.5">
            <summary className="cursor-pointer font-semibold"><span className="num mr-2 text-soft">{i + 1}.</span>{r.q}</summary>
            <p className="mt-1.5 text-[15px]">{r.a}</p>
          </details>
        ))}
      </div>

      <NoteBlock block={{ t: 'h', text: 'Previous-year questions' }} />
      {pyqs.length ? (
        <ul className="not-prose divide-y divide-rule">
          {pyqs.map((m) => (
            <li key={m.id} className="py-2.5">
              <Link to={`/mains/${m.id}`} className="hover:text-accent">
                <span className="num mr-2 text-[13px] text-soft">{m.pyq!.year}, Paper {m.pyq!.paper}, Q{m.pyq!.number}, {m.marks} marks</span>
                <span className="block leading-snug">{m.question}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : <p className="!text-[15px] text-soft">No UPSC questions mapped to this chapter yet.</p>}

      <NoteBlock block={{ t: 'h', text: 'Practice questions' }} />
      <p className="!text-[15px] text-soft">Predicted questions, not from UPSC. Write your answer first; the framework opens after you submit, and you can copy your answer to Claude for marking.</p>
      <ul className="not-prose divide-y divide-rule">
        {practice.map((m) => (
          <li key={m.id} className="py-2.5">
            <Link to={`/mains/${m.id}`} className="hover:text-accent">
              <span className="num mr-2 text-[13px] text-soft">{m.marks} marks, {m.words} words</span>
              <span className="block leading-snug">{m.question}</span>
            </Link>
          </li>
        ))}
      </ul>

      <NoteBlock block={{ t: 'h', text: 'Chapter checklist' }} />
      <ul className="not-prose space-y-1.5">
        {c.checklist.map((item, i) => {
          const k = `soc:${chapterKey}:${i}`
          return (
            <li key={item}>
              <label className="flex cursor-pointer items-start gap-2.5">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--subject)]" checked={!!checks[k]} onChange={() => toggle(k)} />
                <span>{item}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

/** How many checklist items of a chapter are ticked. */
export const checklistDone = (checks: Record<string, boolean>, key: string, total: number) =>
  Array.from({ length: total }, (_, i) => checks[`soc:${key}:${i}`]).filter(Boolean).length
