import ColorElementList from '../../classes/color-element-list';
import { BASE_COLORS_INPUT_PATH } from '../../constants';
import { getColorElementsList } from '../get-color-elements-list';

export const importJsonBaseColorAsync = async (
  baseColorsInputPath: Promise<string>
): Promise<ColorElementList> =>
  ColorElementList.of(
    await getColorElementsList(baseColorsInputPath)
  );

export const importJsonBaseColorSync = (
  baseColorsInputPath: string = BASE_COLORS_INPUT_PATH
): ColorElementList =>
  ColorElementList.of(getColorElementsList(baseColorsInputPath));

export const importJsonBaseColor = (
  baseColorsInputPath:
    | string
    | Promise<string> = BASE_COLORS_INPUT_PATH
): ColorElementList | Promise<ColorElementList> => {
  if (baseColorsInputPath instanceof Promise) {
    return importJsonBaseColorAsync(baseColorsInputPath);
  }
  return importJsonBaseColorSync(baseColorsInputPath);
};
const importJsonBaseColor_ = async (
  baseColorsInputPath: string = BASE_COLORS_INPUT_PATH
): Promise<ColorElementList> =>
  ColorElementList.of(getColorElementsList(baseColorsInputPath));

export const importJsonBaseColorElementList = ():
  | ColorElementList
  | Promise<ColorElementList> => importJsonBaseColor_();

async function main() {
  console.log(await importJsonBaseColorElementList());
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}
