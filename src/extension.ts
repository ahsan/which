import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -1);
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateWhichProject));
	
	context.subscriptions.push(statusBarItem);
	updateWhichProject();
}

/**
 * Updates the text of statusBarItem with current workspace.
 */
function updateWhichProject() {
	statusBarItem.text = getWorkspaceName();
	statusBarItem.show();
}

/**
 * Returns the workspace name or an empty string.
 */
function getWorkspaceName(): string {
	const workspaceName = vscode.workspace.name;
	return (workspaceName ? workspaceName : '').toUpperCase();
}