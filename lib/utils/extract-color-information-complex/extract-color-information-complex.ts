// export function colorHexMatchComplex(inputString: string | null): string;
// export function colorHexMatchComplex(
//   inputString: string | null,
//   template?: string | [string] | [string, string]
// ): string;
// export function colorHexMatchComplex(
//   inputString: Promise<string | null>
// ): Promise<string>;
// export function colorHexMatchComplex(
//   inputString: Promise<string>,
//   template?: string | [string] | [string, string]
// ): Promise<string>;
// export function colorHexMatchComplex(
//   inputString: Promise<string | null> | string | null,
//   template: string | [string] | [string, string] = ['', '']
// ): Promise<string | null> | string | null {
//   if (typeof inputString === 'string' || inputString === null) {
//     return colorHexMatch_(inputString, template);
//   }
//   return colorExtractHexAsync(inputString, template);
// }

export function colorHexMatch_(
  inputString: string | null,
  template: string | [string] | [string, string]
): string | null {
  if (inputString == null) return null;
  const colorMatch: RegExpMatchArray | null =
    inputString.match(/[0-9a-f]{3,8}/gi);
  if (colorMatch && colorMatch.length === 1 && colorMatch[0]) {
    const extractedHex = colorMatch[0].toUpperCase();
    if (Array.isArray(template)) {
      if (template.length === 1) return template[0] + extractedHex;
      if (template.length === 2)
        return template[0] + extractedHex + template[1];
    }
    if (typeof template === 'string') return template + extractedHex;
  }
  return null;
}
