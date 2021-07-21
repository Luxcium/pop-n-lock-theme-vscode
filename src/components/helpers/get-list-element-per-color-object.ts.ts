export class colorElement {
  private colorHex_: string;
  private elementName: string;
  internalElementsList: string[];
  internalElementsAttributs: string[];
  constructor(elementName: string, colorHex?: string) {
    this.elementName = elementName;
    this.internalElementsList = elementName.toLowerCase().split('.');
    this.internalElementsAttributs = elementName
      .split(/[A-Z.]/)
      .map(item => item.toLowerCase());
    this.setColorHex(colorHex);
  }
  get initialElementName() {
    return this.elementName;
  }

  get initialColorName() {
    return this.colorHex_;
  }

  set colorHex(value: string) {
    this.colorHex_ = value;
  }
  get colorHex() {
    return this.colorHex_;
  }
  setColorHex(value: string) {
    this.colorHex_ = value;
  }
}
