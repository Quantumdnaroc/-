# 個人自我介紹網頁 (Personal Portfolio System)

這是一個基於 **Google Apps Script (GAS)** 開發的輕量化個人檔案系統，專為想要快速建立美觀、自動化更新個人簡歷的人士設計。系統整合了 Google Sheets 、 Google Drive 作為後端資料庫，並透過 DriveApp 實現圖片的非同步加載，確保網頁開啟速度流暢且具有高級感。<br>
本專案開放同學們自由使用，但如果你覺得不錯，請標註一下作者（對就是我，蔡守富）。<br>
這是我的聯絡方式：<br>
Instagram：[justintsai0515_2](https://www.instagram.com/justintsai0515_2)<br>
E-Mail：mailjt960515@gmail.com<br>

---

## ✨ 專案特色

* **動態資料同步**：
    * **Google Sheets 驅動**：修改試算表內容，網頁內容即時同步，完全不需要動到 HTML 程式碼。
    * **非同步圖片載入**：頭像圖片存放在 Google Drive，透過 GAS 非同步抓取 Base64 字串，避免網頁初次加載時卡頓。
* **高質感 UI 設計**：
    * **Modern Glassmorphism**：採用毛玻璃質感與 Tailwind CSS 設計，具備細膩的藍色光暈與過場動畫。
    * **響應式佈局**：支援手機與電腦端，手機端會自動調整為單欄排列，底部設有漂浮毛玻璃 Footer。
* **雲端化與零成本**：
    * **完全免費**：不需要購買網域與伺服器，完全運行於 Google 雲端平台與 GAS。
    * **輕量化架構**：前端使用 Vanilla JS 與 Google Script Run 進行通訊，簡單暴力。

---

## 🛠️ 技術棧

* **Frontend**: HTML5, Tailwind CSS, Google Script Template (Scriptlets)
* **Backend**: Google Apps Script (GAS)
* **Database**: Google Sheets (作為內容管理)
* **Storage**: Google Drive (用於存放個人頭像)

---

## 🚀 安裝與設定說明

### 第一步：準備 Google 試算表 (你的資料庫)
1. 建立一個新的 Google 試算表。
2. 在第一個工作表中，設定好資料格式。根據代碼邏輯，資料應如下配置：
    * **第二列 (row 2)**：放基本資料，依序為：姓名、暱稱、頭銜、教育程度。
    * **H 欄 (第8列)**：聯絡用的 App 名稱（如：Line, IG）。
    * **I 欄 (第9列)**：對應的 ID。
    * **J 欄 (第10列)**：現任動態。
    * **K 欄 (第11列)**：曾任經歷。
    * **L 欄 (第12列)**：活動經歷。
    * **M 欄 (第13列)**：競賽表現。
3. 複製這份試算表的 **ID** (網址中 `/d/` 後面那一串)。

### 第二步：準備個人頭像
1. 把你的帥照/美照上傳到 Google 雲端硬碟。
2. 點擊右鍵「取得連結」，權限設定為「知道連結的人皆可檢視」。
3. 複製檔案的 **ID** (網址中 `id=` 或 `/d/` 後面那一串)。

### 第三步：部署 Google Apps Script (GAS)
1. 在試算表中點選 `擴充功能` -> `Apps Script`。
2. 建立兩個檔案：
    * `Code.gs`：貼入你的 GAS 程式碼。
    * `Index.html`：貼入你的前端程式碼。
3. 在 `Code.gs` 中修改以下內容：
    * `ssId`：貼入你在第一步複製的**試算表 ID**。
    * `fileId`：貼入你在第二步複製的**圖片檔案 ID**。
4. 點選右上方 `部署` -> `新增部署`。
    * 點選齒輪，選擇 `網頁應用程式 (Web App)`。
    * **執行身分**：我 (Your account)。
    * **誰有權限存取**：所有人 (Anyone)。
5. 複製產生的 **網頁應用程式網址 (URL)**。

### 第四步：後續維護
1. 你以後只要改試算表，你的名片就會自動更新了！
2. 如果圖片跑不出來，請檢查 `fileId` 是否正確，或是雲端硬碟的權限有沒有開成公開。

<br>
要是連試算表 ID 都不會貼，我真的要哭暈在廁所了:DDDDDD
<br>

---

## 📂 檔案結構

* `Index.html`: 前端視覺核心。包含 Tailwind CSS 樣式、毛玻璃特效，以及負責非同步叫用圖片的腳本。
* `Code.gs`: 後端核心邏輯。
    * `doGet()`: 負責把 HTML 渲染出來。
    * `getMyDetailedProfile()`: 從試算表撈取文字資料，並做簡單的過濾處理。
    * `getProfilePhoto()`: 負責把 Drive 的圖片轉成 Base64 字串傳給前端。

---

## ⚠️ 注意事項

1. **圖片大小**：雖然是用非同步載入，但建議頭像圖片不要太大（幾百 KB 就好），不然轉 Base64 會轉到懷疑人生。
2. **GAS 配額**：Google 對 `DriveApp` 的呼叫次數有限制，但基本上你一個人名片每天幾千人看是不會爆的。
3. **安全性**：這是一個公開名片，所以 `ssId` 放在腳本裡是正常的，但請不要在試算表裡放你的銀行密碼。

---

## 📄 開源授權

本專案採用 **MIT License** 授權開源。<br>
歡迎自由 Fork 使用。如果你覺得這系統救了你的簡歷，記得跟我打個招呼，我也想看看大家都長得多帥多漂亮！

---

## 📫 聯繫方式
Instagram：[justintsai0515_2](https://www.instagram.com/justintsai0515_2)<br>
E-Mail：mailjt960515@gmail.com<br>
有 Bug 或是建議歡迎私訊，但如果是問「試算表在哪裡」這種問題，請先去問 Gemini 喔喔喔！！

---

**💡 貢獻與反饋**<br>
如果你有更炫炮的 CSS 寫法，歡迎提交 Pull Request！讓我們一起把名片變得很酷。


.md模板參考自[ChenArnold](https://github.com/ChenArnold)<br>
