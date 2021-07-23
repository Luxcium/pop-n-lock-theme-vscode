import { PathOrFileDescriptor } from 'fs';
import { ColorElements } from '../ColorElements';
import { getColorElementsList } from './get-color-elements-list';
export { colorExtractHex } from './extract-color-information';
export const pathToJsonColours_: PathOrFileDescriptor =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

{
  async function main() {
    const colorElements = await getColorElementsList(pathToJsonColours_);
    const colorElementList = new ColorElements(colorElements);

    // console.dir(colorElementList, { depth: 3 });
    console.log(colorElementList.tail());
    return void 0;
  }
  if (require.main.filename === __filename) main();
}
