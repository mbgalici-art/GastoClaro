import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function AppShell({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-emerald-950/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link className="text-xl font-bold tracking-tight text-emerald-900" to="/">GastoClaro</Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-slate-600 sm:inline">{user?.email}</span>
            <button onClick={handleLogout} className="rounded-lg border border-slate-300 px-3 py-2 font-medium hover:bg-slate-50">
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8">{children}</main>
    </div>
  )
}
