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
            new ColorElement(colorElement).elementsAttributs.slice(-1)
          )
          .flat()
      ),
    ];
  }

  public get allAttributeList() {
    return [
      ...new Set(
        this.colorElementList_
          .map(colorElement => new ColorElement(colorElement).elementsAttributs)
          .flat()
      ),
    ];
  }

  public listAttribute(attribute: string, mainAttributesOnly: boolean = false) {
    let valueToReturn: any = [];
    if (mainAttributesOnly) {
      valueToReturn = [
        ...this.colorElementList_.filter(colorElement =>
          new ColorElement(colorElement).elementsAttributs
            .slice(-1)
            .some(element => element === attribute)
        ),
      ];
    }

    valueToReturn = [
      ...this.colorElementList_.filter(colorElement =>
        new ColorElement(colorElement).elementsAttributs.some(
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
    return new ColorElements([
      new ColorElement(this.colorElementList_[index]).toValue(),
    ]);
  }
  public get length() {
    return this.colorElementList_.length;
  }

  public tail(index: number = 0) {
    return this.colorElementList_
      .slice(index + 1)
      .map((colorElement: IColorElement) => new ColorElement(colorElement));
    /* new ColorElements(  [
      ...this.colorElementList_
        .slice(index + 1)
        .map(colorElement => new ColorElement(colorElement).toValue()),
    ]  ) */
  }
}

{
  function tests() {
    console.log('MUST implement tests for  :>> class ColorElements');
  }

  function main() {
    return tests();
  }
  if (require.main.filename === __filename) main();
}
