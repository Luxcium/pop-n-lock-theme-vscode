import ColorElement from '.';

describe('Specs for "helpers/tools/classes/color-element/ColorElement.ts"', () => {
  describe('The tools required to processe this spec suit of ColorElement:', () => {
    it('Should include the « ColorElement » class', () => {
      expect(ColorElement).toBeDefined();
    });

    it('Property id should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').id
      ).toBeDefined();
    });

    it('Property uid should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').uid
      ).toBeDefined();
    });

    it('Property cid should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').cid
      ).toBeDefined();
    });

    it('Property initialColor should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').initialColor
      ).toBeDefined();
    });

    it('Property colorElementName should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').colorElementName
      ).toBeDefined();
    });

    it('Property isNull should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').isNull
      ).toBeDefined();
    });

    it('Property elementList should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').elementList
      ).toBeDefined();
    });

    it('Property elementsAttributes should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').elementsAttributes
      ).toBeDefined();
    });

    it('Property mainAttribute should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').mainAttribute
      ).toBeDefined();
    });

    it('Property mainElement should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').mainElement
      ).toBeDefined();
    });

    it('Property getter colorHex should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').colorHex
      ).toBeDefined();
    });

    it('Property setter colorHex should be defined', () => {
      expect(
        (new ColorElement('colorElement.name', '"0xFFEEBBCC"').colorHex =
          '0xAABBCCDD')
      ).toBeDefined();
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toString(true)
      ).toBeDefined();
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toString(true, [
          'x',
        ])
      ).toBeDefined();
    });

    it('Method toObject should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toObject()
      ).toStrictEqual({
        elementName: 'colorElement.name',
        colorHexValue: '#FFEEBBCC',
      });
    });

    it('Method toJson should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toJson()
      ).toStrictEqual({ 'colorElement.name': '#FFEEBBCC' });
    });

    it('Method toValue should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toValue()
      ).toBeDefined();
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toString(true)
      ).toBe('"colorElement.name":"#FFEEBBCC"');
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '"0xFFEEBBCC"').toString(false)
      ).toBeDefined();
    });
  });

  // it('Should include the « ColorElementList » class', () => {
  //   expect(ColorElementList).toBeDefined();
  // });

  // it('Should include the « shortDummyList » function', () => {
  //   expect(shortDummyList).toBeDefined();
  // });
});

/*


  public get colorHex
  public set colorHex
  public elementName: string;
  public colorHexValue: string;
  public isVoid: boolean;
  public static get void
  // public get colorAttributes
  public setColorHex
  it('Property id should be defined', () => { });



  it('Property uid should be defined', () => { });



  it('Property cid should be defined', () => { });



  it('Property initialColor should be defined', () => { });



  it('Property colorElementName should be defined', () => { });



  it('Property isNull should be defined', () => { });



  it('Property elementList should be defined', () => { });



  it('Property elementsAttributes should be defined', () => { });



  it('Property mainAttribute should be defined', () => { });



  it('Property mainElement should be defined', () => { });





 */

// import { standardize } from '../../functions/standardize';
// import { chromaHex } from '../../functions/utils';
// import { templatedChromaHex } from '../../functions/utils/chroma-hex';
// import { ColorElementTuple } from '../../types/ColorElementTuple';
// import { IColorElement } from '../../types/IColorElement';
// import { _ColorElement } from '../../types/_ColorElement';

// //239-246,255-257,259-260,262-275,296

// class ColorElement implements IColorElement, _ColorElement {
//   public elementName: string;
//   public colorHexValue: string;
//   public isVoid: boolean;
//   private initialElementName_: string;
//   private initialColor_: string | null;
//   private elementsList_: string[];
//   private elementsAttributes_: string[];
//   private id_: Symbol;
//   private uid_: Symbol;
//   private cid_: Symbol;
//   public static get void() {
//     return new ColorElement('VOID');
//   }
//   constructor(colorElement: ColorElementTuple);
//   constructor(colorElement: _ColorElement);
//   constructor(colorElement: string | null);
//   constructor(colorElement: string | null, colorHexValue: string | null);
//   constructor(
//     colorElement: ColorElementTuple | _ColorElement | string | null,
//     colorHexValue?: string | null
//   ) {
//     const [colorElementName, colorValue] = standardize(
//       colorElement as any,
//       colorHexValue as any
//     );

//     this.elementName = '';
//     this.colorHexValue = '';
//     this.isVoid = true;
//     this.elementsList_ = [''];
//     this.elementsAttributes_ = [''];
//     this.initialElementName_ = 'VOID';
//     this.initialColor_ = '';

//     this.setInitialNameValue(colorElementName);
//     this.setInitialColorHexValue(colorValue);

