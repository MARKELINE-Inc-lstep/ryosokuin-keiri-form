# ryosokuin-keiri-form

両足院・是是の経理書類アップロード＆仕分けページ（GitHub Pages・Googleログイン不要）。

## 保守を始める前に

- このリポジトリの[`AGENTS.md`](AGENTS.md)を読む
- システム全体の入口: [ryosokuin-keiri-system / START_HERE.md](https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system/blob/main/START_HERE.md)
- 修正・本番反映手順: [変更・デプロイ手順.md](https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system/blob/main/変更・デプロイ手順.md)

URLは各1つ。ページ上部のボタンで **両足院⇔是是を切替**（選択は端末に記憶・`?org=xexe`で是是を初期選択にできる）。

| 用途 | URL |
|---|---|
| アップロード | https://markeline-inc-lstep.github.io/ryosokuin-keiri-form/ |
| 仕分け | https://markeline-inc-lstep.github.io/ryosokuin-keiri-form/review.html |

- 送信先GAS: [ryosokuin-keiri-system](https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system)（各HTML内の `GAS_URL` / form action）
- 仕組み: `fetch(…, {credentials:'omit'})` とフォームPOSTで匿名アクセス（Googleの複数ログインバグを回避）
- ⚠️ 設置時に `PASTE_RYOSOKUIN_GAS_EXEC_URL` / `PASTE_XEXE_GAS_EXEC_URL` を実際の /exec URL に置換すること
