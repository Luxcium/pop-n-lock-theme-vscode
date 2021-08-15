import ColorElementList from '.';
import { shortDummyList, shortDummyListNulls } from '../../tests';
import ColorElement from '../color-element';
describe('Specs for "lib/tools/classes/color-element-list/ColorElementList.ts"', () => {
  describe('The tools required to processe this spec suit of ColorElementList:', () => {
    it('Should include the « ColorElementList » class', () => {
      expect(ColorElementList).toBeDefined();
    });

    it('Should include the « shortDummyList » function', () => {
      expect(shortDummyList).toBeDefined();
    });

    it('Should include the « ColorElement » class', () => {
      expect(ColorElement).toBeDefined();
    });
  });

  it('Static method « of » should create a ColorElementList from a ColorElement list', () => {
    const colorElementList = ColorElementList.of(shortDummyList());
    expect(colorElementList).toBeDefined();
  });

  it('Static method « of » should create a ColorElementList from ColorElement(s)', () => {
    const colorElementList = ColorElementList.of(...shortDummyList());
    expect(colorElementList).toBeDefined();
  });

  it('Property « lenght » should return the amout of item in the ColorElementList', () => {
    const colorElementList = ColorElementList.of(...shortDummyList());
    expect(colorElementList.length).toBe(13);
  });

  it('Property « fork » should return internel list from the ColorElementList', () => {
    const colorElementList = ColorElementList.of(...shortDummyList()).fork;
    expect(colorElementList.length === 13 && Array.isArray(colorElementList)).toBeTruthy();
  });

  it('Method « entries » should iterate over [keys,values]', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const entries = colorlist.entries();
    for (const entrie of entries) {
      const [key, value] = entrie;
      expect(key < 13 && key >= 0 && value instanceof ColorElement).toBeTruthy();
    }
  });

  it('Method « keys » should iterate over keys', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const keys = colorlist.keys();
    for (const key of keys) {
      expect(key < 13 && key >= 0).toBeTruthy();
    }
  });

  it('Method « values » should iterate over values', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const values = colorlist.values();
    for (const value of values) {
      expect(value instanceof ColorElement).toBeTruthy();
    }
  });

  /** Whenever an object needs to be iterated (such as at the beginning of a for...of loop), its `@@iterator` method is called with no arguments, and the returned iterator is used to obtain the values to be iterated. */
  it('ColorElementList should comform to the iterable protocol', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    // const values = colorlist.values();
    for (const color of colorlist) {
      expect(color instanceof ColorElement).toBeTruthy();
    }
  });

  it('Method « forEach » should iterate over items and return nothing (undefined)', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    expect(colorlist.forEach(item => item)).toBeUndefined();
  });

  it('Method « map » should iterate over values and return the mapped result', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const mapped = colorlist.map(item => !item);
    expect(mapped.length === 13 && mapped[0] === false).toBeTruthy();
  });

  it('Method « some » should iterate over values and return bolean', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.some(item => !item.isNull);
    expect(list).toBeTruthy();
  });

  it('Method « filter » should iterate over values and return ColorElementList.of', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.filter(item => !item.isNull);
    expect(list.length).toBe(13);
  });

  it('Method « selectByMainAttribute » should iterate over values and return ColorElementList.of', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.selectByMainAttribute('Background');
    expect(list.length).toBe(6);
  });
  it('Method « selectByFirstAttribut » should iterate over values and return ColorElementList.of', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.selectByFirstAttribut('editor');
    expect(list.length).toBe(4);
  });
  it('Method « selectByMainElement » should iterate over values and return ColorElementList.of', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.selectByMainElement('editorGroupHeader');
    expect(list.length).toBe(4);
  });
  it('Method « selectByElementName » should iterate over values and return ColorElementList.of', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.selectByElementName('editorGroupHeader.border');
    expect(list.length).toBe(1);
  });
  it('Method « selectByColorHexValue » should iterate over values and return ColorElementList.of', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const list = colorlist.selectByColorHexValue('#00FF0022');
    expect(list.length).toBe(5);
  });
  /*
selectByColorHexValue
selectByMainAttribute
selectByFirstAttribut
selectByMainElement
selectByElementName
selectByColorHexValue
 */
  it('Method « head » should ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const head = colorlist.head();
    expect(ColorElementList.of(head).length === 1).toBeTruthy();
  });

  it('Method « head » should ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const head = colorlist.head(13);
    expect(ColorElementList.of(head).length === 1).toBeTruthy();
  });

  it('Method « tail » should ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const tail = colorlist.tail();
    expect(tail.length === 12).toBeTruthy();
  });

  it('Method « tail » should ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const tail = colorlist.tail(2);
    expect(tail.length === 10).toBeTruthy();
  });

  it('Method « toJson » should return a JSON compatible value for the ColorElementList', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const json = colorlist.toJson();
    expect(json).toStrictEqual({
      'button.background': '#771166CC',
      'button.border': '#FF00FF22',
      'button.hoverBackground': '#3399CCCC',
      'button.secondaryBackground': '#00FF0022',
      'button.secondaryHoverBackground': '#00FF0022',
      'charts.blue': '#00FF0022',
      'charts.green': '#00FF0022',
      'charts.lines': '#00FF0022',
      'editorGroupHeader.border': '#001133FF',
      'editorGroupHeader.noTabsBackground': '#1C1C2EFF',
      'editorGroupHeader.tabsBackground': '#1C1C2EFF',
      'editorGroupHeader.tabsBorder': '#1D2545FF',
      'widget.shadow': '#001111FF',
    });
  });

  it('Property « mainAttributeList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const mainAttributeList = colorlist.mainAttributeList;
    expect(mainAttributeList.length >= 0 && Array.isArray(mainAttributeList)).toBeTruthy();
  });

  it('Property « mainAttributeList » should ben an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const mainAttributeList = colorlist.mainAttributeList;
    expect(mainAttributeList.length).toBe(6);
  });

  it('Property « allAttributeList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const allAttributeList = colorlist.allAttributeList;
    expect(allAttributeList.length >= 0 && Array.isArray(allAttributeList)).toBeTruthy();
  });

  it('Property « allAttributeList » should ben an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const allAttributeList = colorlist.allAttributeList;
    expect(allAttributeList.length).toBe(16);
  });

  it('Property « allAttributeList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const allAttributeList = colorlist.allAttributeList;
    expect(allAttributeList.length >= 0 && Array.isArray(allAttributeList)).toBeTruthy();
  });

  it('Property « allAttributeList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const allAttributeList = colorlist.allAttributeList;
    expect(allAttributeList.length).toBe(16);
  });

  it('Property « allElementsList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const allElementsList = colorlist.allElementsList;
    expect(allElementsList.length >= 0 && Array.isArray(allElementsList)).toBeTruthy();
  });

  it('Property « allElementsList » should ben an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const allElementsList = colorlist.allElementsList;
    expect(allElementsList.length).toBe(16);
  });

  it('Property « firstAttributeList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const firstAttributeList = colorlist.firstAttributeList;
    expect(firstAttributeList.length >= 0 && Array.isArray(firstAttributeList)).toBeTruthy();
  });

  it('Property « firstAttributeList » should ben an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const firstAttributeList = colorlist.firstAttributeList;
    expect(firstAttributeList.length).toBe(4);
  });

  it('Property « firstElementsList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const firstElementsList = colorlist.firstElementsList;
    expect(firstElementsList.length >= 0 && Array.isArray(firstElementsList)).toBeTruthy();
  });

  it('Property « firstElementsList » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const firstElementsList = colorlist.firstElementsList;
    expect(firstElementsList.length).toBe(4);
  });
  it('Method « chageAllAlphasTo » should not mutate', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const chageAllAlphasTo = colorlist.chageAllAlphasTo('FFFFFFCC');
    const reduced1 = colorlist.filter(element => element.colorHex.slice(7, 9) === 'CC');
    const reduced2 = chageAllAlphasTo.filter(element => element.colorHex.slice(7, 9) === 'CC');
    expect(reduced1.length).toBe(2);
    expect(reduced2.length).toBe(13);
  });

  it('Method « chageAllAlphasTo » should not mutate', () => {
    const colorlist = ColorElementList.of(shortDummyListNulls());

    const tester = (colorlist_: ColorElementList) => () =>
      colorlist_.filter(element => element.colorHex.slice(7, 9) === 'CC');

    const testing = tester(colorlist);
    const reduced1 = testing();

    colorlist.chageAllAlphasTo('FFFFFFCC');
    const reduced2 = testing();

    const reduced3 = colorlist.chageAllAlphasTo('FFFFFFCC').filter(element => element.colorHex.slice(7, 9) === 'CC');

    expect(reduced1.length).toBe(2);
    expect(reduced2.length).toBe(2);

    expect(reduced3.length).toBe(16);
  });

  it('Property « setAllAlphasTo » should change in place (mutate)', () => {
    const colorlist = ColorElementList.of(shortDummyListNulls());

    const tester = (colorlist_: ColorElementList) => () =>
      colorlist_.filter(element => element.colorHex.slice(7, 9) === 'CC');

    const testing = tester(colorlist);
    const reduced1 = testing();

    colorlist.setAllAlphasTo = 'FFFFFFCC';
    const reduced2 = testing();

    expect(reduced1.length).toBe(2);
    expect(reduced2.length).toBe(16);
  });

  it('Method « chageAllColorsTo » should not mutate', () => {
    const colorlist = ColorElementList.of(shortDummyListNulls());

    const tester = (colorlist_: ColorElementList) => () =>
      colorlist_.filter(element => element.colorHex.slice(0, 9) === '#3399CCCC');

    const testing = tester(colorlist);
    const reduced1 = testing();

    colorlist.chageAllColorsTo('#3399CCCC');
    const reduced2 = testing();

    const reduced3 = colorlist
      .chageAllColorsTo('#3399CCCC')
      .filter(element => element.colorHex.slice(0, 9) === '#3399CCCC');

    expect(reduced1.length).toBe(1);
    expect(reduced2.length).toBe(1);

    expect(reduced3.length).toBe(17);
  });

  it('Property « setAllColorsTo » should change in place (mutate)', () => {
    const colorlist = ColorElementList.of(shortDummyListNulls());

    const tester = (colorlist_: ColorElementList) => () =>
      colorlist_.filter(element => element.colorHex.slice(0, 9) === '#3399CCCC');

    const testing = tester(colorlist);
    const reduced1 = testing();

    colorlist.setAllColorsTo = '#3399CCCC';
    const reduced2 = testing();

    expect(reduced1.length).toBe(1);
    expect(reduced2.length).toBe(17);
  });
  it('Property « setAllColorsTo » should be an array ', () => {
    const colorlist = ColorElementList.of(shortDummyList());
    const firstElementsList = colorlist.firstElementsList;
    expect(firstElementsList.length).toBe(4);
  });
});

