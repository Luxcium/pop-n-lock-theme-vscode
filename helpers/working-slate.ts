import colorElement from './tools/classes/color-element';
import { importJsonBaseColorElementList } from './tools/functions/imports';

async function main() {
  const baseColorElementList = await importJsonBaseColorElementList();
  // const firstAttributeList = baseColorElementList.firstAttributeList;
  let memoizedKeys: { [k: string]: colorElement[] } = {};
  for (const colorElement of baseColorElementList) {
    const attribute = colorElement.elementName;
    if (attribute in memoizedKeys === false) {
      memoizedKeys[attribute] = [];
    }
  }
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

function MAIN() {
  main();
}
if (require?.main?.filename === __filename) MAIN();
