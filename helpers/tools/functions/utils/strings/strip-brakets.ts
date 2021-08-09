export function stripBrakets(str: string): string {
  return str?.replaceAll(/[\[\]]/g, '');
}
