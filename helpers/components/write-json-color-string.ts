import { getJsonColorString } from './get-json-color-string';
import { nestJson } from './nest-json';
import { writeFileAsync } from './utils/write-file-async';

export function writeJsonColorString(path: string, colorsInfosObj: any) {
  const colorJsonString = nestJson(
    'color',
    getJsonColorString(colorsInfosObj, '')
  );
  writeFileAsync(path, colorJsonString);
}
