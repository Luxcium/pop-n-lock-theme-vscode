import ColorElementList from '.';
import ColorElement from '../color-element';
import { shortDummyList } from './test/dummy-list';
describe('Specs for "helpers/tools/classes/color-element-list/ColorElementList.ts"', () => {
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

  describe("ColorElementList's folowing attributs properties and methods shoud be defined", () => {
    it('Static method « of » should be defined', () => {
      const of_ = ColorElementList.of;
      // const mainAttributeList = colorlist.mainAttributeList;
      expect(of_).toBeDefined();
    });

    it('Constructor « ColorElementList » should be public', () => {
      const colorlist = new ColorElementList(shortDummyList());
      expect(colorlist).toBeDefined();
    });
    // &%%& mainAttributeList %%%%%

    // &%%& keys %%%%%
    it('Method « keys » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const keys = colorlist.keys;
      expect(keys).toBeDefined();
    });

    // &%%& values %%%%%
    it('Method « values » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const values = colorlist.values;
      expect(values).toBeDefined();
    });
    // &%%& entries %%%%%
    it('Method « entries » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const entries = colorlist.entries;
      expect(entries).toBeDefined();
    });
    // &%%& every %%%%%
    it('Method « every » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const every = colorlist.every;
      expect(every).toBeDefined();
    });
    // &%%& filter %%%%%
    it('Method « filter » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const filter = colorlist.filter;
      expect(filter).toBeDefined();
    });
    // &%%& find %%%%%
    it('Method « find » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const find = colorlist.find;
      expect(find).toBeDefined();
    });
    // &%%& forEach %%%%%
    it('Method « forEach » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const forEach = colorlist.forEach;
      expect(forEach).toBeDefined();
    });
    // &%%& map %%%%%
    it('Method « map » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const map = colorlist.map;
      expect(map).toBeDefined();
    });
    // &%%& reduce %%%%%
    it('Method « reduce » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const reduce = colorlist.reduce;
      expect(reduce).toBeDefined();
    });
    // &%%& reduceRight %%%%%
    it('Method « reduceRight » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const reduceRight = colorlist.reduceRight;
      expect(reduceRight).toBeDefined();
    });
    // &%%& some %%%%%
    it('Method « some » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const some = colorlist.some;
      expect(some).toBeDefined();
    });

    // &%%& filterColor %%%%%
    it('Method « filterColor » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const filterColor = colorlist.filterColor;
      expect(filterColor).toBeDefined();
    });
    // &%%& filterAttribute %%%%%
    it('Method « filterAttribute » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const filterAttribute = colorlist.filterAttribute;
      expect(filterAttribute).toBeDefined();
    });
    // &%%& countAttribute %%%%%
    it('Method « countAttribute » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const countAttribute = colorlist.countAttribute;
      expect(countAttribute).toBeDefined();
    });
    // &%%& filterElement %%%%%
    it('Method « filterElement » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const filterElement = colorlist.filterElement;
      expect(filterElement).toBeDefined();
    });
    // &%%& head %%%%%
    it('Method « head » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const head = colorlist.head;
      expect(head).toBeDefined();
    });
    // &%%& tail %%%%%
    it('Method « tail » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const tail = colorlist.tail;
      expect(tail).toBeDefined();
    });
    // &%%& toJson %%%%%
    it('Method « toJson » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const toJson = colorlist.toJson;
      expect(toJson).toBeDefined();
    });

    it('Property « mainAttributeList » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const mainAttributeList = colorlist.mainAttributeList;
      expect(mainAttributeList).toBeDefined();
    });
    // &%%& allAttributeList %%%%%
    it('Property « allAttributeList » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const allAttributeList = colorlist.allAttributeList;
      expect(allAttributeList).toBeDefined();
    });
    // &%%& allElementsList %%%%%
    it('Property « allElementsList » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const allElementsList = colorlist.allElementsList;
      expect(allElementsList).toBeDefined();
    });
    // &%%& firstAttributeList %%%%%
    it('Property « firstAttributeList » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const firstAttributeList = colorlist.firstAttributeList;
      expect(firstAttributeList).toBeDefined();
    });
    // &%%& firstElementsList %%%%%
    it('Property « firstElementsList » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const firstElementsList = colorlist.firstElementsList;
      expect(firstElementsList).toBeDefined();
    });
    // &%%& length %%%%%
    it('Property « length » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const length = colorlist.length;
      expect(length).toBeDefined();
    });

    // &%%& fork %%%%%
    it('Property « fork » should be defined', () => {
      const colorlist = new ColorElementList(shortDummyList());
      const fork = colorlist.fork;
      expect(fork).toBeDefined();
    });
  });

  describe('ColorElementList tests to be implemented', () => {
    const mainColorsList = new ColorElementList(shortDummyList());
    describe('Static method ColorElementList.of() ', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Constructor of new ColorElementList() ', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });

    describe('Method « entries() »', () => {
      it('Method « entries » to match {}', () => {
        const colorlist = new ColorElementList(shortDummyList());
        const entries = colorlist.entries();
        for (const entrie of entries) {
          const [key, value] = entrie;
          expect(
            key < 13 && key >= 0 && value instanceof ColorElement
          ).toBeTruthy();
        }
      });
    });
    describe('Method « keys() »', () => {
      it('Method « keys » should return {}', () => {
        const colorlist = new ColorElementList(shortDummyList());
        const keys = colorlist.keys();
        for (const key of keys) {
          expect(key < 13 && key >= 0).toBeTruthy();
        }
      });
    });
    describe('Method « values() »', () => {
      it('Method « values » should return {}', () => {
        const colorlist = new ColorElementList(shortDummyList());
        const values = colorlist.values();
        for (const value of values) {
          expect(value instanceof ColorElement).toBeTruthy();
        }
      });
    });
    describe('Method « every() » should return: `this is S[] | boolean`', () => {
      it('Method « every » should return a list with all but the first element', () => {
        mainColorsList.every(
          (value, _index, _array) => [value] /* !!value.isNull */,
          this
        );
        expect('identity').toBe('identity');
      });
      it('Method « every » predicate should return true or false', () => {
        const every = mainColorsList.every(value => !!value);
        expect(every).toBeTruthy();
      });
      it('Method « every » predicate have a positive index', () => {
        const every = mainColorsList.every(
          (_value, index, _array) => typeof index === 'number' && index >= 0,
          this
        );
        expect(every).toBeTruthy();
      });
    });
    describe('Method « filter() »', () => {
      it('Method « filter() »', () => {
        expect(mainColorsList.filter(item => !item.isNull).length).toBe(13);
      });
      it('Method « filter() »', () => {
        expect(mainColorsList.filter((_item, index) => index >= 0).length).toBe(
          13
        );
      });
      it('Method « filter() »', () => {
        expect(mainColorsList.filter(item => !item.isNull).length).toBe(13);
      });
    });
    describe('Method « find() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « forEach() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        mainColorsList.forEach(element => element.colorHexValue);
        expect('identity').toBe('identity');
      });
    });
    describe('Method « map() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « reduce() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « reduceRight() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « some() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « filterColor() »', () => {
      describe('Method filterColor should return a subset or an empty set', () => {
        const colorsList = new ColorElementList(shortDummyList());
        it('Method filterColor return a subset', () => {
          // const colorsList = new ColorElementList(shortDummyList());
          const filteredColors = colorsList.filterColor('#00FF0022');
          expect(filteredColors.length).toBe(5);
        });
        it('Method filterColor return an empty set', () => {
          const filteredColorsEmptySet = colorsList.filterColor('#00DF0022');
          expect(filteredColorsEmptySet.length).toBe(0);
        });
      });
    });
    describe('Method « filterAttribute() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « countAttribute() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « filterElement() »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Method « head() »', () => {
      it('head method should return the first element from the list', () => {
        const colorsList = new ColorElementList(shortDummyList());
        const head = colorsList.head();
        expect(head).toStrictEqual(
          new ColorElement({
            colorHexValue: '#001111FF',
            elementName: 'widget.shadow',
          })
        );
      });
    });
    describe('Method « tail() »', () => {
      it('Method « tail » should return a list with all but the first element', () => {
        const colorsList = new ColorElementList(shortDummyList());
        const tail = colorsList.tail();
        expect(tail.tail().length).toBe(colorsList.length - 2);
      });
    });
    describe('Method « toJson() »', () => {
      it('method toJson should return an object of all elements', () => {
        const json = new ColorElementList(shortDummyList()).toJson();
        // const { colors } = json as { colors: any };
        // const allAttributeList = colorsList.allAttributeList;
        expect(json).toStrictEqual({
          'button.background': '#771166CC',
          'button.border': '#FF00FF21',
          'button.hoverBackground': '#3399CCCC',
          'button.secondaryBackground': '#00FF0021',
          'button.secondaryHoverBackground': '#00FF0021',
          'charts.blue': '#00FF0021',
          'charts.green': '#00FF0021',
          'charts.lines': '#00FF0021',
          'editorGroupHeader.border': '#001133FF',
          'editorGroupHeader.noTabsBackground': '#1C1C2EFF',
          'editorGroupHeader.tabsBackground': '#1C1C2EFF',
          'editorGroupHeader.tabsBorder': '#1D2545FF',
          'widget.shadow': '#001111FF',
        });
      });
    });

    // --

    describe('Property « mainAttributeList »', () => {
      it('Property « mainAttributeList » should return an array', () => {
        const colorsList = new ColorElementList(shortDummyList());
        expect(colorsList).toBeDefined();

        const mainAttributeList = colorsList.mainAttributeList;
        expect(mainAttributeList).toEqual([
          'shadow',
          'border',
          'background',
          'blue',
          'green',
          'lines',
        ]);
      });
      // it('property mainAttributeList should return an array', () => {
      //   const colorsList = new ColorElementList(shortDummyList());
      //   expect(colorsList).toBeDefined();

      //   const mainAttributeList = colorsList.mainAttributeList;
      //   expect(mainAttributeList).toEqual([
      //     'shadow',
      //     'border',
      //     'background',
      //     'blue',
      //     'green',
      //     'lines',
      //   ]);
      // });
    });
    describe('Property « fork »', () => {
      it('Property « fork » should return', () => {
        const colorlist = new ColorElementList(shortDummyList());
        const fork = colorlist.fork;
        expect([
          typeof fork,
          Array.isArray(fork),
          fork.length,
          fork[0] instanceof ColorElement,
        ]).toStrictEqual(['object', true, 13, true]);
      });
    });
    describe('Property « allAttributeList »', () => {
      it('Property « allAttributeList » should return an array', () => {
        const colorsList = new ColorElementList(shortDummyList());
        const allAttributeList = colorsList.allAttributeList;
        expect(allAttributeList).toEqual([
          'widget',
          'shadow',
          'editor',
          'group',
          'header',
          'border',
          'no',
          'tabs',
          'background',
          'button',
          'secondary',
          'hover',
          'charts',
          'blue',
          'green',
          'lines',
        ]);
      });
    });
    describe('Property « allElementsList »', () => {
      it('Property « allElementsList » should return an array', () => {
        const colorsList = new ColorElementList(shortDummyList());
        const allElementsList = colorsList.allElementsList;
        expect(allElementsList).toEqual([
          'widget',
          'shadow',
          'editorGroupHeader',
          'border',
          'noTabsBackground',
          'tabsBackground',
          'tabsBorder',
          'button',
          'secondaryBackground',
          'secondaryHoverBackground',
          'hoverBackground',
          'background',
          'charts',
          'blue',
          'green',
          'lines',
        ]);
      });
    });
    describe('Property « firstAttributeList »', () => {
      const firstAttributeList = mainColorsList.firstAttributeList;
      it('Property « firstAttributeList » should return an array', () => {
        expect(Array.isArray(firstAttributeList)).toBeTruthy();
      });
      it('Property « firstAttributeList » should return this array', () => {
        expect(firstAttributeList).toStrictEqual([
          'widget',
          'editor',
          'button',
          'charts',
        ]);
      });
    });
    describe('Property « firstElementsList »', () => {
      it.skip('GENERIC TEST TO REMPLACE WITH ACTUAL TEST', () => {
        expect('identity').toBe('identity');
      });
    });
    describe('Property « length »', () => {
      it('Property « length » should return a numeric value', () => {
        const colorlist = new ColorElementList(shortDummyList());
        const length = colorlist.length;
        expect(typeof length === 'number').toBeTruthy();
      });
    });

    // *[Symbol.iterator]() {
  });
});

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
const colorsList = new ColorElementList(shortDummyList());
const mainAttributeList = colorlist.mainAttributeList
    expect(mainAttributeList
      ).toBeDefined(

        );
  });
