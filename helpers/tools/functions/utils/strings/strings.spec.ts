import {
  stripBraces,
  stripComas,
  stripJson,
  stripQuotes,
  stripSpaces,
} from '.';

describe('String parsers', () => {
  it('should stripBraces', () => {
    expect(stripBraces('([{" ,strip}{Braces, "}])')).toBe(
      '(" ,stripBraces, ")'
    );
  });
  it('should stripComas', () => {
    expect(stripComas('([{" ,strip,Comas, "}])')).toBe('([{" stripComas "}])');
  });
  it('should stripJson', () => {
    expect(stripJson('([{" ,strip,Json, "}]), "stripJson",')).toBe(
      '(,strip,Json,),stripJson,'
    );
  });
  it('should stripQuotes', () => {
    expect(stripQuotes('([{" strip"Quotes ",}])')).toBe('([{ stripQuotes ,}])');
  });

  it('should stripSpaces', () => {
    expect(stripSpaces('([{ " strip Spaces ", }])')).toBe(
      '([{"stripSpaces",}])'
    );
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
