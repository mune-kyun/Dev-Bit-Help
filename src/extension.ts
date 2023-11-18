import * as vscode from "vscode";

import convertService from "./convert";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "dev-bit-help" is now active!');

  // Camel to Kebab
  context.subscriptions.push(
    vscode.commands.registerCommand("dev-bit-help.camelToKebab", () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const selection = editor.selection;

        // Convert the word
        const word = document.getText(selection);
        const kebabWord = convertService.camelToKebab(word);

        // Change the text
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, kebabWord);
        });
      }
    })
  );

  // Kebab to Camel
  context.subscriptions.push(
    vscode.commands.registerCommand("dev-bit-help.kebabToCamel", () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const selection = editor.selection;

        // Convert the word
        const word = document.getText(selection);
        const kebabWord = convertService.kebabToCamel(word);

        // Change the text
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, kebabWord);
        });
      }
    })
  );
}

export function deactivate() {}