//     this.id_ = Symbol.for(`"${this.colorElementName}"`);
//     this.uid_ = Symbol.for(
//       `"${this.colorElementName}": "${this.colorHexValue}"`
//     );
//     this.cid_ = Symbol.for(`"${this.colorHexValue}"`);
//     Object.defineProperties(this, {
//       elementName: {
//         enumerable: true,
//       },
//       colorHexValue: {
//         enumerable: true,
//       },
//       isVoid: {
//         enumerable: true,
//       },
//       initialElementName_: {
//         enumerable: false,
//       },
//       elementsList_: {
//         enumerable: false,
//       },
//       elementsAttributes_: {
//         enumerable: false,
//       },
//       initialColor_: {
//         enumerable: false,
//       },
//     });

//     if (!this.isNull) {
//       Object.defineProperties(this, {
//         elementsList_: {
//           enumerable: true,
//         },
//         elementsAttributes_: {
//           enumerable: true,
//         },
//         isVoid: {
//           enumerable: false,
//         },
//       });

//     }

//     return this;
//   }
//   // public get colorAttributes() {
//   //   const attr = templatedChromaHex(this.colorHexValue);
//   //   const len = attr.length;
//   //   if (len === 3)
//   //     return [
//   //       attr[0]! + attr[0]!,
//   //       attr[1]! + attr[1]!,
//   //       attr[2]! + attr[2]!,
//   //       'FF',
//   //     ];

//   //   if (len === 4)
//   //     return [
//   //       attr[0]! + attr[0]!,
//   //       attr[1]! + attr[1]!,
//   //       attr[2]! + attr[2]!,
//   //       attr[3]! + attr[3]!,
//   //     ];

//   //   if (len === 6)
//   //     return [
//   //       attr[0]! + attr[1]!,
//   //       attr[2]! + attr[3]!,
//   //       attr[4]! + attr[5]!,
//   //       'FF',
//   //     ];

//   //   if (len === 8)
//   //     return [
//   //       attr[0]! + attr[1]!,
//   //       attr[2]! + attr[3]!,
//   //       attr[4]! + attr[5]!,
//   //       attr[6]! + attr[7]!,
//   //     ];

//   //   return [];
//   // }
//   private setInitialNameValue(elementName: string) {
//     this.initialElementName_ = elementName;
//     this.isVoid = this.initialElementName_ === 'VOID' ? true : false;
//     this.elementName = this.initialElementName_;
//     this.setElementList();
//     this.setElementsAttributes();
//   }

//   private setInitialColorHexValue(colorValue: string | null) {
//     this.initialColor_ = colorValue;
//     this.setColorHex(colorValue);
//   }

//   private setElementList() {
//     this.elementsList_ = this.initialElementName_.split('.');
//   }
//   private setElementsAttributes() {
//     this.elementsAttributes_ = this.initialElementName_
//       .replaceAll(/[.]?([a-z][a-z0-9]*|[A-Z][a-z0-9]*)/g, '.$1')
//       .split(/[.]/)
//       .filter((item, _i, _list) => {
//         return item;
//       })
//       .map(item => item.toLowerCase());
//   }

//   public get id() {
//     return this.id_;
//   }
//   public get uid() {
//     this.uid_ = Symbol.for(
//       `"${this.colorElementName}": "${this.colorHexValue}"`
//     );
//     return this.uid_;
//   }
//   public get cid() {
//     this.cid_ = Symbol.for(`"${this.colorHexValue}"`);
//     return this.cid_;
//   }
//   public setColorHex(colorValue: string | null) {
//     this.uid;
//     this.cid;
//     if (!this.isNull) {
//       this.colorHexValue = chromaHex(colorValue ?? '');
//       this.setInitialColorHex(colorValue);
//       return this;
//     }
//     this.colorHexValue = '';
//     return this;
//   }
//   private setInitialColorHex(colorValue: string | null) {
//     this.initialColor_ = this.initialColor_ ? this.initialColor_ : colorValue;
//   }
//   get initialColor() {
//     return this.initialColor_;
//   }

//   get colorHex() {
//     return this.colorHexValue;
//   }

//   set colorHex(colorValue: string) {
//     const setValue = !this.isNull ? colorValue : null;
//     this.setColorHex(setValue ? colorValue : this.initialColor);
//   }

//   get colorElementName() {
//     return this.initialElementName_;
//   }

//   get isNull() {
//     return this.initialElementName_ === 'VOID' ? true : false;
//   }

//   get elementList() {
//     return !this.isNull ? this.elementsList_ : [];
//   }

