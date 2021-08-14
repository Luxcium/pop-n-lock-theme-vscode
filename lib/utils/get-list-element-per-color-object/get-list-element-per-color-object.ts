import { readLines } from '../../imports/readers';
import { extractColorInformation } from '../extract-color-information-complex';
import { listElementPerColor } from '../list-element-per-color';
import { normalizeQuotedStrings } from '../normalize-strings-2ples';
import { reversedSplitLines } from '../split-lines';

export async function getListElementPerColorObject(
  pathToJsonColours: string
) {
  const step1 = readLines(pathToJsonColours);
  const step2 = reversedSplitLines(step1);
  const step3 = extractColorInformation(step2);
  const step4 = normalizeQuotedStrings(step3);
  const step5 = listElementPerColor(step4);
  return step5;
}
