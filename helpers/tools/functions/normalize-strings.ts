import { ColorElementTuple } from '../types/ColorElementTuple';

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

export function stripQuotes(str: string): string {
  return str?.replaceAll('"', '');
}

export function stripComas(str: string): string {
  return str?.replaceAll(',', '');
}

export function stripBraces(str: string): string {
  return str?.replaceAll(/[\{\}\[\]\s]/g, '');
}

export function stripJson(str: string): string {
  return stripQuotes(stripBraces(str));
}