// &%%& fork %%%%%
   it('fork method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const fork = colorlist.fork
    expect(fork
      ).toBeDefined(

        );
  });
// &%%& entries %%%%%
   it('entries method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const entries = colorlist.entries
    expect(entries
      ).toBeDefined(

        );
  });
// &%%& keys %%%%%
   it('keys method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const keys = colorlist.keys
    expect(keys
      ).toBeDefined(

        );
  });
// &%%& values %%%%%
   it('values method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const values = colorlist.values
    expect(values
      ).toBeDefined(

        );
  });
// &%%& every %%%%%
   it('every method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const every = colorlist.every
    expect(every
      ).toBeDefined(

        );
  });
// &%%& filter %%%%%
   it('filter method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const filter = colorlist.filter
    expect(filter
      ).toBeDefined(

        );
  });
// &%%& find %%%%%
   it('find method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const find = colorlist.find
    expecfindt(
      ).toBeDefined(

        );
  });
// &%%& forEach %%%%%
   it('forEach method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const forEach = colorlist.forEach
    expect(forEach
      ).toBeDefined(

        );
  });
// &%%& map %%%%%
   it('map method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const map = colorlist.map
    expemapct(
      ).toBeDefined(

        );
  });
// &%%& reduce %%%%%
   it('reduce method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const reduce = colorlist.reduce
    expect(reduce
      ).toBeDefined(

        );
  });
