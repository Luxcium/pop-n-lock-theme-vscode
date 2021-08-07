import { standardize } from '../../functions/standardize';
import { chromaHex } from '../../functions/utils';
import { templatedChromaHex } from '../../functions/utils/chroma-hex';
import { ColorElementTuple } from '../../types/ColorElementTuple';
import { IColorElement } from '../../types/IColorElement';
import { _ColorElement } from '../../types/_ColorElement';

class ColorElement implements IColorElement, _ColorElement {
  public elementName: string;
  public colorHexValue: string;
  public isVoid: boolean;
  private initialElementName_: string;
  private initialColor_: string | null;
  private elementsList_: string[];
  private elementsAttributes_: string[];
  private id_: Symbol;
  private uid_: Symbol;
  private cid_: Symbol;
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

  public setColorHex(colorValue: string | null) {
    this.uid;
    this.cid;
    if (!this.isNull) {
      this.colorHexValue = chromaHex(colorValue ?? '');
      this.setInitialColorHex(colorValue);
      return this;
    }
    this.colorHexValue = '';
    return this;
  }
  private setInitialColorHex(colorValue: string | null) {
    this.initialColor_ = this.initialColor_ ? this.initialColor_ : colorValue;
  }

  public get initialColor() {
    return this.initialColor_;
  }

  public get colorHex() {
    return this.colorHexValue;
  }

  public set colorHex(colorValue: string) {
    const setValue = !this.isNull ? colorValue : null;
    this.setColorHex(setValue ? colorValue : this.initialColor);
  }

  public get colorElementName() {
    return this.initialElementName_;
  }

  public get isNull() {
    return this.initialElementName_ === 'VOID' ? true : false;
  }

  public get elementList() {
    return !this.isNull ? this.elementsList_ : [];
  }

  public get elementsAttributes() {
    return !this.isNull ? this.elementsAttributes_ : [];
  }

  public get mainAttribute() {
    return !this.isNull ? this.elementsAttributes_.slice(-1) || [] : [];
  }

  public get mainElement() {
    return !this.isNull ? this.elementsAttributes_.slice(0, 1) || [] : [];
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

  public toObject(): _ColorElement {
    const tempString = `{"elementName": "${this.elementName}", "colorHexValue": "${this.colorHexValue}"}`;
    return JSON.parse(tempString);
  }

  public toJson(): { readonly [key: string]: string } {
    const colorHexValue = this.toObject().colorHexValue;
    const elementName = this.toObject().elementName;
    return JSON.parse(`{"${elementName}":"${colorHexValue}"}`);
  }

  public toValue(): ColorElement {
    return new ColorElement(this.toObject());
  }
}

if (require?.main?.filename === __filename) main();

function main() {
  const color1 = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
  console.log(color1);
}

export { ColorElement };
