import EventEmitter from 'events';
import {
  Mode,
  ObjectEncodingOptions,
  PathOrFileDescriptor,
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
} from 'fs';
import prettier from 'prettier';
import { promisify } from 'util';
import { ColorElement } from '../classes';
import { colorslist } from '../color/list';
import { getTerminalColors } from '../color/lists/terminal';
export const readFileAsync = promisify(readFile);

export const writeFileAsync = promisify(writeFile);

export function writeFileToPathAsync(path: PathOrFileDescriptor) {
  return (
    data: string | NodeJS.ArrayBufferView,
    options?:
      | (ObjectEncodingOptions &
          EventEmitter.Abortable & {
            mode?: Mode;
            flag?: string;
          })
      | string
  ): Promise<void> =>
    writeFileAsync(
      path,
      data,
      typeof options === 'object' ? { ...options } : options
    );
}
const modele =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/themes/Pop-N-Lock.original.json';
export const myWriter = writeFileToPathAsync(
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/themes/Pop-N-Lock.original.json'
);

export async function writeOutputToFile() {
  const inputData = await readFileAsync(modele, { encoding: 'utf8' });
  const inputString = inputData
    .toString()
    .replaceAll(/\/\*[^]*?\*\//g, '')
    .replaceAll(/[^:]\/\/.*/g, '')
    .replaceAll(/^\s*[\n\r]*$/gm, '')
    .replaceAll(/,\s*[\n\r]*[\]]/g, ']')
    .replaceAll(/,(\s*[\n\r]*)?[}]/g, '}')
    .replaceAll(/[\n]+/g, '\n');
  const jsonParsed = JSON.parse(inputString);
  let colors = {};
  colorslist.forEach(colorElement => {
    colors = { ...colors, ...new ColorElement(colorElement).toObject() };
  });
  colors = { ...colors, ...getTerminalColors() };

  const source = {
    ...jsonParsed,
    $schema: 'vscode://schemas/color-theme',
    name: 'Pop N Lock Theme by Luxcium',
    type: 'dark',
    colors,
  };
  const output = prettier.format(JSON.stringify(source, null, 2), {
    parser: 'json-stringify',
  });

  return myWriter(output);
}
// if (require?.main?.filename === __filename) console.log(writeOutputToFile());

export { readFileSync, writeFileSync };
