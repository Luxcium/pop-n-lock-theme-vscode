import { ColorElementTuple } from '../../types/ColorElementTuple';
import { extractColorInformationAsync } from './async';
import { extractColorInformationSync } from './sync';

export function extractColorInformation(
  colorElementTupleList: ColorElementTuple[],
  template?: string | [string] | [string, string]
): ColorElementTuple[];
export function extractColorInformation(
  colorElementTupleList: Promise<ColorElementTuple[]>,
  template?: string | [string] | [string, string]
): Promise<ColorElementTuple[]>;
export function extractColorInformation(
  colorElementTupleList: ColorElementTuple[] | Promise<ColorElementTuple[]>,
  template: string | [string] | [string, string] = 'x'
): ColorElementTuple[] | Promise<ColorElementTuple[]> {
  if (colorElementTupleList instanceof Promise) {
    return extractColorInformationAsync(colorElementTupleList, template);
  }
  return extractColorInformationSync(colorElementTupleList, template);
}
