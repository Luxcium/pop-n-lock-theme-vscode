import ColorElementList from '../classes/color-element-list';
import { getBaseColorList } from '../imports/get-color-elements-list';
import { shortDummyList } from '../tests';

const baseColorList1 = ColorElementList.of(shortDummyList()); // getBaseColorList();
const baseColorList = getBaseColorList();
const allBackground =
  baseColorList.selectByMainAttribute('Background');
/* istanbul ignore if */
if (require?.main?.filename === __filename) main();

async function main() {
  const color1 = baseColorList.map(element => {
    console.log(element.elementList);
    return element.attributeList;
  });

  console.log(color1);

  // const colorlist = ColorElementList.of(shortDummyList());
  // const list = colorlist.selectByMainElement('editorGroupHeader');
  void baseColorList1, allBackground;
}
