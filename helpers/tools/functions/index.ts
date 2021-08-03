import { PathLike } from 'fs';
import { ColorElementList } from '../classes';
import { colorHexMatch } from './color-hex-match';
import { colorHexRegExps } from './color-hex-reg-exps';
import { colorHexMatch_ } from './colorHexMatch_temp';
import { createFolder } from './create-folder';
import {
  colorHexMatchComplex,
  extractColorInformation,
} from './extract-color-information-complex';
import { getColorElementsList } from './get-color-elements-list';
import { listElementPerColor } from './list-element-per-color';
import { normalizeQuotedStrings } from './normalize-strings';
import { reversedSplitLines } from './split-lines';
import { standardize } from './standardize';
import { standardizeTuple } from './standardize-tuple';
import { tsColorConstWriter } from './ts-color-cons-writer';

export const funs = {
  colorHexMatch_,
  colorHexMatch,
  colorHexMatchComplex,
  colorHexRegExps,
  createFolder,
  extractColorInformation,
  standardize,
  standardizeTuple,
  tsColorConstWriter,
  listElementPerColor,
  normalizeQuotedStrings,
  reversedSplitLines,
};

export { createColorElementsList } from './create-color-element-list';
export {
  colorHexMatch_,
  colorHexMatch,
  colorHexMatchComplex,
  colorHexRegExps,
  createFolder,
  extractColorInformation,
  standardize,
  standardizeTuple,
  tsColorConstWriter,
  listElementPerColor,
  normalizeQuotedStrings,
  reversedSplitLines,
};

export const pathToJsonColours_: PathLike =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

async function TESTING() {
  const colorElements = await getColorElementsList(pathToJsonColours_);
  const colorElementList = new ColorElementList(colorElements);
  console.log(colorElementList.tail());
  return void colorElementList;
}
async function main() {
  TESTING();
}
if (require?.main?.filename === __filename) main();
