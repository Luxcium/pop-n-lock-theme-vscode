import ColorElement from '../../classes/color-element';
import { BASE_COLORS_INPUT_PATH } from '../../constants';
import { createColorElementsList } from '../../utils/create-color-element-list';
import { extractColorInformation } from '../../utils/extract-color-information-complex';
import { filterOutNullColorElements } from '../../utils/filter-out-null-color-elements';
import { normalizeQuotedStrings } from '../../utils/normalize-strings';
import { splitLines } from '../../utils/split-lines';
import { readLines } from '../readers';

function getColorJsonListSync(
  pathToJsonColours: string,
  template: string | [string] | [string, string] = '#'
): ColorElement[] {
  const step1 = readLines(pathToJsonColours);

  const step2 = splitLines(step1);
  const step3 = extractColorInformation(step2, template);
  const step4 = normalizeQuotedStrings(step3);
  const step5 = createColorElementsList(step4);
  const step6 = filterOutNullColorElements(step5)(true, true);
  // console.log('step6 :>> ', step6);
  return step6;
}

async function getColorElementsListAsync(
  pathToJsonColours: Promise<string>,
  template: string | [string] | [string, string] = '#'
): Promise<ColorElement[]> {
  return getColorJsonListSync(await pathToJsonColours, template);
}

export function getColorElementsList(
  pathToJsonColours: string,
  template?: string | [string] | [string, string]
): ColorElement[];
export function getColorElementsList(
  pathToJsonColours: Promise<string>,
  template?: string | [string] | [string, string]
): Promise<ColorElement[]>;
export function getColorElementsList(
  pathToJsonColours: string | Promise<string>,
  template: string | [string] | [string, string] = '#'
): ColorElement[] | Promise<ColorElement[]> {
  if (pathToJsonColours instanceof Promise) {
    return getColorElementsListAsync(
      pathToJsonColours,

      template
    );
  }
  return getColorJsonListSync(
    pathToJsonColours,

    template
  );
}

/* istanbul ignore next */
async function main() {
  console.log(getColorElementsList(BASE_COLORS_INPUT_PATH));
}

/* istanbul ignore if */
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
  keepNullElements: boolean = false,
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
    keepNullElements
  );
}
 */

// 514-923-1012
