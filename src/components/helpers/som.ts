import { PathOrFileDescriptor } from 'fs';
import { readFileAsync } from './file-read-write';

async function composite(path: PathOrFileDescriptor) {
  const step1 = readLines;
  const step2 = splitLines;
  const step3 = extractColorInformation;
  const step4 = normalizeStrings;
  const step5 = listElementPerColor;
  return step5(step4(step3(step2(step1(path)))));
}
async function main() {
  const pathToJsonColours =
    '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

  console.log(await composite(pathToJsonColours));
  return new colorElement();
}
main();

export async function readLines(path: PathOrFileDescriptor): Promise<string[]> {
  const stringBuff = (await readFileAsync(path)).toString();
  return stringBuff.split(/\r?\n/);
}

// const lines = readLines(pathToJsonColours);
const init = {};

export async function splitLines(
  lines_: Promise<string[]>
): Promise<[string, string][]> {
  return (await lines_).map(line => {
    return line.split(':').reverse() as [string, string];
  });
}
export async function extractColorInformation(
  some: Promise<[string, string][]>
): Promise<[string, string][]> {
  return (await some).map(list => {
    const [color, element] = list;
    const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
    const colorName =
      colorMatch && colorMatch.length === 1 ? colorMatch[0] : '';
    console.log(colorMatch);
    return ['x' + colorName, element] as [string, string];
  });
}

export async function normalizeStrings(
  some: Promise<[string, string][]>
): Promise<[string, string][]> {
  return (await some).map(list => {
    const [colorName, elementName] = list;

    return [colorName, elementName.replaceAll('"', '')];
  });
}

export async function listElementPerColor(
  some: Promise<[string, string][]>
): Promise<{ [key: string]: string[] }> {
  return (await some).reduce((obj, listItem) => {
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
  }, init);
}

class colorElement {
  constructor() {}
}
/*
.reduce<any>((prev: {}, curr: [string, string],_i,_L) => {
        prev[curr[0]];
        return {};
      }),
    {})
 */

// async function main() {
// console.log(await composite(pathToJsonColours));

// console.log(
//   (await lines)
//     .map(line => {
//       return line.split(':').reverse();
//     })
//     .map(list => {
//       const [color, element] = list;
//       const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
//       const colorName =
//         colorMatch && colorMatch.length === 1 ? colorMatch[0] : '';
//       console.log(colorMatch);
//       return ['x' + colorName, element] as [string, string];
//     })
//     .reduce((obj, listItem) => {
//       const [name, value] = listItem;
//       const trimedValue = value?.trim();
//       // wrong implementation ― will update
//       if (trimedValue != null) {
//         if (typeof obj[name] === 'undefined') {
//           const A = [];
//           A.push(trimedValue);
//           obj[name] = A;
//         } else if (Array.isArray(obj[name])) {
//           obj[name].push(trimedValue);
//         }
//       }
//       return obj;
//     }, init)
// );
//   return new colorElement();
// }