// &%%& reduceRight %%%%%
   it('reduceRight method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const reduceRight = colorlist.reduceRight
    expect(reduceRight
      ).toBeDefined(

        );
  });
// &%%& some %%%%%
   it('some method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const some = colorlist.some
    expecsomet(
      ).toBeDefined(

        );
  });
// &%%& allAttributeList %%%%%
   it('allAttributeList method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const allAttributeList = colorlist.allAttributeList
    expect(allAttributeList
      ).toBeDefined(

        );
  });
// &%%& allElementsList %%%%%
   it('allElementsList method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const allElementsList = colorlist.allElementsList
    expect(allElementsList
      ).toBeDefined(

        );
  });
// &%%& firstAttributeList %%%%%
   it('firstAttributeList method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const firstAttributeList = colorlist.firstAttributeList
    expect(firstAttributeList
      ).toBeDefined(

        );
  });
// &%%& firstElementsList %%%%%
   it('firstElementsList method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const firstElementsList = colorlist.firstElementsList
    expect(firstElementsList
      ).toBeDefined(

        );
  });
// &%%& length %%%%%
   it('length method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const length = colorlist.length
    expect(length
      ).toBeDefined(

        );
  });
// &%%& filterColor %%%%%
   it('filterColor method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const filterColor = colorlist.filterColor
    expect(filterColor
      ).toBeDefined(

        );
  });
// &%%& filterAttribute %%%%%
   it('filterAttribute method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const filterAttribute = colorlist.filterAttribute
    expect(filterAttribute
      ).toBeDefined(

        );
  });
// &%%& countAttribute %%%%%
   it('countAttribute method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const countAttribute = colorlist.countAttribute
    expect(countAttribute
      ).toBeDefined(

        );
  });
// &%%& filterElement %%%%%
   it('filterElement method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const filterElement = colorlist.filterElement
    expect(filterElement
      ).toBeDefined(

        );
  });
// &%%& head %%%%%
   it('head method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const head = colorlist.head
    expect(head
      ).toBeDefined(

        );
  });
// &%%& tail %%%%%
   it('tail method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const tail = colorlist.tail
    expect(tail
      ).toBeDefined(

        );
  });
// &%%& toJson %%%%%
   it('toJson method should be defined', () => {
const colorsList = new ColorElementList(shortDummyList());
const toJson = colorlist.toJson
    expect(toJson
      ).toBeDefined(

        );
  });
 */
