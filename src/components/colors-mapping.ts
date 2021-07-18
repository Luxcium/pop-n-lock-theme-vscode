import { writeFile } from 'fs';
import prettier from 'prettier';
import { promisify } from 'util';
import { colourOrdering } from './colour-listing';
import { colorsInfos } from './mappings/colors-auto';
import { unpackColors } from './unpack-colors';
const writeFileAsync = promisify(writeFile);
// const readFileAsync = promisify(readFile);

export const colorsMappingObjectPath =
  './src/components/mappings/colors-auto.ts';
export const colorsMappingJSONPath =
  './src/components/mappings/JSON/colors-auto.json';

export async function main() {
  let mainObject = {};
  colourOrdering.map((object1: { [key: string]: string }) => {
    const some = Object.entries(object1).flat();
    const elements = some[0].split('.');
    const value = [elements, some[1]];
    unpackColors({ elements, some1: some[1], mainObject });
    return value;
  });
  const source = `export const colorsInfos = ${JSON.stringify(
    mainObject,
    null,
    2
  )}\n`;
  const output = prettier.format(source, {
    trailingComma: 'all',
    singleQuote: true,
    parser: 'typescript',
  });
  await writeFileAsync(colorsMappingObjectPath, output);
}
main();

writeFileAsync(colorsMappingJSONPath, getColorsString(colorsInfos, ''));

// console.log(getColorsString(colorsInfos, ''));

export function getColorsString(colorInfos: any, start: string): any {
  function recursor(_colorInfos: any, _start: string) {
    let accumulator = {};
    for (let info in _colorInfos) {
      if (_colorInfos[info]?.color !== undefined) {
        const composant = JSON.parse(
          `{"${_start ? _start + '.' : ''}${info}": "${
            _colorInfos[info]?.color
          }"}`
        );
        accumulator = { ...accumulator, ...composant };
      } else {
        accumulator = {
          ...accumulator,
          ...recursor(_colorInfos[info], info),
        };
      }
    }
    return accumulator;
  }
  const out = recursor(colorInfos, start);
  // const output = JSON.stringify(out);
  // const format = JSON.parse(`{"colors":${output}}`);
  // return `${JSON.stringify(format, null, 2)}\n`;
  return `${JSON.stringify(out, null, 2)}\n`;
  // return;
  // return `{"colors":${output}\n}\n`; //output; //  recursor(colorInfos, start); //output; // `{${output}}\n`;
}

// if (colorsInfo?.color !== undefined) {
//   const composant = `{"${start ? start + '.' : ''}${colorsInfo}": "${
//     colorsInfo.color
//   }"}`;
//   console.log(composant);
//   return true;
// }
// for (let info in colorsInfo) {
//   getBack(colorsInfo[info], info, '');
// }

// return false;
//   if (colorsInfo?.color !== undefined) {
//     const composant = `{"${start ? start + '.' : ''}${subElement}": "${
//       colorsInfo.color
//     }"}`;
//     void composant;
//     return JSON.stringify(JSON.parse(composant));
//   }

//   for (let info in colorsInfo) {
//     getBack(info, colorsInfos[info], subElement);
//   }
// }

// return getBack('', colorsInfo[subElement], subElement);
// console.log(subElement);
// return colorsInfo;
// return subElement;
//   const composant = `{"${subElement ? subElement + '.' : ''}${subElement}": "${
//     colorsInfo[subElement].color
//   }"}`;
//   console.log(composant);
// }
// // const path = 'src/components/mappings/colors-auto.ts';
// // const start = '';
// let returnString = '';
// // for (let info in colorsInfo) {
//   const composant = `{"${start ? start + '.' : ''}${start}": "${
//     colorsInfo[start].color
//   }"}`;
//   returnString = JSON.parse(composant);
//   return returnString;
// } else {
//   returnString = getBack(start, colorsInfo[start]);
//   return returnString;
// // }
// // return path;
