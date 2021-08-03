import { colorslist } from '../../color/list';
import { IColorElement } from '../../types/IColorElement';
import ColorElement from '../color-element';

class ColorElementList {
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

  public get firstAttributeList(): string[] {
    return [
      ...new Set(
        this.list
          .map(colorElement => [
            new ColorElement(colorElement).elementsAttributes[0] ?? '',
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
            new ColorElement(colorElement).elementList[0] ?? '',
          ])
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
  public toJson() {
    let json = {};
    this.list
      .map(colorElement => new ColorElement(colorElement))
      .map(colorElement => colorElement.toJson())
      .map(colorElement => (json = { ...json, ...colorElement }));
    return json;
  }
}

// function TESTING() {
//   console.log('MUST implement tests for  :>> class ColorElements');
// }

function TESTING() {
  new ColorElementList(colorslist).firstAttributeList.map(item =>
    console.log(item)
  ); // return TESTING();
}
if (require?.main?.filename === __filename) TESTING();

function MAIN() {
  console.log(ColorElementList);
}
if (require?.main?.filename === __filename) MAIN();

export default ColorElementList;
