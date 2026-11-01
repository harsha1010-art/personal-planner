import { PageHead, PlannerTabs } from '../components/Shell'
import { guide } from '../lib/plan'
import { weeklyLoad } from '../lib/schedule'
import { update, useStore } from '../lib/store'

function Table({ rows }: { rows: Record<string, string>[] }) {
  const head = Object.keys(rows[0])
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] text-left text-[14px]">
        <thead className="label border-b border-rule">
          <tr>{head.map((h) => <th key={h} className="py-2 pr-4 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-rule">
          {rows.map((row, i) => (
            <tr key={i}>
              {head.map((h, j) => (
                <td key={h} className={`py-2 pr-4 align-top ${j === 0 ? 'font-medium' : ''}`}>{row[h]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-[28px]">{title}</h2>
      {children}
    </section>
  )
}

export function Guide() {
  const checks = useStore((s) => s.checks)
  return (
    <>
      <PlannerTabs />
      <PageHead title="Guide">Your method, weekly routine, sources, and the Sociology and language plans.</PageHead>
      <Section title="The plan in brief">
        <dl className="divide-y divide-rule">
          {guide.meta.map((m) => (
            <div key={m.label} className="grid gap-x-4 py-2 sm:grid-cols-[170px_minmax(0,1fr)]">
              <dt className="font-medium">{m.label}</dt>
              <dd className="text-soft">{m.text}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section title="Your weekly load">
        <dl className="divide-y divide-rule">
          {weeklyLoad.map(([label, text]) => (
            <div key={label} className="grid gap-x-4 py-2 sm:grid-cols-[170px_minmax(0,1fr)]">
              <dt className="font-medium">{label}</dt>
              <dd className="text-soft">{text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-[14px] text-soft">Do not leave Sociology until after May 2027: it carries 500 marks. Your first reading target is the end of January.</p>
      </Section>
      <Section title="How to study"><Table rows={guide.howToStudy} /></Section>
      <Section title="Weekly routine"><Table rows={guide.routine} /></Section>
      <Section title="Sociology plan">
        <ul className="divide-y divide-rule">
          {guide.sociology.map((row) => {
            const values = Object.values(row)
            const key = `soc:${values[0]}`
            return (
              <li key={values[0]}>
                <label className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 py-2 sm:grid-cols-[auto_130px_70px_minmax(0,1fr)]">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[var(--ink)]"
                    checked={!!checks[key]}
                    onChange={(e) => update((s) => ({ ...s, checks: { ...s.checks, [key]: e.target.checked } }))}
                  />
                  <span className="font-medium">{values[0]}</span>
                  <span className="col-start-2 text-[13.5px] text-soft sm:col-start-auto">{values[1]}</span>
                  <span className="col-start-2 sm:col-start-auto">{values[2]}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </Section>
      <Section title="Languages and essay"><Table rows={guide.languages} /></Section>
      <Section title="Source index"><Table rows={guide.sources} /></Section>
      <Section title="How to read subject priority"><Table rows={guide.importance} /></Section>
      <Section title="Official sources to check">
        <ul className="mt-2 space-y-1.5">
          {[
            ['Previous question papers', 'https://www.upsc.gov.in/examinations/previous-question-papers'],
            ['Answer keys', 'https://www.upsc.gov.in/examinations/answer-key'],
            ['UPSC home, for the calendar and notices', 'https://www.upsc.gov.in/'],
            ['NCERT textbooks, free PDFs', 'https://ncert.nic.in/textbook.php'],
            ['PIB press releases', 'https://pib.gov.in/'],
          ].map(([label, url]) => (
            <li key={url}><a className="underline decoration-rule underline-offset-2 hover:text-accent" href={url} target="_blank" rel="noreferrer">{label}</a></li>
          ))}
        </ul>
      </Section>
    </>
  )
}
