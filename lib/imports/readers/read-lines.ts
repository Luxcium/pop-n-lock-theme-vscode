import { promises, readFileSync } from 'fs';
import { unCommentJSONC } from '../../utils/jsonc-to-json-parser';

export function readColorsLines(path: string): string[];
export function readColorsLines(path: Promise<string>): Promise<string[]>;
export function readColorsLines(
  path: string | Promise<string>
): string[] | Promise<string[]> {
  if (path instanceof Promise) {
    return readColorsLinesAsync(Promise.resolve(path));
  }
  return readColorsLinesSync(path);
}

function readColorsLinesSync(path: string): string[] {
  return readColorsLines_(readFileSync(path));
}

async function readColorsLinesAsync(path: Promise<string>): Promise<string[]> {
  return readColorsLines_(await promises.readFile(await path));
}

function readColorsLines_(stringBuff: Buffer): string[] {
  const buffStr = stringBuff.toString();
  const parsed = unCommentJSONC(buffStr);
  const stringnified = JSON.stringify(parsed.colors, null, 2);
  return stringnified.split(/\r?\n/);
}
