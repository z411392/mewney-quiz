export const makeRequest = async<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', uri: string, data?: { [key: string]: any }, signal?: AbortSignal) => {
    const endpoint = 'https://api.github.com'
    const body = data ? new URLSearchParams(data) : ''
    let URL = method === 'GET' ? `${endpoint}${uri}?${body}` : `${endpoint}${uri}`
    URL = `https://cors-anywhere.herokuapp.com/${URL}`
    const { public: { origin } } = useRuntimeConfig()
    const headers = {
        origin,
        'accept': 'application/vnd.github+json',
    }
    const response = method === 'GET' ? await fetch(URL, { signal, headers }) : await fetch(URL, { method, body, signal, headers })
    return await response.json() as T
}