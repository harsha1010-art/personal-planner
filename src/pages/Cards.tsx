import { useState } from 'react'
import { PageHead, PlannerTabs } from '../components/Shell'
import { formatDate } from '../lib/plan'
import { update, useStore } from '../lib/store'

const PAPERS = ['Prelims', 'GS I', 'GS II', 'GS III', 'GS IV', 'Essay', 'Sociology']

export function Cards() {
  const cards = useStore((s) => s.cards)
  const [title, setTitle] = useState('')
  const [paper, setPaper] = useState('GS II')
  const [facts, setFacts] = useState('')
  const [source, setSource] = useState('')
  const [filter, setFilter] = useState('All')
  const shown = [...cards].reverse().filter((c) => filter === 'All' || c.paper === filter)

  return (
    <>
      <PlannerTabs />
      <PageHead title="Issue cards">
        Your plan revises current affairs from cards, not compilations. Keep one card for each syllabus-relevant issue and add its facts, examples and source.
      </PageHead>
      <form
        className="mb-9 grid gap-2 card sm:grid-cols-[minmax(0,1fr)_130px]"
        onSubmit={(e) => {
          e.preventDefault()
          if (!title.trim()) return
          update((s) => ({
            ...s,
            cards: [...s.cards, { id: crypto.randomUUID(), title: title.trim(), paper, facts, source, at: new Date().toISOString() }],
          }))
          setTitle('')
          setFacts('')
          setSource('')
        }}
      >
        <input aria-label="Issue" className="field" placeholder="Issue, such as Delimitation after the next Census" value={title} onChange={(e) => setTitle(e.target.value)} />
        <select aria-label="Paper" className="field" value={paper} onChange={(e) => setPaper(e.target.value)}>
          {PAPERS.map((p) => <option key={p}>{p}</option>)}
        </select>
        <textarea aria-label="Facts" className="field sm:col-span-2" rows={3} placeholder="Facts, data, provisions, both sides of the argument" value={facts} onChange={(e) => setFacts(e.target.value)} />
        <input aria-label="Source" className="field" placeholder="Source and date" value={source} onChange={(e) => setSource(e.target.value)} />
        <button className="btn btn-primary" disabled={!title.trim()}>Add card</button>
      </form>

      <div className="mb-3 flex flex-wrap gap-1.5 text-[13.5px]" role="group" aria-label="Filter by paper">
        {['All', ...PAPERS].map((p) => (
          <button
            key={p}
            aria-pressed={filter === p}
            onClick={() => setFilter(p)}
            className={`border px-2.5 py-0.5 ${filter === p ? 'rounded-lg border-ink bg-ink text-paper' : 'border-rule bg-sheet text-soft hover:text-ink'}`}
          >
            {p}
          </button>
        ))}
      </div>
      {shown.length === 0 && <p className="text-soft">No cards here yet.</p>}
      <ul className="grid gap-3 sm:grid-cols-2">
        {shown.map((c) => (
          <li key={c.id} className="card">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-[17px]">{c.title}</h2>
              <span className="label shrink-0">{c.paper}</span>
            </div>
            {c.facts && <p className="mt-1.5 whitespace-pre-wrap text-[14px]">{c.facts}</p>}
            <div className="mt-2 flex items-baseline justify-between gap-2 text-[12.5px] text-faint">
              <span>{c.source ? `${c.source}, ` : ''}added {formatDate(c.at.slice(0, 10))}</span>
              <button className="underline underline-offset-2 hover:text-bad" onClick={() => update((s) => ({ ...s, cards: s.cards.filter((x) => x.id !== c.id) }))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
