import { ColorElementTuple, _ColorElement } from '../../../types';

export function standardize(colorElement: ColorElementTuple): [string, string];
export function standardize(colorElement: _ColorElement): [string, string];
export function standardize(colorElement: string | null): [string, string];
export function standardize(
  colorElement: string | null,
  colorHexValue: string | null
): [string, string];
export function standardize(
  colorElement: ColorElementTuple | _ColorElement | string | null,
  colorHexValue?: string | null
): [string, string] {
  let colorElementName: string = 'VOID';
  let colorValue: string = '';

  if (Array.isArray(colorElement)) {
    [colorElementName, colorValue] = standardizeTuple(colorElement);
    return [colorElementName, colorValue];
  }

  if (typeof colorElement === 'object' && colorElement != null) {
    colorElementName = colorElement.elementName || 'VOID';
    colorValue = colorElement.colorHexValue || '';
    return [colorElementName, colorValue];
  }

  if (!!colorElement === true && typeof colorElement === 'string') {
    colorElementName = colorElement;
    colorValue = colorHexValue || '';
    return [colorElementName, colorValue];
  }

  return [colorElementName, colorValue];
}

export function standardizeTuple(
  colorElementTuple: ColorElementTuple
): [colorElementName: string, colorHexValue: string] {
  if (colorElementTuple.length === 2) {
    const [left, right] = colorElementTuple;
    if (typeof left === 'string' && typeof right === 'string') {
      const leftMatch = colorHexMatch_(left);
      const rightMatch = colorHexMatch_(right);
      if (!!rightMatch !== false) {
        return [left, rightMatch];
      }
      if (!!leftMatch !== false) {
        return [right, leftMatch];
      }
    }
  }
  return ['', ''];
}

const rrgbbbaa = /[0-9a-f]{8}/gi;
const rrggbb = /[0-9a-f]{6}/gi;
const rgba = /[0-9a-f]{4}/gi;
const rgb = /[0-9a-f]{3}/gi;
export const colorHexRegExps = [rrgbbbaa, rrggbb, rgba, rgb];

function colorHexMatch_(inputString: string): string {
  for (const regexp of colorHexRegExps) {
    const match = inputString.match(regexp);
    if (match !== null && match?.length === 1 && match[0]) {
      const extractedHex = match[0].toUpperCase();
      return extractedHex;
    }
  }
  return '';
}
