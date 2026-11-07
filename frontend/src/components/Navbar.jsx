import { useRef, useState } from 'react'

const roleLabels = {
  admin: 'Administrador',
  profesor: 'Profesor',
  estudiante: 'Estudiante',
}

/** @param {{ isAuthenticated: boolean, userName: string | null, userRole: 'admin' | 'profesor' | 'estudiante' | null, onLogout: () => void }} props */
function MenuLinks({ isAuthenticated, userName, userRole, onLogout, onNavigate }) {
  if (!isAuthenticated) {
    return (
      <>
        <a onClick={onNavigate} href="/login" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">Login</a>
        <a onClick={onNavigate} href="/register" className="rounded-lg bg-emerald-800 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">Registro</a>
      </>
    )
  }

  return (
    <>
      <div className="px-3 py-2 text-sm sm:text-right">
        <p className="font-semibold text-slate-900">{userName || 'Usuario'}</p>
        {userRole && <p className="text-xs text-slate-500">{roleLabels[userRole] || userRole}</p>}
      </div>
      <button
        type="button"
        onClick={() => { onNavigate?.(); onLogout?.() }}
        className="rounded-lg border border-slate-500 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
      >
        Cerrar sesión
      </button>
    </>
  )
}

/**
 * @param {{ isAuthenticated: boolean, userName: string | null,
 * userRole: 'admin' | 'profesor' | 'estudiante' | null, onLogout: () => void }} props
 */
export default function Navbar({
  isAuthenticated = false,
  userName = null,
  userRole = null,
  onLogout = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeMenu = () => setIsOpen(false)

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav aria-label="Navegación principal" onKeyDown={handleKeyDown} className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-end">
          <div className="hidden items-center gap-2 sm:flex">
            <MenuLinks
              isAuthenticated={isAuthenticated}
              userName={userName}
              userRole={userRole}
              onLogout={onLogout}
            />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        <div id="navbar-menu" className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-2 border-t border-slate-100 py-3 sm:hidden`}>
          <MenuLinks
            isAuthenticated={isAuthenticated}
            userName={userName}
            userRole={userRole}
            onLogout={onLogout}
            onNavigate={closeMenu}
          />
        </div>
      </nav>
    </header>
  )
}
