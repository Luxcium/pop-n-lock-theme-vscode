import { PathOrFileDescriptor, writeFile, WriteFileOptions } from 'fs';
import { promisify } from 'util';
export const writeFileAsync = promisify(writeFile);
export const writeFileToPathAsync =
  (path: PathOrFileDescriptor) =>
  async (data: string | NodeJS.ArrayBufferView, options?: WriteFileOptions) =>
    writeFileAsync(path, data, options);
