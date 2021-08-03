import { ColorElement } from './ColorElement';
import { IColorElement } from './types';

export class ColorElements {
  private colorElementList_: IColorElement[];
  constructor(colorElementList: IColorElement[]) {
    this.colorElementList_ = colorElementList;
  }
  public get mainAttributeList() {
    return [
      ...new Set(
        this.colorElementList_
          .map(colorElement =>
            new ColorElement(colorElement).elementsAttributes.slice(-1)
          )
          .flat()
      ),
    ];
  }

  public get allAttributeList() {
    return [
      ...new Set(
        this.colorElementList_
          .map(
            colorElement => new ColorElement(colorElement).elementsAttributes
          )
          .flat()
      ),
    ];
  }

  public listAttribute(attribute: string, mainAttributesOnly: boolean = false) {
    let valueToReturn: any = [];
    if (mainAttributesOnly) {
      valueToReturn = [
        ...this.colorElementList_.filter(colorElement =>
          new ColorElement(colorElement).elementsAttributes
            .slice(-1)
            .some(element => element === attribute)
        ),
      ];
    }

    valueToReturn = [
      ...this.colorElementList_.filter(colorElement =>
        new ColorElement(colorElement).elementsAttributes.some(
          element => element === attribute
        )
      ),
    ];
    return new ColorElements(valueToReturn);
  }
  public countAttribute(
    attribute: string,
    mainAttributesOnly: boolean = false
  ) {
    return this.listAttribute(attribute, mainAttributesOnly).length;
  }
  public head(index: number = 0) {
    const elementAtIndex = this.colorElementList_[index];
    if (elementAtIndex != null && this.colorElementList_.length > index) {
      return new ColorElements([new ColorElement(elementAtIndex).toValue()]);
    }
    return new ColorElements([new ColorElement(ColorElement.void).toValue()]);
  }
  public get length() {
    return this.colorElementList_.length;
  }

  public tail(index: number = 0) {
    return this.colorElementList_
      .slice(index + 1)
      .map((colorElement: IColorElement) => new ColorElement(colorElement));
  }
}

function TESTING() {
  console.log('MUST implement tests for  :>> class ColorElements');
}

function main() {
  return TESTING();
}
if (require?.main?.filename === __filename) main();
