const re = /^\s*[{}[\]]$|^\s$/;
void re;
export async function splitLines(
  lines: Promise<string[]>
): Promise<[string, string][]> {
  return (await lines)
    .filter(line => line)
    .filter(line => !re.test(line))
    .map(line => {
      return line.split(':').reverse() as [string, string];
    })
    .filter(tuple => tuple[0].trim())
    .filter(tuple => tuple[1].trim());
}
// export type ArrayOrTuple<T> = Array<T> | [T, T];

export async function reverseItems<T1, T2>(
  tuples: Promise<[T1, T2][]>
): Promise<[T2, T1][]> {
  return (await tuples).map(tuple => tuple.reverse() as [T2, T1]);
}

export const reversedSplitLines = async (lines: Promise<string[]>) =>
  reverseItems(splitLines(lines));

// const stringTuple = ['bob', 'alice'];
// const stringTupleAnotated: [string, string] = ['bob', 'alice'];

// let stringArrayAnotated: Array<string>;
// stringArrayAnotated = stringTupleAnotated;
// stringArrayAnotated = stringTuple;

// let tupleAnotated: [string, string];
// tupleAnotated = stringArrayAnotated;
// tupleAnotated = stringTuple;

// void stringTuple, tupleAnotated;

// export type ArrayOrTuple2<T, U> = U extends [T, T] ? [T, T] : Array<T>;

export type InTuple = [string, string];
export type OutTuple = [string, string];

export function reverseItems2<I extends InTuple, O extends OutTuple>(
  tuples: Promise<I[]>
): Promise<O[]> {
  return tuples.then(sets => {
    return sets.map(set => set.reverse() as O);
  });
}

const input = Promise.resolve([['Foo and Bar', 42] as [string, number]]);
const output = reverseItems(input);

void output;
