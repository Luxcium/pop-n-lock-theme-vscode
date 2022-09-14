import { NULL } from '../../MAIN';
void NULL;
/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  console.log(__filename, require?.main?.filename);
}
