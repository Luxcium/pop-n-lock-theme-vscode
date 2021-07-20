import EventEmitter from 'events';
import {
  Mode,
  ObjectEncodingOptions,
  PathOrFileDescriptor,
  readFile,
  writeFile,
} from 'fs';
import { promisify } from 'util';

export const readFileAsync = promisify(readFile);
export const writeFileAsync = promisify(writeFile);

export const writeFileToPathAsync =
  (path: PathOrFileDescriptor) =>
  async (
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

export const readFileAsyncPAth =
  (
    path: PathOrFileDescriptor,
    options: string | { encoding: BufferEncoding; flag?: string }
  ) =>
  async (): Promise<string> =>
    readFileAsync(path, options);

export const IO = {
  read: readFileAsyncPAth,
  write: writeFileToPathAsync,
};

export async function readLines(path: PathOrFileDescriptor): Promise<string[]> {
  const stringBuff = (await readFileAsync(path)).toString();
  return stringBuff.split(/\r?\n/);
}

const lines = readLines(
  '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json'
);

async function main() {
  console.log('lines :>> ', await lines);
}
main();
