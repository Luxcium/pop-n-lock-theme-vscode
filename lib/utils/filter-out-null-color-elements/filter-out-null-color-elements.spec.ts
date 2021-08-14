import { filterOutNullColorElements, filterOutNullColors, filterOutNullElements, filterOutNulls } from '.';
import { shortDummyList, shortDummyListNullEllements, shortDummyListNulls } from '../../tests';

describe('filterOutNullColorElements', () => {
  let keepNullElements: boolean = true;
  let keepNullColor: boolean = true;
  it('should be defined', () => {
    const awaitedList = filterOutNullColorElements(shortDummyList())();
    expect(awaitedList.length).toBe(13);
  });
  it('should be defined', () => {
    expect(filterOutNullColorElements(shortDummyListNullEllements())).toBeDefined();
  });

  it('should be defined', () => {
    expect(filterOutNullColorElements(shortDummyListNullEllements())(true)).toBeDefined();
  });

  it('filterOutNullColorElements', () => {
    expect(filterOutNullColorElements(shortDummyListNulls())(!keepNullElements, !keepNullColor).length).toBe(17);
  });

  it('filterOutNullColorElements', () => {
    expect(filterOutNullColorElements(shortDummyListNulls())(!keepNullElements, keepNullColor).length).toBe(18);
  });

  it('filterOutNullColorElements', () => {
    expect(filterOutNullColorElements(shortDummyListNulls())(keepNullElements, !keepNullColor).length).toBe(19);
  });

  it('filterOutNullColorElements', () => {
    expect(filterOutNullColorElements(shortDummyListNulls())(keepNullElements, keepNullColor).length).toBe(20);
  });

  it('filterOutNullColorElements', () => {
    expect(filterOutNullColorElements(shortDummyListNulls())(!keepNullElements, !keepNullColor).length).toBe(17);
  });

  it('(filterOutNulls(shortDummyListNulls()).length).toBe(17)', () => {
    expect(filterOutNulls(shortDummyListNulls()).length).toBe(17);
  });
  it('(filterOutNullElements(shortDummyListNulls()).length).toBe(18)', () => {
    expect(filterOutNullElements(shortDummyListNulls()).length).toBe(18);
  });

  it('(filterOutNullColors(shortDummyListNulls()).length).toBe(19)', () => {
    expect(filterOutNullColors(shortDummyListNulls()).length).toBe(19);
  });
});

/*

  const cElm = new ColorElement('c.elem', 'ffff');
  console.log(cElm);
  console.log('isVoid: ,', cElm.isVoid);
  console.log('isValid: ,', cElm.isValid);
  console.log('isNull: ', cElm.isNull);


filterOutNulls
filterOutNullElements
filterOutNullColors
 */
