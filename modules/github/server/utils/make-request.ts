export const makeRequest = async <T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', uri: string, data?: { [key: string]: any }, signal?: AbortSignal) => {
    const endpoint = 'https://api.github.com'
    const body = data ? new URLSearchParams(data) : ''
    const githubAccessToken = process.env.GITHUB_ACCESS_TOKEN!
    const headers = {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${githubAccessToken}`,
    }
    const response = method === 'GET' ? await fetch(`${endpoint}${uri}?${body}`, { headers, signal }) : await fetch(`${endpoint}${uri}`, { method, body, headers, signal })
    return await response.json() as T
}