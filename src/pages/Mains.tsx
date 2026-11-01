import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { PageHead } from '../components/Shell'
import { mainsById, mainsQuestions } from '../data/bank'
import { formatDate } from '../lib/plan'
import { topicMeta } from './Learn'
import { update, useStore } from '../lib/store'

export const RUBRIC: [string, string][] = [
  ['relevance', 'Answers the question that was asked, and follows the directive word'],
  ['understanding', 'Shows real understanding of the subject'],
  ['accuracy', 'Facts, dates and names are correct'],
  ['analysis', 'Explains why and how, not only what'],
  ['dimensions', 'Covers several dimensions, such as social, economic and political'],
  ['structure', 'Logical order, with clear headings or paragraphs'],
  ['intro', 'The introduction and conclusion both do real work'],
  ['evidence', 'Uses examples, reports, sources or case studies'],
  ['limit', 'Stays within the word limit'],
  ['overall', 'Overall: would an examiner keep reading with interest?'],
]

const countWords = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0)

export function Mains() {
  const attempts = useStore((s) => s.mains)
  const [params] = useSearchParams()
  const only = params.get('day')
  const days = [...new Set(mainsQuestions.map((m) => m.day))].filter((d) => !only || d === only).sort()
  const scored = attempts.filter((a) => a.score !== undefined)
  return (
    <>
      <PageHead title="Mains desk">
        Write first. The model answer and marking guide open only after you submit. There is no AI here, so you mark yourself against the guide, and it works only if you mark strictly.
      </PageHead>
      {scored.length > 0 && (
        <p className="mb-6 text-[14px] text-soft"><span className="num text-ink">{scored.length}</span> answers marked so far.</p>
      )}
      {days.length === 0 && <p className="text-soft">No Mains questions written yet.</p>}
      {days.map((date) => (
        <section key={date} className="mb-8">
          <h2 className="mb-3 text-[24px]">
            <span className="num mr-2 text-[14px] font-normal text-soft">{topicMeta(date).label}</span>{topicMeta(date).title}
          </h2>
          <ul className="divide-y divide-rule">
            {mainsQuestions.filter((m) => m.day === date).map((m) => {
              const mine = [...attempts].reverse().find((a) => a.questionId === m.id)
              return (
                <li key={m.id}>
                  <Link to={`/mains/${m.id}`} className="grid gap-x-4 py-3 hover:text-accent sm:grid-cols-[minmax(0,1fr)_120px]">
                    <span className="leading-snug">{m.question}</span>
                    <span className="num text-[13px] text-soft sm:text-right">
                      {m.marks} marks{mine?.score !== undefined ? `, you: ${mine.score}` : mine ? ', not marked' : ''}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </>
  )
}

export function MainsDesk() {
  const { questionId = '' } = useParams()
  const q = mainsById.get(questionId)
  const draft = useStore((s) => s.mainsDrafts[questionId]) ?? ''
  const previous = useStore((s) => s.mains).filter((a) => a.questionId === questionId)
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = previous.find((a) => a.id === activeId)
  const [rubric, setRubric] = useState<Record<string, number>>({})

  if (!q) return <p>That question was not found. <Link className="underline" to="/mains">Back to Mains desk</Link></p>

  const words = countWords(draft)
  const over = words > q.words * 1.1

  const submit = () => {
    const id = crypto.randomUUID()
    update((s) => {
      const mainsDrafts = { ...s.mainsDrafts }
      delete mainsDrafts[questionId]
      return { ...s, mainsDrafts, mains: [...s.mains, { id, questionId, at: new Date().toISOString(), text: draft, words }] }
    })
    setRubric({})
    setActiveId(id)
  }

  const heading = (
    <>
      <div className="mb-3 flex flex-wrap gap-x-3 text-[13.5px] text-soft">
        <Link className="hover:text-ink" to="/mains">&larr; Mains desk</Link>
        <span>{q.marks} marks</span>
        <span>{q.words} words</span>
        <span>{q.directive}</span>
        <span>Predicted practice question, not from UPSC</span>
      </div>
      <h1 className="text-[26px] leading-snug">{q.question}</h1>
    </>
  )

  if (active) {
    const allMarked = RUBRIC.every(([key]) => rubric[key] !== undefined) || active.score !== undefined
    const marks = RUBRIC.reduce((n, [key]) => n + (rubric[key] ?? 0), 0)
    const score = Math.round((marks / (RUBRIC.length * 2)) * q.marks * 2) / 2
    return (
      <>
        {heading}
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <section className="min-w-0">
            <h2 className="label">Your answer, <span className="num">{active.words}</span> words</h2>
            <p className="mt-2 whitespace-pre-wrap card text-[16.5px] leading-relaxed">{active.text}</p>
            <h2 className="label mt-6">Mark yourself: 0 no, 1 partly, 2 yes</h2>
            {active.score !== undefined ? (
              <p className="mt-2">You scored this answer <span className="num font-medium">{active.score}/{q.marks}</span>.</p>
            ) : (
              <>
                <ul className="mt-2 divide-y divide-rule text-[14px]">
                  {RUBRIC.map(([key, label]) => (
                    <li key={key} className="flex items-center justify-between gap-3 py-2">
                      <span>{label}</span>
                      <span role="group" aria-label={label} className="flex shrink-0 gap-1">
                        {[0, 1, 2].map((n) => (
                          <button
                            key={n}
                            aria-pressed={rubric[key] === n}
                            onClick={() => setRubric((r) => ({ ...r, [key]: n }))}
                            className={`num h-7 w-7 border text-[13px] ${rubric[key] === n ? 'rounded-lg border-ink bg-ink text-paper' : 'rounded-lg border-rule bg-sheet hover:border-ink'}`}
                          >
                            {n}
                          </button>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary mt-3"
                  disabled={!allMarked}
                  onClick={() =>
                    update((s) => ({
                      ...s,
                      mains: s.mains.map((a) => (a.id === active.id ? { ...a, rubric, score } : a)),
                    }))
                  }
                >
                  Save score{allMarked ? `: ${score}/${q.marks}` : ''}
                </button>
              </>
            )}
          </section>
          <section className="min-w-0">
            <h2 className="label">An answer must cover</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[14.5px]">
              {q.mustCover.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <h2 className="label mt-6">Model answer</h2>
            <div className="prose-text mt-2 card !border-0 bg-wash text-[16.5px] leading-relaxed">
              {q.model.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <button className="btn mt-4" onClick={() => setActiveId(null)}>Write it again</button>
          </section>
        </div>
      </>
    )
  }

  return (
    <>
      {heading}
      <div className="mt-6">
        <textarea
          aria-label="Your answer"
          rows={18}
          className="field !text-[17px] leading-relaxed"
          placeholder="Introduction, body, conclusion. Write as you would in the exam."
          value={draft}
          onChange={(e) => update((s) => ({ ...s, mainsDrafts: { ...s.mainsDrafts, [questionId]: e.target.value } }))}
        />
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <span className={`num text-[14px] ${over ? 'text-bad' : 'text-soft'}`}>
            {words} / {q.words} words{over ? ', over the limit' : ''}
          </span>
          <button className="btn btn-primary" disabled={words < 20} onClick={submit}>Submit and see model answer</button>
        </div>
      </div>
      {previous.length > 0 && (
        <section className="mt-8">
          <h2 className="label">Earlier attempts</h2>
          <ul className="mt-2 divide-y divide-rule">
            {previous.map((a) => (
              <li key={a.id}>
                <button className="flex w-full justify-between py-2 text-left text-[14px] hover:text-accent" onClick={() => setActiveId(a.id)}>
                  <span>{formatDate(a.at.slice(0, 10))}, <span className="num">{a.words}</span> words</span>
                  <span className="num">{a.score !== undefined ? `${a.score}/${q.marks}` : 'Not marked'}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
