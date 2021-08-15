import { readLines } from '..';
import ColorElement from '../../classes/color-element';
import { createColorElementsList } from '../../utils/create-color-element-list';
import { extractColorInformation } from '../../utils/extract-color-information';
import { filterOutNullColorElements } from '../../utils/filter-out-null-color-elements';
import { normalizeQuotedStrings } from '../../utils/normalize-strings-2ples';
import { splitLines } from '../../utils/split-lines';

export function getColorJsonListSync(
  pathToJsonColours: string,
  template: string | [string] | [string, string] = '#'
): ColorElement[] {
  const step1 = readLines(pathToJsonColours);

  const step2 = splitLines(step1);
  const step3 = extractColorInformation(step2, template);
  const step4 = normalizeQuotedStrings(step3);
  const step5 = createColorElementsList(step4);
  const step6 = filterOutNullColorElements(step5)(true, true);
  return step6;
}
