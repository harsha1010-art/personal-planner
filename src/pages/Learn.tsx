import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BeyondPanel } from '../components/BeyondPanel'
import { ChapterEnd, ChapterTop } from '../components/ChapterParts'
import { chapterByKey } from '../lib/sociology'
import { NoteBlock, slug } from '../components/NoteBlocks'
import { PageHead } from '../components/Shell'
import { mainsForDay, questionsForDay } from '../data/bank'
import { beyondFor } from '../data/beyond'
import { noteForDay, notes } from '../data/notes'
import { pictureLink, pictureUrl } from '../data/notes/types'
import { extraByKey } from '../lib/extras'
import { dayByDate, days, formatDate, isoToday, subjectOf } from '../lib/plan'
import { update, useStore } from '../lib/store'
import { subjectColor, subjectsInOrder, topicsOf, totalTopics } from '../lib/subjects'

const BEYOND = 'Beyond this page'
const isDate = (key: string) => /^\d{4}-/.test(key)

export function topicMeta(key: string) {
  const day = dayByDate(key)
  if (day) return { title: day.topic, subject: subjectOf(day), label: formatDate(key) }
  const extra = extraByKey.get(key)
  return { title: extra?.title ?? key, subject: extra?.subject ?? 'Mixed', label: extra?.when ?? '' }
}

