import { IColorElement } from '../../types/IColorElement';
import ColorElement from '../color-element';

export class ColorElementList {
  private list: IColorElement[];
  private get colorList() {
    return this.list.map(item => new ColorElement(item));
  }
  private static of_(colorElementList: IColorElement[]) {
    return new ColorElementList(colorElementList);
  }
  public static of(...values: IColorElement[] | [IColorElement[]]) {
    const value = values.length === 1 ? values[0] : null;
    return Array.isArray(value)
      ? this.of_(value as IColorElement[])
      : this.of_(values as IColorElement[]);
  }
  protected constructor(colorElementList: IColorElement[]) {
    this.list = colorElementList;
  }
  public get length() {
    let returnValue;
    returnValue = this.list.length;
    return returnValue;
  }
  // get |-···―――――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
  public get fork(): ColorElement[] {
    return this.colorList;
  }
}
