'use strict';

import { ExtensionContext, workspace } from 'vscode';
import { registered } from './commands';
import { detectConfigChanges } from './helpers/changeDetection';
import { checkThemeStatus } from './helpers/versioning';
import { initTranslations } from './i18n';
import { showStartMessages } from './messages/start';

// vscode.workspace.onDidChangeConfiguration

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export const activate = async (context: ExtensionContext) => {
  try {
    await initTranslations();
    const status = await checkThemeStatus(context.globalState);
    showStartMessages(status);

    // Subscribe to the extension commands
    context.subscriptions.push(...registered);

    // Initially trigger the config change detection
    detectConfigChanges();

    // Observe changes in the config (vscode.workspace.onDidChangeConfiguration)
    const { onDidChangeConfiguration } = workspace;
    onDidChangeConfiguration(detectConfigChanges);
  } catch (error) {
    console.error(error);
  }
};

/** This method is called when the extension is deactivated */
export const deactivate = () => {
  //
};
