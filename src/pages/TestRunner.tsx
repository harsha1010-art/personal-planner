import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { QuestionBody } from '../components/QuestionBody'
import { useTheme } from '../components/Shell'
import { buildSet, secondsFor } from '../lib/sets'
import { getState, update, useStore } from '../lib/store'
import type { TestDraft } from '../lib/types'

const clock = (s: number) => {
  const abs = Math.abs(s)
  return `${s < 0 ? '-' : ''}${String(Math.floor(abs / 60)).padStart(2, '0')}:${String(abs % 60).padStart(2, '0')}`
}

export function TestRunner() {
  useTheme()
  const { setId = '' } = useParams()
  const navigate = useNavigate()
  // Built once on open, so a repair set keeps the same questions until submitted.
  const set = useMemo(() => buildSet(setId), [setId])
  const draft: TestDraft =
    useStore((s) => s.drafts[setId]) ?? { answers: {}, review: [], seconds: 0, current: 0 }
  const [confirming, setConfirming] = useState(false)

  const save = (patch: Partial<TestDraft>) =>
    update((s) => ({ ...s, drafts: { ...s.drafts, [setId]: { ...(s.drafts[setId] ?? draft), ...patch } } }))

  useEffect(() => {
    if (confirming) return
    const t = setInterval(() => {
      update((s) => {
        const d = s.drafts[setId] ?? { answers: {}, review: [], seconds: 0, current: 0 }
        return { ...s, drafts: { ...s.drafts, [setId]: { ...d, seconds: d.seconds + 1 } } }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [setId, confirming])

  if (!set || set.questions.length === 0) {
    return (
      <div className="mx-auto max-w-lg p-8">
        <h1 className="text-2xl">No questions for this test yet</h1>
        <p className="mt-2 text-soft">Questions for these topics have not been written yet.</p>
        <Link className="btn mt-4" to="/practice">Back to practice</Link>
      </div>
    )
  }

  const qs = set.questions
  const index = Math.min(draft.current, qs.length - 1)
  const q = qs[index]
  const picked = draft.answers[q.id]
  const marked = draft.review.includes(q.id)
  const answered = qs.filter((x) => draft.answers[x.id] !== undefined && draft.answers[x.id] !== null).length
  const limit = secondsFor(qs.length)
  const left = limit - draft.seconds

  const submit = () => {
    const id = crypto.randomUUID()
    const live = getState().drafts[setId] ?? draft
    update((s) => {
      const drafts = { ...s.drafts }
      delete drafts[setId]
      return {
        ...s,
        drafts,
        attempts: [
          ...s.attempts,
          {
            id,
            setId,
            title: set.title,
            subject: set.subject,
            at: new Date().toISOString(),
            seconds: live.seconds,
            questionIds: qs.map((x) => x.id),
            answers: live.answers,
            review: live.review,
          },
        ],
      }
    })
    navigate(`/result/${id}`, { replace: true })
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="sticky top-0 z-10 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-rule bg-sheet px-4 py-2.5">
        <div className="min-w-0 flex-1 basis-52">
          <div className="truncate display text-[19px] leading-tight">{set.title}</div>
          <div className="text-[12.5px] text-soft">Right +2, wrong &minus;0.66, blank 0. Your answers save as you go.</div>
        </div>
        <div className={`num text-[22px] ${left < 0 ? 'text-bad' : ''}`} role="timer" aria-label="Time left">{clock(left)}</div>
        <button className="btn" onClick={() => navigate(-1)}>Save and leave</button>
        <button className="btn btn-primary" onClick={() => setConfirming(true)}>Submit</button>
      </header>

      <div className="mx-auto grid w-full max-w-[1100px] flex-1 gap-8 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_252px]">
        <section aria-label={`Question ${index + 1}`} className="min-w-0">
          <div className="flex items-baseline justify-between">
            <span className="label">Question <span className="num">{index + 1}</span> of <span className="num">{qs.length}</span></span>
          </div>
          <div className="mt-3 text-[17px] leading-relaxed">
            <QuestionBody question={q} />
          </div>
          <fieldset className="mt-5 space-y-2">
            <legend className="sr-only">Choose an answer</legend>
            {q.options.map((opt, i) => (
              <label
                key={i}
                className={`flex cursor-pointer gap-3 rounded-[14px] border-[1.5px] p-3.5 leading-snug ${
                  picked === i ? 'border-ink bg-wash' : 'border-rule bg-sheet hover:border-faint'
                }`}
              >
                <input
                  type="radio"
                  name={q.id}
                  className="mt-1 accent-[var(--ink)]"
                  checked={picked === i}
                  onChange={() => save({ answers: { ...draft.answers, [q.id]: i } })}
                />
                <span><span className="num mr-1.5 text-faint">{'abcd'[i]})</span>{opt}</span>
              </label>
            ))}
          </fieldset>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button className="btn" disabled={index === 0} onClick={() => save({ current: index - 1 })}>&larr; Previous</button>
            <button className="btn" disabled={index === qs.length - 1} onClick={() => save({ current: index + 1 })}>Next &rarr;</button>
            <button
              className={`btn ${marked ? '!border-warn text-warn' : ''}`}
              aria-pressed={marked}
              onClick={() => save({ review: marked ? draft.review.filter((x) => x !== q.id) : [...draft.review, q.id] })}
            >
              {marked ? 'Marked for review' : 'Mark for review'}
            </button>
            <button
              className="btn"
              disabled={picked === undefined || picked === null}
              onClick={() => save({ answers: { ...draft.answers, [q.id]: null } })}
            >
              Clear answer
            </button>
          </div>
        </section>

        <aside className="lg:border-l lg:border-rule lg:pl-6">
          <div className="label">Questions</div>
          <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(36px,1fr))] gap-1.5">
            {qs.map((x, i) => {
              const done = draft.answers[x.id] !== undefined && draft.answers[x.id] !== null
              const flag = draft.review.includes(x.id)
              return (
                <button
                  key={x.id}
                  onClick={() => save({ current: i })}
                  aria-label={`Question ${i + 1}${done ? ', answered' : ''}${flag ? ', marked for review' : ''}`}
                  aria-current={i === index}
                  className={`num relative h-9 rounded-lg border-[1.5px] text-[13px] ${
                    i === index ? 'outline-2 outline-offset-1 outline-ink' : ''
                  } ${done ? 'rounded-lg border-ink bg-ink text-paper' : 'border-rule bg-sheet'}`}
                >
                  {i + 1}
                  {flag && <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-warn" />}
                </button>
              )
            })}
          </div>
          <dl className="mt-4 space-y-1 text-[13.5px] text-soft">
            <div className="flex justify-between"><dt>Answered</dt><dd className="num text-ink">{answered}</dd></div>
            <div className="flex justify-between"><dt>Left blank</dt><dd className="num text-ink">{qs.length - answered}</dd></div>
            <div className="flex justify-between"><dt>For review</dt><dd className="num text-ink">{draft.review.length}</dd></div>
          </dl>
          {qs.length < set.target && (
            <p className="mt-4 text-[13px] text-faint">This test has {qs.length} of its target {set.target} questions, because that is all that has been written so far.</p>
          )}
        </aside>
      </div>

      {confirming && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="submit-title">
          <div className="w-full max-w-md border border-rule bg-sheet p-5">
            <h2 id="submit-title" className="text-[22px]">Submit this test?</h2>
            <p className="mt-2 text-soft">
              You answered <span className="num text-ink">{answered}</span> of <span className="num text-ink">{qs.length}</span>
              {draft.review.length > 0 && <>, with <span className="num text-ink">{draft.review.length}</span> marked for review</>}.
              The answers and explanations open once you submit.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="btn" onClick={() => setConfirming(false)}>Keep going</button>
              <button className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
