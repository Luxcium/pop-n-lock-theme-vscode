export function stripParens(str: string): string {
  return str.replaceAll(/[\(\)]/g, '');
}
