export async function normalizeStrings(
  someList: Promise<[string, string][]>
): Promise<[string, string][]> {
  return (await someList).map(list => {
    const [colorName, elementName] = list;

    return [colorName.replaceAll('"', ''), elementName.replaceAll('"', '')];
  });
}
