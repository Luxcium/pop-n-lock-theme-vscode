import { PathOrFileDescriptor } from 'fs';
import { createColorElementsList } from './create-color-element-list';
import { extractColorInformation } from './extract-color-information';
import { listElementPerColor } from './list-element-per-color';
import { normalizeQuotedStrings } from './normalize-strings';
import { readLines } from './read-lines';
import { reversedSplitLines, splitLines } from './split-lines';

export const pathToJsonColours_: PathOrFileDescriptor =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

// here is the example I was talking about @CheesusCrustMan#8153
async function getListElementPerColorObject(
  pathToJsonColours: PathOrFileDescriptor
) {
  const step1 = readLines;
  const step2 = reversedSplitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = listElementPerColor;
  return step5(step4(step3(step2(step1(pathToJsonColours)))));
}

export async function getColorElementsList(
  pathToJsonColours: PathOrFileDescriptor,
  includeNullElements: boolean = false
) {
  const step1 = readLines;
  const step2 = reversedSplitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeQuotedStrings;
  const step5 = createColorElementsList;
  return (await step5(step4(step3(step2(step1(pathToJsonColours)))))).filter(
    item => includeNullElements || !item.isNull
  );
}
export {
  extractColorInformation,
  listElementPerColor,
  normalizeQuotedStrings,
  readLines,
  splitLines,
  getListElementPerColorObject,
};

main();
async function main() {
  const colorElementList = await getColorElementsList(pathToJsonColours_);
  colorElementList

    // .filter(item => item.isNull)
    .forEach(item => console.log(item));
  return void 0;
}
