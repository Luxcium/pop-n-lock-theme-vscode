export async function extractColorInformation(
  some: Promise<[string, string][]>
): Promise<[string, string][]> {
  return (await some).map(list => {
    const [color, element] = list;
    const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
    const colorName =
      colorMatch && colorMatch.length === 1 ? colorMatch[0] : '';
    console.log(colorMatch);
    return ['x' + colorName, element] as [string, string];
  });
}
