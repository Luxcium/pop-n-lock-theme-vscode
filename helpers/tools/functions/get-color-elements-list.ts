import type { PathLike } from 'fs';
import { createColorElementsList } from './create-color-element-list';
import { extractColorInformation } from './extract-color-information';
import { readLines } from './imports/readers';
import { normalizeQuotedStrings } from './normalize-strings';
import { splitLines } from './split-lines';
import { filterOutNullColorElements } from './utils/filter-out-null-color-elements/filter-out-null-color-elements';

export async function getColorElementsList(
  pathToJsonColours: PathLike,
  includeNullElements: boolean = false,
  template: string | [string] | [string, string] = '#'
) {
  const step1 = readLines;
  const step2 = splitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = createColorElementsList;
  const step6 = filterOutNullColorElements;
  return step6(step5(step4(step3(step2(step1(pathToJsonColours)), template))))(
    includeNullElements
  );
}
