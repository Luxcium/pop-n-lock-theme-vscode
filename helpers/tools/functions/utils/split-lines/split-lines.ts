const empltyLines = /^\s*[{}[\]]$|^\s*$/;
export async function splitLines(
  lines: Promise<string[]>
): Promise<[string, string][]> {
  return splitLinesSync(await lines);
}

export async function reverseItems<T1, T2>(
  tuples: Promise<[T1, T2][]>
): Promise<[T2, T1][]> {
  return reverseItemsSync(await tuples);
}

export const reversedSplitLines = async (lines: Promise<string[]>) =>
  reversedSplitLinesSync(await lines);

export function splitLinesSync(lines: string[]): [string, string][] {
  return lines
    .filter(line => line)
    .filter(line => !empltyLines.test(line))
    .map(line => {
      return line.split(':') as [string, string];
    })
    .filter(tuple => (tuple[0] ?? '').trim())
    .filter(tuple => (tuple[1] ?? '').trim());
}

export function reverseItemsSync<T1, T2>(tuples: [T1, T2][]): [T2, T1][] {
  return tuples.map(tuple => tuple.reverse() as [T2, T1]);
}

export const reversedSplitLinesSync = (lines: string[]) =>
  reverseItemsSync(splitLinesSync(lines));

splitLinesSync;
reverseItemsSync;
reversedSplitLinesSync;
