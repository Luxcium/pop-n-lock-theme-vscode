import { getBaseColorList } from '../imports/get-color-elements-list';
import { listedByFirstAttribut } from './listedByFirstAttribut';
import { listedByMainAttribute } from './listedByMainAttribute';
import { listedByMainElement } from './listedByMainElement';

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();

async function main() {
  const byFirstAttribut = listedByFirstAttribut(getBaseColorList());
  console.log(byFirstAttribut.setList);
  const byMainAttribute = listedByMainAttribute(getBaseColorList());
  console.log(byMainAttribute.setList);
  const byMainElement = listedByMainElement(getBaseColorList());
  console.log(byMainElement.setList);
}
