import { Link } from 'react-router-dom'
import { checklistDone } from '../components/ChapterParts'
import { PageHead, PlannerTabs } from '../components/Shell'
import { mainsForDay } from '../data/bank'
import { noteForDay } from '../data/notes'
import { formatDate, isoToday } from '../lib/plan'
import { NCERT, chapterDates, chapters, paperTitle } from '../lib/sociology'
import { useStore } from '../lib/store'

const BOOKS: [string, string][] = [
  ['NCERT Class XI and XII Sociology (4 books, 2026-27 reprint)', 'Downloaded from ncert.nic.in and used for every chapter marked "From the books"'],
  ['Nitin Sangwan, Essential Sociology, Volumes 1 and 2', 'Not available on this computer, so not used or checked'],
  ['Ritzer; Haralambos and Holborn; M.N. Srinivas; Ram Ahuja; IGNOU', 'Not available, so not checked. Where a chapter goes beyond NCERT, it says so'],
  ['UPSC Sociology optional papers, 2016-2026', 'Downloaded from upsc.gov.in; questions are mapped to chapters'],
]

export function Sociology() {
  const checks = useStore((s) => s.checks)
  const days = useStore((s) => s.days)
  const today = isoToday()
  const written = chapters.filter((c) => noteForDay(c.key)?.chapter).length

  return (
    <>
      <PageHead title="Sociology optional">
        Both papers, unit by unit, in UPSC&apos;s own syllabus wording. First reading runs to 31 January, revision in February, light maintenance until Prelims, then intensive work. <span className="num font-semibold text-ink">{written}</span> of <span className="num font-semibold text-ink">{chapters.length}</span> chapters are written from the books.
      </PageHead>
      <PlannerTabs />

      <section className="mb-10">
        <h2 className="mb-3 text-[22px]">Books</h2>
        <ul className="divide-y divide-rule text-[15px]">
          {BOOKS.map(([b, s]) => <li key={b} className="grid gap-x-4 py-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"><span className="font-semibold">{b}</span><span className="text-soft">{s}</span></li>)}
        </ul>
      </section>

      {(['I', 'II'] as const).map((paper) => (
        <section key={paper} className="mb-12">
          <h2 className="mb-4 text-[28px]">{paperTitle[paper]}</h2>
          <ol className="space-y-3">
            {chapters.filter((c) => c.paper === paper).map((c) => {
              const note = noteForDay(c.key)
              const d = chapterDates.get(c.key)!
              const mains = mainsForDay(c.key)
              const pyqs = mains.filter((m) => m.pyq).length
              const now = today >= d.from && today <= d.to
              const done = note?.chapter ? checklistDone(checks, c.key, note.chapter.checklist.length) : 0
              const readOn = days[c.key]?.doneOn
              return (
                <li key={c.key} className={`rounded-[18px] border-[1.5px] p-4 ${now ? 'border-ink' : 'border-rule'}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <Link to={`/learn/${c.key}`} className="text-[19px] font-semibold hover:underline">
                      <span className="num mr-2 text-soft">{c.unit}</span>{c.title}
                    </Link>
                    <span className="num text-[13.5px] text-soft">{formatDate(d.from)} to {formatDate(d.to)}{now ? ', now' : ''}</span>
                  </div>
                  <ul className="mt-1.5 list-disc pl-5 text-[14.5px] text-soft">{c.syllabus.map((s) => <li key={s}>{s}</li>)}</ul>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13.5px]">
                    <span className={note?.chapter ? 'font-semibold text-good' : 'text-faint'}>{note?.chapter ? 'From the books' : 'Earlier draft only'}</span>
                    <span>NCERT: {c.ncert.map(([b, n]) => `${NCERT[b].replace(/ \(Class.*/, '')} ch ${n}`).join('; ')}</span>
                    <span className="num">{pyqs} PYQs, {mains.length - pyqs} practice</span>
                    {note?.chapter && <span className="num">Checklist {done}/{note.chapter.checklist.length}</span>}
                    {readOn && <span>Read {formatDate(readOn)}; revise after 1, 7 and 30 days</span>}
                  </div>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </>
  )
}
