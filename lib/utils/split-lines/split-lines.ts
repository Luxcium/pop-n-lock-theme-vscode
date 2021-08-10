import { stripComas } from '../strings';

const empltyLines = /^\s*[{}[\]]$|^\s*$/;
export async function splitLinesAsync(
  lines: Promise<string[]>
): Promise<[string, string][]> {
  return splitLines(await lines);
}

export async function reverseItemsAsync<T1, T2>(
  tuples: Promise<[T1, T2][]>
): Promise<[T2, T1][]> {
  return reverseItems(await tuples);
}

export const reversedSplitLinesAsync = async (lines: Promise<string[]>) =>
  reversedSplitLines(await lines);

export function splitLines(lines: string[]): [string, string][] {
  return lines
    .filter(line => line)
    .filter(line => !empltyLines.test(line))
    .map(lines => stripComas(lines))
    .map(line => {
      return line.split(':') as [string, string];
    })
    .filter(tuple => (tuple[0] ?? '').trim())
    .filter(tuple => (tuple[1] ?? '').trim());
}

export function reverseItems<T1, T2>(tuples: [T1, T2][]): [T2, T1][] {
  return tuples.map(tuple => tuple.reverse() as [T2, T1]);
}

export const reversedSplitLines = (lines: string[]) =>
  reverseItems(splitLines(lines));
