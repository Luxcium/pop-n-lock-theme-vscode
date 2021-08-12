import { colorHexMatchTemplated } from '../utils/color-hex-match';

export function convert(xFFFFFF: string) {
  const colorHex = colorHexMatchTemplated(xFFFFFF);
  if (colorHex.length === 6) {
    const split = colorHex.split('');
    if (split[0] === split[1] && split[2] === split[3] && split[4] === split[5])
      return [split[0], split[2], split[4]].join();
  }

  return xFFFFFF;
}