//
//
// shortDummyList
//   it('Constructor « ColorElementList » should be public', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     expect(colorlist).toBeDefined();
//   });

//   // &%%& mainAttributeList %%%%%

//   // &%%& keys %%%%%
//   it('Method « keys » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const keys = colorlist.keys;
//     expect(keys).toBeDefined();
//   });

//   // &%%& values %%%%%
//   it('Method « values » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const values = colorlist.values;
//     expect(values).toBeDefined();
//   });

//   // &%%& entries %%%%%
//   it('Method « entries » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const entries = colorlist.entries;
//     expect(entries).toBeDefined();
//   });

//   // &%%& every %%%%%
//   it('Method « every » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const every = colorlist.every;
//     expect(every).toBeDefined();
//   });

//   // &%%& filter %%%%%
//   it('Method « filter » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const filter = colorlist.filter;
//     expect(filter).toBeDefined();
//   });

//   // &%%& find %%%%%
//   it('Method « find » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const find = colorlist.find;
//     expect(find).toBeDefined();
//   });

//   // &%%& forEach %%%%%
//   it('Method « forEach » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const forEach = colorlist.forEach;
//     expect(forEach).toBeDefined();
//   });

//   // &%%& map %%%%%
//   it('Method « map » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const map = colorlist.map;
//     expect(map).toBeDefined();
//   });

