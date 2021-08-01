import { ColorElement } from '..';
import { cx } from '../../color/const';
import { ColorElementList } from './ColorElementList';

describe('ColorElementList', () => {
  it('property mainAttributeList should return an array', () => {
    const colorsList = new ColorElementList(shortDummyList());
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

/*
mainAttributeList
allAttributeList
filterAttribute
countAttribute
filterColor
filterElement
head
tail
*/

function shortDummyList(): ColorElement[] {
  return [
    //'widget.shadow'
    void '#001111FF',
    new ColorElement('widget.shadow').setColorHex(cx.x001111FF), //

    //'editorGroupHeader.border'
    void '#001133FF',
    new ColorElement('editorGroupHeader.border').setColorHex(cx.x001133FF), //

    //'editorGroupHeader.noTabsBackground'
    void '#1C1C2EFF',
    new ColorElement('editorGroupHeader.noTabsBackground').setColorHex(
      cx.x1C1C2EFF
    ), //

    //'editorGroupHeader.tabsBackground'
    void '#1C1C2EFF',
    new ColorElement('editorGroupHeader.tabsBackground').setColorHex(
      cx.x1C1C2EFF
    ), //

    //'editorGroupHeader.tabsBorder'
    void '#1D2545FF',
    new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //

    //'button.secondaryBackground'
    void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryBackground').setColorHex(cx.undefGreen), //

    //'button.secondaryHoverBackground'
    void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryHoverBackground').setColorHex(
      cx.undefGreen
    ), //

    //'button.hoverBackground'
    void '#3399CCCC',
    new ColorElement('button.hoverBackground').setColorHex(cx.x3399CCCC), //

    //'button.background'
    void '#771166CC',
    new ColorElement('button.background').setColorHex(cx.x771166CC), //

    //'button.border'
    void '#FF00FF22', // #FF00FFFF
    new ColorElement('button.border').setColorHex(cx.undefMagenta), //

    //'charts.blue'
    void '#00FF0022', // #00FF00FF
    new ColorElement('charts.blue').setColorHex(cx.undefGreen), //

    //'charts.green'
    void '#00FF0022', // #00FF00FF
    new ColorElement('charts.green').setColorHex(cx.undefGreen), //

    //'charts.lines'
    void '#00FF0022', // #00FF00FF
    new ColorElement('charts.lines').setColorHex(cx.undefGreen), //
  ].filter(cx => cx) as ColorElement[];
}
