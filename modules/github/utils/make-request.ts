export const makeRequest = async<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', uri: string, data?: { [key: string]: any }, signal?: AbortSignal) => {
    const endpoint = '/api/github'
    const body = data ? new URLSearchParams(data) : ''
    const response = method === 'GET' ? await fetch(`${endpoint}${uri}?${body}`, { signal }) : await fetch(`${endpoint}${uri}`, { method, body, signal })
    const { error, payload } = await response.json() as { error?: string, payload: T }
    if (error) throw new Error(error)
    return payload
}