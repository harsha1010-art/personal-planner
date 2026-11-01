import { Link, useParams } from 'react-router-dom'
import { BeyondPanel } from '../components/BeyondPanel'
import { mainsForDay } from '../data/bank'
import { beyondFor } from '../data/beyond'
import { noteForDay, notes } from '../data/notes'
import { pictureUrl } from '../data/notes/types'
import { addDays, currentDay, dayByDate, days, formatDate, isoToday, subjectOf, weekOf, weeks } from '../lib/plan'
import { update, useStore } from '../lib/store'
import { extraByKey } from '../lib/extras'
import { languageFocus, sociologyFor } from '../lib/schedule'
import { buildSet } from '../lib/sets'
import { isLearningDay, subjectColor } from '../lib/subjects'
import type { DayRecord, DayStatus } from '../lib/types'

const STATUSES: DayStatus[] = ['Not started', 'In progress', 'Partial', 'Done', 'Skipped']

export function setDay(date: string, patch: Partial<DayRecord>) {
  update((s) => {
    const prev = s.days[date] ?? { status: 'Not started' as DayStatus }
    const next = { ...prev, ...patch }
    if (patch.status === 'Done' && !prev.doneOn) next.doneOn = isoToday()
    if (patch.status && patch.status !== 'Done') delete next.doneOn
    return { ...s, days: { ...s.days, [date]: next } }
  })
}

function revisionsDue(records: Record<string, DayRecord>, checks: Record<string, boolean>, today: string) {
  const due: { date: string; gap: number; key: string; topic: string }[] = []
  for (const [date, rec] of Object.entries(records)) {
    if (rec.status !== 'Done' || !rec.doneOn) continue
    for (const gap of [1, 7, 30]) {
      const key = `rev:${date}:${gap}`
      if (addDays(rec.doneOn, gap) <= today && !checks[key]) due.push({ date, gap, key, topic: dayByDate(date)?.topic ?? date })
    }
  }
  return due.sort((a, b) => a.date.localeCompare(b.date))
}

