/** Remove any double quotes from the string */
export async function normalizeQuotedStrings(
  stringsTupleList: Promise<[string?, string?][]>
): Promise<[string, string][]> {
  return (await stringsTupleList).map(list => {
    const [str1, str2] = list;

    return [str1?.replaceAll('"', ''), str2?.replaceAll('"', '')];
  });
}
