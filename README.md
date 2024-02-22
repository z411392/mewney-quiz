### 注意事項

#### 如果超過了 Github REST API 的 Quota⋯

會得到例如這樣的回應：

```json
{
  "message": "API rate limit exceeded for 44.195.30.179. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  "documentation_url": "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
}
```

那就要請你稍候一段時間再試一次。

### 開發會用到的指令

#### 以開發模式啟動

```bash
npm run dev # 伺服器預設會啟動在 http://localhost:3000
```

#### 檢查程式碼／自動修復

```bash
npm run eslint
npm run fix # 還是建議一個一個看過比較好
```

#### 自動排版

```bash
npm run prettier
npm run format
```

#### 發布為 Github Page

參考[這篇](https://clairechang.tw/2023/10/03/nuxt3/nuxt-v3-static-site-generation/)。

```bash
npm run generate
npm run deploy
```
