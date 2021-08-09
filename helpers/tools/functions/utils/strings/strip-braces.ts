export function stripBraces(str: string): string {
  return str?.replaceAll(/[\{\}\[\]\s]/g, '');
}
