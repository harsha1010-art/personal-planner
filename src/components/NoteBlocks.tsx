import { Fragment, type ReactNode } from 'react'
import { pictureLink, pictureUrl, type Block, type NoteKind, type Picture } from '../data/notes/types'
import { Diagram } from './Diagrams'

/** Renders **bold** inside note text. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return <>{parts.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))}</>
}

export const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function Figure({ caption, children }: { caption?: string; children: ReactNode }) {
  return (
    <figure className="my-8">
      {children}
      {caption && <figcaption className="mt-2.5 text-[14px] text-soft"><Rich text={caption} /></figcaption>}
    </figure>
  )
}

export function Photo({ pic, caption, tall }: { pic: Picture; caption: string; tall?: boolean }) {
  return (
    <Figure>
      <img
        src={pictureUrl(pic)}
        alt={caption}
        loading="lazy"
        className={`w-full rounded-[18px] bg-tint ${tall ? 'mx-auto max-h-[560px] w-auto' : 'max-h-[520px] object-cover'}`}
      />
      <figcaption className="mt-2.5 text-[14px] text-soft">
        <Rich text={caption} />{' '}
        <a className="text-[12.5px] text-faint underline underline-offset-2" href={pictureLink(pic)} target="_blank" rel="noreferrer">
          {pic.credit}, {pic.license}
        </a>
      </figcaption>
    </Figure>
  )
}

const NOTE_STYLE: Record<NoteKind, { label: string; className: string }> = {
  exam: { label: 'Prelims focus', className: 'bg-wash' },
  trap: { label: 'Common trap', className: 'bg-[#fde8e4] dark:bg-[#3d1d17]' },
  mains: { label: 'Mains angle', className: 'bg-[#e2eefc] dark:bg-[#172a44]' },
  recent: { label: 'In the news', className: 'bg-[#e0f3ea] dark:bg-[#15332a]' },
}

function Wheel({ center, spokes }: { center: string; spokes: string[] }) {
  const size = 560
  const c = size / 2
  const r = 158
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto w-full max-w-[520px]" role="img" aria-label={`${center}: ${spokes.join(', ')}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke="var(--subject)" strokeWidth="10" />
      {spokes.map((label, i) => {
        const a = (i / spokes.length) * Math.PI * 2 - Math.PI / 2
        const x = c + Math.cos(a) * r
        const y = c + Math.sin(a) * r
        const lx = c + Math.cos(a) * (r + 22)
        const ly = c + Math.sin(a) * (r + 22)
        const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end'
        const words = label.split('\n')
        return (
          <g key={label}>
            <line x1={c} y1={c} x2={x} y2={y} stroke="var(--subject)" strokeWidth="4" />
            <circle cx={x} cy={y} r="9" fill="var(--subject)" />
            <text x={lx} y={ly + 5 - (words.length - 1) * 9} textAnchor={anchor} fontSize="17" fontWeight="600" fill="currentColor">
              {words.map((w, j) => <tspan key={w} x={lx} dy={j ? 19 : 0}>{w}</tspan>)}
            </text>
          </g>
        )
      })}
      <circle cx={c} cy={c} r="62" fill="var(--subject)" />
      <text x={c} y={c + 6} textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">{center}</text>
    </svg>
  )
}

export function NoteBlock({ block: b }: { block: Block }) {
  switch (b.t) {
    case 'h':
      return <h2 id={slug(b.text)} className="mb-3 mt-14 text-[32px] first:mt-0"><span className="text-[var(--subject)]">/</span> {b.text}</h2>
    case 'h3':
      return <h3 className="mb-2 mt-8 text-[22px]">{b.text}</h3>
    case 'p':
      return <p className="my-3.5"><Rich text={b.text} /></p>
    case 'list':
      return (
        <ul className="my-3.5 space-y-2 text-[17px] leading-relaxed">
          {b.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject)]" />
              <span><Rich text={item} /></span>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <Figure caption={b.caption}>
          <div className="overflow-x-auto rounded-[14px] border-[1.5px] border-rule">
            <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="bg-[var(--subject)] text-white">
                  {b.head.map((h) => <th key={h} className="px-3.5 py-2.5 font-semibold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {b.rows.map((row, i) => (
                  <tr key={i} className="even:bg-tint">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-3.5 py-2.5 align-top ${j === 0 ? 'font-semibold' : ''}`}><Rich text={cell} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Figure>
      )
    case 'img':
      return <Photo pic={b.pic} caption={b.caption} tall={b.tall} />
    case 'timeline':
      return (
        <Figure caption={b.caption}>
          <ol className="relative ml-1 border-l-[3px] border-[var(--subject)]">
            {b.items.map((item) => (
              <li key={item.when + item.what} className="relative pb-5 pl-6 last:pb-0">
                <span aria-hidden className="absolute -left-[9px] top-[7px] h-[15px] w-[15px] rounded-full border-[3px] border-[var(--subject)] bg-paper" />
                <div className="display text-[17px]">{item.when}</div>
                <div className="text-[16px] text-soft"><Rich text={item.what} /></div>
              </li>
            ))}
          </ol>
        </Figure>
      )
    case 'flow':
      return (
        <Figure caption={b.caption}>
          <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
            {b.steps.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && <li aria-hidden className="self-center text-[22px] font-bold text-[var(--subject)] sm:px-0.5"><span className="inline-block rotate-90 sm:rotate-0">&rarr;</span></li>}
                <li className="min-w-0 flex-1 rounded-[14px] bg-tint p-3.5">
                  <div className="display text-[17px]">{step.title}</div>
                  {step.sub && <div className="mt-1 text-[14px] leading-snug text-soft"><Rich text={step.sub} /></div>}
                </li>
              </Fragment>
            ))}
          </ol>
        </Figure>
      )
    case 'compare':
      return (
        <Figure caption={b.caption}>
          <div className={`grid gap-3 ${b.columns.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {b.columns.map((col) => (
              <div key={col.title} className="overflow-hidden rounded-[14px] border-[1.5px] border-rule">
                <div className="display bg-[var(--subject)] px-4 py-2.5 text-[17px] text-white">{col.title}</div>
                <ul className="space-y-1.5 p-4 text-[15px] leading-snug">
                  {col.items.map((item) => <li key={item}><Rich text={item} /></li>)}
                </ul>
              </div>
            ))}
          </div>
        </Figure>
      )
    case 'strata':
      return (
        <Figure caption={b.caption}>
          <ol className="overflow-hidden rounded-[14px]">
            {b.layers.map((layer, i) => (
              <li
                key={layer.title}
                className="grid gap-x-4 px-4 py-3 text-white sm:grid-cols-[190px_minmax(0,1fr)]"
                style={{ background: `color-mix(in srgb, var(--subject) ${100 - (i * 34) / Math.max(1, b.layers.length - 1)}%, #000)` }}
              >
                <div className="display text-[17px]">{layer.title}</div>
                <div className="text-[14.5px] leading-snug opacity-95"><Rich text={layer.sub} /></div>
              </li>
            ))}
          </ol>
        </Figure>
      )
    case 'wheel':
      return <Figure caption={b.caption}><Wheel center={b.center} spokes={b.spokes} /></Figure>
    case 'svg':
      return <Figure caption={b.caption}><Diagram id={b.id} /></Figure>
    case 'note': {
      const style = NOTE_STYLE[b.kind]
      return (
        <aside className={`my-6 rounded-[16px] p-5 ${style.className}`}>
          <div className="text-[13px] font-bold">{style.label}</div>
          <div className="display mt-0.5 text-[19px]">{b.title}</div>
          <p className="mt-1.5 !text-[16px] !leading-relaxed"><Rich text={b.text} /></p>
        </aside>
      )
    }
  }
}
