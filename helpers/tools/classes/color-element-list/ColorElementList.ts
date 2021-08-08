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
  public get fork(): ColorElement[] {
    return this.colorList;
  }
  // #region =======-| Iterator |-==============================================≈
  // iterator ====================================-| *[Symbol.iterator]() |-====
  /** Whenever an object needs to be iterated (such as at the beginning of a for...of loop), its `@@iterator` method is called with no arguments, and the returned iterator is used to obtain the values to be iterated. */
  public *[Symbol.iterator]() {
    yield* this.colorList;
  }
  // public =================================================-| entries() |-====
  public entries() {
    return this.fork.entries();
  }
  // public ====================================================-| keys() |-====
  public keys() {
    return this.fork.keys();
  }
  // public ==================================================-| values() |-====
  public values() {
    return this.fork.values();
  }
  // #endregion =======-| Iterator |-===========================================≈
  // public =================================================-| forEach() |-====
  public forEach(
    callbackfn: (
      value: IColorElement,
      index: number,
      array: IColorElement[]
    ) => void,
    thisArgument?: any
  ): void {
    return this.fork.forEach(callbackfn, thisArgument);
  }
  // public =====================================================-| map() |-====
  public map<U>(
    callbackfn: (
      value: IColorElement,
      index: number,
      array: IColorElement[]
    ) => U,
    thisArgument?: any
  ): U[] {
    return this.fork.map<U>(callbackfn, thisArgument);
  }
  // public ====================================================-| some() |-====
  public some(
    predicate: (
      value: ColorElement,
      index: number,
      array: ColorElement[]
    ) => unknown,
    thisArg?: any
  ): boolean {
    return this.fork.some(predicate, thisArg);
  }
  // public ==================================================-| filter() |-====
  // public filter(
  //   predicate: (
  //     value: ColorElement,
  //     index: number,
  //     array: ColorElement[]
  //   ) => value is ColorElement,
  //   thisArg?: any
  // ): ColorElementList;
  public filter(
    predicate: (
      value: ColorElement,
      index: number,
      array: ColorElement[]
    ) => boolean,
    thisArg?: any
  ): ColorElementList {
    return ColorElementList.of([...this.fork.filter(predicate, thisArg)]);
  }
  // public filterColor(colorHex: string) {
  //   return ColorElementList.of(
  //     this.list.filter(
  //       item =>
  //         item.colorHexValue ===
  //         new ColorElement('null', colorHex).colorHexValue
  //     )
  //   );
  // }
  // public filterAttribute(
  //   attribute: string,
  //   mainAttributesOnly: boolean = false
  // ) {
  //   // let valueToReturn: any = [];
  //   if (mainAttributesOnly) {
  //     return ColorElementList.of(
  //       this.list.filter(colorElement =>
  //         new ColorElement(colorElement).elementsAttributes
  //           .slice(-1)
  //           .some(element => element === attribute)
  //       )
  //     );
  //   }
  //   return ColorElementList.of(
  //     this.list.filter(colorElement =>
  //       new ColorElement(colorElement).elementsAttributes.some(
  //         element => element === attribute
  //       )
  //     )
  //   );
  // }
  // public countAttribute(
  //   attribute: string,
  //   mainAttributesOnly: boolean = false
  // ) {
  //   return this.filterAttribute(attribute, mainAttributesOnly).length;
  // }
  // public filterElement(element: string) {
  //   return ColorElementList.of(
  //     this.list.filter(colorElement =>
  //       new ColorElement(colorElement).elementList.some(
  //         item => item === element
  //       )
  //     )
  //   );
  //   // return ColorElementList.of(
  //   //   this.list.filter(
  //   //     item => new ColorElement(item).elementList.filter(predicate) //  === new ColorElement('null', element).colorHexValue
  //   //   )
  //   // );
  // }
  public head(index: number = 0) {
    const elementAtIndex = this.list[index];
    if (elementAtIndex != null && this.list.length > index) {
      return new ColorElement(elementAtIndex).toValue();
    }
    return new ColorElement(ColorElement.void).toValue();
  }
  public tail(index: number = 0) {
    return ColorElementList.of(
      this.list
        .slice(index + 1)
        .map((colorElement: IColorElement) => new ColorElement(colorElement))
    );
  }
  public toJson() {
    let json = {};
    this.list
      .map(colorElement => new ColorElement(colorElement))
      .map(colorElement => colorElement.toJson())
      .map(colorElement => (json = { ...json, ...colorElement }));
    return json;
  }
  public get mainAttributeList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement =>
            new ColorElement(colorElement).elementsAttributes.slice(-1)
          )
          .flat()
      ),
    ];
  }
  public get allAttributeList(): string[] {
    return [
      ...new Set(
        this.list
          .map(
            colorElement => new ColorElement(colorElement).elementsAttributes
          )
          .flat()
      ),
    ];
  }
  public get allElementsList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement => new ColorElement(colorElement).elementList)
          .flat()
      ),
    ];
  }
  public get firstAttributeList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement => [
            new ColorElement(colorElement).elementsAttributes[0]!, // as string // ?? '',
          ])
          .flat()
      ),
    ];
  }
  public get firstElementsList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement => [
            new ColorElement(colorElement).elementList[0]!, // as string // ?? '',
          ])
          .flat()
      ),
    ];
  }
}
