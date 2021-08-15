import { consts } from '../constants';
import { importJsonBaseColorElementList } from '../imports';

async function main() {
  void consts;
  const BaseColorElementList = await importJsonBaseColorElementList();
  const toLog = [
    BaseColorElementList.head().id,
    BaseColorElementList.head().uid,
    BaseColorElementList.head(),
  ];

  console.log(toLog);
  return importJsonBaseColorElementList;
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}
