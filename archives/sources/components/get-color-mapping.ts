import prettier from 'prettier';
import { colorOrdering } from './templates/color-listing';
import { unpackColors } from './utils/unpack-colors';
type ColorOrdering = { [key: string]: string }[];
type ColorOrder = { [key: string]: string };

export const colorsMappingObjectPath =
  './src/components/mappings/colors-auto.ts';
export const colorsMappingJSONPath =
  './src/components/mappings/JSON/colors-auto.json';

export function getColorMapping(
  colorObject: ColorOrdering = colorOrdering
): string {
  let mainObject = {};
  colorObject.map((obj: ColorOrder) => {
    const colorObjectList = Object.entries(obj).flat();
    const elements = colorObjectList[0].split('.');
    const value = [elements, colorObjectList[1]];
    unpackColors({
      elements,
      firstColorObject: colorObjectList[1],
      mainObject,
    });
    return value;
  });
  const source = `export const colorsInfos = ${JSON.stringify(
    mainObject,
    null,
    2
  )}\n`;
  const output = prettier.format(source, {
    trailingComma: 'all',
    singleQuote: true,
    parser: 'typescript',
  });
  return output;
}
