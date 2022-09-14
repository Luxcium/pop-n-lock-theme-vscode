import { colorHexTemplatedSync } from './sync';

export async function colorHexTemplatedAsync(
  inputString: Promise<string> | string,
  template: string | [string] | [string, string] = ['', '']
): Promise<string> {
  return colorHexTemplatedSync(
    (await Promise.resolve(inputString)) || '',
    template
  );
}
