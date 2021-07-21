export async function extractColorInformation(
  someList: Promise<[string, string][]>
): Promise<[string?, string?][]> {
  return (await someList).map(list => {
    const [color, element] = list;
    const colorMatch: RegExpMatchArray = color.match(/[x#][0-9a-f]{3,8}/gi);
    const colorName =
      colorMatch && colorMatch.length === 1 ? 'x' + colorMatch[0] : '';
    return [colorName, element] as [string?, string?];
  });
}
