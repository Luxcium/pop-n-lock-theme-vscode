import { colorExtractHex } from './helpers';

export class ColorElement implements IColorElement {
  public colorElementName: string;

  public colorHexValue: string;

  public isVoid: boolean;
  private initialElementName_: string;
  private initialColor_: string;
  private elementsList_: string[];
  private elementsAttributs_: string[];

  constructor(colorElement: ColorElementTuple);
  constructor(colorElement: IColorElement);
  constructor(colorElement: string);
  constructor(colorElement: string, colorHexValue: string);
  constructor(
    colorElement: string | IColorElement | ColorElementTuple,
    colorHexValue: string = null
  ) {
    let colorElementName: string = 'VOID';
    let colorValue: string = null;

    if (Array.isArray(colorElement)) {
      [colorElementName, colorValue] = colorElement;
    } else if (typeof colorElement === 'object') {
      colorElementName = colorElement.colorElementName;
      colorValue = colorElement.colorHexValue;
    } else if (typeof colorElement === 'string') {
      colorElementName = colorElement;
      colorValue = colorHexValue || null;
    }
    this.colorHexValue = colorValue;
    this.colorElementName = colorElementName;
    this.initialElementName_ = colorElementName;
    this.setColorHex(colorValue);

    Object.defineProperties(this, {
      colorElementName: {
        value: colorElement,
        enumerable: true,
      },
      colorHexValue: {
        value: colorElement,
        enumerable: true,
      },
      isVoid: {
        value: this.initialElementName_ === 'VOID' ? true : false,
        enumerable: true,
      },
      initialElementName_: {
        value: colorElement,
        enumerable: false,
      },
      elementsList_: {
        value: this.setElementList(colorElementName),
        enumerable: false,
      },
      elementsAttributs_: {
        value: this.setElementsAttributs_(colorElementName),
        enumerable: false,
      },
      initialColor_: {
        value: colorHexValue || null,
        enumerable: false,
      },
    });

    if (this.isNotNull) {
      Object.defineProperties(this, {
        elementsList_: {
          enumerable: true,
        },
        elementsAttributs_: {
          enumerable: true,
        },
        isVoid: {
          enumerable: false,
        },
      });
    }

    return this;
  }
  private setElementList(elementName: string = this.initialElementName_) {
    return elementName.split('.');
  }
  private setElementsAttributs_(
    elementName: string = this.initialElementName_
  ) {
    return elementName
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
  }

  get initialColor() {
    return this.initialColor_;
  }

  set colorHex(value: string) {
    const setValue = this.isNotNull ? value : null;
    this.setColorHex(setValue ? value : null);
  }
  get colorHex() {
    return this.initialColor_;
  }
  get elementName() {
    return this.initialElementName_;
  }

  public setColorHex(value: string) {
    this.colorHexValue = value;
    this.initialColor_ = value;
  }
  get isNull() {
    return this.initialElementName_ === 'VOID' ? true : false;
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

  public toString(): string;

  public toString(simpleString: true): string;

  public toString(simpleString: false): string;

  public toString(
    simpleString: false,
    replacer: (this: any, key: string, value: any) => any,
    space: number
  ): string;

  public toString(
    simpleString: false,
    replacer: (this: any, key: string, value: any) => any,
    space: string
  ): string;

  public toString(
    simpleString: boolean = true,
    replacer: (this: any, key: string, value: any) => any = null,
    space: string | number = 2
  ): string {
    if (simpleString) {
      return `"${this.initialElementName_}":"${colorExtractHex(
        this.initialColor_,
        '#'
      )}"`;
    }
    return `${this.constructor.name} ${JSON.stringify(
      this.toValue(),
      replacer,
      space
    )}`;
  }

  public toValue() {
    const tempString = `{"colorElementName": "${this.colorElementName}", "colorHexValue": "${this.colorHexValue}"}`;
    const tempString1 = `{"colorElementName": "","colorHexValue": ""}`;
    void tempString1;
    return JSON.parse(tempString);
  }
}
export interface IColorElement {
  colorElementName: string;
  colorHexValue: string;
}
export type ColorElementTuple = [
  colorElementName: string,
  colorHexValue: string
];
