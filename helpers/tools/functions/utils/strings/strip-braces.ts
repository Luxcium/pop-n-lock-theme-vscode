export function stripBraces(str: string): string {
  return str?.replaceAll(/[\{\}\[\]]/g, '');
}
