import { PathLike, promises, readFileSync } from 'fs';

export async function readLines(path: PathLike): Promise<string[]> {
  const stringBuff = (await promises.readFile(path)).toString();
  return stringBuff.split(/\r?\n/);
}

export async function readLinesSync(path: PathLike): Promise<string[]> {
  const stringBuff = readFileSync(path).toString();
  return stringBuff.split(/\r?\n/);
}
