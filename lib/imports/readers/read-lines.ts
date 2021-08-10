import { PathLike, promises, readFileSync } from 'fs';

export async function readLinesAsync(path: PathLike): Promise<string[]> {
  return readLines_(await promises.readFile(path));
}

export function readLines(path: PathLike): string[] {
  return readLines_(readFileSync(path));
}

function readLines_(stringBuff: Buffer): string[] {
  return stringBuff.toString().split(/\r?\n/);
}