//   // &%%& reduce %%%%%
//   it('Method « reduce » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const reduce = colorlist.reduce;
//     expect(reduce).toBeDefined();
//   });

//   // &%%& reduceRight %%%%%
//   it('Method « reduceRight » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const reduceRight = colorlist.reduceRight;
//     expect(reduceRight).toBeDefined();
//   });

//   // &%%& some %%%%%
//   it('Method « some » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const some = colorlist.some;
//     expect(some).toBeDefined();
//   });

//   // &%%& filterColor %%%%%
//   it('Method « filterColor » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const filterColor = colorlist.filterColor;
//     expect(filterColor).toBeDefined();
//   });

//   // &%%& filterAttribute %%%%%
//   it('Method « filterAttribute » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const filterAttribute = colorlist.filterAttribute;
//     expect(filterAttribute).toBeDefined();
//   });

//   // &%%& countAttribute %%%%%
//   it('Method « countAttribute » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const countAttribute = colorlist.countAttribute;
//     expect(countAttribute).toBeDefined();
//   });

//   // &%%& filterElement %%%%%
//   it('Method « filterElement » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const filterElement = colorlist.filterElement;
//     expect(filterElement).toBeDefined();
//   });

//   // &%%& head %%%%%
//   it('Method « head » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const head = colorlist.head;
//     expect(head).toBeDefined();
//   });

