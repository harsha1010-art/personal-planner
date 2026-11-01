import { PageHead, PlannerTabs } from '../components/Shell'
import { guide } from '../lib/plan'
import { update, useStore } from '../lib/store'

export function Syllabus() {
  const checks = useStore((s) => s.checks)
  const papers = guide.syllabus.map((row) => {
    const values = Object.values(row)
    return {
      paper: values[0],
      items: values[1].split(';').map((t) => t.trim().replace(/\.$/, '')).filter(Boolean),
    }
  })
  const total = papers.reduce((n, p) => n + p.items.length, 0)
  const ticked = papers.reduce((n, p) => n + p.items.filter((i) => checks[`syl:${p.paper}:${i}`]).length, 0)

  return (
    <>
      <PlannerTabs />
      <PageHead title="Syllabus">
        The checklist from your tracker. <span className="num">{ticked}/{total}</span> covered. Tick an item only when you can recall it, solve its PYQs and explain your mistakes.
        Check the wording against the 2027 notification, due 13 January 2027.
      </PageHead>
      {papers.map((p) => {
        const done = p.items.filter((i) => checks[`syl:${p.paper}:${i}`]).length
        return (
          <section key={p.paper} className="mb-8">
            <h2 className="flex items-baseline justify-between mb-3 text-[28px]">
              {p.paper}
              <span className="num font-sans text-[13px] font-normal text-soft">{done}/{p.items.length}</span>
            </h2>
            <ul className="mt-2 grid gap-x-8 sm:grid-cols-2">
              {p.items.map((item) => {
                const key = `syl:${p.paper}:${item}`
                return (
                  <li key={item} className="py-1">
                    <label className="flex items-start gap-2.5 leading-snug">
                      <input
                        type="checkbox"
                        className="mt-1 accent-[var(--ink)]"
                        checked={!!checks[key]}
                        onChange={(e) => update((s) => ({ ...s, checks: { ...s.checks, [key]: e.target.checked } }))}
                      />
                      <span className={checks[key] ? 'text-faint line-through' : ''}>{item}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </>
  )
}
