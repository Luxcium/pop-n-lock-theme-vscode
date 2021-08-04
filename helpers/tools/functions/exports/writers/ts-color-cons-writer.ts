import { colorHexMatch } from '../../utils/color-hex-match';
function tsColorConstWriter(
  colorHex: string,
  exporting: boolean = true,
  ts: boolean = true,
  standard: boolean = false
): string {
  // const colorVal = chromaHex(colorHex);
  // console.log(colorVal);
  const hex = colorHexMatch(colorHex);
  if (hex === '') {
    return hex;
  }

  const exp_ = exporting ? 'export ' : '';
  const ts_ = ts ? ': string' : '';
  const semi = standard ? '' : ';';
  return `${exp_}const x${hex}${ts_} = '#${hex}'${semi}`;
}

const colorConstWriter = (colorHex: string) => tsColorConstWriter(colorHex);

export { colorConstWriter, tsColorConstWriter };
