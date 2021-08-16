import ColorElementList from '../classes/color-element-list';
import { getBaseColorList } from '../imports/get-color-elements-list';
import { shortDummyList } from '../tests';

const shortColorList = ColorElementList.of(shortDummyList()); // getBaseColorList();
const baseColorList = getBaseColorList();
const allBackground = baseColorList.selectByMainAttribute('Background');

const allColors = baseColorList.map(element =>
  element.colorHex.substring(0, element.colorHex.length - 2)
);
const allColorsAlpha = baseColorList.map(element => element.colorHex);
/* istanbul ignore if */
if (require?.main?.filename === __filename) main();

async function main() {
  const color1 = baseColorList.map(element => {
    // console.log(element.elementList);
    return element.attributeList;
  });

  // console.log(color1);
  const colorSet = new Set(allColors);
  console.log([...colorSet].length);
  // console.log(baseColorList);
  void shortColorList, allBackground, allColors, allColorsAlpha, color1;
}
