import { colourOrdering } from './colour-listing';
import { unpackColors } from './unpack-colors';

export function main() {
  let mainObject = {};
  colourOrdering.map((object1: { [key: string]: string }) => {
    const some = Object.entries(object1).flat();
    const elements = some[0].split('.');
    const value = [elements, some[1]];
    unpackColors({ elements, some1: some[1], mainObject });
    return value;
  });
}

main();
