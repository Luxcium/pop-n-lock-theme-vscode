import { promises, readFileSync } from 'fs';

export function readLines(path: string): string[];
export function readLines(
  path: Promise<string>
): Promise<string[]>;
export function readLines(
  path: string | Promise<string>
): string[] | Promise<string[]> {
  if (path instanceof Promise) {
    return readLinesAsync(Promise.resolve(path));
  }
  return readLinesSync(path);
}

function readLinesSync(path: string): string[] {
  return readLines_(readFileSync(path));
}

async function readLinesAsync(
  path: Promise<string>
): Promise<string[]> {
  return readLines_(await promises.readFile(await path));
}

function readLines_(stringBuff: Buffer): string[] {
  return stringBuff.toString().split(/\r?\n/);
}
