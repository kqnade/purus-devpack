import * as path from "path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration("purus.lsp");

  if (!config.get<boolean>("enabled", true)) return;

  const externalServerPath = config.get<string>("serverPath", "");

  let serverOptions: ServerOptions;

  if (externalServerPath) {
    // ユーザー指定の外部バイナリを使用
    serverOptions = {
      command: externalServerPath,
      args: ["--stdio"],
      transport: TransportKind.stdio,
    };
  } else {
    // バンドル済みサーバーを使用
    const serverModule = context.asAbsolutePath(path.join("dist", "server.js"));
    serverOptions = {
      run: { module: serverModule, transport: TransportKind.ipc },
      debug: { module: serverModule, transport: TransportKind.ipc },
    };
  }

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "purus" }],
  };

  client = new LanguageClient(
    "purus-lsp",
    "Purus Language Server",
    serverOptions,
    clientOptions
  );

  try {
    client.start();
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    vscode.window.showErrorMessage(`Purus DevPack: LSP サーバーの起動に失敗しました。\n${message}`);
  }
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) return undefined;
  return client.stop();
}