function Step({ n, title, detail, done, children }: { n: number; title: string; detail: string; done?: boolean; children?: React.ReactNode }) {
  return (
    <div className="card flex flex-col">
      <div className="flex items-center gap-2.5">
        <span className={`display grid h-8 w-8 place-items-center rounded-full text-[15px] ${done ? 'bg-good text-white' : 'bg-tint'}`}>{done ? '✓' : n}</span>
        <h2 className="text-[21px]">{title}</h2>
      </div>
      <p className="mt-2 flex-1 text-[15px] text-soft">{detail}</p>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

export function Today() {
  const params = useParams()
  const day = (params.date && dayByDate(params.date)) || currentDay()
  const record = useStore((s) => s.days[day.date]) ?? ({ status: 'Not started' } as DayRecord)
  const allDays = useStore((s) => s.days)
  const checks = useStore((s) => s.checks)
  const attempts = useStore((s) => s.attempts)
  const mainsAttempts = useStore((s) => s.mains)

  const isToday = day.date === isoToday()
  const index = days.indexOf(day)
  const subject = subjectOf(day)
  const color = subjectColor(subject)
  const note = noteForDay(day.date)
  const questions = buildSet(`day:${day.date}`)?.questions ?? []
  const learning = isLearningDay(day)
  const relatedNotes = learning ? [] : notes.filter((n) => dayByDate(n.day) && subjectOf(dayByDate(n.day)!) === subject)
  const mains = mainsForDay(day.date)
  const setId = `day:${day.date}`
  const latest = [...attempts].reverse().find((a) => a.setId === setId)
  const mainsDone = mains.filter((m) => mainsAttempts.some((a) => a.questionId === m.id)).length
  const week = weekOf(day.date)
  const weekDays = week >= 0 ? days.filter((d) => d.date >= weeks[week].from && d.date <= weeks[week].to) : []
  const due = revisionsDue(allDays, checks, isoToday())
  const read = checks[`read:${day.date}`]
  const sociology = sociologyFor(day.date)

  return (
    <div style={{ '--subject': color } as React.CSSProperties}>
      <section className={`grid overflow-hidden rounded-[24px] bg-[var(--subject)] text-white ${note?.hero ? 'md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]' : ''}`}>
        <div className="p-6 sm:p-9">
          <div className="text-[15px] font-semibold">
            {isToday ? 'Today' : formatDate(day.date, 'long')}, day {index + 1} of {days.length}
          </div>
          <h1 className={`mt-3 ${day.topic.length > 60 ? 'text-[32px] sm:text-[44px]' : 'text-[42px] sm:text-[60px]'}`}>{day.topic}</h1>
          <p className="mt-4 max-w-[54ch] text-[17px] leading-snug">{note?.summary ?? day.read}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {note ? (
              <Link to={`/learn/${day.date}`} className="btn btn-primary">Start reading, {note.minutes} min</Link>
            ) : questions.length > 0 ? (
              <Link to={`/test/${setId}`} className="btn btn-primary">Start the test</Link>
            ) : null}
            <select
              aria-label="Status for this day"
              value={record.status}
              onChange={(e) => setDay(day.date, { status: e.target.value as DayStatus })}
              className="min-h-[42px] rounded-full border-[1.5px] border-white bg-transparent px-4 text-[15px] font-semibold text-white [&>option]:text-black"
            >
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        {note?.hero && (
          <div className="relative min-h-[220px]">
            <img src={pictureUrl(note.hero)} alt={note.heroAlt ?? ''} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        )}
      </section>

      <section aria-label="Today's work" className="mt-5 grid gap-4 md:grid-cols-3">
        <Step n={1} title="Learn" done={!!read} detail={note ? 'Read the notes, then close the page and recall the main points.' : relatedNotes.length ? `Revision day. ${relatedNotes.length} notes to revise so far.` : learning ? `Notes for this day are not written yet. Plan says: ${day.read}` : `Plan says: ${day.read}`}>
          {note && <Link className="btn" to={`/learn/${day.date}`}>{read ? 'Read again' : 'Read notes'}</Link>}
          {relatedNotes.slice(0, 4).map((n) => <Link key={n.day} className="text-[14px] font-semibold underline underline-offset-4" to={`/learn/${n.day}`}>{dayByDate(n.day)?.topic}</Link>)}
        </Step>
        <Step n={2} title="Test" done={!!latest} detail={questions.length ? `${questions.length} Prelims questions${learning ? '' : ' from what is written so far'}. Answers appear only after you submit.` : `Questions for this day are not written yet. Plan says: ${day.output}`}>
          {questions.length > 0 && <Link className="btn" to={`/test/${setId}`}>{latest ? 'Attempt again' : 'Start test'}</Link>}
          {latest && <Link className="btn" to={`/result/${latest.id}`}>Last result</Link>}
        </Step>
        <Step n={3} title="Write" done={mains.length > 0 && mainsDone === mains.length} detail={mains.length ? `${mainsDone} of ${mains.length} Mains answers written. The model answer opens after you submit.` : 'Mains questions for this day are not written yet.'}>
          {mains.length > 0 && <Link className="btn" to={`/mains?day=${day.date}`}>Write answers</Link>}
        </Step>
      </section>

      <section className="mt-10" aria-label="Beyond this site">
        <h2 className="mb-3 text-[26px]">Beyond this site today</h2>
        <BeyondPanel beyond={note?.beyond ?? beyondFor(day.date, subject)} />
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section>
          {weekDays.length > 0 && (
            <>
              <div className="mb-3 flex items-end justify-between gap-3">
                <h2 className="text-[26px]">{weeks[week].week}</h2>
                <Link className="text-[14.5px] font-semibold underline underline-offset-4" to={`/test/week:${week}`}>Weekly test</Link>
              </div>
              <ol className="space-y-2">
                {weekDays.map((d) => {
                  const status = allDays[d.date]?.status
                  const current = d.date === day.date
                  return (
                    <li key={d.date}>
                      <Link
                        to={d.date === isoToday() ? '/' : `/day/${d.date}`}
                        className={`flex items-center gap-3 rounded-[14px] border-[1.5px] p-3 ${current ? 'border-ink' : 'border-rule hover:border-ink'}`}
                      >
                        <span className="w-12 shrink-0 text-center">
                          <span className="block text-[12.5px] font-semibold text-faint">{d.weekday.slice(0, 3)}</span>
                          <span className="display num block text-[21px]">{Number(d.date.slice(8))}</span>
                        </span>
                        <span className="min-w-0 flex-1 font-semibold leading-snug">{d.topic}</span>
                        {status === 'Done' && <span className="text-[13.5px] font-semibold text-good">Done</span>}
                        {noteForDay(d.date) && status !== 'Done' && <span className="text-[13px] font-semibold text-faint">Notes ready</span>}
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </>
          )}
          <div className="mt-8">
            <label className="text-[20px] font-bold" htmlFor="day-notes" style={{ fontFamily: 'var(--font-display)' }}>Notes and backlog</label>
            <textarea
              id="day-notes"
              rows={4}
              className="field mt-2"
              placeholder="What to carry over, and what confused you."
              value={record.notes ?? ''}
              onChange={(e) => setDay(day.date, { notes: e.target.value })}
            />
          </div>
          <nav aria-label="Other days" className="mt-4 flex justify-between gap-3 text-[14.5px] font-semibold">
            {days[index - 1] ? <Link className="hover:underline" to={`/day/${days[index - 1].date}`}>&larr; {formatDate(days[index - 1].date)}</Link> : <span />}
            {!isToday && <Link className="hover:underline" to="/">Back to today</Link>}
            {days[index + 1] ? <Link className="hover:underline" to={`/day/${days[index + 1].date}`}>{formatDate(days[index + 1].date)} &rarr;</Link> : <span />}
          </nav>
        </section>

        <aside className="space-y-4">
          <div className="card bg-tint !border-0">
            <h2 className="text-[20px]">Revision due</h2>
            {due.length === 0 ? (
              <p className="mt-1.5 text-[14.5px] text-soft">Nothing yet. Topics you mark Done come back after 1, 7 and 30 days.</p>
            ) : (
              <ul className="mt-2 space-y-2 text-[15px]">
                {due.slice(0, 6).map((r) => (
                  <li key={r.key} className="flex items-start gap-2">
                    <input id={r.key} type="checkbox" className="mt-1.5 accent-[var(--ink)]" onChange={() => update((s) => ({ ...s, checks: { ...s.checks, [r.key]: true } }))} />
                    <label htmlFor={r.key} className="leading-snug">{r.topic} <span className="text-faint">({r.gap}-day)</span></label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="card">
            <h2 className="text-[20px]">Sociology</h2>
            <p className="mt-1.5 text-[14.5px] font-semibold">{sociology.title}</p>
            <p className="mt-1 text-[13.5px] text-soft">{sociology.focus} Aim for about 8-10 hours a week at first.</p>
            {noteForDay(sociology.key) ? <Link className="mt-2 inline-block text-[14px] font-semibold underline underline-offset-4" to={`/learn/${sociology.key}`}>Read this topic</Link> : <p className="mt-1.5 text-[13.5px] text-faint">Notes for this topic are not written yet.</p>}
            <h2 className="mt-5 text-[20px]">Kannada and English</h2>
            <p className="mt-1.5 text-[14.5px]">{languageFocus(day.date)}</p>
            <p className="mt-1 text-[13.5px] text-soft">Two sessions a week, 30-40 minutes each.</p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[14px] font-semibold">
              {['lang-kannada', 'lang-english', 'essay'].filter((k) => noteForDay(k)).map((k) => <Link key={k} className="underline underline-offset-4" to={`/learn/${k}`}>{extraByKey.get(k)?.title.split(' (')[0]}</Link>)}
            </div>
          </div>
          <div className="card">
            <h2 className="text-[20px]">Current affairs</h2>
            <p className="mt-1.5 text-[14.5px]">{day.currentAffairs}</p>
            <Link className="mt-2 inline-block text-[14.5px] font-semibold underline underline-offset-4" to="/cards">Add an issue card</Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
