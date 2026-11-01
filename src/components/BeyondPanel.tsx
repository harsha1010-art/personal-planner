import type { Beyond } from '../data/beyond'

function Maybe({ url, children }: { url?: string; children: React.ReactNode }) {
  return url ? (
    <a className="underline decoration-rule underline-offset-2 hover:decoration-ink" href={url} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <>{children}</>
  )
}

export function BeyondPanel({ beyond }: { beyond: Beyond }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card">
        <h3 className="text-[20px]">What you need from outside</h3>
        <ul className="mt-2 space-y-3 text-[15px] leading-snug">
          {beyond.refer.map((r) => (
            <li key={r.what}>
              <div className="font-semibold"><Maybe url={r.url}>{r.what}</Maybe></div>
              <div className="text-[13.5px] text-faint">{r.where}</div>
              <div className="mt-0.5 text-soft">{r.why}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3 className="text-[20px]">Current affairs link</h3>
        <ul className="mt-2 space-y-3 text-[15px] leading-snug">
          {beyond.current.map((c) => (
            <li key={c.issue}>
              <div className="font-semibold">{c.issue}</div>
              <div className="text-soft">{c.link}</div>
              <div className="mt-0.5 text-[13.5px] text-faint">Source: <Maybe url={c.url}>{c.source}</Maybe></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
