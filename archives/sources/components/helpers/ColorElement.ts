export class ColorElement {
  private colorHex_: string;
  private elementName: string;
  private internalElementsList: string[];
  private internalElementsAttributs: string[];
  private isVoid: boolean;
  constructor(elementName: string, colorHex?: string) {
    this.elementName = elementName;
    this.isVoid = elementName === 'VOID' ? true : false;
    this.internalElementsList = elementName.toLowerCase().split('.');
    // gitDecoration.deletedResourceForeground
    this.internalElementsAttributs = elementName
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
    this.setColorHex(colorHex);
    void this.internalElementsList;
    Object.defineProperties(this, {
      internalElementsList: {
        enumerable: false,
      },
      internalElementsAttributs: {
        enumerable: false,
      },
      colorHex_: {
        value: null,
        enumerable: false,
      },
    });
    if (this.isNotNull) {
      Object.defineProperties(this, {
        isVoid: {
          enumerable: false,
        },
        internalElementsList: {
          enumerable: true,
        },
        internalElementsAttributs: {
          enumerable: true,
        },
        colorHex_: {
          enumerable: true,
        },
      });
    }
  }
  get initialElementName() {
    return this.elementName;
  }

  get initialColorName() {
    return this.colorHex_;
  }

  set colorHex(value: string) {
    this.colorHex_ = this.isNotNull ? value : null;
  }
  get colorHex() {
    return this.colorHex_;
  }
  setColorHex(value: string) {
    this.colorHex_ = value;
  }
  get isNull() {
    return this.isVoid;
  }
  private get isNotNull() {
    return !this.isVoid;
  }
  get elementList() {
    return this.isNotNull ? this.internalElementsList : [];
  }
  get elementsAttributs() {
    return this.isNotNull ? this.internalElementsAttributs : [];
  }
}
