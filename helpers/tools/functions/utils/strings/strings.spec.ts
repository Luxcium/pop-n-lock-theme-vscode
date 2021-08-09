import { stripBraces, stripComas, stripJson, stripQuotes } from '.';

describe('String parsers', () => {
  it('should stripBraces', () => {
    expect(stripBraces('( /[\\{\\}\\[\\]\\s]/g )')).toBe('(/\\\\\\\\\\s/g)');
  });
  it('should stripComas', () => {
    expect(stripComas('stripComas,')).toBe('stripComas');
  });
  it('should stripJson', () => {
    expect(stripJson('"( /[\\{\\}\\[\\]\\s]/g )", "stripComas",')).toBe(
      '(/\\\\\\\\\\s/g),stripComas,'
    );
  });
  it('should stripQuotes', () => {
    expect(stripQuotes('"stripQuotes"')).toBe('stripQuotes');
  });
});

/*
export function stripQuotes(str: string): string {
  return str?.replaceAll('"', '');
}

export function stripComas(str: string): string {
  return str?.replaceAll(',', '');
}

export function stripBraces(str: string): string {
  return str?.replaceAll(/[\{\}\[\]\s]/g, '');
}

export function stripJson(str: string): string {
  return stripQuotes(stripBraces(str));
}

 */