//   // &%%& tail %%%%%
//   it('Method « tail » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const tail = colorlist.tail;
//     expect(tail).toBeDefined();
//   });

//   // &%%& toJson %%%%%
//   it('Method « toJson » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const toJson = colorlist.toJson;
//     expect(toJson).toBeDefined();
//   });

//   it('Property « mainAttributeList » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const mainAttributeList = colorlist.mainAttributeList;
//     expect(mainAttributeList).toBeDefined();
//   });

//   // &%%& allAttributeList %%%%%
//   it('Property « allAttributeList » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const allAttributeList = colorlist.allAttributeList;
//     expect(allAttributeList).toBeDefined();
//   });

//   // &%%& allElementsList %%%%%
//   it('Property « allElementsList » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const allElementsList = colorlist.allElementsList;
//     expect(allElementsList).toBeDefined();
//   });

//   // &%%& firstAttributeList %%%%%
//   it('Property « firstAttributeList » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const firstAttributeList = colorlist.firstAttributeList;
//     expect(firstAttributeList).toBeDefined();
//   });

//   // &%%& firstElementsList %%%%%
//   it('Property « firstElementsList » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const firstElementsList = colorlist.firstElementsList;
//     expect(firstElementsList).toBeDefined();
//   });

//   // &%%& length %%%%%
//   it('Property « length » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const length = colorlist.length;
//     expect(length).toBeDefined();
//   });

//   // &%%& fork %%%%%
//   it('Property « fork » should be defined', () => {
//     const colorlist = ColorElementList.of(shortDummyList());
//     const fork = colorlist.fork;
//     expect(fork).toBeDefined();
//   });

// });

// describe('ColorElementList tests to be implemented', () => {
//   const mainColorsList = ColorElementList.of(shortDummyList());
//   describe('Static method ColorElementList.of() ', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Constructor of ColorElementList.of() ', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « entries() »', () => {
//     it('Method « entries » to match {}', () => {
//       const colorlist = ColorElementList.of(shortDummyList());
//       const entries = colorlist.entries();
//       for (const entrie of entries) {
//         const [key, value] = entrie;
//         expect(
//           key < 13 && key >= 0 && value instanceof ColorElement
//         ).toBeTruthy();
//       }
//     });

//   });

