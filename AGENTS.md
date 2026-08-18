# AGENTS.md - 公開画面のAI作業ルール

このリポジトリは、両足院・是是の本番アップロード／仕分け画面です。

作業前に、バックエンドリポジトリの次の資料を読むこと。

- https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system/blob/main/START_HERE.md
- https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system/blob/main/AGENTS.md
- https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system/blob/main/変更・デプロイ手順.md
- https://github.com/MARKELINE-Inc-lstep/ryosokuin-keiri-system/blob/main/仕様・保留事項.md

ローカルで両リポジトリが同じ`github-work`配下にある場合は、`../ryosokuin-keiri-system/`の資料を読む。

## 絶対ルール

1. `index.html`と`review.html`内の既存GAS exec URLを、明確な移行指示なしに変更しない。
2. 両足院と是是の送信先を取り違えない。
3. APIキー、パスワード、ChatWorkトークンを追加しない。
4. 画面から送る項目を変更する場合は、GASの`doPost()`、`doGet()`、`sortUnsorted()`との契約を確認する。
5. 両組織の切替、必須入力、モバイル表示を確認する。
6. push後はGitHub Pagesへ反映された公開画面を確認する。
7. 画面だけで完結しない変更は、バックエンドリポジトリも同じ変更として更新する。

## 公開URL

- アップロード: https://markeline-inc-lstep.github.io/ryosokuin-keiri-form/
- 仕分け: https://markeline-inc-lstep.github.io/ryosokuin-keiri-form/review.html
- 是是を初期選択: `?org=xexe`

## テスト

- 初期表示と組織切替
- 書類種類による発行／受領欄の表示切替
- 必須項目の検証
- 複数ファイル選択
- 両組織のGAS URL
- 仕分け一覧、状態表示、手動仕分け入力
- スマートフォン幅での表示

本番ファイルを送るテストは、利用者の明示指示がある場合だけ行う。

