import { Link } from 'react-router-dom'
import { PageHead } from '../components/Shell'
import { mainsById } from '../data/bank'
import { accuracy, attemptStats, diagnose, openMistakes, weakConceptTable, type Tally } from '../lib/analysis'
import { days, formatDate, isoToday, weeks } from '../lib/plan'
import { update, useStore } from '../lib/store'

const pct = (t: Tally) => (accuracy(t) === null ? '-' : `${accuracy(t)}%`)

export function Progress() {
  const state = useStore((s) => s)
  const { attempts, mains, days: records, weekly } = state
  const findings = diagnose(state)
  const weak = weakConceptTable(state)
  const mistakes = openMistakes(state)
  const rows = [...attempts].reverse().map((a) => ({ a, s: attemptStats(a) }))
  const attempted = rows.reduce((n, r) => n + r.s.all.attempted, 0)
  const correct = rows.reduce((n, r) => n + r.s.all.correct, 0)
  const done = days.filter((d) => records[d.date]?.status === 'Done').length
  const scored = mains.filter((m) => m.score !== undefined)
  const today = isoToday()

  return (
    <>
      <PageHead title="Progress">Your record of every test and answer, and what the mistakes say about your preparation.</PageHead>

      <dl className="mb-9 grid grid-cols-2 gap-y-5 border-b border-rule pb-6 sm:grid-cols-4">
        {[
          ['Days done', `${done}/${days.length}`],
          ['Questions attempted', attempted],
          ['Overall accuracy', attempted ? `${Math.round((correct / attempted) * 100)}%` : '-'],
          ['Open mistakes', mistakes.length],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="label">{label}</dt>
            <dd className="num mt-0.5 text-[28px] leading-tight">{value}</dd>
          </div>
        ))}
      </dl>

      <section className="mb-9">
        <h2 className="mb-3 text-[28px]">What your mistakes reveal</h2>
        {findings.length === 0 ? (
          <p className="mt-3 text-soft">This needs at least 20 attempted questions before it can say anything useful.</p>
        ) : (
          <ul className="mt-2 divide-y divide-rule">
            {findings.map((f) => (
              <li key={f.title} className="py-3">
                <h3 className="text-[17px]">{f.title}</h3>
                <p className="mt-0.5 max-w-[68ch] text-soft">{f.detail}</p>
              </li>
            ))}
          </ul>
        )}
        {mistakes.length > 0 && <Link className="btn btn-primary mt-3" to={`/test/revise:${today}`}>Reattempt {Math.min(mistakes.length, 30)} mistakes</Link>}
      </section>

      <section className="mb-9">
        <h2 className="mb-3 text-[28px]">Test record</h2>
        {rows.length === 0 ? (
          <p className="mt-3 text-soft">No tests yet. <Link className="underline" to="/practice">Take your first one.</Link></p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-[13.5px]">
              <thead className="label border-b border-rule text-right">
                <tr>
                  <th className="py-2 pr-3 text-left font-medium">Date</th>
                  <th className="py-2 pr-3 text-left font-medium">Subject and topic</th>
                  <th className="py-2 pr-3 font-medium">Tried</th>
                  <th className="py-2 pr-3 font-medium">Right</th>
                  <th className="py-2 pr-3 font-medium">Wrong</th>
                  <th className="py-2 pr-3 font-medium">Acc</th>
                  <th className="py-2 pr-3 font-medium">Easy</th>
                  <th className="py-2 pr-3 font-medium">Mod</th>
                  <th className="py-2 pr-3 font-medium">Hard</th>
                  <th className="py-2 pr-3 font-medium">PYQ</th>
                  <th className="py-2 font-medium">Pred</th>
                </tr>
              </thead>
              <tbody className="num divide-y divide-rule text-right">
                {rows.map(({ a, s }) => (
                  <tr key={a.id}>
                    <td className="py-2 pr-3 text-left">{formatDate(a.at.slice(0, 10))}</td>
                    <td className="py-2 pr-3 text-left font-sans">
                      <Link className="hover:text-accent" to={`/result/${a.id}`}>
                        <span className="text-soft">{a.subject}:</span> {a.title}
                      </Link>
                    </td>
                    <td className="py-2 pr-3">{s.all.attempted}</td>
                    <td className="py-2 pr-3">{s.all.correct}</td>
                    <td className="py-2 pr-3">{s.all.wrong}</td>
                    <td className="py-2 pr-3 font-medium">{pct(s.all)}</td>
                    <td className="py-2 pr-3">{pct(s.byDifficulty.easy)}</td>
                    <td className="py-2 pr-3">{pct(s.byDifficulty.moderate)}</td>
                    <td className="py-2 pr-3">{pct(s.byDifficulty.hard)}</td>
                    <td className="py-2 pr-3">{pct(s.pyq)}</td>
                    <td className="py-2">{pct(s.predicted)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mb-9 grid gap-8 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="mb-3 text-[28px]">Weak concepts</h2>
          {weak.length === 0 ? (
            <p className="mt-3 text-soft">None yet.</p>
          ) : (
            <ul className="divide-y divide-rule text-[14px]">
              {weak.slice(0, 15).map((c) => (
                <li key={c.concept} className="flex justify-between gap-3 py-2">
                  <span>{c.concept}</span>
                  <span className="num shrink-0 text-soft">{c.correct}/{c.attempted}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="min-w-0">
          <h2 className="mb-3 text-[28px]">Mains scores</h2>
          {scored.length === 0 ? (
            <p className="mt-3 text-soft">None yet. <Link className="underline" to="/mains">Write an answer.</Link></p>
          ) : (
            <ul className="divide-y divide-rule text-[14px]">
              {[...scored].reverse().map((m) => {
                const q = mainsById.get(m.questionId)
                return (
                  <li key={m.id} className="py-2">
                    <Link className="flex justify-between gap-3 hover:text-accent" to={`/mains/${m.questionId}`}>
                      <span className="truncate">{q?.question}</span>
                      <span className="num shrink-0">{m.score}/{q?.marks}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-[28px]">Weekly review</h2>
        <ul className="divide-y divide-rule">
          {weeks.filter((w) => w.from <= today).reverse().map((w) => {
            const inWeek = days.filter((d) => d.date >= w.from && d.date <= w.to)
            const finished = inWeek.filter((d) => records[d.date]?.status === 'Done').length
            const weekAttempts = rows.filter((r) => r.a.at.slice(0, 10) >= w.from && r.a.at.slice(0, 10) <= w.to)
            const tried = weekAttempts.reduce((n, r) => n + r.s.all.attempted, 0)
            const right = weekAttempts.reduce((n, r) => n + r.s.all.correct, 0)
            return (
              <li key={w.week} className="grid gap-x-5 gap-y-1.5 py-3 sm:grid-cols-[220px_minmax(0,1fr)]">
                <div>
                  <div className="font-medium">{w.week}</div>
                  <div className="text-[13px] text-soft">{formatDate(w.from)} to {formatDate(w.to)}</div>
                  <div className="num mt-1 text-[13px] text-soft">
                    {finished}/{inWeek.length} topics, {tried} MCQs{tried ? `, ${Math.round((right / tried) * 100)}%` : ''}
                  </div>
                </div>
                <div>
                  <label className="label" htmlFor={`gaps-${w.week}`}>Top 3 gaps and next actions</label>
                  <textarea
                    id={`gaps-${w.week}`}
                    rows={2}
                    className="field mt-1"
                    value={weekly[w.week]?.gaps ?? ''}
                    onChange={(e) =>
                      update((s) => ({ ...s, weekly: { ...s.weekly, [w.week]: { ...s.weekly[w.week], gaps: e.target.value } } }))
                    }
                  />
                  <label className="mt-1 flex items-center gap-2 text-[13.5px] text-soft">
                    <input
                      type="checkbox"
                      className="accent-[var(--ink)]"
                      checked={!!weekly[w.week]?.mockDone}
                      onChange={(e) =>
                        update((s) => ({ ...s, weekly: { ...s.weekly, [w.week]: { ...s.weekly[w.week], mockDone: e.target.checked } } }))
                      }
                    />
                    Mock or PYQ analysis done
                  </label>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