//   describe('Method « keys() »', () => {
//     it('Method « keys » should return {}', () => {
//       const colorlist = ColorElementList.of(shortDummyList());
//       const keys = colorlist.keys();
//       for (const key of keys) {
//         expect(key < 13 && key >= 0).toBeTruthy();
//       }
//     });

//   });

//   describe('Method « values() »', () => {
//     it('Method « values » should return {}', () => {
//       const colorlist = ColorElementList.of(shortDummyList());
//       const values = colorlist.values();
//       for (const value of values) {
//         expect(value instanceof ColorElement).toBeTruthy();
//       }
//     });

//   });

//   describe('Method « every() » should return: `this is S[] | boolean`', () => {
//     it('Method « every » should return a list with all but the first element', () => {
//       mainColorsList.every(
//         (value, _index, _array) => [value] /* !!value.isNull */,
//         this
//       );
//       expect('identity').toBe('identity');
//     });

//     it('Method « every » predicate should return true or false', () => {
//       const every = mainColorsList.every(value => !!value);
//       expect(every).toBeTruthy();
//     });

//     it('Method « every » predicate have a positive index', () => {
//       const every = mainColorsList.every(
//         (_value, index, _array) => typeof index === 'number' && index >= 0,
//         this
//       );
//       expect(every).toBeTruthy();
//     });

//   });

//   describe('Method « filter() »', () => {
//     it('Method « filter() »', () => {
//       expect(mainColorsList.filter(item => !item.isNull).length).toBe(13);
//     });

//     it('Method « filter() »', () => {
//       expect(mainColorsList.filter((_item, index) => index >= 0).length).toBe(
//         13
//       );
//     });

//     it('Method « filter() »', () => {
//       expect(mainColorsList.filter(item => !item.isNull).length).toBe(13);
//     });

//   });

//   describe('Method « find() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « forEach() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       mainColorsList.forEach(element => element.colorHexValue);
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « map() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « reduce() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « reduceRight() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « some() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « filterColor() »', () => {
//     describe('Method filterColor should return a subset or an empty set', () => {
//       const colorsList = ColorElementList.of(shortDummyList());
//       it('Method filterColor return a subset', () => {
//         // const colorsList = ColorElementList.of(shortDummyList());
//         const filteredColors = colorsList.filterColor('#00FF0022');
//         expect(filteredColors.length).toBe(5);
//       });

//       it('Method filterColor return an empty set', () => {
//         const filteredColorsEmptySet = colorsList.filterColor('#00DF0022');
//         expect(filteredColorsEmptySet.length).toBe(0);
//       });

//     });

//   });

//   describe('Method « filterAttribute() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « countAttribute() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « filterElement() »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Method « head() »', () => {
//     it('head method should return the first element from the list', () => {
//       const colorsList = ColorElementList.of(shortDummyList());
//       const head = colorsList.head();
//       expect(head).toStrictEqual(
//         new ColorElement({
//           colorHexValue: '#001111FF',
//           elementName: 'widget.shadow',
//         })
//       );
//     });

//   });

//   describe('Method « tail() »', () => {
//     it('Method « tail » should return a list with all but the first element', () => {
//       const colorsList = ColorElementList.of(shortDummyList());
//       const tail = colorsList.tail();
//       expect(tail.tail().length).toBe(colorsList.length - 2);
//     });

//   });

//   describe('Method « toJson() »', () => {
//     it('method toJson should return an object of all elements', () => {
//       const json = ColorElementList.of(shortDummyList()).toJson();
//       // const { colors } = json as { colors: any };
//       // const allAttributeList = colorsList.allAttributeList;
//       expect(json).toStrictEqual({
//         'button.background': '#771166CC',
//         'button.border': '#FF00FF21',
//         'button.hoverBackground': '#3399CCCC',
//         'button.secondaryBackground': '#00FF0021',
//         'button.secondaryHoverBackground': '#00FF0021',
//         'charts.blue': '#00FF0021',
//         'charts.green': '#00FF0021',
//         'charts.lines': '#00FF0021',
//         'editorGroupHeader.border': '#001133FF',
//         'editorGroupHeader.noTabsBackground': '#1C1C2EFF',
//         'editorGroupHeader.tabsBackground': '#1C1C2EFF',
//         'editorGroupHeader.tabsBorder': '#1D2545FF',
//         'widget.shadow': '#001111FF',
//       });

