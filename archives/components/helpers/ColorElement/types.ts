export interface IColorElement {
  elementName: string;
  colorHexValue: string;
}
export type ColorElementTuple = [
  colorElementName: string,
  colorHexValue: string
];

export abstract class ColorElement_ implements IColorElement {
  constructor(public elementName: string, public colorHexValue: string) {}
}
