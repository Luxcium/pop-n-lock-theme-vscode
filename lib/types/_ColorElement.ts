import { IColorElement } from './IColorElement';

export abstract class _ColorElement implements IColorElement {
  constructor(
    public elementName: string,
    public colorHexValue: string
  ) {}
}
