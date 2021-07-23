export class ColorElement {
  private initialElementName_: string;
  private initialColor_: string;
  private colorHex_: string;
  private elementName_: string;
  private elementsList_: string[];
  private elementsAttributs_: string[];
  public isVoid: boolean;

  constructor(elementName: string, colorHex?: string) {
    this.setColorHex(colorHex || null);

    Object.defineProperties(this, {
      isVoid: {
        value: this.elementName_ === 'VOID' ? true : false,
        enumerable: true,
      },
      elementName_: {
        value: elementName,
        enumerable: false,
      },
      elementsList_: {
        value: this.setElementList(elementName),
        enumerable: false,
      },
      elementsAttributs_: {
        value: this.setElementsAttributs_(elementName),
        enumerable: false,
      },
      colorHex_: {
        value: colorHex || null,
        enumerable: false,
      },
      initialColor_: {
        value: colorHex || null,
        enumerable: false,
      },
      initialElementName_: {
        value: elementName,
        enumerable: false,
      },
    });

    if (this.isNotNull) {
      Object.defineProperties(this, {
        elementName_: {
          enumerable: true,
        },
        elementsList_: {
          enumerable: true,
        },
        elementsAttributs_: {
          enumerable: true,
        },
        colorHex_: {
          value: colorHex || null,
          enumerable: true,
        },
        isVoid: {
          enumerable: false,
        },
      });
    }
    return this;
  }
  private setElementList(elementName: string = this.elementName_) {
    return elementName.split('.');
  }
  private setElementsAttributs_(elementName: string = this.elementName_) {
    return elementName
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
  }
  private get initialElementName() {
    return this.initialElementName_;
  }

  get initialColor() {
    return this.initialColor_;
  }

  set colorHex(value: string) {
    const setValue = this.isNotNull ? value : null;
    this.colorHex_ = setValue ? value : null;
  }
  get colorHex() {
    return this.colorHex_;
  }
  get elementName() {
    return this.initialElementName;
  }
  setColorHex(value: string) {
    this.colorHex_ = value;
  }
  get isNull() {
    return this.elementName_ === 'VOID' ? true : false;
  }
  private get isNotNull() {
    return !this.isNull;
  }
  get elementList() {
    return this.isNotNull ? this.elementsList_ : [];
  }
  get elementsAttributs() {
    return this.isNotNull ? this.elementsAttributs_ : [];
  }
  public toString() {
    return `"${this.initialElementName_}":"${this.colorHex_}"`;
  }
}
