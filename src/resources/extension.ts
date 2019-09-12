'use strict';

import { ExtensionContext /* , workspace  */, window } from 'vscode';
import * as i18n from './i18n';
// import { registered } from './commands';
// import { detectConfigChanges } from './helpers/changeDetection';
// import { checkThemeStatus } from './helpers/versioning';
// import { initTranslations } from './i18n';
// import { showStartMessages } from './messages/start';

// vscode.workspace.onDidChangeConfiguration

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export const activate = async (context: ExtensionContext) => {
  try {
    window
      .showInformationMessage(
        // i18n.translate('themeInstalled'),
        'THE MESSAGE TO SHOW: Show an information message to users. Optionally provide an array of items which will be presented as clickable buttons.',
        // show 'Activate' button if icon theme is not active
        // versioning.checkVersionSupport('1.10.0') && helpers.isThemeNotVisible()
        /* ? */
        i18n.translate('activate'),
        /* : */ i18n.translate('howToActivate')

        // i18n.translate('neverShowAgain')
      )
      .then(console.log /* handleWelcomeMessageActions */);
    //   await initTranslations();
    //   const status = await checkThemeStatus(context.globalState);
    //   showStartMessages(status);
    //   // Subscribe to the extension commands
    //   context.subscriptions.push(...registered);
    //   // Initially trigger the config change detection
    //   detectConfigChanges();
    //   // Observe changes in the config (vscode.workspace.onDidChangeConfiguration)
    //   const { onDidChangeConfiguration } = workspace;
    //   onDidChangeConfiguration(detectConfigChanges);
  } catch (error) {
    console.error(error);
  }
  return context;
};

/** This method is called when the extension is deactivated */
export const deactivate = () => {
  //
};
