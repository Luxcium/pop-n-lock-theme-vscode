import { PathOrFileDescriptor } from 'fs';
import { readFileAsync } from '../file-read-write';

export async function readLines(path: PathOrFileDescriptor): Promise<string[]> {
  const stringBuff = (await readFileAsync(path)).toString();
  return stringBuff.split(/\r?\n/);
}
