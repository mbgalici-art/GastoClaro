const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
let accessToken = null

export function setAccessToken(token) {
  accessToken = token
}

export async function apiRequest(path, options = {}) {
  if (!API_BASE_URL) {
    throw new Error('Falta configurar VITE_API_URL en el archivo .env')
  }

  const headers = new Headers(options.headers || {})
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

  const response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers })
  if (response.status === 204) return null

  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    const error = new Error(payload?.message || `Error HTTP ${response.status}`)
    error.status = response.status
    error.code = payload?.code
    throw error
  }
  return payload
}
