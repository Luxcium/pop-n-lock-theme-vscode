export const kinds = [
  'foreground',
  'background',
  'border',
  'outline',
  'highlight',
  'shadow',
  'boolean',
  'iconErrored',
  'iconFailed',
  'iconPassed',
  'iconQueued',
  'iconSkipped',
  'iconUnset',
  'indicator',
  'error',
  'fill',
  'lines',
  'name',
  'number',
  'opacity',
  'runAction',
  'separator',
  'string',
  'stroke',
  'value',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
  'other',
];

export function getColorKind(str: string): string {
  if (str.toLowerCase().length === 0) {
    return 'null';
  }
  let kind: string = 'empty';
  for (kind of kinds) {
    if (str.toLowerCase().includes(kind.toLowerCase())) {
      break;
    }
  }
  return kind;
}
