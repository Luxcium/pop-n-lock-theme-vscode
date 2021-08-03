import { BASE_COLORS_INPUT_PATH } from '../../../../constants';
import { getListElementPerColorObject } from '../../get-list-element-per-color-object';

export const getJsonBaseColors = () =>
  getListElementPerColorObject(BASE_COLORS_INPUT_PATH);

async function main() {
  console.log(await getJsonBaseColors());
}
if (require?.main?.filename === __filename) main();

if (require?.main?.filename === __filename) MAIN();

function MAIN() {
  console.log(process.argv);
}
