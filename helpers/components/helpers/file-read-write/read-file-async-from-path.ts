import { PathOrFileDescriptor } from 'fs';
import { readFileAsync } from '.';

export async function readFileAsyncFromPath(
  path: PathOrFileDescriptor,
  options: string | { encoding: BufferEncoding; flag?: string }
) {
  return readFileAsync(path, options);
}
