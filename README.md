# ryosokuin-keiri-form

両足院・是是の経理書類アップロード＆仕分けページ（GitHub Pages・Googleログイン不要）。

URLは各1つ。ページ上部のボタンで **両足院⇔是是を切替**（選択は端末に記憶・`?org=xexe`で是是を初期選択にできる）。

| 用途 | URL |
|---|---|
| アップロード | https://markeline-inc-lstep.github.io/ryosokuin-keiri-form/ |
| 仕分け | https://markeline-inc-lstep.github.io/ryosokuin-keiri-form/review.html |

- 送信先GAS: [ryosokuin-keiri-system](https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system)（各HTML内の `GAS_URL` / form action）
- 仕組み: `fetch(…, {credentials:'omit'})` とフォームPOSTで匿名アクセス（Googleの複数ログインバグを回避）
- ⚠️ 設置時に `PASTE_RYOSOKUIN_GAS_EXEC_URL` / `PASTE_XEXE_GAS_EXEC_URL` を実際の /exec URL に置換すること
