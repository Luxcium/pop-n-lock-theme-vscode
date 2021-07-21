export async function listElementPerColor(
  someList: Promise<[string, string][]>
): Promise<{ [key: string]: string[] }> {
  return (await someList).reduce((obj, listItem) => {
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