//     });

//   });

//   // --

//   describe('Property « mainAttributeList »', () => {
//     it('Property « mainAttributeList » should return an array', () => {
//       const colorsList = ColorElementList.of(shortDummyList());
//       expect(colorsList).toBeDefined();

//       const mainAttributeList = colorsList.mainAttributeList;
//       expect(mainAttributeList).toEqual([
//         'shadow',
//         'border',
//         'background',
//         'blue',
//         'green',
//         'lines',
//       ]);
//     });

//     // it('property mainAttributeList should return an array', () => {
//     //   const colorsList = ColorElementList.of(shortDummyList());
//     //   expect(colorsList).toBeDefined();

//     //   const mainAttributeList = colorsList.mainAttributeList;
//     //   expect(mainAttributeList).toEqual([
//     //     'shadow',
//     //     'border',
//     //     'background',
//     //     'blue',
//     //     'green',
//     //     'lines',
//     //   ]);
//     // });
//   });

//   describe('Property « fork »', () => {
//     it('Property « fork » should return', () => {
//       const colorlist = ColorElementList.of(shortDummyList());
//       const fork = colorlist.fork;
//       expect([
//         typeof fork,
//         Array.isArray(fork),
//         fork.length,
//         fork[0] instanceof ColorElement,
//       ]).toStrictEqual(['object', true, 13, true]);
//     });

//   });

//   describe('Property « allAttributeList »', () => {
//     it('Property « allAttributeList » should return an array', () => {
//       const colorsList = ColorElementList.of(shortDummyList());
//       const allAttributeList = colorsList.allAttributeList;
//       expect(allAttributeList).toEqual([
//         'widget',
//         'shadow',
//         'editor',
//         'group',
//         'header',
//         'border',
//         'no',
//         'tabs',
//         'background',
//         'button',
//         'secondary',
//         'hover',
//         'charts',
//         'blue',
//         'green',
//         'lines',
//       ]);
//     });

//   });

//   describe('Property « allElementsList »', () => {
//     it('Property « allElementsList » should return an array', () => {
//       const colorsList = ColorElementList.of(shortDummyList());
//       const allElementsList = colorsList.allElementsList;
//       expect(allElementsList).toEqual([
//         'widget',
//         'shadow',
//         'editorGroupHeader',
//         'border',
//         'noTabsBackground',
//         'tabsBackground',
//         'tabsBorder',
//         'button',
//         'secondaryBackground',
//         'secondaryHoverBackground',
//         'hoverBackground',
//         'background',
//         'charts',
//         'blue',
//         'green',
//         'lines',
//       ]);
//     });

//   });

//   describe('Property « firstAttributeList »', () => {
//     const firstAttributeList = mainColorsList.firstAttributeList;
//     it('Property « firstAttributeList » should return an array', () => {
//       expect(Array.isArray(firstAttributeList)).toBeTruthy();
//     });

//     it('Property « firstAttributeList » should return this array', () => {
//       expect(firstAttributeList).toStrictEqual([
//         'widget',
//         'editor',
//         'button',
//         'charts',
//       ]);
//     });

//   });

//   describe('Property « firstElementsList »', () => {
//     it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
//       expect('identity').toBe('identity');
//     });

//   });

//   describe('Property « length »', () => {
//     it('Property « length » should return a numeric value', () => {
//       const colorlist = ColorElementList.of(shortDummyList());
//       const length = colorlist.length;
//       expect(typeof length === 'number').toBeTruthy();
//     });

//   });

//   // *[Symbol.iterator]() {
// });

// #region ColorElement
// describe('ColorElementList implemented test', () => {});

// describe.skip('ColorElementList', () => {});
// #endregion ColorElement

