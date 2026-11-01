import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { exportBackup, importBackup, update, useStore } from '../lib/store'
import { PRELIMS_DATE, daysBetween, isoToday } from '../lib/plan'

const NAV = [
  ['/', 'Today'],
  ['/learn', 'Learn'],
  ['/practice', 'Practice'],
  ['/mains', 'Mains'],
  ['/plan', 'Planner'],
  ['/progress', 'Progress'],
] as const

export function useTheme() {
  const theme = useStore((s) => s.theme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light'
  }, [theme])
  return theme
}

export function Shell() {
  const theme = useTheme()
  const { pathname } = useLocation()
  const fileInput = useRef<HTMLInputElement>(null)
  const [menu, setMenu] = useState(false)
  const [message, setMessage] = useState('')
  const left = daysBetween(isoToday(), PRELIMS_DATE)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenu(false)
  }, [pathname])

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <header className="sticky top-0 z-30 border-b border-rule bg-paper">
        <div className="mx-auto flex h-[64px] max-w-[1240px] items-center gap-6 px-4 sm:px-6">
          <Link to="/" className="display flex items-center gap-2 whitespace-nowrap text-[21px]">
            <span aria-hidden className="grid h-8 w-8 place-items-center rounded-[9px] bg-accent text-[17px] text-accent-ink">U</span>
            UPSC Desk
          </Link>
          <nav aria-label="Main" className="hidden flex-1 items-center gap-1 md:flex">
            {NAV.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-1.5 text-[15px] font-semibold ${isActive ? 'bg-ink text-paper' : 'text-soft hover:bg-tint hover:text-ink'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="relative ml-auto flex items-center gap-3 md:ml-0">
            <span className="whitespace-nowrap text-[14px] font-semibold"><span className="num">{left}</span> days<span className="hidden sm:inline"> to Prelims</span></span>
            <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-tint" aria-label="Settings" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden><circle cx="3" cy="9" r="1.7" fill="currentColor" /><circle cx="9" cy="9" r="1.7" fill="currentColor" /><circle cx="15" cy="9" r="1.7" fill="currentColor" /></svg>
            </button>
            {menu && (
              <div className="card absolute right-0 top-11 w-56 space-y-1 !p-2 text-[14.5px] font-medium shadow-lg">
                <button className="block w-full rounded-lg px-3 py-2 text-left hover:bg-tint" onClick={() => update((s) => ({ ...s, theme: theme === 'dark' ? 'light' : 'dark' }))}>
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
                <button className="block w-full rounded-lg px-3 py-2 text-left hover:bg-tint" onClick={exportBackup}>Download backup</button>
                <button className="block w-full rounded-lg px-3 py-2 text-left hover:bg-tint" onClick={() => fileInput.current?.click()}>Restore backup</button>
                {message && <p role="status" className="px-3 py-1 text-[13px] text-soft">{message}</p>}
              </div>
            )}
            <input
              ref={fileInput}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0]
                if (!file) return
                try {
                  await importBackup(file)
                  setMessage('Backup restored.')
                } catch (err) {
                  setMessage((err as Error).message)
                }
                e.target.value = ''
              }}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-4 py-7 sm:px-6 lg:py-10">
        <Outlet />
      </main>

      <nav aria-label="Main" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-rule bg-paper md:hidden">
        {NAV.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `py-3.5 text-center text-[12.5px] font-semibold ${isActive ? 'text-ink underline decoration-accent decoration-[3px] underline-offset-4' : 'text-faint'}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export function PageHead({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <header className="mb-8">
      <h1 className="text-[40px] sm:text-[52px]">{title}</h1>
      {children && <div className="mt-3 max-w-[68ch] text-[17px] text-soft">{children}</div>}
    </header>
  )
}

export function PlannerTabs() {
  const tabs = [['/plan', '204-day plan'], ['/syllabus', 'Syllabus'], ['/cards', 'Issue cards'], ['/guide', 'Guide']]
  return (
    <nav aria-label="Planner" className="-mt-1 mb-7 flex gap-1 overflow-x-auto">
      {tabs.map(([to, label]) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `whitespace-nowrap rounded-full border-[1.5px] px-4 py-1.5 text-[14.5px] font-semibold ${isActive ? 'border-ink bg-ink text-paper' : 'border-rule text-soft hover:border-ink hover:text-ink'}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
