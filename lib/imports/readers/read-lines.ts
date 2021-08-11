import { promises, readFileSync } from 'fs';

export function readLines(path: string): string[];
export function readLines(path: Promise<string>): Promise<string[]>;
export function readLines(
  path: string | Promise<string>
): string[] | Promise<string[]> {
  if (typeof path === 'string') return readLines_(readFileSync(path));
  return readLinesAsync(Promise.resolve(path));
}

export function readLinesSync(path: string): string[] {
  return readLines_(readFileSync(path));
}

export async function readLinesAsync(path: Promise<string>): Promise<string[]> {
  return readLines_(await promises.readFile(await path));
}

function readLines_(stringBuff: Buffer): string[] {
  return stringBuff.toString().split(/\r?\n/);
}
