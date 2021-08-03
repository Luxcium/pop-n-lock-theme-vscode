import ColorElement from './ColorElement';

function MAIN() {
  console.log(new ColorElement(''));
}
if (require?.main?.filename === __filename) MAIN();

export default ColorElement;
