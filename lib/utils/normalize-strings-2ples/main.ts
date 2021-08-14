import { ColorElementTuple } from '../../types/ColorElementTuple';
import { normalizeQuotedStringsAsync } from './async';
import type { ColorElementTupleOrList } from './sync';
import { normalizeQuotedStringsSync } from './sync';

/**
 * Remove any double quotes from the string
 * in a list of strings 2-ples
 */
export function normalizeQuotedStrings(
  stringsTupleList: ColorElementTuple
): ColorElementTuple;
export function normalizeQuotedStrings(
  stringsTupleList: Promise<ColorElementTuple>
): Promise<ColorElementTuple>;
export function normalizeQuotedStrings(
  stringsTupleList: ColorElementTuple[]
): ColorElementTuple[];
export function normalizeQuotedStrings(
  stringsTupleList: Promise<ColorElementTuple[]>
): Promise<ColorElementTuple[]>;
export function normalizeQuotedStrings(
  stringsTupleList:
    | Promise<ColorElementTupleOrList>
    | ColorElementTupleOrList
): Promise<ColorElementTupleOrList> | ColorElementTupleOrList {
  if (stringsTupleList instanceof Promise) {
    return normalizeQuotedStringsAsync(stringsTupleList);
  }
  return normalizeQuotedStringsSync(stringsTupleList);
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  console.log(__filename, require?.main?.filename);
}
