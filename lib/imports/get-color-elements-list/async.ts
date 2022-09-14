import ColorElement from '../../classes/color-element';
import { getColorJsonListSync } from './sync';

export async function getColorElementsListAsync(
  pathToJsonColours: Promise<string>,
  template: string | [string] | [string, string] = '#'
): Promise<ColorElement[]> {
  return getColorJsonListSync(await pathToJsonColours, template);
}
