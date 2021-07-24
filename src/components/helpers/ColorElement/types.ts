export interface IColorElement_ {
  elementName: string;
  colorHexValue: string;
}
export type ColorElementTuple = [
  colorElementName: string,
  colorHexValue: string
];

export abstract class IColorElement implements IColorElement_ {
  elementName: string;
  colorHexValue: string;
}
