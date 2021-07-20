// import { PathOrFileDescriptor } from 'fs';
// import { readFileAsync } from './file-read-write';

// async function composite(path: PathOrFileDescriptor) {
//   const step1 = readLines;
//   const step2 = splitLines;
//   const step3 = extractColorInformation;
//   const step4 = normalizeStrings;
//   const step5 = listElementPerColor;
//   return step5(step4(step3(step2(step1(path)))));
// }
// export const pathToJsonColours_: PathOrFileDescriptor =
//   '/home/luxcium/projects/main-POP-N-LOCK-x1DF2/data/extensions/pop-n-lock-theme-vscode/src/components/mappings/JSON/colors-auto.json';

// export async function getListElementPerColorObject(
//   pathToJsonColours: PathOrFileDescriptor = pathToJsonColours_
// ) {
//   void new colorElement();
//   return composite(pathToJsonColours);
// }

// export async function readLines(path: PathOrFileDescriptor): Promise<string[]> {
//   const stringBuff = (await readFileAsync(path)).toString();
//   return stringBuff.split(/\r?\n/);
// }

// export async function splitLines(
//   lines_: Promise<string[]>
// ): Promise<[string, string][]> {
//   return (await lines_).map(line => {
//     return line.split(':').reverse() as [string, string];
//   });
// }
// export async function extractColorInformation(
//   some: Promise<[string, string][]>
// ): Promise<[string, string][]> {
//   return (await some).map(list => {
//     const [color, element] = list;
//     const colorMatch: RegExpMatchArray = color.match(/[0-9a-f]{3,8}/gi);
//     const colorName =
//       colorMatch && colorMatch.length === 1 ? colorMatch[0] : '';
//     console.log(colorMatch);
//     return ['x' + colorName, element] as [string, string];
//   });
// }

// export async function normalizeStrings(
//   some: Promise<[string, string][]>
// ): Promise<[string, string][]> {
//   return (await some).map(list => {
//     const [colorName, elementName] = list;

//     return [colorName, elementName.replaceAll('"', '')];
//   });
// }

// export async function listElementPerColor(
//   some: Promise<[string, string][]>
// ): Promise<{ [key: string]: string[] }> {
//   return (await some).reduce((obj, listItem) => {
//     const [colorName, elementName] = listItem;
//     const trimedValue = elementName?.trim();
//     if (trimedValue != null) {
//       if (typeof obj[colorName] === 'undefined') {
//         const A = [];
//         A.push(trimedValue);
//         obj[colorName] = A;
//       } else if (Array.isArray(obj[colorName])) {
//         obj[colorName].push(trimedValue);
//       }
//     }
//     return obj;
//   }, {});
// }

// class colorElement {
//   constructor() {}
// }
