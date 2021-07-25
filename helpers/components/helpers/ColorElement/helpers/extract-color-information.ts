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
        await colorHexMatch(colorHexValue, template),
      ] as ColorElementTuple;
    })
  );
}

export function colorHexMatch(inputString: string): string;
export function colorHexMatch(
  inputString: string,
  template?: string | [string] | [string, string]
): string;
export function colorHexMatch(inputString: Promise<string>): Promise<string>;
export function colorHexMatch(
  inputString: Promise<string>,
  template?: string | [string] | [string, string]
): Promise<string>;
export function colorHexMatch(
  inputString: Promise<string> | string,
  template: string | [string] | [string, string] = ['', '']
): Promise<string> | string {
  if (typeof inputString === 'string') {
    return colorHexMatch_(inputString, template);
  }
  return colorExtractHexAsync(inputString, template);
}

async function colorExtractHexAsync(
  inputString: Promise<string>,
  template: string | [string] | [string, string] = ['', '']
): Promise<string> {
  return colorHexMatch_(await Promise.resolve(inputString), template);
}
function colorHexMatch_(
  inputString: string,
  template: string | [string] | [string, string] = ['', '']
): string {
  if (inputString == null) return null;
  const colorMatch: RegExpMatchArray = inputString.match(/[0-9a-f]{3,8}/gi);
  if (colorMatch && colorMatch.length === 1 && colorMatch[0]) {
    const extractedHex = colorMatch[0].toUpperCase();
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
  return null;
}
