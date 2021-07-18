import { strict as assert } from 'assert';
import { colourOrdering } from './colour-listing';
// import $schema from 'vscode://schemas/color-theme';
// $schema;
// import { version } from 'vscode';

export function fnNmaeMeLater() {
  let mainObject = {};
  colourOrdering.map((object1: { [key: string]: string }) => {
    const some = Object.entries(object1).flat();
    const elements = some[0].split('.');
    const value = [elements, some[1]];
    // const mainObj =
    addEllement(elements, some[1], mainObject);
    // mainObject = { ...mainObject, ...mainObj };
    // console.log(mainObj);
    return value;
  });
  // console.log(JSON.stringify({ colors: { mainObject } }, null, 2));
}

export function addEllement(
  elements: string[],
  some1: string,
  mainObject: any
) {
  assert(elements.length > 0);
  if (elements.length > 1) {
    // console.log(elements.length, elements[0]);
    const restElements = elements.slice(1);
    mainObject[elements[0]] = {
      ...mainObject[elements[0]],
      ...addEllement(restElements, some1, {}),
    };
    return mainObject;
  } else {
    if (getKind(elements[0]) === 'other') {
      console.log(elements[0]);
    }
    mainObject[elements[0]] = {
      color: some1.toUpperCase(),
      kind: getKind(elements[0]),
    };
    return mainObject;
  }
}

fnNmaeMeLater();
// console.log(version);
export function getKind(str: string) {
  if (str.toLowerCase().includes('foreground')) {
    return 'foreground';
  }
  if (str.toLowerCase().includes('background')) {
    return 'background';
  }
  if (str.toLowerCase().includes('border')) {
    return 'border';
  }
  if (str.toLowerCase().includes('outline')) {
    return 'outline';
  }
  if (str.toLowerCase().includes('highlight')) {
    return 'highlight';
  }
  if (str.toLowerCase().includes('shadow')) {
    return 'shadow';
  }
  if (str.toLowerCase().includes('separator')) {
    return 'separator';
  }
  if (str.toLowerCase().includes('indicator')) {
    return 'indicator';
  }
  if (str.toLowerCase().includes('opacity')) {
    return 'opacity';
  }
  if (str.toLowerCase().length === 0) {
    console.error('E M P T Y');
    return 'empty';
  }
  return 'other';
}
// Separator;
/*
shadow
blue
green
lines
orange
purple
red
yellow
focusOutline
inactiveFocusOutline
cellInsertionIndicator
cellToolbarSeparator
iconErrored
iconFailed
iconPassed
iconQueued
iconSkipped
iconUnset
runAction

shadow
noMatchesOutline
outline
modifiedItemIndicator
selectionHighlight
warningHighlight
boolean
error
name
number
string
value
valueChangedHighlight
diagonalFill
indentGuidesStroke
hoverOutline
errorHighlight
findMatchHighlight
opacity
 */
