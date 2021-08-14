import chroma from 'chroma-js';
import { colorHexMatch } from '../color-hex-match';

/** @deprecated */
export function chromaHex(
  colorHex: string,
  prefix: string = '#'
): string {
  const sanitized = colorHexMatch(colorHex);
  if (chroma.valid(sanitized))
    return `${prefix}${chroma(sanitized)
      .hex('rgba')
      .toUpperCase()
      .slice(1)}`;
  return '';
}

/** @deprecated */
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
  return (colorHex: string) =>
    colorHex ? `${chromaHex(colorHex, left)}${right}` : '';
}

function MAIN() {
  // console.log(templatedChromaHex(['##', ';;'])(''));
  return void 0;
}
/* istanbul ignore if */
if (require?.main?.filename === __filename) MAIN();
