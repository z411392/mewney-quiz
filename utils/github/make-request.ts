/**
 * @note 因為 Github Page 沒有辦法作 Functions Hosting，如果 Access Token 擺在 RuntimeConfig 的 public 下會洩漏權限出去，所以這裡只取不用 Access Token 也能拿到的公開資訊。
 * */

export const makeRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  uri: string,
  data?: { [key: string]: any },
  signal?: AbortSignal,
) => {
  const endpoint = "https://api.github.com"
  const body = data ? new URLSearchParams(data) : ""
  let URL = method === "GET" ? `${endpoint}${uri}?${body}` : `${endpoint}${uri}`
  URL = `https://cors-anywhere.herokuapp.com/${URL}` // https://ithelp.ithome.com.tw/m/articles/10268821
  const {
    public: { origin },
  } = useRuntimeConfig()
  const headers = {
    origin,
    accept: "application/vnd.github+json",
    // authorization: `Bearer ${accessToken}`,
  }
  const response =
    method === "GET"
      ? await fetch(URL, { signal, headers })
      : await fetch(URL, { method, body, signal, headers })
  return (await response.json()) as T
}
