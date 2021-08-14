import { normalizeQuotedStrings } from '.';

describe('normalizeQuotedStrings', () => {
  it('Function « normalizeQuotedStrings » should exist', () => {
    expect(normalizeQuotedStrings).toBeDefined();
  });

  it('Function « normalizeQuotedStrings » should remove quotes in a string 2-plet', () => {
    expect(normalizeQuotedStrings([['"BOB"', 'AND "ALICE"']])).toStrictEqual([['BOB', 'AND ALICE']]);
  });

  it('Function « normalizeQuotedStrings » should remove quotes in a string 2-plet', () => {
    expect(normalizeQuotedStrings(['"BOB"', 'AND "ALICE"'])).toStrictEqual(['BOB', 'AND ALICE']);
  });

  it('Function « normalizeQuotedStrings » should remove quotes in a string 2-plet', async () => {
    expect(normalizeQuotedStrings(await Promise.resolve([['"BOB"', 'AND "ALICE"']]))).toStrictEqual([
      ['BOB', 'AND ALICE'],
    ]);
  });

  it('Function « normalizeQuotedStrings » should remove quotes in a string 2-plet', async () => {
    expect(normalizeQuotedStrings(await Promise.resolve(['"BOB"', 'AND "ALICE"']))).toStrictEqual(['BOB', 'AND ALICE']);
  });
});
