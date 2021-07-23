import { ColorElementTuple } from '../types';

export async function extractColorInformation(
  colorElementTupleList: Promise<ColorElementTuple[]>,
  template: string | [string] | [string, string] = 'x'
): Promise<ColorElementTuple[]> {
  return Promise.all(
    (await colorElementTupleList).map(async colorElementTuple => {
      const [colorElementName, colorHexValue] = colorElementTuple;
      return [
        colorElementName,
        await colorExtractHex(colorHexValue, template),
      ] as ColorElementTuple;
    })
  );
}

export async function colorExtractHex(
  inputString: Promise<string> | string,
  template: string | [string] | [string, string] = ['', '']
): Promise<string> {
  return _colorExtractHex(await Promise.resolve(inputString), template);
}

function _colorExtractHex(
  inputString: string,
  template: string | [string] | [string, string] = ['', '']
): string {
  const colorMatch: RegExpMatchArray = inputString.match(/[0-9a-f]{3,8}/gi);
  const extractedHex =
    (colorMatch && colorMatch.length === 1 && colorMatch[0]) || '';
  if (Array.isArray(template)) {
    return (
      (template.length === 1 && template[0] + extractedHex) ||
      (template.length === 2 && template[0] + extractedHex + template[1])
    );
  }
  return (
    (typeof template === 'string' && template + extractedHex) || extractedHex
  );
}
