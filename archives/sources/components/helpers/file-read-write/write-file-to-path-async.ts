import EventEmitter from 'events';
import { Mode, ObjectEncodingOptions, PathOrFileDescriptor } from 'fs';
import { writeFileAsync } from '.';
export async function writeFileToPathAsync(path: PathOrFileDescriptor) {
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
