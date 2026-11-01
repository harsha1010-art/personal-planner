import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHead, PlannerTabs } from '../components/Shell'
import { questionsForDay } from '../data/bank'
import { days, formatDate, isoToday, monthKey, monthName, subjectOf } from '../lib/plan'
import { useStore } from '../lib/store'
import type { DayStatus } from '../lib/types'
import { setDay } from './Today'

const STATUSES: DayStatus[] = ['Not started', 'In progress', 'Partial', 'Done', 'Skipped']

const statusColor: Record<string, string> = {
  Done: 'text-good',
  Partial: 'text-warn',
  'In progress': 'text-warn',
  Skipped: 'text-bad',
}

export function PlanPage() {
  const records = useStore((s) => s.days)
  const [subject, setSubject] = useState('All')
  const [show, setShow] = useState('All')
  const [query, setQuery] = useState('')
  const today = isoToday()

  const subjects = useMemo(() => ['All', ...new Set(days.map(subjectOf))], [])
  const visible = days.filter((d) => {
    const status = records[d.date]?.status ?? 'Not started'
    if (subject !== 'All' && subjectOf(d) !== subject) return false
    if (show === 'Backlog' && (d.date >= today || status === 'Done' || status === 'Skipped')) return false
    if (show !== 'All' && show !== 'Backlog' && status !== show) return false
    if (query && !`${d.topic} ${d.read}`.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })
  const months = [...new Set(visible.map((d) => monthKey(d.date)))]
  const done = days.filter((d) => records[d.date]?.status === 'Done').length
  const backlog = days.filter((d) => d.date < today && !['Done', 'Skipped'].includes(records[d.date]?.status ?? '')).length

  return (
    <>
      <PlannerTabs />
      <PageHead title="Plan">
        Your 204-day tracker, from 1 November 2026 to Prelims. <span className="num">{done}</span> done,{' '}
        <span className="num">{backlog}</span> in backlog.
      </PageHead>

      <div className="mb-3 flex h-4 gap-px overflow-hidden rounded-full" aria-hidden>
        {days.map((d) => {
          const status = records[d.date]?.status
          return (
            <Link
              key={d.date}
              to={`/day/${d.date}`}
              tabIndex={-1}
              title={`${formatDate(d.date)}: ${d.topic}`}
              className="flex-1"
              style={{
                background:
                  status === 'Done' ? 'var(--good)'
                    : status === 'Partial' || status === 'In progress' ? 'var(--warn)'
                      : d.date === today ? 'var(--accent)'
                        : d.date < today ? 'var(--bad)' : 'var(--rule)',
                opacity: d.date < today && !status ? 0.45 : 1,
              }}
            />
          )
        })}
      </div>

      <div className="mb-7 grid gap-2 sm:grid-cols-[1fr_180px_150px]">
        <input
          aria-label="Search the plan"
          className="field"
          placeholder="Search topics and sources"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select aria-label="Subject" className="field" value={subject} onChange={(e) => setSubject(e.target.value)}>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select aria-label="Status" className="field" value={show} onChange={(e) => setShow(e.target.value)}>
          {['All', 'Backlog', ...STATUSES].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      {months.length === 0 && <p className="text-soft">No days match those filters.</p>}
      {months.map((month) => (
        <section key={month} className="mb-9">
          <h2 className="mb-3 text-[28px]">{monthName(month)}</h2>
          <ul className="divide-y divide-rule">
            {visible.filter((d) => monthKey(d.date) === month).map((d) => {
              const status = records[d.date]?.status ?? 'Not started'
              const count = questionsForDay(d.date).length
              return (
                <li key={d.date} className={`grid grid-cols-[62px_minmax(0,1fr)] gap-x-3 py-2.5 sm:grid-cols-[62px_minmax(0,1fr)_60px_122px] sm:items-center ${d.date === today ? 'bg-wash -mx-2 px-2' : ''}`}>
                  <span className="num text-[13px] text-soft">
                    {formatDate(d.date)}
                    <span className="block text-[11.5px] text-faint">{d.weekday.slice(0, 3)}</span>
                  </span>
                  <Link to={d.date === today ? '/' : `/day/${d.date}`} className="min-w-0 hover:text-accent">
                    <span className="block font-medium leading-snug">{d.topic}</span>
                    <span className="block truncate text-[13px] text-soft">{d.output}</span>
                  </Link>
                  <span className="num col-start-2 mt-1 text-[12.5px] text-faint sm:col-start-auto sm:mt-0" title="Questions written for this day">
                    {count > 0 ? `${count} Qs` : ''}
                  </span>
                  <select
                    aria-label={`Status for ${formatDate(d.date)}`}
                    className={`col-start-2 mt-1 w-[122px] rounded-lg border border-rule bg-sheet px-1.5 py-1 text-[13px] sm:col-start-auto sm:mt-0 ${statusColor[status] ?? 'text-soft'}`}
                    value={status}
                    onChange={(e) => setDay(d.date, { status: e.target.value as DayStatus })}
                  >
                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </>
  )
}
