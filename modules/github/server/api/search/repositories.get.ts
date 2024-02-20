import { github } from "../../../server/utils"

const asInt = (value: any, min: number = 0) => Math.max(parseInt(value) || 0, min) >>> 0

export default defineEventHandler(async (event) => {
    const {
        keyword,
        // itemsPerPage,
        page,
    } = getQuery(event) as { keyword: string, itemsPerPage?: string, page?: string }
    let payload: any = undefined
    let error: any = undefined
    try {
        // 不傳入 itemsPerPage 是刻意為之，如果放任 client side 傳入任意值，在 itemsPerPage 超大時，會造成資料庫的負擔。
        payload = await github.searchForRepositories({
            keyword: keyword.trim(),
            // itemsPerPage: itemsPerPage ? asInt(itemsPerPage, 10) : 10,
            page: page ? asInt(page, 1) : 1,
        })
    } catch (error) {
        console.error(error)
        error = `發生錯誤: ${error}`
    } finally {
        return {
            payload,
            error,
        }
    }
})