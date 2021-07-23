import { ColorElement } from './ColorElement';

export class ColorElements {
  private colorElementList_: ColorElement[];
  constructor(colorElementList: ColorElement[]) {
    this.colorElementList_ = colorElementList;
  }
  public get mainAttributeList() {
    return [
      ...new Set(
        this.colorElementList_
          .map(item => item.elementsAttributs.slice(-1))
          .flat()
      ),
    ];
  }

  public get allAttributeList() {
    return [
      ...new Set(
        this.colorElementList_.map(item => item.elementsAttributs).flat()
      ),
    ];
  }
  public countAttribute(
    attribute: string,
    mainAttributesOnly: boolean = false
  ) {
    return this.listAttribute(attribute, mainAttributesOnly).length;
  }
  public listAttribute(attribute: string, mainAttributesOnly: boolean = false) {
    if (mainAttributesOnly) {
      return [
        ...this.colorElementList_.filter(item =>
          item.elementsAttributs
            .slice(-1)
            .some(element => element === attribute)
        ),
      ];
    }
    return [
      ...this.colorElementList_.filter(item =>
        item.elementsAttributs.some(element => element === attribute)
      ),
    ];
  }
}
