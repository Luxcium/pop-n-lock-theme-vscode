import { ColorElementTuple } from '../../types/ColorElementTuple';
import { stripQuotes } from '../strings';

/** Remove any double quotes from the string */
export function normalizeQuotedStrings(
  stringsTupleList: ColorElementTuple[]
): ColorElementTuple[];
export function normalizeQuotedStrings(
  stringsTupleList: Promise<ColorElementTuple[]>
): Promise<ColorElementTuple[]>;
export function normalizeQuotedStrings(
  stringsTupleList: Promise<ColorElementTuple[]> | ColorElementTuple[]
): Promise<ColorElementTuple[]> | ColorElementTuple[] {
  // let stringsTupleListArray: ColorElementTuple[];
  if (Array.isArray(stringsTupleList)) {
    // stringsTupleListArray = stringsTupleList;
    return stringsTupleList.map(list => {
      const [str1, str2] = list;
      return [str1?.replaceAll('"', ''), str2?.replaceAll('"', '')];
    }) as any as ColorElementTuple[];
  }
  return (async () =>
    (await stringsTupleList).map(list => {
      const [str1, str2] = list;
      return [stripQuotes(str1), stripQuotes(str2)];
    }))();
}
