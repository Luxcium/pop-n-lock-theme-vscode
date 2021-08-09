import type { PathLike } from 'fs';
import { BASE_COLORS_INPUT_PATH } from '../../../../constants';
import { createColorElementsList } from '../../create-color-element-list';
import { extractColorInformation } from '../../extract-color-information';
import { normalizeQuotedStrings } from '../../normalize-strings';
import { filterOutNullColorElements } from '../../utils/filter-out-null-color-elements/filter-out-null-color-elements';
import { splitLinesAsync } from '../../utils/split-lines';
import { readLinesSync } from '../readers';

export async function getColorElementsList(
  pathToJsonColours: PathLike,
  includeNullElements: boolean = false,
  template: string | [string] | [string, string] = '#'
) {
  const step1 = readLinesSync(pathToJsonColours);
  const step2 = splitLinesAsync(step1);
  const step3 = extractColorInformation(step2, template);
  const step4 = normalizeQuotedStrings(step3);
  const step5 = createColorElementsList(step4);
  const step6 = filterOutNullColorElements(step5)(includeNullElements);
  return step6;
}

async function main() {
  console.log(await getColorElementsList(BASE_COLORS_INPUT_PATH));
}

if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}

/*
import type { PathLike } from 'fs';
import { BASE_COLORS_INPUT_PATH } from '../../constants';
import ColorElement from '../classes/color-element';
import { ColorElementTuple } from '../types/ColorElementTuple';
import { createColorElementsList } from './create-color-element-list';
import { extractColorInformation } from './extract-color-information';
import { readLines } from './imports/readers';
import { normalizeQuotedStrings } from './normalize-strings';
import { splitLines } from './split-lines';
import { filterOutNullColorElements } from './utils/filter-out-null-color-elements/filter-out-null-color-elements';
let debug = false;
const debugLog =
  (debuglog: boolean = false) =>
  async <T>(anything: T, log: boolean = false): Promise<T> => {
    if (debuglog && log) console.log(await Promise.resolve(anything));
    return anything;
  };
if (require?.main?.filename === __filename) debug = true;
export async function getColorElementsList(
  pathToJsonColours: PathLike,
  includeNullElements: boolean = false,
  template: string | [string] | [string, string] = '#'
) {
  const log = debugLog(debug);
  const step1 = <U extends PathLike>(p: U) => log(readLines(p), true);
  const step2 = <U extends Promise<string[]>>(p: U) => log(splitLines(p));
  const step3 = <U extends Promise<ColorElementTuple[]>>(
    p: U,
    t: string | [string] | [string, string]
  ) => log(extractColorInformation(p, t));
  const step4 = <U extends Promise<ColorElementTuple[]>>(p: U) =>
    log(normalizeQuotedStrings(p));
  const step5 = <U extends Promise<ColorElementTuple[]>>(p: U) =>
    log(createColorElementsList(p));
  const step6 = <U extends Promise<ColorElement[]>>(p: U) =>
    log(filterOutNullColorElements(p));
  return step6(step5(step4(step3(step2(step1(pathToJsonColours)), template))))(
    includeNullElements
  );
}
 */
