import * as ColorMath from 'color-math';
import { colorHexMatch } from '.';

export function tsColorConstWriter(
  colorHex: string,
  exporting: boolean = true,
  ts: boolean = true
): string {
  const colorVal = ColorMath.evaluate(colorHex).resultStr;
  console.log(colorVal);
  const hex = colorHexMatch(colorHex);
  if (hex === '') {
    return hex;
  }

  const exp_ = exporting ? 'export ' : '';
  const ts_ = ts ? ': string' : '';

  return `${exp_}const x${hex}${ts_} = '#${hex}';\n`;
}

tsColorConstWriter('00BFBBFF');
