### 注意事項

#### 搜尋結果如果沒有內容⋯

而因為直接從 Client Side 打 Github REST API 會遇到 CORS 的問題，又因為 Github Page 不能作 Functions Hosting，這裡選擇的是透過 `cors-anywhere` 在中間作請求的轉發。然而因為 `cors-anywhere` Quota 有限，在試用這個小網站的時候，可能會遇到搜尋結果沒有內容的錯誤：
![image](https://github.com/z411392/mewney-quiz/blob/main/cors-anywhere.png)

此時請點開 console 裡的連結，並點選畫面中的「Request temporary access to the demo server」按鈕：
![image](https://github.com/z411392/mewney-quiz/blob/main/request-temporary-access.png)

重新整理原本的頁面，應該就能正常顯示（是可以自己架免費的代理，譬如 colab、repl.it，但是目前先這樣 🙇‍♂️）。

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
