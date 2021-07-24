export interface IColorElement {
  elementName: string;
  colorHexValue: string;
}
export type ColorElementTuple = [
  colorElementName: string,
  colorHexValue: string
];

export abstract class ColorElement_ implements IColorElement {
  elementName: string;
  colorHexValue: string;
}
