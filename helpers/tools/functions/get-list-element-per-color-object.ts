import { PathLike } from 'fs';
import { extractColorInformation } from './extract-color-information-complex';
import { readLines } from './imports/readers';
import { listElementPerColor } from './list-element-per-color';
import { normalizeQuotedStrings } from './normalize-strings';
import { reversedSplitLines } from './utils/split-lines';

export async function getListElementPerColorObject(
  pathToJsonColours: PathLike
) {
  const step1 = readLines;
  const step2 = reversedSplitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = listElementPerColor;
  return step5(step4(step3(step2(step1(pathToJsonColours)))));
}
