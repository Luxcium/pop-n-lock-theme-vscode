export function lisingColors() {
  let count = 0;
  const RGB1 = ['0', '1', '3', '5', '9', 'F'];
  const RGB2 = ['0', '3', '6', '9', 'B', 'F'];
  const RGB3 = ['0', '5', '9', 'C', 'E', 'F'];
  const RGB1_ = RGB1.slice().reverse();
  const RGB2_ = RGB2.slice().reverse();
  const RGB3_ = RGB3.slice().reverse();

  void RGB1, RGB2, RGB3;
  void RGB1_, RGB2_, RGB3_;

  for (let R of RGB3_) {
    for (let B of RGB1) {
      for (let G of RGB2) {
        const str_ = `${[R, G, B].join('')}`;
        console.log(
          `export const x${str_}_R3xB2G1: string = '#${str_}';`,
          '//',
          ++count
        );
      }
    }
  }
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  // console.log(__filename, require?.main?.filename);
  // /home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/lib/listing-colors.ts
  lisingColors();
}

export const x_001: string = '';
