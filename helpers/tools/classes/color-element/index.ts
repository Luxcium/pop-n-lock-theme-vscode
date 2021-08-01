import { ColorElement } from './ColorElement';

function TESTING() {
  console.log(new ColorElement(''));
}

function main() {
  return TESTING();
}
if (require?.main?.filename === __filename) main();

export { ColorElement };
