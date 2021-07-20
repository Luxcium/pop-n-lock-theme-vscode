import { PathOrFileDescriptor } from 'fs';
import {
  extractColorInformation,
  listElementPerColor,
  normalizeStrings,
  readLines,
  splitLines,
} from '../get-list-element-per-color-object.ts';

export const pathToJsonColours_: PathOrFileDescriptor =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

async function getListElementPerColorObject(
  pathToJsonColours: PathOrFileDescriptor
) {
  const step1 = readLines;
  const step2 = splitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeStrings;
  const step5 = listElementPerColor;
  return step5(step4(step3(step2(step1(pathToJsonColours)))));
}

export {
  extractColorInformation,
  listElementPerColor,
  normalizeStrings,
  readLines,
  splitLines,
  getListElementPerColorObject,
};
