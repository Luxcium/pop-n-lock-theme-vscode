import { consts } from '../constants';
import { importJsonBaseColorElementList } from './functions/imports';

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

if (require?.main?.filename === __filename) MAIN();
function MAIN() {
  main();
}
