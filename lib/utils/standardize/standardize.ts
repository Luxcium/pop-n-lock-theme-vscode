import { ColorElementTuple } from '../../types/ColorElementTuple';
import { _ColorElement } from '../../types/_ColorElement';
import { stripJson } from '../strings';

export function standardize(
  colorElement: ColorElementTuple
): [string, string];
export function standardize(
  colorElement: _ColorElement
): [string, string];
export function standardize(
  colorElement: string | null
): [string, string];
export function standardize(
  colorElement: string | null,
  colorHexValue: string | null
): [string, string];
export function standardize(
  colorElement:
    | ColorElementTuple
    | _ColorElement
    | string
    | null,
  colorHexValue?: string | null
): [string, string] {
  let colorElementName: string = 'VOID';
  let colorValue: string = '';

  if (Array.isArray(colorElement)) {
    [colorElementName, colorValue] = colorElement;
    return [colorElementName, colorValue];
  }

  if (typeof colorElement === 'object' && colorElement != null) {
    colorElementName = colorElement.elementName || 'VOID';
    colorValue = colorElement.colorHexValue || '';
    return [colorElementName, colorValue];
  }
  if (
    !!colorElement === true &&
    typeof colorElement === 'string'
  ) {
    const splits = stripJson(colorElement).split(/[,:]/);
    if (splits.length === 2) {
      return [splits[0] || 'VOID', splits[1] || ''];
    }
    if (splits.length === 4) {
      return [splits[1] || 'VOID', splits[3] || ''];
    }
    return [colorElement || 'VOID', colorHexValue || ''];
    // // '"colorElement.name":"#FFEEBBCC"'
    // if (splits.length === 2) {
    //   const strTup: ColorElementTuple = [splits[0] || 'VOID', splits[1] || ''];
    //   void strTup;
    //   [colorElementName, colorValue] = normalizeQuotedStrings([strTup])[0]!;
    // }
    // /*
    //   elementName: 'colorElement.name',
    //     colorHexValue: '#FFEEBBCC',
    //  */
    // if (splits.length === 4) {
    //   const strTup: ColorElementTuple = [splits[1] || 'VOID', splits[3] || ''];
    //   void strTup;
    //   [colorElementName, colorValue] = normalizeQuotedStrings([strTup])[0]!;
    // }
    // colorElementName = colorElement;
    // colorValue = colorHexValue || '';
    // return [colorElementName, colorValue];
  }

  return [colorElementName, colorValue];
}
