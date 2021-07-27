import { colorHexMatch, extractColorInformation } from '.';

describe('colorHexMatch', () => {
  test('expect result toBe null', () => {
    let result: any = colorHexMatch('#FF', ['1']);
    expect(result).toBe(null);
  });
  it('expect result toBeDefined', () => {
    let result: any = colorHexMatch('#FFBBCCDD', ['1']);
    expect(result).toBeDefined();
  });

  test('expect result toBe "#FFF"', () => {
    let result: any = colorHexMatch('#fff', ['#']);
    expect(result).toBe('#FFF');
  });
  test('from async expect result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve('#fff'), ['#']);
    expect(result).toBe('#FFF');
  });
  test('from async expect result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve('#fff'), '[#]');
    expect(result).toBe('[#]FFF');
  });
  test('colorExtractHexAsync template: string | [string] | [string, string] = ["", ""] result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve(null));
    expect(result).toBeNull();
  });

  test('colorExtractHexAsync template: string | [string] | [string, string] = ["", ""] result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve('#fff'), '');
    expect(result).toBe('FFF');
  });

  test('colorExtractHexAsync template: string | [string] | [string, string] = ["", ""] result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve('#fff'), ['']);
    expect(result).toBe('FFF');
  });

  test('colorExtractHexAsync template: string | [string] | [string, string] = ["", ""] result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve('#fff'), ['', '']);
    expect(result).toBe('FFF');
  });
  test('from async expect result toBe "#FFF"', () => {
    let result: any = colorHexMatch('#fff', '');
    expect(result).toBe('FFF');
  });
  test('from async expect result toBe "#FFF"', async () => {
    let result: any = await colorHexMatch(Promise.resolve('#fff'), ['x', '_']);
    expect(result).toBe('xFFF_');
  });
  test('from async expect result toBe "#FFF"', () => {
    let result: any = colorHexMatch(null);
    expect(result).toBeNull();
  });
  test('extractColorInformation result   template: string | [string] | [string, string] = "x" toBe "#FFF"', async () => {
    let result: any = await extractColorInformation(
      Promise.resolve([['random', '#fff']]),
      ['x']
    );
    expect(result).toStrictEqual([['random', 'xFFF']]);
  });

  test('extractColorInformation result   template: string | [string] | [string, string] = "x" toBe "#FFF"', async () => {
    let result: any = await extractColorInformation(
      Promise.resolve([['random', '#fff']])
    );
    expect(result).toStrictEqual([['random', 'xFFF']]);
  });

  test('extractColorInformation result   template: string | [string] | [string, string] = "x" toBe "#FFF"', async () => {
    let result: any = await extractColorInformation(
      Promise.resolve([['random', '#fff']]),
      'x'
    );
    expect(result).toStrictEqual([['random', 'xFFF']]);
  });

  test('extractColorInformation result   template: string | [string] | [string, string] = "x" toBe "#FFF"', async () => {
    let result: any = await extractColorInformation(
      Promise.resolve([['random', '#fff']]),
      ['x', '_']
    );
    expect(result).toStrictEqual([['random', 'xFFF_']]);
  });
});
