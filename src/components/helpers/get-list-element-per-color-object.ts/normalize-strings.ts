export async function normalizeStrings(
  some: Promise<[string, string][]>
): Promise<[string, string][]> {
  return (await some).map(list => {
    const [colorName, elementName] = list;

    return [colorName.replaceAll('"', ''), elementName.replaceAll('"', '')];
  });
}
