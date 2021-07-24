import { colorExtractHex } from './helpers';
import { ColorElementTuple, ColorElement_, IColorElement } from './types';

export class ColorElement implements IColorElement, ColorElement_ {
  public elementName: string;
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
    colorElement: ColorElementTuple | ColorElement_ | string,
    colorHexValue: string = null
  ) {
    this.initialElementName_ = 'VOID';
    this.initialColor_ = null;

    let colorElementName: string = this.initialElementName_;
    let colorValue: string = this.initialColor_;

    if (Array.isArray(colorElement)) {
      [colorElementName, colorValue] = colorElement;
    } else if (typeof colorElement === 'object') {
      if (colorElement instanceof ColorElement_) {
        console.log(colorElement instanceof ColorElement_);
      } else {
        console.error('colorElement is-NOT-instance-of IColorElement');
      }
      colorElementName = colorElement.elementName;
      colorValue = colorElement.colorHexValue;
    } else if (typeof colorElement === 'string') {
      colorElementName = colorElement;
      colorValue = colorHexValue || null;
    }

    this.setInitialNameValue(colorElementName);
    this.setInitialColorHexValue(colorValue);

    Object.defineProperties(this, {
      elementName: {
        enumerable: true,
      },
      colorHexValue: {
        enumerable: true,
      },
      isVoid: {
        enumerable: true,
      },
      initialElementName_: {
        enumerable: false,
      },
      elementsList_: {
        enumerable: false,
      },
      elementsAttributs_: {
        enumerable: false,
      },
      initialColor_: {
        enumerable: false,
      },
    });

    if (!this.isNull) {
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

  private setInitialNameValue(elementName: string) {
    this.elementName = elementName;
    this.initialElementName_ = elementName;
    this.isVoid = this.initialElementName_ === 'VOID' ? true : false;
    this.setElementList(elementName);
    this.setElementsAttributs(elementName);
  }

  private setInitialColorHexValue(colorValue: string) {
    this.colorHexValue = colorValue;
    this.initialColor_ = this.initialColor_ ? this.initialColor_ : colorValue;
  }

  private setElementList(elementName: string = this.initialElementName_) {
    return elementName.split('.');
  }
  private setElementsAttributs(elementName: string = this.initialElementName_) {
    return elementName
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
  }

  public setColorHex(colorValue: string) {
    this.colorHexValue = colorValue;
    this.initialColor_ = this.initialColor_ ? this.initialColor_ : colorValue;
  }

  get initialColor() {
    return this.initialColor_;
  }

  get colorHex() {
    return this.colorHexValue;
  }

  set colorHex(colorValue: string) {
    const setValue = !this.isNull ? colorValue : null;
    this.setColorHex(setValue ? colorValue : this.initialColor);
  }

  get colorElementName() {
    return this.initialElementName_;
  }

  get isNull() {
    return this.initialElementName_ === 'VOID' ? true : false;
  }

  get elementList() {
    return !this.isNull ? this.elementsList_ : [];
  }

  get elementsAttributs() {
    return !this.isNull ? this.elementsAttributs_ : [];
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
    const tempString = `{"colorElementName": "${this.elementName}", "colorHexValue": "${this.colorHexValue}"}`;
    const tempString1 = `{"colorElementName": "","colorHexValue": ""}`;
    void tempString1;
    console.log(this.elementName);
    console.log(tempString);
    return JSON.parse(tempString);
  }
}
