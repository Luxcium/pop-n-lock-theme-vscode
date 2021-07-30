import { ColorElement } from '.';

describe('ColorElement', () => {
  it('should be posible to create it with only one string', () => {
    const result = new ColorElement('editorInfo.background');
    expect(result).toStrictEqual(new ColorElement('editorInfo.background'));
  });

  it('should be posible to create it with a tuple', () => {
    const result = new ColorElement(['editorInfo.background', '"XFFEEBBCC"']);
    expect(result).toStrictEqual(
      new ColorElement('editorInfo.background', '"XFFEEBBCC"')
    );
  });

  it('should be posible to create it with two strings', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    expect(result).toStrictEqual(
      new ColorElement(['editorInfo.background', '"XFFEEBBCC"'])
    );
  });

  it('.colorElementName', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    clone.setColorHex('#BBCCEEFF');
    expect(clone.colorElementName).toBe('editorInfo.background');
  });

  it('.initialColor', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    clone.setColorHex('#BBCCEEFF');
    expect(clone.initialColor).toBe('#FFEEBBCC');
  });

  it('.initialColor on .colorHex', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    clone.colorHex = '#BBCCEEFF';
    expect(clone.initialColor).toBe('#FFEEBBCC');
  });

  it('.colorHex', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).colorHex).toBe('#FFEEBBCC');
  });

  it('.elementName', () => {
    const result = new ColorElement('', '"XFFEEBBCC"');
    const voidElement = ColorElement.void;
    expect(result).toStrictEqual(voidElement);
  });

  it('.elementName', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).elementName).toBe('editorInfo.background');
  });

  it('.isNull', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).isNull).toStrictEqual(false);
  });

  it('.mainAttribute', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).mainAttribute).toStrictEqual(['background']);
  });

  it('.elementsAttributes', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).elementsAttributes).toStrictEqual([
      'editor',
      'info',
      'background',
    ]);
  });

  it('.elementList', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).elementList).toStrictEqual([
      'editorInfo',
      'background',
    ]);
  });

  it('.mainAttribute on VOID', () => {
    const result = new ColorElement('', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).mainAttribute).toStrictEqual([]);
  });

  it('.elementsAttributes on VOID', () => {
    const result = new ColorElement('', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).elementsAttributes).toStrictEqual([]);
  });

  it('.elementList on VOID', () => {
    const result = new ColorElement('', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    expect(clone.toValue(false).elementList).toStrictEqual([]);
  });

  it('.colorHex set to null', () => {
    const result = new ColorElement('', '"XFFEEBBCC"');
    const clone = result.toValue(false);
    clone.colorHex = '"XFFEEBBCC"';
    expect(clone.toValue(false).colorHex).toBe('');
  });

  it('from empty tuple', () => {
    const result = new ColorElement(['', '"XFFEEBBCC"']);
    const clone = result.toValue(false);
    clone.colorHex = '"XFFEEBBCC"';
    expect(clone.toValue(true).elementName).toBe('VOID');
  });

  it('from empty object', () => {
    const result = new ColorElement(null);
    const clone = result.toValue();
    expect(clone.elementName).toBe('VOID');
  });

  it('.toString()', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue();
    expect(clone.toString()).toBe('"editorInfo.background":"#FFEEBBCC"');
  });

  it('.toString(true)', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue();
    expect(clone.toString(true)).toBe('"editorInfo.background":"#FFEEBBCC"');
  });

  it('.toString(false)', () => {
    const result = new ColorElement('editorInfo.background', '"XFFEEBBCC"');
    const clone = result.toValue();
    expect(clone.toString(false)).toBe(`ColorElement {
  "elementName": "editorInfo.background",
  "colorHexValue": "#FFEEBBCC",
  "elementsList_": [
    "editorInfo",
    "background"
  ],
  "elementsAttributes_": [
    "editor",
    "info",
    "background"
  ]
}`);
  });
});
// export function main() {
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
