import { getColorMapping } from './get-color-mapping';
import { writeFileAsync } from './utils/write-file-async';

export function writeColorMapping(
  path: string,
  colorMapping: string = getColorMapping()
): Promise<void> {
  return writeFileAsync(path, colorMapping);
}
