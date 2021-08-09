export function stripSpaces(str: string): string {
  return str?.replaceAll(/\s/g, '');
}
