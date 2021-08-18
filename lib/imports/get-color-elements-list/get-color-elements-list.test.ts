import { BASE_COLORS_INPUT_PATH } from '../../constants';
import { splitLines } from '../../utils/split-lines';
import { readColorsLines } from '../readers';

describe('Get Base Colors from JSON', () => {
  let pathToJsonColours: string = BASE_COLORS_INPUT_PATH;
  // let template: string | [string] | [string, string] = '#';
  // let includeNullElements: boolean = false;
  let step1: string[];
  let step2: [string, string][];
  // let step3: Promise<ColorElementTuple[]>;
  // let step4: Promise<ColorElementTuple[]>;
  // let step5: Promise<ColorElement[]>;
  // let step6: Promise<ColorElement[]>;
  // function* somesuncetion() {
  //   yield 1;
  // }
  // somesuncetion();
  it('Step 1 readLines return a string[]', async () => {
    expect(true).toBe(true);
    step1 = readColorsLines(pathToJsonColours);
    expect(
      Array.isArray(step1) && step1.every(item => typeof item === 'string')
    ).toBe(true);
  });

  it('Step 2 splitLines', async () => {
    expect(true).toBe(true);
    // process.nextTick(() => splitLines(step1));
    step2 = splitLines(step1);
    // const awaited = await step2;
    if (typeof step2 === 'undefined') throw new Error('step2 is undefined');
    expect(
      Array.isArray(step2) && step2.every(item => Array.isArray(item))
    ) /* item.length === 2)) */
      .toBe(true);
  });
  it('Step 3 extractColorInformation', () => {
    expect(true).toBe(true);
    // step3 = extractColorInformation(step2, template);
  });
  it('Step 4 normalizeQuotedStrings', () => {
    expect(true).toBe(true);
    // step4 = normalizeQuotedStrings(step3);
  });
  it('Step 5 createColorElementsList', () => {
    expect(true).toBe(true);
    // step5 = createColorElementsList(step4);
  });
  it('Step 6 filterOutNullColorElements', () => {
    expect(true).toBe(true);
    // step6 = filterOutNullColorElements(step5)(includeNullElements);
  });
  it('Step 6 filterOutNullColorElements', () => {
    expect(true).toBe(true);
    // void step6;
  });
  /*
      it('Method toJson should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toJson()
      ).toStrictEqual({ 'colorElement.name': '#FFEEBBCC' });
    });
readLines
splitLines
extractColorInformation
normalizeQuotedStrings
createColorElementsList
filterOutNullColorElements

   */
});

// export async function getColorElementsList(
//   pathToJsonColours: string,
//   includeNullElements: boolean = false,
//   template: string | [string] | [string, string] = '#'
// ) {
//   const step1 = readLinesAsync(pathToJsonColours);
//   const step2 = splitLinesAsync(step1);
//   const step3 = extractColorInformation(step2, template);
//   const step4 = normalizeQuotedStrings(step3);
//   const step5 = createColorElementsList(step4);
//   const step6 = filterOutNullColorElements(step5)(includeNullElements);
//   return step6;
// }

// async function main() {
//   console.log(await getColorElementsList(BASE_COLORS_INPUT_PATH));
// }

/* istanbul ignore if */
// if (require?.main?.filename === __filename) MAIN();
// function MAIN() {
//   main();
// }

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
