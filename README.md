<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# commitPot-lp

LP 用の Vite + React アプリです。ローカル起動、Vercel デプロイ、PostHog 分析に対応しています。

## ローカル起動

前提:
- Node.js

手順:
1. 依存を入れる
   `npm install`
2. `.env.example` を参考に `.env.local` を作る
3. 必要な環境変数を設定する
4. 開発サーバーを起動する
   `npm run dev`

## 必要な環境変数

最低限この3つを確認します。

```env
GEMINI_API_KEY=your_gemini_api_key
VITE_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

補足:
- `VITE_PUBLIC_POSTHOG_KEY` はブラウザ公開前提のキーです
- Vercel でも同じ値を `Environment Variables` に登録します

## PostHog で取っているイベント

LP では、まず運用しやすい最小イベントに絞っています。

- `lp_start_app_clicked`
  - Web版アプリへの導線がどこから押されたか
  - `source`: `header`, `hero`, `quick_calculator`, `store_section`, `mobile_floating_cta`, `footer`
- `lp_how_to_opened`
  - 使い方モーダルがどこから開かれたか
- `lp_language_changed`
  - 言語切替の前後
- `lp_calc_step_advanced`
  - 簡易PFC計算の1段階目から2段階目へ進んだか
- `lp_calc_completed`
  - 計算完了まで到達したか
  - `goal`: `bulk`, `recomp`, `cut`

`pageview` は PostHog 側の自動計測も有効です。

## PostHog の見方

最初に見る画面:
1. `Events`
2. `Activity`
3. `Insights`

見方:
- `Events`
  - イベントが実際に飛んでいるか確認
- `Activity`
  - 誰がどの順番で操作したか確認
- `Insights`
  - クリック数やコンバージョン率を集計

最初に作ると良い分析:
1. `lp_start_app_clicked` の件数
2. `source` 別の比較
3. `lp_calc_step_advanced` → `lp_calc_completed` のファネル
4. `lp_language_changed` の件数

## まず見るべき数字

LP 改善ではこの順で見れば十分です。

1. `lp_start_app_clicked`
   - LP の目的達成率
2. `source` ごとのクリック数
   - どのボタンが強いか
3. `lp_calc_completed`
   - 電卓が使われているか
4. `lp_language_changed`
   - 多言語流入がどれくらいあるか

## Vercel 反映

Vercel では以下を設定します。

- `Root Directory`: `commitPot-lp`
- `Framework Preset`: `Vite`
- `Build Command`: `npm run build`
- `Output Directory`: `dist`

環境変数:
- `GEMINI_API_KEY`
- `VITE_PUBLIC_POSTHOG_KEY`
- `VITE_PUBLIC_POSTHOG_HOST`
