import prettier from 'prettier';
import { colorOrdering } from './color-listing';
import { unpackColors } from './unpack-colors';
import { writeFileAsync } from './utils/write-file-async';

export const colorsMappingObjectPath =
  './src/components/mappings/colors-auto.ts';
export const colorsMappingJSONPath =
  './src/components/mappings/JSON/colors-auto.json';

export function colorMapping(): Promise<void> {
  let mainObject = {};
  colorOrdering.map((object1: { [key: string]: string }) => {
    const some = Object.entries(object1).flat();
    const elements = some[0].split('.');
    const value = [elements, some[1]];
    unpackColors({ elements, some1: some[1], mainObject });
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
  return writeFileAsync(colorsMappingObjectPath, output);
}
// colorMapping();
