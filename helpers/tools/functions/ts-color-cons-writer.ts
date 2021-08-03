import chroma from 'chroma-js';
import { colorHexMatch } from '.';
import { chromaHex } from './utils';
chroma;
export function tsColorConstWriter(
  colorHex: string,
  exporting: boolean = true,
  ts: boolean = true
): string {
  const colorVal = chromaHex(colorHex);
  console.log(colorVal);
  const hex = colorHexMatch(colorHex);
  if (hex === '') {
    return hex;
  }

  const exp_ = exporting ? 'export ' : '';
  const ts_ = ts ? ': string' : '';

  return `${exp_}const x${hex}${ts_} = '#${hex}';\n`;
}
