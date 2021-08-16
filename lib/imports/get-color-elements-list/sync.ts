import { readLines } from '..';
import ColorElement from '../../classes/color-element';
import { createColorElementsList } from '../../utils/create-color-element-list';
import { extractColorInformation } from '../../utils/extract-color-information';
import { filterOutNullColorElements } from '../../utils/filter-out-null-color-elements';
import { normalizeQuotedStrings } from '../../utils/normalize-strings-2ples';
import { splitLines } from '../../utils/split-lines';
import { standardizeColorInTuple } from '../../utils/standardize-color-hex/standardize-color-tuple';

export function getColorJsonListSync(
  pathToJsonColours: string,
  template: string | [string] | [string, string] = '#'
): ColorElement[] {
  const step1 = readLines(pathToJsonColours);
  const step2 = splitLines(step1);
  const step3 = extractColorInformation(step2, template);
  const step4 = normalizeQuotedStrings(step3);
  const step5 = standardizeColorInTuple(step4);
  const step6 = createColorElementsList(step5);
  const step7 = filterOutNullColorElements(step6)(true, true);
  return step7;
}