export function Learn() {
  const checks = useStore((s) => s.checks)
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? subjectsInOrder : [filter]

  return (
    <>
      <PageHead title="Learn">
        Every syllabus topic, in the order of your plan, plus Sociology, languages and Essay. <span className="num font-semibold text-ink">{notes.length}</span> of{' '}
        <span className="num font-semibold text-ink">{totalTopics}</span> topics have notes. Check the Verify before the exam list in the Guide for points that could change or could not be confirmed.
      </PageHead>
      <div className="mb-9 flex flex-wrap gap-1.5" role="group" aria-label="Filter by subject">
        {['All', ...subjectsInOrder].map((s) => (
          <button
            key={s}
            aria-pressed={filter === s}
            onClick={() => setFilter(s)}
            className={`rounded-full border-[1.5px] px-3.5 py-1 text-[14px] font-semibold ${filter === s ? 'border-ink bg-ink text-paper' : 'border-rule text-soft hover:border-ink hover:text-ink'}`}
          >
            {s}
          </button>
        ))}
      </div>
      {shown.map((subject) => {
        const topics = topicsOf(subject)
        return (
          <section key={subject} className="mb-12" style={{ '--subject': subjectColor(subject) } as React.CSSProperties}>
            <h2 className="mb-4 text-[28px]"><span className="text-[var(--subject)]">/</span> {subject}</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((t) => {
                const note = noteForDay(t.key)
                const read = checks[`read:${t.key}`]
                const when = isDate(t.when) ? formatDate(t.when) : t.when
                const body = (
                  <>
                    {note?.hero ? (
                      <img src={pictureUrl(note.hero, 640)} alt="" loading="lazy" className="h-40 w-full bg-tint object-cover" />
                    ) : (
                      <div className={`h-3 bg-[var(--subject)] ${note ? '' : 'opacity-25'}`} />
                    )}
                    <div className="p-4">
                      <div className="text-[13px] font-semibold text-faint">
                        {when}{note ? `, ${note.minutes} min read` : chapterByKey.has(t.key) ? ', earlier draft only' : ', notes not written yet'}
                      </div>
                      <h3 className="mt-1 text-[20px] leading-tight">{t.title}</h3>
                      {read && <div className="mt-1.5 text-[13.5px] font-semibold text-good">Read</div>}
                    </div>
                  </>
                )
                return (
                  <li key={t.key}>
                    {note || chapterByKey.has(t.key) ? (
                      <Link to={`/learn/${t.key}`} className="block h-full overflow-hidden rounded-[18px] border-[1.5px] border-rule transition-colors hover:border-ink">{body}</Link>
                    ) : (
                      <div className="h-full overflow-hidden rounded-[18px] border-[1.5px] border-dashed border-rule">{body}</div>
                    )}
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

export function Topic() {
  const { date = '' } = useParams()
  const note = noteForDay(date)
  const meta = topicMeta(date)
  const read = useStore((s) => s.checks[`read:${date}`])
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  const chapter = note?.chapter
  const headings = [
    ...(chapter ? ['Learning objectives', 'Source mapping'] : []),
    ...(note?.blocks.flatMap((b) => (b.t === 'h' ? [b.text] : [])) ?? []),
    ...(chapter ? ['Important terms', 'One-page revision', 'Recall questions', 'Previous-year questions', 'Practice questions', 'Chapter checklist'] : []),
    BEYOND,
  ]

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? Math.min(100, (scrollY / max) * 100) : 0)
      let current = ''
      for (const h of headings) {
        const el = document.getElementById(slug(h))
        if (el && el.getBoundingClientRect().top < 140) current = h
      }
      setActive(current)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  if (!note) {
    const draft = chapterByKey.get(date)?.draft
    return (
      <>
        <PageHead title={meta.title}>
          {draft ? 'This chapter has not been rewritten from the textbooks yet. Until it is, read the earlier draft note, which was written without checking the books.' : 'Notes for this topic are not written yet.'}
        </PageHead>
        <div className="flex flex-wrap gap-2">
          {draft && noteForDay(draft) && <Link className="btn btn-primary" to={`/learn/${draft}`}>Read the earlier draft</Link>}
          <Link className="btn" to={draft ? '/sociology' : '/learn'}>{draft ? 'Sociology index' : 'All topics'}</Link>
        </div>
      </>
    )
  }

  const color = subjectColor(meta.subject)
  const qCount = questionsForDay(date).length
  const mainsCount = mainsForDay(date).length
  const planDay = dayByDate(date)
  const ordered = [...notes].sort((a, b) => a.day.localeCompare(b.day))
  const nextNote = ordered[ordered.findIndex((n) => n.day === date) + 1]

  return (
    <div style={{ '--subject': color } as React.CSSProperties}>
      <div aria-hidden className="fixed inset-x-0 top-[64px] z-20 h-[4px]">
        <div className="h-full bg-[var(--subject)]" style={{ width: `${progress}%` }} />
      </div>

      <header className={`-mx-4 -mt-7 grid overflow-hidden bg-[var(--subject)] text-white sm:mx-0 sm:mt-0 sm:rounded-[24px] ${note.hero ? 'md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]' : ''}`}>
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-9">
          <div>
            <Link to="/learn" className="text-[14.5px] font-semibold underline underline-offset-4">{meta.subject}</Link>
            <h1 className={`mt-3 ${meta.title.length > 60 ? 'text-[30px] sm:text-[42px]' : 'text-[40px] sm:text-[56px]'}`}>{meta.title}</h1>
            <p className="mt-4 max-w-[52ch] text-[17.5px] leading-snug">{note.summary}</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[14.5px] font-semibold">
            <span>{note.minutes} min read</span>
            <span>{planDay ? `Plan day ${days.indexOf(planDay) + 1}, ${meta.label}` : meta.label}</span>
            {date === isoToday() && <span>Today</span>}
          </div>
        </div>
        {note.hero && (
          <a href={pictureLink(note.hero)} target="_blank" rel="noreferrer" className="relative block min-h-[240px]" aria-label={`Image source: ${note.hero.credit}, ${note.hero.license}`}>
            <img src={pictureUrl(note.hero)} alt={note.heroAlt ?? ''} className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-0.5 text-[11.5px] text-white">{note.hero.credit}, {note.hero.license}</span>
          </a>
        )}
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[230px_minmax(0,720px)] lg:justify-center">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-[92px]">
            <div className="label mb-2">On this page</div>
            <ul className="space-y-0.5 text-[14.5px]">
              {headings.map((h) => (
                <li key={h}>
                  <a
                    href={`#${slug(h)}`}
                    aria-current={active === h ? 'location' : undefined}
                    className={`block rounded-lg px-2.5 py-1 leading-snug ${active === h ? 'bg-[var(--subject)] font-semibold text-white' : 'text-soft hover:bg-tint hover:text-ink'}`}
                  >
                    {h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <article className="notes min-w-0">
          {chapter && <ChapterTop c={chapter} />}
          {note.blocks.map((block, i) => <NoteBlock key={i} block={block} />)}
          {chapter && <ChapterEnd chapterKey={date} c={chapter} />}

          <NoteBlock block={{ t: 'h', text: BEYOND }} />
          <p className="mb-4 !text-[16px] text-soft">These notes aim to be enough for this topic. Use the items below only for what notes cannot do: maps, official wording and the latest news.</p>
          <div className="not-prose"><BeyondPanel beyond={note.beyond ?? beyondFor(date, meta.subject)} /></div>

          <section className="mt-14 rounded-[20px] bg-tint p-6">
            <h2 className="text-[26px]">Now test it</h2>
            <p className="mt-1.5 !text-[16px] text-soft">
              Close this page and recall the main points first. Then attempt the questions: answers appear only after you submit.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                className="btn"
                aria-pressed={!!read}
                onClick={() => update((s) => ({
                  ...s,
                  checks: { ...s.checks, [`read:${date}`]: !read },
                  // A Sociology chapter then comes up for revision after 1, 7 and 30 days on Today.
                  ...(chapter && !read && !s.days[date]?.doneOn ? { days: { ...s.days, [date]: { status: 'Done', doneOn: isoToday() } } } : {}),
                }))}
              >
                {read ? 'Marked as read' : 'Mark as read'}
              </button>
              {qCount > 0 && <Link className="btn btn-primary" to={`/test/day:${date}`}>Take the {qCount}-question test</Link>}
              {mainsCount > 0 && <Link className="btn" to={`/mains?day=${date}`}>Write {mainsCount} Mains answers</Link>}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-[22px]">References</h2>
            <p className="mt-1 !text-[14.5px] text-soft">References to check against. These notes are original summaries and have not been checked line by line against each one. Ancient dates are approximate, and scholars often disagree.</p>
            <ul className="mt-2 space-y-1 text-[14.5px]">
              {note.sources.map((s) => (
                <li key={s.label}>
                  {s.url ? <a className="underline decoration-rule underline-offset-2 hover:decoration-ink" href={s.url} target="_blank" rel="noreferrer">{s.label}</a> : s.label}
                </li>
              ))}
            </ul>
          </section>

          {nextNote && (
            <Link to={`/learn/${nextNote.day}`} className="mt-10 block rounded-[20px] border-[1.5px] border-ink p-5 hover:bg-ink hover:text-paper">
              <div className="text-[13.5px] font-semibold opacity-70">Next topic</div>
              <div className="display mt-0.5 text-[24px]">{topicMeta(nextNote.day).title}</div>
            </Link>
          )}
        </article>
      </div>
    </div>
  )
}
