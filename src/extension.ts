import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-camel-kebab" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vscode-camel-kebab.camelToKebab", () => {
      vscode.window.showInformationMessage(
        "Hello World from vscode-camel-kebab!"
      );
      console.log("called");
    })
  );
}

export function deactivate() {}
