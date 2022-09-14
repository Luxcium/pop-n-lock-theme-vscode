// import { importJsonBaseColorElementList } from '../imports';

import ColorElementList from '../classes/color-element-list';
import { shortDummyList } from '../tests';

/* istanbul ignore if */
if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}

async function main() {
  // const baseColorElementList = await importJsonBaseColorElementList();
  console.log(
    (ColorElementList.of(shortDummyList()).setAllAlphasTo = 'FFFFFF00')
  );
  // console.log(ColorElementList);
  // let memoizedKeys: { [k: string]: colorElement[] } = {};
  // for (const colorElement of baseColorElementList) {
  //   const attribute = colorElement.firstAttribut;
  //   console.log(attribute);
  //   if (!(attribute in memoizedKeys)) {
  //     memoizedKeys[attribute] = [];
  //   memoizedKeys[attribute]?.push(colorElement);
  // }
  // return memoizedKeys;
  // for (const attrtibute of firstAttributeList) {
  //   console.log(attrtibute);
  //   if (attrtibute in memoizedKeys === false) {
  //     memoizedKeys[attrtibute] = [];
  //   }
  // }
  // console.log(firstAttributeList.length);

  // console.log(baseColorElementList);

  /*

Cannot find name '
attrtibute'. Did you mean '
attribute'?

if (require?.main?.filename === __filename) main();

function main() {
  const color1 = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
  console.log(color1);
  // util.inspect(box);
}









  */
}
