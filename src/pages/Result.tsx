import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { QuestionBody } from '../components/QuestionBody'
import { PageHead } from '../components/Shell'
import { questionById } from '../data/bank'
import { accuracy, attemptStats, marks, type Tally } from '../lib/analysis'
import { formatDate } from '../lib/plan'
import { update, useStore } from '../lib/store'
import type { MistakeType } from '../lib/types'

const MISTAKE_LABELS: [MistakeType, string][] = [
  ['knowledge', 'Did not know'],
  ['misread', 'Misread'],
  ['elimination', 'Bad elimination'],
  ['guess', 'Guessed'],
]

function Row({ label, t }: { label: string; t: Tally }) {
  return (
    <tr>
      <th scope="row" className="py-1.5 pr-3 text-left font-normal capitalize">{label}</th>
      <td className="num py-1.5 pr-3 text-right">{t.correct}/{t.total}</td>
      <td className="num py-1.5 pr-3 text-right">{t.wrong}</td>
      <td className="num py-1.5 text-right">{accuracy(t) === null ? '-' : `${accuracy(t)}%`}</td>
    </tr>
  )
}

type Filter = 'all' | 'wrong' | 'blank' | 'marked'

export function Result() {
  const { attemptId } = useParams()
  const attempt = useStore((s) => s.attempts.find((a) => a.id === attemptId))
  const mistakes = useStore((s) => s.mistakes)
  const [filter, setFilter] = useState<Filter>('all')

  if (!attempt) {
    return <p>That attempt was not found. <Link className="underline" to="/progress">See your progress</Link></p>
  }

  const stats = attemptStats(attempt)
  const list = attempt.questionIds.map((id) => questionById.get(id)).filter((q) => !!q)
  const shown = list.filter((q) => {
    const a = attempt.answers[q.id]
    const blank = a === null || a === undefined
    if (filter === 'wrong') return !blank && a !== q.answer
    if (filter === 'blank') return blank
    if (filter === 'marked') return attempt.review.includes(q.id)
    return true
  })
  const score = marks(stats.all)
  const max = stats.all.total * 2

  return (
    <>
      <PageHead title={attempt.title}>
        Attempted {formatDate(attempt.at.slice(0, 10))} in <span className="num">{Math.round(attempt.seconds / 60)}</span> minutes.
      </PageHead>

      <section className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <div className="label">Score</div>
          <div className="num text-[46px] leading-tight">{score.toFixed(2)}</div>
          <div className="text-soft">out of <span className="num">{max}</span></div>
          <div className="mt-3 text-[14px]">
            Accuracy <span className="num font-medium">{accuracy(stats.all) ?? 0}%</span> on <span className="num">{stats.all.attempted}</span> attempted
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[340px] text-[14px]">
            <thead className="label border-b border-rule">
              <tr>
                <th className="py-1.5 text-left font-medium">Breakdown</th>
                <th className="py-1.5 pr-3 text-right font-medium">Right</th>
                <th className="py-1.5 pr-3 text-right font-medium">Wrong</th>
                <th className="py-1.5 text-right font-medium">Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              <Row label="easy" t={stats.byDifficulty.easy} />
              <Row label="moderate" t={stats.byDifficulty.moderate} />
              <Row label="hard" t={stats.byDifficulty.hard} />
              <Row label="PYQ" t={stats.pyq} />
              <Row label="predicted" t={stats.predicted} />
            </tbody>
          </table>
        </div>
      </section>

      {stats.weakConcepts.length > 0 && (
        <section className="mt-7 card !border-0 bg-wash">
          <h2 className="text-[18px]">Concepts to go back to</h2>
          <p className="mt-1 text-[14px] text-soft">{[...new Set(stats.weakConcepts)].join('; ')}.</p>
        </section>
      )}

      <section className="mt-9">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h2 className="text-[22px]">Answers and explanations</h2>
          <div role="group" aria-label="Filter" className="flex border border-rule bg-sheet text-[13.5px]">
            {(['all', 'wrong', 'blank', 'marked'] as Filter[]).map((f) => (
              <button
                key={f}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`border-r border-rule px-3 py-1 capitalize last:border-r-0 ${filter === f ? 'bg-ink text-paper' : 'text-soft hover:text-ink'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        {shown.length === 0 && <p className="mt-4 text-soft">No questions in this view.</p>}
        <ol className="divide-y divide-rule">
          {shown.map((q) => {
            const picked = attempt.answers[q.id]
            const blank = picked === null || picked === undefined
            const right = picked === q.answer
            return (
              <li key={q.id} className="py-6">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px]">
                  <span className="num text-faint">Q{attempt.questionIds.indexOf(q.id) + 1}</span>
                  <span className={`font-medium ${blank ? 'text-faint' : right ? 'text-good' : 'text-bad'}`}>
                    {blank ? 'Left blank' : right ? 'Right, +2' : 'Wrong, −0.66'}
                  </span>
                  <span className="text-soft">
                    {q.kind === 'pyq' ? `UPSC Prelims ${q.pyq!.year}` : 'Predicted practice question, not from UPSC'}
                  </span>
                  <span className="capitalize text-soft">{q.difficulty}</span>
                </div>
                <QuestionBody question={q} />
                <ul className="mt-3 space-y-1.5">
                  {q.options.map((opt, i) => (
                    <li
                      key={i}
                      className={`border-l-[3px] py-1 pl-3 ${
                        i === q.answer ? 'border-good' : i === picked ? 'border-bad' : 'border-rule'
                      }`}
                    >
                      <div className={i === q.answer ? 'font-medium' : ''}>
                        <span className="num mr-1.5 text-faint">{'abcd'[i]})</span>{opt}
                        {i === q.answer && <span className="ml-2 text-[12.5px] font-medium text-good">Correct</span>}
                        {i === picked && i !== q.answer && <span className="ml-2 text-[12.5px] font-medium text-bad">Your answer</span>}
                      </div>
                      {i !== q.answer && <p className="mt-0.5 text-[13.5px] text-soft">{q.whyWrong[i]}</p>}
                    </li>
                  ))}
                </ul>
                <p className="mt-3">{q.explanation}</p>
                <dl className="mt-3 grid gap-x-6 gap-y-2 text-[13.5px] sm:grid-cols-2">
                  <div><dt className="label">Concept tested</dt><dd>{q.concept}</dd></div>
                  <div><dt className="label">Source</dt><dd>{q.source}</dd></div>
                  <div><dt className="label">Remember</dt><dd>{q.takeaway}</dd></div>
                  <div><dt className="label">Why UPSC might ask this</dt><dd>{q.whyAsked}</dd></div>
                </dl>
                {q.pyq && (
                  <p className="mt-2 text-[12.5px] text-faint">
                    Wording checked against UPSC's Prelims {q.pyq.year} GS Paper I, PDF page {q.pyq.pdfPage}.{' '}
                    {q.pyq.keyStatus === 'official' ? 'Answer matches the official key.' : 'I could not find an official key, so this answer is reasoned from the sources.'}
                  </p>
                )}
                {!blank && !right && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[13px]" role="group" aria-label="Why you got this wrong">
                    <span className="text-soft">Why did you miss it?</span>
                    {MISTAKE_LABELS.map(([value, label]) => (
                      <button
                        key={value}
                        aria-pressed={mistakes[q.id] === value}
                        onClick={() => update((s) => ({ ...s, mistakes: { ...s.mistakes, [q.id]: value } }))}
                        className={`border px-2 py-0.5 ${mistakes[q.id] === value ? 'rounded-lg border-ink bg-ink text-paper' : 'rounded-lg border-rule bg-sheet hover:border-ink'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </section>
    </>
  )
}
