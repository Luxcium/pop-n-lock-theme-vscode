export const kinds = [
  'foreground',
  'background',
  'border',
  'outline',
  'highlight',
  'shadow',
  'separator',
  'indicator',
  'opacity',
  'empty',
];

export function getKind(str: string): string {
  if (str.toLowerCase().length === 0) {
    return 'null';
  }
  for (const kind in kinds) {
    if (str.toLowerCase().includes(kind)) {
      return kind;
    }
  }
  return 'other';
}
