import { importJsonBaseColorElementList } from '../imports';

async function main() {
  const baseColorElementList = await importJsonBaseColorElementList();
  console.log(baseColorElementList);
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

function MAIN() {
  main();
  // (async () => console.log(await main()))();
}
if (require?.main?.filename === __filename) MAIN();
