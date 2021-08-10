import { PathLike } from 'fs';
import { readLinesAsync } from '../../imports';
import { extractColorInformation } from '../extract-color-information-complex';
import { listElementPerColor } from '../list-element-per-color';
import { normalizeQuotedStrings } from '../normalize-strings';
import { reversedSplitLinesAsync } from '../split-lines';

export async function getListElementPerColorObject(
  pathToJsonColours: PathLike
) {
  const step1 = readLinesAsync;
  const step2 = reversedSplitLinesAsync;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = listElementPerColor;
  return step5(step4(step3(step2(step1(pathToJsonColours)))));
}
