import { ColorElementTuple } from '../types';

/** Remove any double quotes from the string */
export async function normalizeQuotedStrings(
  stringsTupleList: Promise<ColorElementTuple[]>
): Promise<ColorElementTuple[]> {
  return (await stringsTupleList).map(list => {
    const [str1, str2] = list;

    return [str1?.replaceAll('"', ''), str2?.replaceAll('"', '')];
  });
}
