import { NULL_COLOR } from '../../constants';
import { ColorElementTuple } from '../../types/ColorElementTuple';
import { IColorElement } from '../../types/IColorElement';
import { _ColorElement } from '../../types/_ColorElement';
import { templatedChromaHex } from '../../utils/chroma-hex';
import { colorHexMatchTemplated } from '../../utils/color-hex-match';
import { standardize } from '../../utils/standardize';

export class ColorElement implements IColorElement, _ColorElement {
  public static get void() {
    return new ColorElement('VOID');
  }

  private initialElementName_: string;
  private initialColor_: string | null;
  private elementsList_: string[];
  private attributeList_: string[];
  private id_: Symbol;
  private uid_: Symbol;
  private cid_: Symbol;
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
    this.attributeList_ = this.initialElementName_
      .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
      .split(/[.]/)
      .filter((item, _i, _list) => {
        return item;
      })
      .map(item => item.toLowerCase());
  }

  private setInitialColorHex(colorValue: string | null) {
    this.initialColor_ = this.initialColor_
      ? this.initialColor_
      : colorValue;
  }

  private get initialColor() {
    return this.initialColor_;
  }

  public elementName: string;
  public colorHexValue: string;
  public isVoid: boolean;
  constructor(colorElement: ColorElementTuple);
  constructor(colorElement: _ColorElement);
  constructor(colorElement: string | null);
  constructor(
    colorElement: string | null,
    colorHexValue: string | null
  );
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
    this.attributeList_ = [''];
    this.initialElementName_ = 'VOID';
    this.initialColor_ = '';

    this.setInitialNameValue(colorElementName);
    this.setInitialColorHexValue(colorValue);

    this.id_ = Symbol.for(`"${this.colorElementName}"`);
    this.uid_ = Symbol.for(
      `"${this.colorElementName}": "${this.colorHexValue}"`
    );
    this.cid_ = Symbol.for(`"${this.colorHexValue}"`);
    Object.defineProperties(this, {
      elementName: {
        enumerable: true,
      },
      colorHexValue: {
        enumerable: true,
      },

      initialElementName_: {
        enumerable: false,
      },
      elementsList_: {
        enumerable: false,
      },
      attributeList_: {
        enumerable: false,
      },
      initialColor_: {
        enumerable: false,
      },
    });

    if (this.isValid) {
      Object.defineProperties(this, {
        elementsList_: {
          enumerable: true,
        },
        attributeList_: {
          enumerable: true,
        },
      });
    }
    // this.isVoid = false;
    // this.isValid = true;
    // this.isNull = false;
    return this;
  }

  public toObject(): _ColorElement {
    const tempString = `{"elementName": "${this.elementName}", "colorHexValue": "${this.colorHexValue}"}`;
    return JSON.parse(tempString);
  }

  public toJson(): { readonly [key: string]: string } {
    const colorHexValue = this.toObject().colorHexValue;
    const elementName = this.toObject().elementName;
    return JSON.parse(`{"${elementName}": "${colorHexValue}"}`);
  }

  public toValue(): ColorElement {
    return new ColorElement(this.toObject());
  }

  public toString(): string;
  public toString(simpleString: boolean): string;
  public toString(
    simpleString: true,
    template: string | [string] | [string, string]
  ): string;
  public toString(
    simpleString: false,
    template: null,
    replacer: (this: any, key: string, value: any) => any,
    space: string | number
  ): string;
  public toString(
    simpleString: boolean = true,
    template: null | string | [string] | [string, string] = '#',
    replacer?: (this: any, key: string, value: any) => any,
    space: string | number = 2
  ): string {
    if (simpleString) {
      return `"${this.initialElementName_}":"${templatedChromaHex(
        template ?? '#'
      )(this.colorHex ?? '')}"`;
    }
    return `${this.constructor.name} ${JSON.stringify(
      this.toValue(),
      replacer,
      space
    )}`;
  }

  public setColorHex(colorValue: string | null) {
    this.uid;
    this.cid;
    if (this.isNull) {
      this.colorHexValue = '';
      return this;
    }

    const cVal = colorHexMatchTemplated(colorValue ?? NULL_COLOR);
    this.colorHexValue = cVal ? `#${cVal}` : NULL_COLOR;
    this.setInitialColorHex(colorValue);
    return this;
  }

  public get colorHex() {
    return this.colorHexValue;
  }

  public set colorHex(colorValue: string) {
    const setValue = this.isValid ? colorValue : null;
    this.setColorHex(setValue ? colorValue : this.initialColor);
  }

  public get id() {
    return this.id_;
  }

  public get uid() {
    this.uid_ = Symbol.for(
      `"${this.colorElementName}": "${this.colorHexValue}"`
    );
    return this.uid_;
  }

  public get cid() {
    this.cid_ = Symbol.for(`"${this.colorHexValue}"`);
    return this.cid_;
  }

  public get colorElementName() {
    return this.initialElementName_;
  }

  public get isValid(): boolean {
    return (
      !this.isNull &&
      !(this.colorHex === NULL_COLOR || this.colorHex === '')
    );
  }

  public get isNull(): boolean {
    return this.initialElementName_ === 'VOID' ? true : false;
  }

  public get elementList(): string[] {
    return this.isValid ? this.elementsList_ : [];
  }

  public get attributeList(): string[] {
    return this.isValid ? this.attributeList_ : [];
  }

  public get mainAttribute(): string {
    return this.isValid ? this.attributeList_.slice(-1)[0] || '' : '';
  }

  public get firstAttribut(): string {
    return this.isValid
      ? this.attributeList_.slice(0, 1)[0] || ''
      : '';
  }

  public get mainElement(): string {
    return this.isValid
      ? this.elementsList_.slice(0, 1)[0] || ''
      : '';
  }

  public toComponents() {
    const red = this.colorHex.substr(0, 2);
    const green = this.colorHex.substr(3, 2);
    const blue = this.colorHex.substr(5, 2);
    const alpha = this.colorHex.substr(7, 2);
    return {
      red,
      green,
      blue,
      alpha,
    };
  }

  readonly [s: string]: any;
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  const cElm = new ColorElement('c.elem', 'fff');
  console.log(cElm.toComponents());
  console.log(cElm.colorHex.length);
  console.log('isVoid: ,', cElm.isVoid);
  console.log('isValid: ,', cElm.isValid);
  console.log('isNull: ', cElm.isNull);
}
