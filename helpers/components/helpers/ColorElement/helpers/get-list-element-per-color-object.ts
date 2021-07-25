import { PathOrFileDescriptor } from 'fs';
import { extractColorInformation } from './extract-color-information';
import { listElementPerColor } from './list-element-per-color';
import { normalizeQuotedStrings } from './normalize-strings';
import { readLines } from './read-lines';
import { reversedSplitLines } from './split-lines';

export async function getListElementPerColorObject(
  pathToJsonColours: PathOrFileDescriptor
) {
  const step1 = readLines;
  const step2 = reversedSplitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = listElementPerColor;
  return step5(step4(step3(step2(step1(pathToJsonColours)))));
}
