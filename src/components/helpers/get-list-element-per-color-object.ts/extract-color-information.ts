export async function extractColorInformation(
  linesList: Promise<[string, string][]>
): Promise<[string?, string?][]> {
  return (await linesList).map(list => {
    const [color, element] = list;
    const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
    const colorName =
      colorMatch && colorMatch.length === 1 ? 'x' + colorMatch[0] : '';
    return [colorName, element] as [string?, string?];
  });
}

export function colorExtractHex(
  color: string,
  template: string | [string] | [string, string] = ['', '']
) {
  const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
  const extractedHex =
    colorMatch && colorMatch.length === 1 ? colorMatch[0] : '';
  if (Array.isArray(template))
    return (
      (template.length === 1 && template[0] + extractedHex) ||
      (template.length === 2 && template[0] + extractedHex + template[1])
    );
  return (
    (typeof template === 'string' && template + extractedHex) || extractedHex
  );
}
