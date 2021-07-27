import { ColorElement } from '.';

export function main() {
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
  console.log('toValue <simpleValue> :>> ', clone1.toValue(true));
  console.log('toValue :>> ', clone1.toValue(false));
  console.log('colorElementName :>> ', clone1.toValue(false).colorElementName);
  console.log('colorHex :>> ', clone1.toValue(false).colorHex);
  console.log('colorHexValue :>> ', clone1.toValue(false).colorHexValue);
  console.log('elementList :>> ', clone1.toValue(false).elementList);
  console.log('elementName :>> ', clone1.toValue(false).elementName);
  console.log(
    'elementsAttributes :>> ',
    clone1.toValue(false).elementsAttributes
  );
  console.log('initialColor :>> ', clone1.toValue(false).initialColor);
  console.log('isNull :>> ', clone1.toValue(false).isNull);
  console.log('isVoid :>> ', clone1.toValue(false).isVoid);
  console.log('mainAttribute :>> ', clone1.toValue(false).mainAttribute);
  console.log(
    'setColorHex :>> ',
    clone1.toValue(false).setColorHex('00ff00cc')
  );
}

export const emptyColorElement = () => ColorElement.void;
