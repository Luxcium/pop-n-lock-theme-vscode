import { cx } from '../../../color/const';
import ColorElement from '../../color-element';

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
