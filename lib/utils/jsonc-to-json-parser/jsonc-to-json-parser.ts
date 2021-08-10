export function unCommentJSONC(inputData: string) {
  const inputString = inputData
    .toString()
    .replaceAll(/\/\*[^]*?\*\//g, '')
    .replaceAll(/[^:]\/\/.*/g, '')
    .replaceAll(/^\s*[\n\r]*$/gm, '')
    .replaceAll(/,\s*[\n\r]*[\]]/g, ']')
    .replaceAll(/,(\s*[\n\r]*)?[}]/g, '}')
    .replaceAll(/[\n]+/g, '\n');
  const jsonParsed = JSON.parse(inputString);
  return jsonParsed;
}
