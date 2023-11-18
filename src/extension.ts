import * as vscode from "vscode";

import changeWord from "./changeWord";
import convertService from "./services/convert";
import addWordService from "./services/addWord";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "dev-bit-help" is now active!');

  // Camel to Kebab
  context.subscriptions.push(
    vscode.commands.registerCommand("dev-bit-help.camelToKebab", () => {
      changeWord(convertService.camelToKebab);
    })
  );

  // Kebab to Camel
  context.subscriptions.push(
    vscode.commands.registerCommand("dev-bit-help.kebabToCamel", () => {
      changeWord(convertService.kebabToCamel);
    })
  );

  // Prepend public
  context.subscriptions.push(
    vscode.commands.registerCommand("dev-bit-help.prependPublic", () => {
      changeWord(addWordService.prependPublic);
    })
  );

  // Prepend private
  context.subscriptions.push(
    vscode.commands.registerCommand("dev-bit-help.prependPrivate", () => {
      changeWord(addWordService.prependPrivate);
    })
  );
}

export function deactivate() {}
