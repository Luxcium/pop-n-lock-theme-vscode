import type { PathLike } from 'fs';
import { promises } from 'fs';

export async function readLines(path: PathLike): Promise<string[]> {
  const stringBuff = (await promises.readFile(path)).toString();
  return stringBuff.split(/\r?\n/);
}
