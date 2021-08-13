import ColorElement from '.';
import { NULL_COLOR } from '../../constants';

describe('Specs for "lib/tools/classes/color-element/ColorElement.ts"', () => {
  describe('The tools required to processe this spec suit of ColorElement:', () => {
    it('Should include the « ColorElement » class', () => {
      expect(ColorElement).toBeDefined();
    });

    /*
  constructor(colorElement: ColorElementTuple);
  constructor(colorElement: _ColorElement);
  constructor(colorElement: string | null);
  constructor(colorElement: string | null, colorHexValue: string | null);
  constructor(
    return `${this.constructor.name} ${JSON.stringify(
    it('Constructor for « ColorElement » takes ColorElementTuple', () => {
    it('Constructor for « ColorElement » takes _ColorElement', () => {
    it('Constructor for « ColorElement » takes string | null', () => {
    it('Constructor for « ColorElement » takes string | null, colorHexValue: string | null', () => {
    it('Constructor for « ColorElement » takes ', () => {

 */
    // it('Property initialColor should be defined', () => {
    //   expect(
    //     new ColorElement('colorElement.name', '0xFFEEBBCC').initialColor
    //   ).toBeDefined();
    // });

    it('Constructor for « ColorElement » takes ColorElementTuple', () => {
      expect(
        new ColorElement(['colorElement.name', '0xFFEEBBCC']).elementList
      ).toBeDefined();
    });

    it('Constructor for « ColorElement » takes _ColorElement', () => {
      expect(
        new ColorElement({
          elementName: 'colorElement.name',
          colorHexValue: '0xFFEEBBCC',
        }).elementList
      ).toBeDefined();
    });

    it('Constructor for « ColorElement » takes string | null', () => {
      const str = new ColorElement(
        'colorElement.name',
        '0xFFEEBBCC'
      ).toString();
      const frmStrColorElement = new ColorElement(str).toString();
      expect(frmStrColorElement).toBe('"colorElement.name":"#FFEEBBCC"');
    });
    it('Constructor for « ColorElement » takes string | null', () => {
      const str =
        '{"elementName": "colorElement.name" , "colorHexValue": "#FFEEBBCC"}';
      const frmStrColorElement = new ColorElement(str).toString();
      expect(frmStrColorElement).toBe('"colorElement.name":"#FFEEBBCC"');
    });

    it('Constructor for « ColorElement » takes string | null, colorHexValue: string | null', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').elementList
      ).toBeDefined();
    });

    it('Property elementList should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').elementList
      ).toBeDefined();
    });

    it('Property elementsAttributes should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').attributeList
      ).toBeDefined();
    });

    it('Property mainAttribute should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').mainAttribute
      ).toBeDefined();
    });

    it('Property mainElement should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').mainElement
      ).toBeDefined();
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toString(true)
      ).toBeDefined();
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toString(true, [
          'x',
        ])
      ).toBeDefined();
    });

    it('Method toObject should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toObject()
      ).toStrictEqual({
        elementName: 'colorElement.name',
        colorHexValue: '#FFEEBBCC',
      });
    });

    it('Method toJson should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toJson()
      ).toStrictEqual({ 'colorElement.name': '#FFEEBBCC' });
    });

    it('Method toValue should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toValue()
      ).toBeDefined();
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toString(true)
      ).toBe('"colorElement.name":"#FFEEBBCC"');
    });

    it('Method toString should be defined', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').toString(false)
      ).toBeDefined();
    });

    it('Method « setColorHex » should set a new colorHex', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').setColorHex(
          '0xFFBBAADD'
        ).colorHex
      ).toBe('#FFBBAADD');
    });

    it('Method « setColorHex » should set a new colorHex', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').setColorHex(null)
          .colorHex
      ).toBe(NULL_COLOR);
    });
    // "button.background": "#771166CC"

    it('Property °getter° « colorHex » should be an hexadecimal color string', () => {
      expect(new ColorElement('colorElement.name', '0x771166CC').colorHex).toBe(
        '#771166CC'
      );
    });

    it('Property °setter° « colorHex » should set an hexadecimal color string', () => {
      const colorelement = new ColorElement('colorElement.name', '0xFFEEBBCC');
      colorelement.colorHex = '0xAABBCCDD';
      expect(colorelement.colorHex).toBe('#AABBCCDD');
    });

    /* 1 */ it('Property id should be defined', () => {
      expect(new ColorElement('colorElement.name', '0xFFEEBBCC').id).toBe(
        Symbol.for(`"colorElement.name"`)
      );
    });

    /* 2 */ it('Property uid should be defined', () => {
      expect(new ColorElement('colorElement.name', '0xFFEEBBCC').uid).toBe(
        Symbol.for(`"colorElement.name": "#FFEEBBCC"`)
      );
    });

    /* 3 */ it('Property cid should be defined', () => {
      expect(new ColorElement('colorElement.name', '0xFFEEBBCC').cid).toBe(
        Symbol.for(`"#FFEEBBCC"`)
      );
    });

    it('Property « isValid » should be false', () => {
      expect(new ColorElement('colorElement.name', '0xFFEEBBCC').isValid).toBe(
        true
      );
    });

    it('Property « isValid » should be false if the color is NULL_COLOR', () => {
      expect(new ColorElement('colorElement.name', NULL_COLOR).isValid).toBe(
        false
      );
    });

    it('Property « isNull » should be true if the name is invalid', () => {
      expect(new ColorElement('', '0xFFEEBBCC').isNull).toBe(true);
    });

    it('Property « isNull » should be false', () => {
      expect(new ColorElement('colorElement.name', '0xFFEEBBCC').isNull).toBe(
        false
      );
    });

    it('Property « isNull » should be false when it recive NULL_COLOR but the name is valid', () => {
      expect(new ColorElement('colorElement.name', NULL_COLOR).isNull).toBe(
        false
      );
    });

    it('Property colorElementName should be defined', () => {
      expect(
        new ColorElement('button.background', '0x771166CC').colorElementName
      ).toBe('button.background');
    });

    it('Property « isNull » should be true', () => {
      expect(new ColorElement('', '0xFFEEBBCC').isNull).toBe(true);
    });

    /* 1 */ it('Property « elementList » should return a value of type array', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').elementList
      ).toStrictEqual(['colorElement', 'name']);
    });

    /* 2 */ it('Property « attributeList » should return a value of type array', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').attributeList
      ).toStrictEqual(['color', 'element', 'name']);
    });

    /* 3 */ it('Property « mainAttribute » should return a value of type string', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').mainAttribute
      ).toBe('name');
    });

    /* 4 */ it('Property « firstElement » should return a value of type string', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').firstAttribut
      ).toBe('color');
    });

    /* 5 */ it('Property « mainElement » should return a value of type string', () => {
      expect(
        new ColorElement('colorElement.name', '0xFFEEBBCC').mainElement
      ).toBe('colorElement');
    });

    // describe.each([
    //   // '0xFFEEBBCC'
    //   [1, 2],
    //   [2, 4],
    // ],(
    //   'double(%d)',
    //   (
    //     colorElementName: any,
    //     colorHexValue: any,
    //     expected: any,
    //     property: string
    //   ) => {
    describe.each([
      // nullity or validity and voidness
      ['colorElement.name', '0xFFEEBBCC', false, true, false],
      ['', '0xFFEEBBCC', true, false, true],
      ['VOID', '0xFFEEBBCC', true, false, true],
      ['colorElement.name', NULL_COLOR, false, false, false],
      ['VOID', NULL_COLOR, true, false, true],
      ['', NULL_COLOR, true, false, true],

      /*
      'colorElement.name', '0xFFEEBBCC'
'', '0xFFEEBBCC'
'VOID', '0xFFEEBBCC'
       */
    ])(
      'Testing `new ColorElement(%s, %s)` for nullity or validity and voidness',
      (
        colorElementName: string,
        colorHexValue: string,
        isNull: boolean,
        isValid: boolean,
        isVoid: boolean
      ) => {
        /* A */ it('Property « isNull » should return a value of type boolean', () => {
          const element = new ColorElement(colorElementName, colorHexValue);
          const value: any = element.isNull;
          expect(value).toBe(isNull);
        });

        /* B */ it('Property « isValid » should return a value of type boolean', () => {
          const element = new ColorElement(colorElementName, colorHexValue);
          const value: any = element.isValid;
          expect(value).toBe(isValid);
        });

        /* C */ it('Property « isVoid » should return a value of type boolean', () => {
          const element = new ColorElement(colorElementName, colorHexValue);
          const value: any = element.isVoid;
          expect(value).toBe(isVoid);
        });
      }
    );
  });
  /* 1 */ it('Property « isNull » should return a value of type boolean', () => {
    expect(ColorElement.void.isNull).toBe(true);
  });
});

/*

describe.each

// describe.each([
//  [1, 2],
//  [2, 4],
// ])('double(%d)', (input, expected) => {
//  it.skip(`returns ${expected}`, () => {
//   expect(input * 2).toBe(expected);
//  });
// });


  const cElm = new ColorElement('c.elem', 'ffff');
  console.log(cElm);
  console.log('isVoid: ,', cElm.isVoid);
  console.log('isValid: ,', cElm.isValid);
  console.log('isNull: ', cElm.isNull);

  public static get void() {
  public elementName: string;
  public colorHexValue: string;
  public isVoid: boolean;
  public toObject(): _ColorElement {
  public toJson(): { readonly [key: string]: string } {
  public toValue(): ColorElement {
  public toString(): string;
  public toString(simpleString: boolean): string;
  public toString(
  public toString(
  public toString(
  public setColorHex(colorValue: string | null) {

 */
