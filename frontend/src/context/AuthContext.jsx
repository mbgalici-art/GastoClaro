import { createContext, useContext, useMemo, useState } from 'react'
import * as authService from '../services/authService.js'
import { setAccessToken } from '../services/apiClient.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(credentials) {
    const session = await authService.login(credentials)
    setAccessToken(session.access_token)
    setUser(session.user)
    return session.user
  }

  async function logout() {
    try {
      await authService.logout()
    } finally {
      setAccessToken(null)
      setUser(null)
    }
  }

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return context
}
