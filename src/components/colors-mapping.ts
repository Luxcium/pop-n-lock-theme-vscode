import { writeFile } from 'fs';
import prettier from 'prettier';
import { promisify } from 'util';
import { colourOrdering } from './colour-listing';
import { unpackColors } from './unpack-colors';
const writeFileAsync = promisify(writeFile);

export const colorsMappingPath = './src/components/mappings/colors-auto.ts';

export async function main() {
  let mainObject = {};
  colourOrdering.map((object1: { [key: string]: string }) => {
    const some = Object.entries(object1).flat();
    const elements = some[0].split('.');
    const value = [elements, some[1]];
    unpackColors({ elements, some1: some[1], mainObject });
    return value;
  });
  const source = `export const colors = ${JSON.stringify(
    mainObject,
    null,
    2
  )}\n`;
  const output = prettier.format(source, {
    trailingComma: 'all',
    singleQuote: true,
    parser: 'typescript',
  });
  await writeFileAsync(colorsMappingPath, output);
}
main();
