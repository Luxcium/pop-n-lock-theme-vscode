'use strict';

import * as vscode from 'vscode';
import * as commands from './resources/commands';
import { detectConfigChanges } from './resources/helpers/changeDetection';
import { checkThemeStatus } from './resources/helpers/versioning';
import * as i18n from './resources/i18n';
import { showStartMessages } from './resources/messages/start';

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export const activate = async (context: vscode.ExtensionContext) => {
  try {
    await i18n.initTranslations();
    const status = await checkThemeStatus(context.globalState);
    showStartMessages(status);
    // Subscribe to the extension commands
    context.subscriptions.push(...commands.registered);
    // Initially trigger the config change detection
    detectConfigChanges();
    // Observe changes in the config
    // vscode.workspace.onDidChangeConfiguration(detectConfigChanges);
  } catch (error) {
    console.error(error);
  }
  return context;
};

/** This method is called when the extension is deactivated */
export const deactivate = () => {
  return void 0;
};

/** Get configuration of vs code. */
export const getConfig = (section?: string) => {
  return vscode.workspace.getConfiguration(
    section
  ) as AdvancedWorkspaceConfiguration;
};
/** Get list of configuration entries of package.json */
export const getConfigProperties = (): { [config: string]: any } => {
  return vscode.extensions.getExtension('PKief.material-icon-theme').packageJSON
    .contributes.configuration.properties;
};
export const isThemeActivated = (global: boolean = false): boolean => {
  return global
    ? getConfig().inspect('workbench.iconTheme').globalValue ===
        'material-icon-theme'
    : getConfig().inspect('workbench.iconTheme').workspaceValue ===
        'material-icon-theme';
};
export interface AdvancedWorkspaceConfiguration {
  get<T>(section: string, defaultValue?: T): T;
  has(section: string): boolean;
  [key: string]: any;
  inspect<T>(
    section: string
  ):
    | { defaultValue: T; globalValue: T; key: string; workspaceValue: T }
    | undefined;
  update(section: string, value: any, global?: boolean): Thenable<void>;
}
