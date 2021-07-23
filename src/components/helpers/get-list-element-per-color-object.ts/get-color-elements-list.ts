import { PathOrFileDescriptor } from 'fs';
import { createColorElementsList } from './create-color-element-list';
import { extractColorInformation } from './extract-color-information';
import { filterOutNullColorElements } from './filter-out-null-color-elements';
import { normalizeQuotedStrings } from './normalize-strings';
import { readLines } from './read-lines';
import { reversedSplitLines } from './split-lines';

export async function getColorElementsList(
  pathToJsonColours: PathOrFileDescriptor,
  includeNullElements: boolean = false
) {
  const step1 = readLines;
  const step2 = reversedSplitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = createColorElementsList;
  const step6 = filterOutNullColorElements;
  return step6(step5(step4(step3(step2(step1(pathToJsonColours))))))(
    includeNullElements
  );
}
