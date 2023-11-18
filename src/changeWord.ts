import * as vscode from "vscode";

const changeWord = (callback: (param: any) => any) => {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const document = editor.document;
    const selection = editor.selection;

    // Convert the word
    const word = document.getText(selection);
    const transformedWord = callback(word);

    // Change the text
    editor.edit((editBuilder) => {
      editBuilder.replace(selection, transformedWord);
    });
  }
};

export default changeWord;
