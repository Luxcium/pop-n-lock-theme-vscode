export async function listElementPerColor(
  colorAndElementTuple: Promise<[string, string][]>
): Promise<{ [key: string]: string[] }> {
  return (await colorAndElementTuple).reduce((obj, listItem) => {
    const [colorName, elementName] = listItem;
    const trimedValue = elementName?.trim();
    if (trimedValue != null) {
      if (typeof obj[colorName] === 'undefined') {
        const A = [];
        A.push(trimedValue);
        obj[colorName] = A;
      } else if (Array.isArray(obj[colorName])) {
        obj[colorName].push(trimedValue);
      }
    }
    return obj;
  }, {});
}
