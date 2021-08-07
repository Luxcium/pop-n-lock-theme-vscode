import EventEmitter from 'events';
import {
  Mode,
  ObjectEncodingOptions,
  PathOrFileDescriptor,
  writeFile,
} from 'fs';
import { promisify } from 'util';

export const writeFileAsync = promisify(writeFile);

export function writeFileToPathAsync(path: PathOrFileDescriptor) {
  return (
    data: string | NodeJS.ArrayBufferView,
    options?:
      | (ObjectEncodingOptions &
          EventEmitter.Abortable & {
            mode?: Mode;
            flag?: string;
          })
      | string
  ): Promise<void> =>
    writeFileAsync(
      path,
      data,
      typeof options === 'object' ? { ...options } : options
    );
}
