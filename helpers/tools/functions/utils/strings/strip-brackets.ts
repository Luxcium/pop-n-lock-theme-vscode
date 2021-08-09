export function stripBrackets(str: string): string {
  return str?.replaceAll(/[\[\]]/g, '');
}