/*
# *[Symbol.iterator]() {
# colorlist.of


});
// &%%& mainAttributeList %%%%%
   it('mainAttributeList method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const mainAttributeList = colorlist.mainAttributeList
    expect(mainAttributeList
      ).toBeDefined(

        );
  });


// &%%& fork %%%%%
   it('fork method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const fork = colorlist.fork
    expect(fork
      ).toBeDefined(

        );
  });


// &%%& entries %%%%%
   it('entries method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const entries = colorlist.entries
    expect(entries
      ).toBeDefined(

        );
  });


// &%%& keys %%%%%
   it('keys method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const keys = colorlist.keys
    expect(keys
      ).toBeDefined(

        );
  });


// &%%& values %%%%%
   it('values method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const values = colorlist.values
    expect(values
      ).toBeDefined(

        );
  });


// &%%& every %%%%%
   it('every method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const every = colorlist.every
    expect(every
      ).toBeDefined(

        );
  });


// &%%& filter %%%%%
   it('filter method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const filter = colorlist.filter
    expect(filter
      ).toBeDefined(

        );
  });


// &%%& find %%%%%
   it('find method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const find = colorlist.find
    expecfindt(
      ).toBeDefined(

        );
  });


// &%%& forEach %%%%%
   it('forEach method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const forEach = colorlist.forEach
    expect(forEach
      ).toBeDefined(

        );
  });


// &%%& map %%%%%
   it('map method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const map = colorlist.map
    expemapct(
      ).toBeDefined(

        );
  });


// &%%& reduce %%%%%
   it('reduce method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const reduce = colorlist.reduce
    expect(reduce
      ).toBeDefined(

        );
  });


// &%%& reduceRight %%%%%
   it('reduceRight method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const reduceRight = colorlist.reduceRight
    expect(reduceRight
      ).toBeDefined(

        );
  });


// &%%& some %%%%%
   it('some method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const some = colorlist.some
    expecsomet(
      ).toBeDefined(

        );
  });


// &%%& allAttributeList %%%%%
   it('allAttributeList method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const allAttributeList = colorlist.allAttributeList
    expect(allAttributeList
      ).toBeDefined(

        );
  });


// &%%& allElementsList %%%%%
   it('allElementsList method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const allElementsList = colorlist.allElementsList
    expect(allElementsList
      ).toBeDefined(

        );
  });


// &%%& firstAttributeList %%%%%
   it('firstAttributeList method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const firstAttributeList = colorlist.firstAttributeList
    expect(firstAttributeList
      ).toBeDefined(

        );
  });


// &%%& firstElementsList %%%%%
   it('firstElementsList method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const firstElementsList = colorlist.firstElementsList
    expect(firstElementsList
      ).toBeDefined(

        );
  });


// &%%& length %%%%%
   it('length method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const length = colorlist.length
    expect(length
      ).toBeDefined(

        );
  });


// &%%& filterColor %%%%%
   it('filterColor method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const filterColor = colorlist.filterColor
    expect(filterColor
      ).toBeDefined(

        );
  });


// &%%& filterAttribute %%%%%
   it('filterAttribute method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const filterAttribute = colorlist.filterAttribute
    expect(filterAttribute
      ).toBeDefined(

        );
  });


// &%%& countAttribute %%%%%
   it('countAttribute method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const countAttribute = colorlist.countAttribute
    expect(countAttribute
      ).toBeDefined(

        );
  });


// &%%& filterElement %%%%%
   it('filterElement method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const filterElement = colorlist.filterElement
    expect(filterElement
      ).toBeDefined(

        );
  });


// &%%& head %%%%%
   it('head method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const head = colorlist.head
    expect(head
      ).toBeDefined(

        );
  });


// &%%& tail %%%%%
   it('tail method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const tail = colorlist.tail
    expect(tail
      ).toBeDefined(

        );
  });


// &%%& toJson %%%%%
   it('toJson method should be defined', () => {
const colorsList = ColorElementList.of(shortDummyList());
const toJson = colorlist.toJson
    expect(toJson
      ).toBeDefined(

        );
  });


 */
