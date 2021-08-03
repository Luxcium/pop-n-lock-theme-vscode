import { PathLike } from 'fs';
import { ColorElements } from '../ColorElements';
import { getColorElementsList } from './get-color-elements-list';
export { createColorElementsList } from './create-color-element-list';
export { colorHexMatch } from './extract-color-information';
export const pathToJsonColours_: PathLike =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

async function TESTING() {
  const colorElements = await getColorElementsList(pathToJsonColours_);
  const colorElementList = new ColorElements(colorElements);
  console.log(colorElementList.tail());
  return void colorElementList;
}
async function main() {
  TESTING();
}
if (require?.main?.filename === __filename) main();
