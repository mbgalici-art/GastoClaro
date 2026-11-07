import { apiRequest } from './apiClient.js'

export function register({ email, password }) {
  return apiRequest('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export function login({ email, password }) {
  return apiRequest('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export function currentUser() {
  return apiRequest('/api/auth/me')
}

export function logout() {
  return apiRequest('/api/auth/logout', { method: 'POST' })
}
