import ColorElementList from '.';
import ColorElement from '../color-element';
import { shortDummyList } from './test/dummy-list';

describe('ColorElementList', () => {
  it('should exist some ColorElementList', () => {
    expect(ColorElementList).toBeDefined();
  });

  it('should exist some shortDummyList', () => {
    expect(shortDummyList).toBeDefined();
  });

  it('should exist some ColorElement', () => {
    expect(ColorElement).toBeDefined();
  });

  it('property mainAttributeList should return an array', () => {
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

  it('property allAttributeList should return an array', () => {
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

  it('property allElementsList should return an array', () => {
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

  it('should have a length property', () => {
    const colorsList = new ColorElementList(shortDummyList());
    const lenght = colorsList.length;
    expect(lenght).toBe(13);
  });

  it('method filterColor should return a subset or an empty set', () => {
    const colorsList = new ColorElementList(shortDummyList());
    const filteredColors = colorsList.filterColor('#00FF0022');
    expect(filteredColors.length).toBe(5);

    const filteredColorsEmptySet = colorsList.filterColor('#00DF0022');
    expect(filteredColorsEmptySet.length).toBe(0);
  });

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

  it('tail method should return a list with all but the first element', () => {
    const colorsList = new ColorElementList(shortDummyList());
    const tail = colorsList.tail();
    expect(tail.tail().length).toBe(colorsList.length - 2);
  });
});
