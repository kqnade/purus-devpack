# Purus DevPack

[Purus](https://github.com/otoneko1102/purus) 言語の VS Code 開発環境パック。

公式シンタックスハイライト拡張と LSP（補完・診断・フォーマット）をまとめて導入できます。

## 含まれる機能

- **公式シンタックスハイライト** ([otoneko1102.purus](https://marketplace.visualstudio.com/items?itemName=otoneko1102.purus)) — Extension Pack として自動インストール
- **LSP サポート** ([parus-lsp](https://github.com/kqnade/parus-lsp)) — 診断・補完・フォーマット

## 前提条件

LSP 機能を使うには `parus-lsp` が必要です。

```bash
npm install -g parus-lsp
```

## 設定

| 設定項目 | 型 | デフォルト | 説明 |
|---|---|---|---|
| `purus.lsp.serverPath` | string | `"purus-lsp"` | `parus-lsp` バイナリのパス（デフォルトは PATH から解決） |
| `purus.lsp.enabled` | boolean | `true` | LSP サーバーを有効にするかどうか |

### 設定例（.vscode/settings.json）

```json
{
  "purus.lsp.serverPath": "/usr/local/bin/purus-lsp",
  "purus.lsp.enabled": true
}
```

## 関連リンク

- [Purus 言語本体](https://github.com/otoneko1102/purus)
- [parus-lsp（LSP サーバー）](https://github.com/kqnade/parus-lsp)
- [purus-mcp（MCP サーバー）](https://github.com/kqnade/purus-mcp)
