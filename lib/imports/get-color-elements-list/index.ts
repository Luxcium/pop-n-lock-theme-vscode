import ColorElementList from '../../classes/color-element-list';
import { BASE_COLORS_INPUT_PATH } from '../../constants';
import { getColorElementsList } from './main';

export { getColorElementsList };

export const getBaseColorList = () =>
  ColorElementList.of(getColorElementsList(BASE_COLORS_INPUT_PATH));

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();

/* istanbul ignore next */
async function main() {
  const baseColorList = getBaseColorList();
  // console.log(getColorElementsList(BASE_COLORS_INPUT_PATH));
  console.log(baseColorList, baseColorList.length);
}
