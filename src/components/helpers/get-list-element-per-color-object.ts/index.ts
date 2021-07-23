import { PathOrFileDescriptor } from 'fs';
import { ColorElements } from '../ColorElements';
import { getColorElementsList } from './get-color-elements-list';

export const pathToJsonColours_: PathOrFileDescriptor =
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

{
  async function main() {
    const colorElements = await getColorElementsList(pathToJsonColours_);
    const colorElementList = new ColorElements(colorElements);

    console.log(colorElementList.countAttribute('background'));
    return void 0;
  }
  if (require.main.filename === __filename) main();
}
