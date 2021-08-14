import { empltyLine } from '../../templates/reg-exp/lines';
import { stripComas } from '../strings';

export function splitLines(lines: string[]): [string, string][];
export function splitLines(
  lines: Promise<string[]>
): Promise<[string, string][]>;
export function splitLines(
  lines: string[] | Promise<string[]>
): [string, string][] | Promise<[string, string][]> {
  if (Array.isArray(lines)) return splitLinesSync(lines);
  return splitLinesAsync(Promise.resolve(lines));
}

export async function splitLinesAsync(
  lines: Promise<string[]>
): Promise<[string, string][]> {
  return splitLines(await lines);
}

export function splitLinesSync(
  lines: string[]
): [string, string][] {
  return lines
    .filter(line => line)
    .filter(line => !empltyLine.test(line))
    .map(lines => stripComas(lines))
    .map(line => {
      return line.split(':') as [string, string];
    })
    .filter(tuple => (tuple[0] ?? '').trim())
    .filter(tuple => (tuple[1] ?? '').trim());
}

export function reverseItems<T1, T2>(
  tuples: [T1, T2][]
): [T2, T1][] {
  return tuples.map(tuple => tuple.reverse() as [T2, T1]);
}

export const reversedSplitLines = (lines: string[]) =>
  reverseItems(splitLines(lines));

export async function reverseItemsAsync<T1, T2>(
  tuples: Promise<[T1, T2][]>
): Promise<[T2, T1][]> {
  return reverseItems(await tuples);
}

export const reversedSplitLinesAsync = async (
  lines: Promise<string[]>
) => reversedSplitLines(await lines);
