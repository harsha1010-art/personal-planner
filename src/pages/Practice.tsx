import { Link } from 'react-router-dom'
import { PageHead } from '../components/Shell'
import { questions, questionsForDay } from '../data/bank'
import { openMistakes } from '../lib/analysis'
import { dayByDate, days, formatDate, isoToday, subjectOf, weeks } from '../lib/plan'
import { subjectQuestions } from '../lib/sets'
import { useStore } from '../lib/store'

export function Practice() {
  const attempts = useStore((s) => s.attempts)
  const state = useStore((s) => s)
  const mistakes = openMistakes(state)
  const writtenDays = [...new Set(questions.map((q) => q.day))].sort()
  const subjects = [...new Set(writtenDays.map((d) => subjectOf(dayByDate(d)!)))]
  const pyqCount = questions.filter((q) => q.kind === 'pyq').length
  const weekRows = weeks
    .map((w, i) => ({ w, i, count: days.filter((d) => d.date >= w.from && d.date <= w.to).reduce((n, d) => n + questionsForDay(d.date).length, 0) }))
    .filter((r) => r.count > 0)

  return (
    <>
      <PageHead title="Prelims practice">
        <span className="num">{questions.length}</span> questions written so far: <span className="num">{pyqCount}</span> PYQs checked against UPSC's papers
        and <span className="num">{questions.length - pyqCount}</span> predicted practice questions. No answers appear until you submit.
      </PageHead>

      {mistakes.length > 0 && (
        <section className="mb-9 flex flex-wrap items-center justify-between gap-3 card !border-0 bg-wash">
          <div>
            <h2 className="text-[19px]">Mistake repair</h2>
            <p className="text-[14px] text-soft"><span className="num">{mistakes.length}</span> questions you last got wrong. A question leaves this list when you get it right.</p>
          </div>
          <Link className="btn btn-primary" to={`/test/revise:${isoToday()}`}>Reattempt mistakes</Link>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-[28px]">Daily topic sets</h2>
        {writtenDays.length === 0 && <p className="mt-3 text-soft">No sets written yet.</p>}
        <ul className="divide-y divide-rule">
          {writtenDays.map((date) => {
            const day = dayByDate(date)!
            const qs = questionsForDay(date)
            const last = [...attempts].reverse().find((a) => a.setId === `day:${date}`)
            const right = last ? last.questionIds.filter((id) => last.answers[id] === qs.find((q) => q.id === id)?.answer).length : null
            return (
              <li key={date} className="grid gap-x-4 py-3 sm:grid-cols-[60px_minmax(0,1fr)_190px_120px] sm:items-center">
                <span className="num text-[13px] text-soft">{formatDate(date)}</span>
                <span className="font-medium leading-snug">{day.topic}</span>
                <span className="text-[13px] text-soft">
                  <span className="num">{qs.length}</span>/30, <span className="num">{qs.filter((q) => q.kind === 'pyq').length}</span> PYQ
                  {right !== null && <>; last score <span className="num">{right}/{qs.length}</span></>}
                </span>
                <Link className="btn mt-1.5 sm:mt-0" to={`/test/day:${date}`}>{last ? 'Attempt again' : 'Start'}</Link>
              </li>
            )
          })}
        </ul>
      </section>

      {weekRows.length > 0 && (
        <section className="mt-9">
          <h2 className="mb-3 text-[28px]">Weekly cumulative tests</h2>
          <ul className="divide-y divide-rule">
            {weekRows.map(({ w, i, count }) => (
              <li key={w.week} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <span>
                  <span className="font-medium">{w.week}</span>{' '}
                  <span className="text-[13px] text-soft">{formatDate(w.from)} to {formatDate(w.to)}, <span className="num">{Math.min(count, 50)}</span>/50 questions</span>
                </span>
                <Link className="btn" to={`/test/week:${i}`}>Start</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {subjects.length > 0 && (
        <section className="mt-9">
          <h2 className="mb-3 text-[28px]">Subject tests</h2>
          <ul className="divide-y divide-rule">
            {subjects.map((s) => (
              <li key={s} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <span>
                  <span className="font-medium">{s}</span>{' '}
                  <span className="text-[13px] text-soft"><span className="num">{Math.min(subjectQuestions(s).length, 100)}</span>/100 questions</span>
                </span>
                <Link className="btn" to={`/test/subject:${encodeURIComponent(s)}`}>Start</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
