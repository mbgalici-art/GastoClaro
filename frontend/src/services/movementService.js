import { apiRequest } from './apiClient.js'

export function listMovements(params = {}) {
  const query = new URLSearchParams(params).toString()
  return apiRequest(`/api/v1/movements${query ? `?${query}` : ''}`)
}

export function createMovement(movement) {
  return apiRequest('/api/v1/movements', {
    method: 'POST',
    body: JSON.stringify(movement),
  })
}
