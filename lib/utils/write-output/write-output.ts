import { readFile } from 'fs';
import { promisify } from 'util';
import ColorElement from '../../classes/color-element';
import { colorslist as colorslist_ } from '../../color/list';
import { getTerminalColors } from '../../color/lists/terminal';
import { BASE_COLORS_OUTPUT_PATH } from '../../constants';
import { writeFileToPathAsync } from '../../exports';
import { unCommentJSONC } from '../jsonc-to-json-parser/jsonc-to-json-parser';
import { prettifyJsonString } from '../prettify-json-string';
export const readFileAsync = promisify(readFile);

const model =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/lib/templates/imports/JSON/Pop-N-Lock.original.json';
export const myWriter = writeFileToPathAsync(BASE_COLORS_OUTPUT_PATH);

async function getInputData(
  path: string = model,
  options: ReadOptions = { encoding: 'utf8' }
): Promise<string> {
  return (await readFileAsync(path, options)).toString();
}

function colorElementsAgregator(
  colorslist: ColorElement[] = colorslist_
) {
  let colors = {};
  colorslist.forEach(colorElement => {
    colors = {
      ...colors,
      ...new ColorElement(colorElement).toJson(),
    };
  });
  return colors;
}

async function buildOutput() {
  const inputData = await getInputData();
  const parsedJsonBase = unCommentJSONC(inputData);
  const source = {
    ...parsedJsonBase,
    $schema: 'vscode://schemas/color-theme',
    name: 'Pop N Lock Theme by Luxcium',
    type: 'dark',
    colors: {
      ...colorElementsAgregator(),
      ...getTerminalColors(),
    },
  };
  return prettifyJsonString(source);
}

export async function writeOutputToFile() {
  return myWriter(await buildOutput());
}

if (require?.main?.filename === __filename) main();

function main() {
  writeOutputToFile();
}

type ReadOptions =
  | {
      encoding?: BufferEncoding | null | undefined;
      flag?: string | undefined;
    }
  | string
  | null
  | undefined;
