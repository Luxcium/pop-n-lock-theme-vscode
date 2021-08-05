import { BASE_COLORS_INPUT_PATH } from '../../../../constants';
import ColorElementList from '../../../classes/color-element-list';
import { getColorElementsList } from '../../get-color-elements-list';

const importJsonBaseColorElementList_ = async (
  baseColorsInputPath: string = BASE_COLORS_INPUT_PATH
): Promise<ColorElementList> =>
  new ColorElementList(await getColorElementsList(baseColorsInputPath));

export const importJsonBaseColorElementList =
  async (): Promise<ColorElementList> => importJsonBaseColorElementList_();

async function main() {
  console.log(await importJsonBaseColorElementList());
}

if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}
