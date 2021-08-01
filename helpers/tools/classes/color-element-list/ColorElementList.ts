import { ColorElement } from '..';
import { IColorElement } from '../../types';

export class ColorElementList {
  private list: IColorElement[];
  constructor(colorElementList: IColorElement[]) {
    this.list = colorElementList;
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

  public get length() {
    return this.list.length;
  }

  public filterColor(colorHex: string) {
    return new ColorElementList(
      this.list.filter(
        item =>
          item.colorHexValue ===
          new ColorElement('null', colorHex).colorHexValue
      )
    );
  }

  public filterAttribute(
    attribute: string,
    mainAttributesOnly: boolean = false
  ) {
    // let valueToReturn: any = [];
    if (mainAttributesOnly) {
      return new ColorElementList(
        this.list.filter(colorElement =>
          new ColorElement(colorElement).elementsAttributes
            .slice(-1)
            .some(element => element === attribute)
        )
      );
    }

    return new ColorElementList(
      this.list.filter(colorElement =>
        new ColorElement(colorElement).elementsAttributes.some(
          element => element === attribute
        )
      )
    );
  }

  public countAttribute(
    attribute: string,
    mainAttributesOnly: boolean = false
  ) {
    return this.filterAttribute(attribute, mainAttributesOnly).length;
  }

  public filterElement(element: string) {
    return new ColorElementList(
      this.list.filter(colorElement =>
        new ColorElement(colorElement).elementList.some(
          item => item === element
        )
      )
    );

    // return new ColorElementList(
    //   this.list.filter(
    //     item => new ColorElement(item).elementList.filter(predicate) //  === new ColorElement('null', element).colorHexValue
    //   )
    // );
  }

  public head(index: number = 0) {
    const elementAtIndex = this.list[index];
    if (elementAtIndex != null && this.list.length > index) {
      return new ColorElement(elementAtIndex).toValue();
    }
    return new ColorElement(ColorElement.void).toValue();
  }

  public tail(index: number = 0) {
    return new ColorElementList(
      this.list
        .slice(index + 1)
        .map((colorElement: IColorElement) => new ColorElement(colorElement))
    );
  }
}

// function TESTING() {
//   console.log('MUST implement tests for  :>> class ColorElements');
// }

// function main() {
//   return TESTING();
// }
// if (require?.main?.filename === __filename) main();
