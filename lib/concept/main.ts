import { getBaseColorList } from '../imports/get-color-elements-list';

const baseColorList = getBaseColorList();
const allBackground =
  baseColorList.selectByMainAttribute('Background');

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();

async function main() {
  console.log(
    baseColorList.map(element => {
      console.log(element);
      return element;
    })
  );
  console.log(allBackground);
}
