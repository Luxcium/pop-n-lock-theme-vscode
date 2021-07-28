import { colorHexMatch } from '../../functions';
import { ColorElementTuple, IColorElement, _ColorElement } from '../../types';
import { standardize } from './functions';

export class ColorElement implements IColorElement, _ColorElement {
  public elementName: string;
  public colorHexValue: string;
  public isVoid: boolean;
  private initialElementName_: string;
  private initialColor_: string | null;
  private elementsList_: string[];
  private elementsAttributes_: string[];
  public static get void() {
    return new ColorElement('VOID');
  }
  constructor(colorElement: ColorElementTuple);
  constructor(colorElement: _ColorElement);
  constructor(colorElement: string | null);
  constructor(colorElement: string | null, colorHexValue: string | null);
  constructor(
    colorElement: ColorElementTuple | _ColorElement | string | null,
    colorHexValue?: string | null
  ) {
    const [colorElementName, colorValue] = standardize(
      colorElement as any,
      colorHexValue as any
    );

    this.elementName = '';
    this.colorHexValue = '';
    this.isVoid = true;
    this.elementsList_ = [''];
    this.elementsAttributes_ = [''];
    this.initialElementName_ = 'VOID';
    this.initialColor_ = '';

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
    this.initialElementName_ = elementName;
    this.isVoid = this.initialElementName_ === 'VOID' ? true : false;
    this.elementName = this.initialElementName_;
    this.setElementList();
    this.setElementsAttributes();
  }

  private setInitialColorHexValue(colorValue: string | null) {
    this.initialColor_ = colorValue;
    this.setColorHex(colorValue);
  }

  private setElementList() {
    this.elementsList_ = this.initialElementName_.split('.');
  }
  private setElementsAttributes() {
    this.elementsAttributes_ = this.initialElementName_
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
  }

  public setColorHex(colorValue: string | null) {
    if (!this.isNull) {
      this.colorHexValue = colorHexMatch(colorValue, '#');
      this.setInitialColorHex(colorValue);
      return this;
    }
    this.colorHexValue = '';
    return this;
  }
  private setInitialColorHex(colorValue: string | null) {
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
    template: string | [string] | [string, string],
    replacer: (this: any, key: string, value: any) => any,
    space: number
  ): string;
  public toString(
    simpleString: false,
    template: string | [string] | [string, string],
    replacer: (this: any, key: string, value: any) => any,
    space: string
  ): string;
  public toString(
    simpleString: boolean = true,
    template: string | [string] | [string, string] = '#',
    replacer?: (this: any, key: string, value: any) => any,
    space: string | number = 2
  ): string {
    if (simpleString) {
      return `"${this.initialElementName_}":"${colorHexMatch(
        this.initialColor_,
        template
      )}"`;
    }
    return `${this.constructor.name} ${JSON.stringify(
      this.toValue(),
      replacer,
      space
    )}`;
  }
  public toObject() {
    return JSON.parse(`{${this.toString(true)}}`);
  }
  public toValue(simpleValue?: false): ColorElement;
  public toValue(simpleValue?: true): _ColorElement;
  public toValue(simpleValue: boolean = false): ColorElement | _ColorElement {
    const tempString = `{"elementName": "${this.elementName}", "colorHexValue": "${this.colorHexValue}"}`;
    const simpleValue_ = JSON.parse(tempString);
    if (simpleValue) {
      return simpleValue_;
    }
    return new ColorElement(simpleValue_);
  }
}

// if (require?.main?.filename === __filename) main();

// function main() {
//   return TESTING();
// }

// function TESTING() {
//   const color1 = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
//   const color2 = new ColorElement(color1);
//   const myColorElement = {
//     elementName: 'string',
//     colorHexValue: 'string',
//   };
//   const color3 = new ColorElement('editorInfo.background');
//   const color4 = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
//   const color5 = new ColorElement('', '"XFFEEBBCC"');
//   const color6 = new ColorElement(myColorElement);
//   myColorElement;
//   const clone1 = color4.toValue(false);
//   console.log('color1 :>> ', color1);
//   console.log('color2 :>> ', color2);
//   console.log('color3 :>> ', color3);
//   console.log('color4 :>> ', color4);
//   console.log('color5 :>> ', color5);
//   console.log('color6 :>> ', color6);
//   console.log('simpleValue :>> ', color4.toValue());
//   console.log('clone :>> ', clone1);
//   console.log('mainAttribute :>> ', clone1.mainAttribute);
//   console.log('elementsAttributes :>> ', clone1.elementsAttributes);
//   console.log('elementList :>> ', clone1.elementList);
//   console.log('toString :>> ', clone1.toString());
//   console.log('toValue <simpleValue> :>> ', clone1.toValue(true));
//   console.log('toValue :>> ', clone1.toValue(false));
//   console.log('colorElementName :>> ', clone1.toValue(false).colorElementName);
//   console.log('colorHex :>> ', clone1.toValue(false).colorHex);
//   console.log('colorHexValue :>> ', clone1.toValue(false).colorHexValue);
//   console.log('elementList :>> ', clone1.toValue(false).elementList);
//   console.log('elementName :>> ', clone1.toValue(false).elementName);
//   console.log(
//     'elementsAttributes :>> ',
//     clone1.toValue(false).elementsAttributes
//   );
//   console.log('initialColor :>> ', clone1.toValue(false).initialColor);
//   console.log('isNull :>> ', clone1.toValue(false).isNull);
//   console.log('isVoid :>> ', clone1.toValue(false).isVoid);
//   console.log('mainAttribute :>> ', clone1.toValue(false).mainAttribute);
//   console.log(
//     'setColorHex :>> ',
//     clone1.toValue(false).setColorHex('00ff00cc')
//   );
// }

// export const emptyColorElement = () => ColorElement.void;

// let colorElementName: string = this.initialElementName_;
// let colorValue: string | null = this.initialColor_;

// if (Array.isArray(colorElement)) {
//   [colorElementName, colorValue] = colorElement;
// } else if (typeof colorElement === 'object' && colorElement != null) {
//   colorElementName = colorElement.elementName || 'VOID';
//   colorValue = colorElement.colorHexValue || '';
// } else if (!!colorElement === true && typeof colorElement === 'string') {
//   //** !!colorElement === true is to validate against empty strig or null or undefined //*/

//   colorElementName = colorElement;
//   colorValue = colorHexValue || '';
// }
