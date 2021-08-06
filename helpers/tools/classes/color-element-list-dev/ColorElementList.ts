import { IColorElement } from '../../types/IColorElement';
import ColorElement from '../color-element';

export class ColorElementList {
  private list: IColorElement[];
  private get colorList() {
    return this.list.map(item => new ColorElement(item));
  }
  public constructor(colorElementList: IColorElement[]) {
    this.list = colorElementList;
  }
  public get length() {
    return this.list.length;
  }
  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): ColorElement[] {
    return this.colorList;
  }
}
