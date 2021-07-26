import { IColorElement } from '.';

export abstract class _ColorElement implements IColorElement {
  constructor(public elementName: string, public colorHexValue: string) {}
}