//   get elementsAttributes() {
//     return !this.isNull ? this.elementsAttributes_ : [];
//   }
//   get mainAttribute() {
//     return !this.isNull ? this.elementsAttributes_.slice(-1) || [] : [];
//   }
//   get mainElement() {
//     return !this.isNull ? this.elementsAttributes_.slice(0, 1) || [] : [];
//   }
//   public toString(): string;
//   public toString(simpleString: true): string;
//   public toString(simpleString: false): string;
//   public toString(
//     simpleString: false,
//     template: string | [string] | [string, string],
//     replacer: (this: any, key: string, value: any) => any,
//     space: number
//   ): string;
//   public toString(
//     simpleString: false,
//     template: string | [string] | [string, string],
//     replacer: (this: any, key: string, value: any) => any,
//     space: string
//   ): string;
//   public toString(
//     simpleString: boolean = true,
//     template: string | [string] | [string, string] = '#',
//     replacer?: (this: any, key: string, value: any) => any,
//     space: string | number = 2
//   ): string {
//     if (simpleString) {
//       return `"${this.initialElementName_}":"${templatedChromaHex(template)(
//         this.initialColor_ ?? ''
//       )}"`;
//     }
//     return `${this.constructor.name} ${JSON.stringify(
//       this.toValue(),
//       replacer,
//       space
//     )}`;
//   }
//   public toObject() {
//     return JSON.parse(`{${this.toString(true)}}`);
//   }
//   public toValue(simpleValue?: false): ColorElement;
//   public toValue(simpleValue?: true): _ColorElement;
//   public toValue(simpleValue: boolean = false): ColorElement | _ColorElement {
//     const tempString = `{"elementName": "${this.elementName}", "colorHexValue": "${this.colorHexValue}"}`;
//     const simpleValue_ = JSON.parse(tempString);
//     if (simpleValue) {
//       return simpleValue_;
//     }
//     return new ColorElement(simpleValue_);
//   }
//   public toJson(): _ColorElement {
//     const colorHexValue = this.toValue(true).colorHexValue;
//     const elementName = this.toValue(true).elementName;
//     return JSON.parse(`{"${elementName}":"${colorHexValue}"}`);
//   }
// }

// if (require?.main?.filename === __filename) main();

// function main() {
//   // return TESTING();
//   const color1 = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
//   console.log(color1);
// }

// export { ColorElement };
// // function TESTING() {
// //   const color1 = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
// //   const color2 = new ColorElement(color1);
// //   const myColorElement = {
// //     elementName: 'string',
// //     colorHexValue: 'string',
// //   };
// //   const color3 = new ColorElement('editorInfo.background');
// //   const color4 = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
// //   const color5 = new ColorElement('', '"XFFEEBBCC"');
// //   const color6 = new ColorElement(myColorElement);
// //   myColorElement;
// //   const clone1 = color4.toValue(false);
// //   console.log('color1 :>> ', color1);
// //   console.log('color2 :>> ', color2);
// //   console.log('color3 :>> ', color3);
// //   console.log('color4 :>> ', color4);
// //   console.log('color5 :>> ', color5);
// //   console.log('color6 :>> ', color6);
// //   console.log('simpleValue :>> ', color4.toValue());
// //   console.log('clone :>> ', clone1);
// //   console.log('mainAttribute :>> ', clone1.mainAttribute);
// //   console.log('elementsAttributes :>> ', clone1.elementsAttributes);
// //   console.log('elementList :>> ', clone1.elementList);
// //   console.log('toString :>> ', clone1.toString());
// //   console.log('toValue <simpleValue> :>> ', clone1.toValue(true));
// //   console.log('toValue :>> ', clone1.toValue(false));
// //   console.log('colorElementName :>> ', clone1.toValue(false).colorElementName);
// //   console.log('colorHex :>> ', clone1.toValue(false).colorHex);
// //   console.log('colorHexValue :>> ', clone1.toValue(false).colorHexValue);
// //   console.log('elementList :>> ', clone1.toValue(false).elementList);
// //   console.log('elementName :>> ', clone1.toValue(false).elementName);
// //   console.log(
// //     'elementsAttributes :>> ',
// //     clone1.toValue(false).elementsAttributes
// //   );
// //   console.log('initialColor :>> ', clone1.toValue(false).initialColor);
// //   console.log('isNull :>> ', clone1.toValue(false).isNull);
// //   console.log('isVoid :>> ', clone1.toValue(false).isVoid);
// //   console.log('mainAttribute :>> ', clone1.toValue(false).mainAttribute);
// //   console.log(
// //     'setColorHex :>> ',
// //     clone1.toValue(false).setColorHex('00ff00cc')
// //   );
// // }

// // export const emptyColorElement = () => ColorElement.void;

// // let colorElementName: string = this.initialElementName_;
// // let colorValue: string | null = this.initialColor_;

// // if (Array.isArray(colorElement)) {
// //   [colorElementName, colorValue] = colorElement;
// // } else if (typeof colorElement === 'object' && colorElement != null) {
// //   colorElementName = colorElement.elementName || 'VOID';
// //   colorValue = colorElement.colorHexValue || '';
// // } else if (!!colorElement === true && typeof colorElement === 'string') {
// //   //** !!colorElement === true is to validate against empty strig or null or undefined //*/

// //   colorElementName = colorElement;
// //   colorValue = colorHexValue || '';
// // }
