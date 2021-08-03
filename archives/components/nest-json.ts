export function nestJson(objectName: string, jsonObjectString: string): string {
  const format = JSON.parse(`{"${objectName}":${jsonObjectString}}`);
  return `${JSON.stringify(format, null, 2)}\n`;
}
