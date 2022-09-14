import ColorElement from '../../classes/color-element';
import { cx } from '../../color/const';
import { NULL_COLOR } from '../../constants';

export function shortDummyListNullEllements(): ColorElement[] {
  return [
    ...shortDummyList(),

    //'editorGroupHeader.tabsBorder'
    // void '#1D2545FF',
    new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //

    //'button.secondaryBackground'
    // void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryBackground').setColorHex(cx.undefGreen), //

    // (VOID ELEMENT)
    ColorElement.void,

    // (VOID ELEMENT)
    ColorElement.void.setColorHex('#00FF0022'),
  ];
}

export function shortDummyListNullColors(): ColorElement[] {
  return [
    ...shortDummyList(),

    //'editorGroupHeader.tabsBorder'
    // void '#1D2545FF',
    new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //

    //'button.secondaryBackground'
    new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR), //

    //'button.secondaryHoverBackground'
    new ColorElement('button.secondaryHoverBackground').setColorHex(NULL_COLOR), //
  ];
}

export function shortDummyListNulls(): ColorElement[] {
  return [
    ...shortDummyList(),

    //'editorGroupHeader.tabsBorder'
    // void '#1D2545FF',
    new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //

    //'button.secondaryBackground'
    // void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryBackground').setColorHex(cx.undefGreen), //

    //'button.secondaryHoverBackground'
    // void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryHoverBackground').setColorHex(cx.undefGreen),

    //'button.secondaryBackground'
    new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR), //

    //'button.secondaryBackground'
    new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR).setColorHex('FFFFFF'), //

    // (VOID ELEMENT)
    ColorElement.void,

    // (VOID ELEMENT)
    ColorElement.void.setColorHex('#00FF0022'),
  ];
}

export function duplicatesDummyListNulls(): ColorElement[] {
  return [
    /* 1 */ new ColorElement('button.testLastDuplicate').setColorHex('#AA6ABA'),
    /* 2 */ new ColorElement('button.testDuplicates').setColorHex('#A060B0'),
    /* 3 */ new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //
    /* 4 */ new ColorElement('button.secondaryBackground').setColorHex(cx.undefGreen), //
    /* 5 */ new ColorElement('button.secondaryHoverBackground').setColorHex('#A161B1'),
    /* 6 */ new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR), //
    /* 7 */ new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR).setColorHex('FFFFFF'),
    /* 8 */ ColorElement.void,
    /* 9 */ ColorElement.void.setColorHex('#00FF0022'),
    /* 10 */ new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //
    /* 11 */ new ColorElement('button.secondaryBackground').setColorHex(cx.undefGreen), //
    /* 12 */ new ColorElement('button.secondaryHoverBackground').setColorHex(cx.undefGreen),
    /* 13 */ new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR), //
    /* 14 */ new ColorElement('button.secondaryBackground').setColorHex(NULL_COLOR).setColorHex('FFFFFF'),
    /* 15 */ ColorElement.void,
    /* 16 */ ColorElement.void.setColorHex('#00FF0022'),
    /* 17 */ new ColorElement('button.testDuplicates').setColorHex('#A161B1'),
    /* 18 */ new ColorElement('button.testDuplicates').setColorHex('#A262B2'),
    /* 19 */ new ColorElement('button.testDuplicates').setColorHex('#A363B3'),
    /* 20 */ new ColorElement('button.testLastDuplicate').setColorHex('#AF6FBF'),
  ];
}

export function shortDummyList(): ColorElement[] {
  return [
    //'widget.shadow'
    void '#001111FF',
    new ColorElement('widget.shadow').setColorHex(cx.x001111FF), //

    //'editorGroupHeader.border'
    void '#001133FF',
    new ColorElement('editorGroupHeader.border').setColorHex(cx.x001133FF), //

    //'editorGroupHeader.noTabsBackground'
    void '#1C1C2EFF',
    new ColorElement('editorGroupHeader.noTabsBackground').setColorHex(cx.x1C1C2EFF), //

    //'editorGroupHeader.tabsBackground'
    void '#1C1C2EFF',
    new ColorElement('editorGroupHeader.tabsBackground').setColorHex(cx.x1C1C2EFF), //

    //'editorGroupHeader.tabsBorder'
    void '#1D2545FF',
    new ColorElement('editorGroupHeader.tabsBorder').setColorHex(cx.x1D2545FF), //

    //'button.secondaryBackground'
    void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryBackground').setColorHex(cx.undefGreen), //

    //'button.secondaryHoverBackground'
    void '#00FF0022', // #00FF00FF
    new ColorElement('button.secondaryHoverBackground').setColorHex(cx.undefGreen), //

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
