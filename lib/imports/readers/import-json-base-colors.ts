import ColorElementList from '../../classes/color-element-list';
import { BASE_COLORS_INPUT_PATH } from '../../constants';
import { getColorElementsList } from '../get-color-elements-list/get-color-elements-list';
// = BASE_COLORS_INPUT_PATH
export const importJsonBaseColorElementListAsync = async (
  baseColorsInputPath: Promise<string>
): Promise<ColorElementList> =>
  ColorElementList.of(await getColorElementsList(baseColorsInputPath));

export const importJsonBaseColorElementListSync = (
  baseColorsInputPath: string = BASE_COLORS_INPUT_PATH
): ColorElementList =>
  ColorElementList.of(getColorElementsList(baseColorsInputPath));
//
export const importJsonBaseColor = (
  baseColorsInputPath: string | Promise<string> = BASE_COLORS_INPUT_PATH
): ColorElementList | Promise<ColorElementList> => {
  if (baseColorsInputPath instanceof Promise) {
    return importJsonBaseColorElementListAsync(baseColorsInputPath);
    // return ColorElementList.of(
    //   getColorElementsList( Promise.resolve(baseColorsInputPath))
    // );
  }
  return importJsonBaseColorElementListSync(baseColorsInputPath); //  ColorElementList.of(getColorElementsList(baseColorsInputPath));
};
const importJsonBaseColorElementList_ = async (
  baseColorsInputPath: string = BASE_COLORS_INPUT_PATH
): Promise<ColorElementList> =>
  ColorElementList.of(getColorElementsList(baseColorsInputPath));

export const importJsonBaseColorElementList = ():
  | ColorElementList
  | Promise<ColorElementList> => importJsonBaseColorElementList_();

async function main() {
  console.log(await importJsonBaseColorElementList());
}

if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}
