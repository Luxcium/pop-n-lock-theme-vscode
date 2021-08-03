import chroma from 'chroma-js';

export const chromaHex = (colorHex: string, prefix: string = '#') =>
  `${prefix}${chroma(colorHex).hex('rgba').toUpperCase().slice(1)}`;

export function templatedChromaHex(
  template: string | [string] | [string, string] = 'x'
) {
  let left = '';
  let right = '';
  if (typeof template === 'string') {
    left = template;
  }

  if (Array.isArray(template)) {
    left = template[0] ?? '';
    right = template[1] ?? '';
  }
  return (colorHex: string) => `${chromaHex(colorHex, left)}${right}`;
}

// function MAIN() {
//   console.log(chromaHex('FFE1'));
// }
// if (require?.main?.filename === __filename) MAIN();
