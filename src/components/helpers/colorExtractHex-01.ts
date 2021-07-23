export function colorExtractHex(
  color: string,
  template: string | [string] | [string, string] = ['', '']
) {
  const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
  const extractedHex =
    colorMatch && colorMatch.length === 1 ? colorMatch[0] : '';
  if (Array.isArray(template))
    return (
      (template.length === 1 && template[0] + extractedHex) ||
      (template.length === 2 && template[0] + extractedHex + template[1])
    );
  return (
    (typeof template === 'string' && template + extractedHex) || extractedHex
  );
}
// https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAMwK4DsDGMCWEVzRAG2gFEQYoBDDACVAAoAoOPQ6ALjgGdzMUBzADRM4MYAFswBCqI7covPnAA+cANpyFAXWVqN-AVx79tAXjUBycwcuaGASjgBvYfhTcWRKAFlpaABYcAErAfKRgPjD+AIJQlACecGb4ngB0Yr5+dAD0qgAMALQAnBT5CJqOAMwCABwAvll8mHYA3C447qDkVKIAJrQgicLMydAR-nAAZBMeoxkpBMD8MH6JJmYAjHAA-DPeGXnaHJatzJgIcHQx8SmYnFcUcXSiElKidnZDcFDAMEhQuIxmECLs9JNJgPNFnxlqsNpNpqDXsADnAANRwTqUDDAPqgBxKJSfZhPcRg0SQpYrNZmABM8JEpKRKPRmO6OP6aIZL3BqnWmg+wJawm+v3+F0+TziYGAEHOiPBsLg5j0fHM9Plok5rOxuJA+JU2t6-WEQtqDCAA
