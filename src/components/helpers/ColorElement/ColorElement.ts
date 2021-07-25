import { colorHexMatch } from './helpers';
import { ColorElementTuple, ColorElement_, IColorElement } from './types';

export class ColorElement implements IColorElement, ColorElement_ {
  public elementName: string;
  public colorHexValue: string;
  public isVoid: boolean;
  private initialElementName_: string;
  private initialColor_: string;
  private elementsList_: string[];
  private elementsAttributes_: string[];

  constructor(colorElement: ColorElementTuple);
  constructor(colorElement: ColorElement_);
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
      colorElementName = colorElement.elementName;
      colorValue = colorElement.colorHexValue;
    } else if (!!colorElement === true && typeof colorElement === 'string') {
      //** !!colorElement === true is to validate against empty strig or null or undefined //*/

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
      elementsAttributes_: {
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
        elementsAttributes_: {
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
    this.setElementList(elementName);
    this.setElementsAttributes(elementName);
    this.elementName = elementName;
    this.initialElementName_ = elementName;
    this.isVoid = this.initialElementName_ === 'VOID' ? true : false;
  }

  private setInitialColorHexValue(colorValue: string) {
    this.initialColor_ = this.initialColor_ ? this.initialColor_ : colorValue;
    this.setColorHex(colorValue);
  }

  private setElementList(elementName: string = this.initialElementName_) {
    this.elementsList_ = elementName.split('.');
  }
  private setElementsAttributes(
    elementName: string = this.initialElementName_
  ) {
    this.elementsAttributes_ = elementName
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
  }

  public setColorHex(colorValue: string) {
    this.colorHexValue = colorHexMatch(colorValue, '#');
    this.setInitialColorHex(colorValue);
  }
  private setInitialColorHex(colorValue: string) {
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

  get elementsAttributes() {
    return !this.isNull ? this.elementsAttributes_ : [];
  }
  get mainAttribute() {
    return !this.isNull ? this.elementsAttributes_.slice(-1) : [];
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
      return `"${this.initialElementName_}":"${colorHexMatch(
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

  public toValue(simpleValue?: false): ColorElement;
  public toValue(simpleValue?: true): ColorElement_;
  public toValue(simpleValue: boolean = false): ColorElement | ColorElement_ {
    const tempString = `{"elementName": "${this.elementName}", "colorHexValue": "${this.colorHexValue}"}`;
    const simpleValue_ = JSON.parse(tempString);
    if (simpleValue) {
      return simpleValue_;
    }
    return new ColorElement(simpleValue_);
  }
}

{
  if (require.main.filename === __filename) main();

  function main() {
    return TESTING();
  }

  function TESTING() {
    const color1 = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
    const color2 = new ColorElement(color1);
    const myColorElement = {
      elementName: 'string',
      colorHexValue: 'string',
    };
    const color3 = new ColorElement('editorInfo.background');
    const color4 = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const color5 = new ColorElement('', '"XFFEEBBCC"');
    const color6 = new ColorElement(myColorElement);
    myColorElement;
    const clone1 = color4.toValue(false);
    console.log('color1 :>> ', color1);
    console.log('color2 :>> ', color2);
    console.log('color3 :>> ', color3);
    console.log('color4 :>> ', color4);
    console.log('color5 :>> ', color5);
    console.log('color6 :>> ', color6);
    console.log('simpleValue :>> ', color4.toValue());
    console.log('clone :>> ', clone1);
    console.log('mainAttribute :>> ', clone1.mainAttribute);
    console.log('elementsAttributes :>> ', clone1.elementsAttributes);
    console.log('elementList :>> ', clone1.elementList);
    console.log('toString :>> ', clone1.toString());
  }
}
