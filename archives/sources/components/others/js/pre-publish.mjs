import { readFile, writeFile } from 'fs';
import { promisify } from 'util';
import * as vscode from 'vscode';
import { getTerminal } from './teminal.mjs';
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const themeColor = new vscode.ThemeColor();
themeColor;
// vscode..
void themeColor;
async function prePublish() {
  const filePath = './src/components/templates/Pop-N-Lock.original.json';
  const writePath =
    './src/components/templates/Pop-N-Lock.original-striped.json';

  // try {
  const rawdata = (await readFileAsync(filePath))
    .toString()
    .replaceAll(/\/\*[^]*?\*\//g, '')
    .replaceAll(/[^:]\/\/.*/g, '')
    .replaceAll(/^\s*[\n\r]*$/gm, '')
    .replaceAll(/,\s*[\n\r]*[\]]/g, ']')
    .replaceAll(/,(\s*[\n\r]*)?[}]/g, '}')
    .replaceAll(/[\n]+/g, '\n');
  const theme = JSON.parse(rawdata);
  const { $schema, name, type, colors, tokenColors, ...partialTheme } = theme;
  const newTheme = {
    $schema,
    name,
    type,
    colors: { ...colors, ...getTerminal() },
    tokenColors,
    ...partialTheme,
  };

  await writeFileAsync(writePath, `${JSON.stringify(newTheme, null, 2)}\n`);
  // } catch (error) {
  // console.error('ERROR:', error);
  // }
}
export { prePublish };

// prePublish();

// process.on('uncaughtException', error =>
//   error.code === 'ERR_INVALID_CALLBACK'
//     ? console.warn({ errorCode: error.code }) || process.exit(2)
//     : console.error({ uncaughtException: error }) || process.exit(1)
// );

// process.on('unhandledRejection', error =>
//   error.name === 'SyntaxError'
//     ? console.warn({ error }) || process.exit(2)
//     : console.error({ unhandledRejection: error, errorName: error.name }) ||
//       process.exit(1)
// );
// console.log(prePublish());
prePublish();

/*


  const name = 'questrade-ts';
  const displayName = 'Questrade API by Luxcium (with typescript support).';
  const description =
    'Unofficial Questrade API wrapper for NodeJS with full TypeScript support.';
  const author = 'Luxcium <luxcium@neb401.com>';
  const license = 'MIT';
  const homepage = 'https://github.com/Luxcium/questrade-ts';
  const main = './src/index.js';
  const types = './typings/index.d.ts';
  const type = 'commonjs';

  const { scripts, devDependencies, version, ...partialPackage } = package;

  void partialPackage;
  const nowDate = new Date();

  const newPackage = {
    ...partialPackage,
    name,
    displayName,
    description,
    version: `${version}+${
      nowDate.getMonth() + 1 > 9
        ? nowDate.getMonth() + 1
        : '0' + (nowDate.getMonth() + 1)
    }${nowDate.getDate()}-${shortEpoch()}b`,
    author,
    license,
    homepage,
    main,
    types,
    type,
  };
 */

/*
  "main": "./src/index.ts",
  "type": "module",
 */

// const shortEpoch = () =>
//   `${Math.floor(Date.now() / 1000 - 3600 * 24 * 365 * 51) - 8225839}`.padStart(
//     5,
//     0
//   );
