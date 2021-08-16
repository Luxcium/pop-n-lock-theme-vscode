import { duplicatesDummyListNulls } from '../../tests/mock/dummy-list';
import { IColorElement } from '../../types/IColorElement';
import ColorElement from '../color-element';

export class ColorElementList {
  private list: IColorElement[];
  private get colorList() {
    return this.list.map(item => {
      // console.log(item.colorHexValue);
      return new ColorElement(item.elementName).setColorHex(item.colorHexValue);
    });
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
  public removeDuplicates() {
    const list1 = this.list.slice();
    const list2 = this.list.slice();
    const list3 = [];
    // let count = 1;
    for (let i = 0; i < list1.length; i++) {
      const elementName1 = list1[i]?.elementName;
      for (let j = i + 1; j < list2.length; j++) {
        const elementName2 = list2[j]?.elementName;
        if (elementName1 === elementName2) {
          list3.push(list2.splice(j, 1));
        }
      }
    }
    this.list = list2;

    return list3;
  }
  protected constructor(colorElementList: IColorElement[]) {
    // this.removeDuplicates;
    this.list = colorElementList;
  }
  public push(colorElement: ColorElementList | ColorElement) {
    if (colorElement instanceof ColorElementList) {
      const list = colorElement.list;
      this.list.concat(list);
      return this;
    }
    return this;
  }
  public get length() {
    let returnValue;
    returnValue = this.list.length;
    return returnValue;
  }
  public get fork(): ColorElement[] {
    return this.colorList;
  }

  public toArray(): ColorElement[] {
    return this.colorList;
  }

  // #region ==================================-| Iterator |-====
  // iterator =====================-| *[Symbol.iterator]() |-====
  /** Whenever an object needs to be iterated (such as at the beginning of a for...of loop), its `@@iterator` method is called with no arguments, and the returned iterator is used to obtain the values to be iterated. */
  public *[Symbol.iterator]() {
    yield* this.colorList;
  }
  readonly [n: number]: any;
  // public ==================================-| entries() |-====
  public entries() {
    return this.fork.entries();
  }
  // public =====================================-| keys() |-====
  public keys() {
    return this.fork.keys();
  }
  // public ===================================-| values() |-====
  public values() {
    return this.fork.values();
  }
  // #endregion ===============================-| Iterator |-====
  // public ==================================-| forEach() |-====
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
  // public ======================================-| map() |-====
  public map<U>(
    callbackfn: (
      value: ColorElement,
      index: number,
      array: IColorElement[]
    ) => U,
    thisArgument?: any
  ): U[] {
    return this.fork.map<U>(callbackfn, thisArgument);
  }

  // public =====================================-| some() |-====
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
  // public ===================================-| filter() |-====
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
      index?: number,
      array?: ColorElement[]
    ) => boolean,
    thisArg?: any
  ): ColorElementList {
    return ColorElementList.of([...this.fork.filter(predicate, thisArg)]);
  }
  public selectByMainAttribute(attribute: string) {
    return this.filter(
      element => element.mainAttribute.toLowerCase() === attribute.toLowerCase()
    );
  }
  public selectByFirstAttribut(attribute: string) {
    return this.filter(
      element => element.firstAttribut.toLowerCase() === attribute.toLowerCase()
    );
  }
  public selectByMainElement(elementName: string) {
    return this.filter(
      element => element.mainElement.toLowerCase() === elementName.toLowerCase()
    );
  }
  public selectByElementName(elementName: string) {
    return this.filter(
      element => element.elementName.toLowerCase() === elementName.toLowerCase()
    );
  }
  public selectByColorHexValue(colorHexValue: string) {
    return this.filter(
      element =>
        element.colorHexValue.toLowerCase() === colorHexValue.toLowerCase()
    );
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
            new ColorElement(colorElement).attributeList.slice(-1)
          )
          .flat()
      ),
    ];
  }
  public get allAttributeList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement => new ColorElement(colorElement).attributeList)
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
            new ColorElement(colorElement).attributeList[0]!,
          ])
          .flat()
      ),
    ];
  }
  public get firstElementsList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement => [new ColorElement(colorElement).elementList[0]!])
          .flat()
      ),
    ];
  }
  // public =========================-| chageAllAlphasTo() |-====

  /** Will mutate the current object */
  public set setAllAlphasTo(eightPositionHex: string) {
    this.chageAllAlphasTo_(eightPositionHex, true);
  }

  /** Will return a new object object */
  public chageAllAlphasTo(eightPositionHex: string) {
    return this.chageAllAlphasTo_(eightPositionHex, false);
  }

  /**
   * Only the last 2 positions of the
   * 8 position hex will be used
   */
  private chageAllAlphasTo_(eightPositionHex: string, mutate: boolean) {
    const colorTransposed = new ColorElement('temp.DUMMY', eightPositionHex);
    if (colorTransposed.isValid) {
      let transposedList: ColorElement[] = this.colorList;
      const color = colorTransposed.colorHexValue;
      if (color.length === 9) {
        const slice1 = color.slice(7);
        const colorList = this.colorList;
        transposedList = colorList.map(colorElement => {
          let colorValue = colorElement.colorHexValue;
          if (colorValue.length === 9) {
            const slice2 = colorValue.slice(0, 7);
            colorValue = `${slice2}${slice1}`;
            colorElement.colorHex = colorValue;
          }
          return colorElement;
        });
      }

      if (mutate === true) {
        this.list = transposedList;
        return this;
      }
      return ColorElementList.of(transposedList);
    }
    console.warn(
      eightPositionHex,
      'is not a valid color hex or a probleme occured'
    );
    return this;
  }

  // public =========================-| chageAllColorsTo() |-====
  /** Will return a new object object */
  public chageAllColorsTo(eightPositionHex: string) {
    return this.chageAllColorsTo_(eightPositionHex, false);
  }
  /** Will mutate the current object */
  public set setAllColorsTo(eightPositionHex: string) {
    this.chageAllColorsTo_(eightPositionHex, true);
  }

  private chageAllColorsTo_(eightPositionHex: string, mutate: boolean) {
    const colorTransposed = new ColorElement('temp.DUMMY', eightPositionHex);
    if (colorTransposed.isValid) {
      const color = colorTransposed.colorHexValue;
      let colorList: ColorElement[];
      colorList = this.colorList;

      const transposedList = colorList.map(colorElement => {
        colorElement.colorHex = color;
        return colorElement;
      });
      if (mutate === true) {
        this.list = transposedList;
        return this;
      }
      return ColorElementList.of(transposedList);
    }
    console.warn(eightPositionHex, 'is not a valid color hex');
    return this;
  }
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  ColorElementList.of(duplicatesDummyListNulls()).removeDuplicates();
}
