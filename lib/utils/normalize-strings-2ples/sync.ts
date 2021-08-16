import type { ColorElementTuple } from '../../types/ColorElementTuple';
import { stripQuotes } from '../strings';

export type ColorElementTupleOrList = ColorElementTuple[] | ColorElementTuple;

export function normalizeQuotedStringsSync(
  stringsTupleList: ColorElementTupleOrList
): ColorElementTupleOrList {
  if (Array.isArray(stringsTupleList)) {
    return stringsTupleList.map(list => {
      if (typeof list === 'string') {
        return stripQuotes(list) as string;
      }
      if (list.length === 2) {
        const [str1, str2] = list;
        return [stripQuotes(str1), stripQuotes(str2)] as [string, string];
      }
      return list;
    }) as any as ColorElementTupleOrList;
  }
  return null as never;
}
