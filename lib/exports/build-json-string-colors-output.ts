import type { ColorElement, ColorElementSelections } from '../types';
import { unCommentJSONC } from '../utils/jsonc-to-json-parser/jsonc-to-json-parser';
import { prettifyJsonString } from '../utils/prettify-json-string';
import { colorElementsAgregator } from '../utils/write-output/write-output';

export function buildJsonOutputStringColors(
  inputData: string,
  colorslist: ColorElement[],
  description: string = ''
) {
  // const inputData = await getInputData();
  const parsedJsonBase = unCommentJSONC(inputData);
  let descriptor = !description ? {} : { description };

  const source = {
    ...parsedJsonBase,
    $schema: 'vscode://schemas/color-theme',
    name: 'Pop N Lock Theme by Luxcium',
    type: 'dark',
    ...descriptor,
    colors: {
      ...colorElementsAgregator(colorslist),
    },
  };
  return prettifyJsonString(source);
}

export function buildSubSelectionListJsonOutput(
  subSelectionList: ColorElementSelections
) {
  return subSelectionList;
  // ColorElementSelections
}
