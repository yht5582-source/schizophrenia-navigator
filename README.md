# 思覺失調症臨床導航

繁體中文成人臨床決策輔助工具，以 APA 2020 為主，搭配 NICE CG178 與 INTEGRATE 2025。

## 使用流程

1. **安全與初評**：辨識立即自傷／傷人風險、譫妄、發燒僵硬、僵直症與脫水。
2. **診斷與鑑別**：以 DSM-5-TR 時間框架，整合症狀、功能、情緒、物質與身體病因；只提供診斷線索。
3. **個別化治療**：依既往反應、足量足期試藥、依從性、代謝與 EPS 風險討論治療。包含 LAI、clozapine、特殊族群與劑量參考。
4. **追蹤與評估**：產生一般代謝監測時程，記錄 CGI-S、體重、HbA1c、用藥、功能與警訊，顯示趨勢並支援列印與 JSON 備份。
5. **示範病例**：8 個虛構案例可載入表單。載入不覆寫追蹤紀錄。

## 臨床邊界

- 急症、未成年、診斷未完成時不產生一般個別化藥物建議。
- 透析、孕哺及明顯肝功能異常提示專科處方審核。
- 兩種適當試藥無效先確認假性抗性，再評估 clozapine。
- 藥物資訊摘要美國仿單；台灣適應症、品項與健保給付需另查 TFDA、健保署及院內規範。
- 不以自訂分數冒充 PANSS；CGI-S 單項不能單獨判定診斷、緩解或停藥。
- 此為教學及決策輔助，不替代完整臨床評估與處方審核。

## 隱私

沒有後端、帳號、追蹤分析或資料上傳。評估僅在記憶體；追蹤需明確勾選同意才存入本機 localStorage，沒有加密或跨裝置同步。不輸入姓名或病歷號，共用電腦用完請清除。JSON 為使用者主動匯出，請妥善保管。此工具不是正式病歷系統。

## 技術與部署

純 HTML/CSS/JavaScript，無外部套件。GitHub Pages 使用 `main` 分支根目錄；入口為 `index.html`，另載入 `style.css` 與 `app.js`。`.nojekyll` 停用 Jekyll 轉換。可直接以靜態伺服器執行：

```sh
python3 -m http.server 8765
```

主要規則、日期、輸入驗證及文字跳脫共 24 項檢查通過；此為軟體邏輯驗證，不代表臨床效度驗證。

## 來源

- [APA 2020](https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines/schizophrenia)
- [NICE CG178](https://www.nice.org.uk/guidance/cg178/chapter/recommendations)
- [INTEGRATE 2025 / RANZCP](https://www.ranzcp.org/clinical-guidelines-publications/clinical-guidelines-publications-library/integrate-international-guidelines-for-the-algorithmic-treatment-of-schizophrenia)
- [DSM-5-TR 診斷次級參考 / Merck](https://www.merckmanuals.com/professional/psychiatric-disorders/schizophrenia-and-related-disorders/schizophrenia)
- 藥物來源為 DailyMed 與 FDA，完整連結列於網頁「指引與資料來源」。

內容查核日期：2026-11-12；發布版 v1.1。

## v1.1 學習功能（2026-11-13）

- 新增 20 題原創單選題，基礎與進階各 10 題，每題附解析與來源。
- 支援逐題／整批批改、錯題篩選、未作答篩選及重設；更改選答後清除舊批改結果，不重複計分。作答僅在記憶體。
- 新增 8 大分支臨床心智圖，支援搜尋、全部展開／收合、子節點展開及連結診療頁。
- 新增 learning.js，沿用主程式來源清單與設計；不影響既有 8 病例及追蹤資料。
