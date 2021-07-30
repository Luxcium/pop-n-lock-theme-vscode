import { ColorElement } from '../classes';
import {
  x001111FF,
  x001133FF,
  x00539CFF,
  x0099CCDD,
  x00FF00FF,
  x111122FF,
  x1144BB55,
  x1155EE22,
  x19152FFF,
  x1B1B26FF,
  x1C1C2EFF,
  x1C1C30FF,
  x1C1E2AFF,
  x1D1028FF,
  x1D1C2FFF,
  x1D254500,
  x1D2545FF,
  x1D2547FF,
  x1D2555EE,
  x201039FF,
  x20213BFF,
  x2222EE66,
  x2222EE77,
  x22335533,
  x22335555,
  x22335577,
  x22335599,
  x223355AA,
  x223355BB,
  x223355CC,
  x223355DD,
  x223355FF,
  x22991155,
  x22995555,
  x297DC4FF,
  x2A2040FF,
  x2A255ADD,
  x2C203CFF,
  x3333DD77,
  x3333FFAA,
  x3388DD77,
  x3399CC33,
  x3399CC44,
  x3399CC55,
  x3399CC66,
  x3399CC77,
  x3399CC99,
  x3399CCAA,
  x3399CCCC,
  x3399CCDD,
  x3399CCEE,
  x3399CCFF,
  x33CC00DD,
  x442266DD,
  x4422BB44,
  x4422EE77,
  x44AAEE11,
  x44AAEE33,
  x44AAEE44,
  x44AAEE55,
  x44BB99FF,
  x552266FF,
  x55227766,
  x5522AA22,
  x5522AA44,
  x5522AA55,
  x5522AA88,
  x5522AADD,
  x5533EEAA,
  x652D90FF,
  x66118866,
  x661188FF,
  x6644CCDD,
  x669944FF,
  x669988AA,
  x6699FFDD,
  x66BBFFDD,
  x66BBFFFF,
  x77116600,
  x77116611,
  x77116644,
  x77116655,
  x77116666,
  x77116677,
  x77116688,
  x771166AA,
  x771166CC,
  x771166FF,
  x77222233,
  x77449933,
  x77552233,
  x77BB55FF,
  x77CC22FF,
  x884488FF,
  x88BB33AA,
  x88BB33CC,
  x88BB33FF,
  x88DDAA33,
  x88DDAA88,
  x88DDAAAA,
  x88DDAABB,
  x88DDAAFF,
  x99336655,
  x993366FF,
  x9955BB44,
  xAA55BBEE,
  xAA55BBFF,
  xAAEE4444,
  xAAEE4499,
  xAAEE44BB,
  xAAEE44FF,
  xBB3355AA,
  xBB3355BB,
  xBB3355CC,
  xBB3355FF,
  xC4BDB5AA,
  xC4BDB5DD,
  xC4BDB5EE,
  xC4BDB5FF,
  xC9BDB0DD,
  xC9BDB0EE,
  xCC33CCAA,
  xCC33CCDD,
  xCC6600FF,
  xCCEE55FF,
  xCCFF33FF,
  xD2C8BE22,
  xD2C8BE33,
  xD2C8BE44,
  xD2C8BE55,
  xD2C8BEAA,
  xD2C8BEBB,
  xD2C8BEDD,
  xD2C8BEFF,
  xD8CDB4BB,
  xDD2255EE,
  xDD2255FF,
  xDD8811FF,
  xEE111122,
  xEE11AAEE,
  xEE447733,
  xEE447744,
  xEE4477BB,
  xEE4477FF,
  xEE6677FF,
  xEEAA2200,
  xEEAA2288,
  xEEAA22BB,
  xEEBB5555,
  xEEDDCCFF,
  xFF0000FF,
  xFF00FFFF,
  xFF115500,
  xFF115544,
  xFF2200DD,
  xFF3333FF,
  xFF3366FF,
  xFF4422CC,
  xFF445555,
  xFF445599,
  xFF773388,
  xFF7733CC,
  xFF9900DD,
  xFF9900FF,
  xFFBB00DD,
  xFFBB22FF,
  xFFBBAA55,
  xFFCC3377,
  xFFCC33DD,
  xFFCC33EE,
  xFFCC33FF,
  xFFCC55EE,
  xFFCC55FF,
  xFFCC6644,
  xFFCC6655,
  xFFCC6677,
  xFFCC66BB,
  xFFCC66CC,
  xFFCC77CC,
  xFFEECCEE,
  xFFEEDD88,
  xFFEEDDDD,
  xFFFFFF66,
  xFFFFFFFF,
} from './const';
// export const sampling = new ColorElement('widget.shadow').setColorHex(x001111FF); // #001111FF
export const colorList = [
  //'widget.shadow'
  new ColorElement('widget.shadow').setColorHex(x001111FF), // #001111FF
  //'editorGroupHeader.border'
  new ColorElement('editorGroupHeader.border').setColorHex(x001133FF), // #001133FF
  //'editorGroupHeader.noTabsBackground'
  new ColorElement('editorGroupHeader.noTabsBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'editorGroupHeader.tabsBackground'
  new ColorElement('editorGroupHeader.tabsBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'editorGroupHeader.tabsBorder'
  new ColorElement('editorGroupHeader.tabsBorder').setColorHex(x1D2545FF), // #1D2545FF
  //'symbolIcon.referenceForeground'
  new ColorElement('symbolIcon.referenceForeground').setColorHex(x00539CFF), // #00539CFF
  //'symbolIcon.interfaceForeground'
  new ColorElement('symbolIcon.interfaceForeground').setColorHex(x297DC4FF), // #297DC4FF
  //'symbolIcon.constantForeground'
  new ColorElement('symbolIcon.constantForeground').setColorHex(x297DC4FF), // #297DC4FF
  //'symbolIcon.fieldForeground'
  new ColorElement('symbolIcon.fieldForeground').setColorHex(x3399CCDD), // #3399CCDD
  //'symbolIcon.propertyForeground'
  new ColorElement('symbolIcon.propertyForeground').setColorHex(x3399CCFF), // #3399CCFF
  //'symbolIcon.unitForeground'
  new ColorElement('symbolIcon.unitForeground').setColorHex(x44BB99FF), // #44BB99FF
  //'symbolIcon.snippetForeground'
  new ColorElement('symbolIcon.snippetForeground').setColorHex(x652D90FF), // #652D90FF
  //'symbolIcon.enumeratorMemberForeground'
  new ColorElement('symbolIcon.enumeratorMemberForeground').setColorHex(x66BBFFDD), // #66BBFFDD
  //'symbolIcon.structForeground'
  new ColorElement('symbolIcon.structForeground').setColorHex(x66BBFFDD), // #66BBFFDD
  //'symbolIcon.operatorForeground'
  new ColorElement('symbolIcon.operatorForeground').setColorHex(x66BBFFDD), // #66BBFFDD
  //'symbolIcon.variableForeground'
  new ColorElement('symbolIcon.variableForeground').setColorHex(x66BBFFFF), // #66BBFFFF
  //'symbolIcon.objectForeground'
  new ColorElement('symbolIcon.objectForeground').setColorHex(x77CC22FF), // #77CC22FF
  //'symbolIcon.arrayForeground'
  new ColorElement('symbolIcon.arrayForeground').setColorHex(x77CC22FF), // #77CC22FF
  //'symbolIcon.booleanForeground'
  new ColorElement('symbolIcon.booleanForeground').setColorHex(x77CC22FF), // #77CC22FF
  //'symbolIcon.methodForeground'
  new ColorElement('symbolIcon.methodForeground').setColorHex(xAA55BBEE), // #AA55BBEE
  //'symbolIcon.moduleForeground'
  new ColorElement('symbolIcon.moduleForeground').setColorHex(xAA55BBEE), // #AA55BBEE
  //'symbolIcon.nullForeground'
  new ColorElement('symbolIcon.nullForeground').setColorHex(xAA55BBFF), // #AA55BBFF
  //'symbolIcon.namespaceForeground'
  new ColorElement('symbolIcon.namespaceForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'symbolIcon.typeParameterForeground'
  new ColorElement('symbolIcon.typeParameterForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'symbolIcon.colorForeground'
  new ColorElement('symbolIcon.colorForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'symbolIcon.fileForeground'
  new ColorElement('symbolIcon.fileForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'symbolIcon.folderForeground'
  new ColorElement('symbolIcon.folderForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'symbolIcon.keyForeground'
  new ColorElement('symbolIcon.keyForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'symbolIcon.stringForeground'
  new ColorElement('symbolIcon.stringForeground').setColorHex(xCCEE55FF), // #CCEE55FF
  //'symbolIcon.keywordForeground'
  new ColorElement('symbolIcon.keywordForeground').setColorHex(xDD2255FF), // #DD2255FF
  //'symbolIcon.classForeground'
  new ColorElement('symbolIcon.classForeground').setColorHex(xDD8811FF), // #DD8811FF
  //'symbolIcon.constructorForeground'
  new ColorElement('symbolIcon.constructorForeground').setColorHex(xEE11AAEE), // #EE11AAEE
  //'symbolIcon.numberForeground'
  new ColorElement('symbolIcon.numberForeground').setColorHex(xEE6677FF), // #EE6677FF
  //'symbolIcon.packageForeground'
  new ColorElement('symbolIcon.packageForeground').setColorHex(xFF9900FF), // #FF9900FF
  //'symbolIcon.enumeratorForeground'
  new ColorElement('symbolIcon.enumeratorForeground').setColorHex(xFFBB22FF), // #FFBB22FF
  //'symbolIcon.eventForeground'
  new ColorElement('symbolIcon.eventForeground').setColorHex(xFFCC33EE), // #FFCC33EE
  //'symbolIcon.functionForeground'
  new ColorElement('symbolIcon.functionForeground').setColorHex(xFFCC33EE), // #FFCC33EE
  //'symbolIcon.textForeground'
  new ColorElement('symbolIcon.textForeground').setColorHex(xFFCC33FF), // #FFCC33FF
  //'gitDecoration.ignoredResourceForeground'
  new ColorElement('gitDecoration.ignoredResourceForeground').setColorHex(x0099CCDD), // #0099CCDD
  //'gitDecoration.renamedResourceForeground'
  new ColorElement('gitDecoration.renamedResourceForeground').setColorHex(x00FF00FF), // #00FF00FF
  //'gitDecoration.stageDeletedResourceForeground'
  new ColorElement('gitDecoration.stageDeletedResourceForeground').setColorHex(x00FF00FF), // #00FF00FF
  //'gitDecoration.stageModifiedResourceForeground'
  new ColorElement('gitDecoration.stageModifiedResourceForeground').setColorHex(x00FF00FF), // #00FF00FF
  //'gitDecoration.addedResourceForeground'
  new ColorElement('gitDecoration.addedResourceForeground').setColorHex(x33CC00DD), // #33CC00DD
  //'gitDecoration.deletedResourceForeground'
  new ColorElement('gitDecoration.deletedResourceForeground').setColorHex(x993366FF), // #993366FF
  //'gitDecoration.submoduleResourceForeground'
  new ColorElement('gitDecoration.submoduleResourceForeground').setColorHex(xCC33CCDD), // #CC33CCDD
  //'gitDecoration.conflictingResourceForeground'
  new ColorElement('gitDecoration.conflictingResourceForeground').setColorHex(xFF2200DD), // #FF2200DD
  //'gitDecoration.untrackedResourceForeground'
  new ColorElement('gitDecoration.untrackedResourceForeground').setColorHex(xFF9900DD), // #FF9900DD
  //'gitDecoration.modifiedResourceForeground'
  new ColorElement('gitDecoration.modifiedResourceForeground').setColorHex(xFFBB00DD), // #FFBB00DD
  //'button.secondaryBackground'
  new ColorElement('button.secondaryBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'button.secondaryForeground'
  new ColorElement('button.secondaryForeground').setColorHex(x00FF00FF), // #00FF00FF
  //'button.secondaryHoverBackground'
  new ColorElement('button.secondaryHoverBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'button.hoverBackground'
  new ColorElement('button.hoverBackground').setColorHex(x3399CCCC), // #3399CCCC
  //'button.background'
  new ColorElement('button.background').setColorHex(x771166CC), // #771166CC
  //'button.foreground'
  new ColorElement('button.foreground').setColorHex(xC9BDB0EE), // #C9BDB0EE
  //'button.border'
  new ColorElement('button.border').setColorHex(xFF00FFFF), // #FF00FFFF
  //'charts.blue'
  new ColorElement('charts.blue').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.foreground'
  new ColorElement('charts.foreground').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.green'
  new ColorElement('charts.green').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.lines'
  new ColorElement('charts.lines').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.orange'
  new ColorElement('charts.orange').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.purple'
  new ColorElement('charts.purple').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.red'
  new ColorElement('charts.red').setColorHex(x00FF00FF), // #00FF00FF
  //'charts.yellow'
  new ColorElement('charts.yellow').setColorHex(x00FF00FF), // #00FF00FF
  //'editor.linkedEditingBackground'
  new ColorElement('editor.linkedEditingBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'editor.lineHighlightBackground'
  new ColorElement('editor.lineHighlightBackground').setColorHex(x1155EE22), // #1155EE22
  //'editor.foldBackground'
  new ColorElement('editor.foldBackground').setColorHex(x1155EE22), // #1155EE22
  //'editor.background'
  new ColorElement('editor.background').setColorHex(x20213BFF), // #20213BFF
  //'editor.findRangeHighlightBackground'
  new ColorElement('editor.findRangeHighlightBackground').setColorHex(x22335555), // #22335555
  //'editor.focusedStackFrameHighlightBackground'
  new ColorElement('editor.focusedStackFrameHighlightBackground').setColorHex(x22335555), // #22335555
  //'editor.rangeHighlightBackground'
  new ColorElement('editor.rangeHighlightBackground').setColorHex(x22335555), // #22335555
  //'editor.stackFrameHighlightBackground'
  new ColorElement('editor.stackFrameHighlightBackground').setColorHex(x22335555), // #22335555
  //'editor.snippetTabstopHighlightBackground'
  new ColorElement('editor.snippetTabstopHighlightBackground').setColorHex(x22335577), // #22335577
  //'editor.snippetFinalTabstopHighlightBackground'
  new ColorElement('editor.snippetFinalTabstopHighlightBackground').setColorHex(x22335599), // #22335599
  //'editor.snippetFinalTabstopHighlightBorder'
  new ColorElement('editor.snippetFinalTabstopHighlightBorder').setColorHex(x223355AA), // #223355AA
  //'editor.snippetTabstopHighlightBorder'
  new ColorElement('editor.snippetTabstopHighlightBorder').setColorHex(x223355CC), // #223355CC
  //'editor.findMatchBorder'
  new ColorElement('editor.findMatchBorder').setColorHex(x3333FFAA), // #3333FFAA
  //'editor.inactiveSelectionBackground'
  new ColorElement('editor.inactiveSelectionBackground').setColorHex(x3388DD77), // #3388DD77
  //'editor.hoverHighlightBackground'
  new ColorElement('editor.hoverHighlightBackground').setColorHex(x3399CC33), // #3399CC33
  //'editor.findMatchHighlightBackground'
  new ColorElement('editor.findMatchHighlightBackground').setColorHex(x3399CC44), // #3399CC44
  //'editor.findMatchBackground'
  new ColorElement('editor.findMatchBackground').setColorHex(x3399CC66), // #3399CC66
  //'editor.findMatchHighlightBorder'
  new ColorElement('editor.findMatchHighlightBorder').setColorHex(x3399CCAA), // #3399CCAA
  //'editor.symbolHighlightBackground'
  new ColorElement('editor.symbolHighlightBackground').setColorHex(x4422EE77), // #4422EE77
  //'editor.selectionBackground'
  new ColorElement('editor.selectionBackground').setColorHex(x4422EE77), // #4422EE77
  //'editor.selectionHighlightBackground'
  new ColorElement('editor.selectionHighlightBackground').setColorHex(x55227766), // #55227766
  //'editor.findRangeHighlightBorder'
  new ColorElement('editor.findRangeHighlightBorder').setColorHex(x5522AA55), // #5522AA55
  //'editor.selectionHighlightBorder'
  new ColorElement('editor.selectionHighlightBorder').setColorHex(x5522AADD), // #5522AADD
  //'editor.rangeHighlightBorder'
  new ColorElement('editor.rangeHighlightBorder').setColorHex(x77116611), // #77116611
  //'editor.wordHighlightBackground'
  new ColorElement('editor.wordHighlightBackground').setColorHex(x88DDAA33), // #88DDAA33
  //'editor.wordHighlightBorder'
  new ColorElement('editor.wordHighlightBorder').setColorHex(x88DDAABB), // #88DDAABB
  //'editor.symbolHighlightBorder'
  new ColorElement('editor.symbolHighlightBorder').setColorHex(x993366FF), // #993366FF
  //'editor.selectionForeground'
  new ColorElement('editor.selectionForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'editor.foreground'
  new ColorElement('editor.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'editor.lineHighlightBorder'
  new ColorElement('editor.lineHighlightBorder').setColorHex(xEE111122), // #EE111122
  //'editor.wordHighlightStrongBackground'
  new ColorElement('editor.wordHighlightStrongBackground').setColorHex(xEE447733), // #EE447733
  //'editor.wordHighlightStrongBorder'
  new ColorElement('editor.wordHighlightStrongBorder').setColorHex(xEE4477BB), // #EE4477BB
  //'editor.inlineValuesBackground'
  new ColorElement('editor.inlineValuesBackground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editor.inlineValuesForeground'
  new ColorElement('editor.inlineValuesForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorError.background'
  new ColorElement('editorError.background').setColorHex(x00FF00FF), // #00FF00FF
  //'editorError.border'
  new ColorElement('editorError.border').setColorHex(xFF115544), // #FF115544
  //'editorError.foreground'
  new ColorElement('editorError.foreground').setColorHex(xFF3366FF), // #FF3366FF
  //'editorInfo.background'
  new ColorElement('editorInfo.background').setColorHex(x00FF00FF), // #00FF00FF
  //'editorInfo.border'
  new ColorElement('editorInfo.border').setColorHex(x44AAEE55), // #44AAEE55
  //'editorInfo.foreground'
  new ColorElement('editorInfo.foreground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'editorWarning.background'
  new ColorElement('editorWarning.background').setColorHex(x00FF00FF), // #00FF00FF
  //'editorWarning.foreground'
  new ColorElement('editorWarning.foreground').setColorHex(xCCFF33FF), // #CCFF33FF
  //'editorWarning.border'
  new ColorElement('editorWarning.border').setColorHex(xEEAA2200), // #EEAA2200
  //'extensionIcon.starForeground'
  new ColorElement('extensionIcon.starForeground').setColorHex(x00FF00FF), // #00FF00FF
  //'list.focusOutline'
  new ColorElement('list.focusOutline').setColorHex(x00FF00FF), // #00FF00FF
  //'list.inactiveFocusOutline'
  new ColorElement('list.inactiveFocusOutline').setColorHex(x00FF00FF), // #00FF00FF
  //'list.inactiveFocusBackground'
  new ColorElement('list.inactiveFocusBackground').setColorHex(x2222EE66), // #2222EE66
  //'list.focusBackground'
  new ColorElement('list.focusBackground').setColorHex(x2222EE77), // #2222EE77
  //'list.inactiveSelectionBackground'
  new ColorElement('list.inactiveSelectionBackground').setColorHex(x3333DD77), // #3333DD77
  //'list.dropBackground'
  new ColorElement('list.dropBackground').setColorHex(x3399CC33), // #3399CC33
  //'list.activeSelectionBackground'
  new ColorElement('list.activeSelectionBackground').setColorHex(x3399CC77), // #3399CC77
  //'list.filterMatchBackground'
  new ColorElement('list.filterMatchBackground').setColorHex(x3399CCAA), // #3399CCAA
  //'list.hoverBackground'
  new ColorElement('list.hoverBackground').setColorHex(x77116677), // #77116677
  //'list.highlightForeground'
  new ColorElement('list.highlightForeground').setColorHex(x77BB55FF), // #77BB55FF
  //'list.warningForeground'
  new ColorElement('list.warningForeground').setColorHex(xCCFF33FF), // #CCFF33FF
  //'list.inactiveSelectionForeground'
  new ColorElement('list.inactiveSelectionForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'list.hoverForeground'
  new ColorElement('list.hoverForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'list.activeSelectionForeground'
  new ColorElement('list.activeSelectionForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'list.deemphasizedForeground'
  new ColorElement('list.deemphasizedForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'list.activeSelectionIconForeground'
  new ColorElement('list.activeSelectionIconForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'list.focusHighlightForeground'
  new ColorElement('list.focusHighlightForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'list.inactiveSelectionIconForeground'
  new ColorElement('list.inactiveSelectionIconForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'list.errorForeground'
  new ColorElement('list.errorForeground').setColorHex(xFF3366FF), // #FF3366FF
  //'list.invalidItemForeground'
  new ColorElement('list.invalidItemForeground').setColorHex(xFF4422CC), // #FF4422CC
  //'list.filterMatchBorder'
  new ColorElement('list.filterMatchBorder').setColorHex(xFFCC33FF), // #FFCC33FF
  //'list.focusForeground'
  new ColorElement('list.focusForeground').setColorHex(xFFFFFFFF), // #FFFFFFFF
  //'notebook.cellHoverBackground'
  new ColorElement('notebook.cellHoverBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.cellInsertionIndicator'
  new ColorElement('notebook.cellInsertionIndicator').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.cellToolbarSeparator'
  new ColorElement('notebook.cellToolbarSeparator').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.focusedCellBackground'
  new ColorElement('notebook.focusedCellBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.focusedCellBorder'
  new ColorElement('notebook.focusedCellBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.focusedEditorBorder'
  new ColorElement('notebook.focusedEditorBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.inactiveFocusedCellBorder'
  new ColorElement('notebook.inactiveFocusedCellBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.inactiveSelectedCellBorder'
  new ColorElement('notebook.inactiveSelectedCellBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.selectedCellBackground'
  new ColorElement('notebook.selectedCellBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.selectedCellBorder'
  new ColorElement('notebook.selectedCellBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.symbolHighlightBackground'
  new ColorElement('notebook.symbolHighlightBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'notebook.cellBorderColor'
  new ColorElement('notebook.cellBorderColor').setColorHex(xFF0000FF), // #FF0000FF
  //'notebook.cellStatusBarItemHoverBackground'
  new ColorElement('notebook.cellStatusBarItemHoverBackground').setColorHex(xFF0000FF), // #FF0000FF
  //'notebook.outputContainerBackgroundColor'
  new ColorElement('notebook.outputContainerBackgroundColor').setColorHex(xFF0000FF), // #FF0000FF
  //'notebook.cellEditorBackground'
  new ColorElement('notebook.cellEditorBackground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'notebookScrollbarSlider.activeBackground'
  new ColorElement('notebookScrollbarSlider.activeBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'notebookScrollbarSlider.background'
  new ColorElement('notebookScrollbarSlider.background').setColorHex(x00FF00FF), // #00FF00FF
  //'notebookScrollbarSlider.hoverBackground'
  new ColorElement('notebookScrollbarSlider.hoverBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'quickInputList.focusBackground'
  new ColorElement('quickInputList.focusBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'quickInputList.focusForeground'
  new ColorElement('quickInputList.focusForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'quickInputList.focusIconForeground'
  new ColorElement('quickInputList.focusIconForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'sash.hoverBorder'
  new ColorElement('sash.hoverBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'scm.providerBorder'
  new ColorElement('scm.providerBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'settings.focusedRowBackground'
  new ColorElement('settings.focusedRowBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'settings.checkboxBackground'
  new ColorElement('settings.checkboxBackground').setColorHex(x3399CC44), // #3399CC44
  //'settings.numberInputBackground'
  new ColorElement('settings.numberInputBackground').setColorHex(x3399CC44), // #3399CC44
  //'settings.dropdownBackground'
  new ColorElement('settings.dropdownBackground').setColorHex(x77116644), // #77116644
  //'settings.textInputBackground'
  new ColorElement('settings.textInputBackground').setColorHex(x77116644), // #77116644
  //'settings.modifiedItemIndicator'
  new ColorElement('settings.modifiedItemIndicator').setColorHex(x88BB33FF), // #88BB33FF
  //'settings.dropdownForeground'
  new ColorElement('settings.dropdownForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'settings.checkboxForeground'
  new ColorElement('settings.checkboxForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'settings.numberInputForeground'
  new ColorElement('settings.numberInputForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'settings.textInputForeground'
  new ColorElement('settings.textInputForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'settings.headerForeground'
  new ColorElement('settings.headerForeground').setColorHex(xEEDDCCFF), // #EEDDCCFF
  //'settings.focusedRowBorder'
  new ColorElement('settings.focusedRowBorder').setColorHex(xFF00FFFF), // #FF00FFFF
  //'settings.rowHoverBackground'
  new ColorElement('settings.rowHoverBackground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'settings.numberInputBorder'
  new ColorElement('settings.numberInputBorder').setColorHex(xFFCC6644), // #FFCC6644
  //'settings.textInputBorder'
  new ColorElement('settings.textInputBorder').setColorHex(xFFCC6644), // #FFCC6644
  //'settings.dropdownBorder'
  new ColorElement('settings.dropdownBorder').setColorHex(xFFCC6677), // #FFCC6677
  //'settings.checkboxBorder'
  new ColorElement('settings.checkboxBorder').setColorHex(xFFCC6677), // #FFCC6677
  //'settings.dropdownListBorder'
  new ColorElement('settings.dropdownListBorder').setColorHex(xFFCC66BB), // #FFCC66BB
  //'statusBarItem.errorBackground'
  new ColorElement('statusBarItem.errorBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'statusBarItem.errorForeground'
  new ColorElement('statusBarItem.errorForeground').setColorHex(x00FF00FF), // #00FF00FF
  //'statusBarItem.hoverBackground'
  new ColorElement('statusBarItem.hoverBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'statusBarItem.prominentHoverBackground'
  new ColorElement('statusBarItem.prominentHoverBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'statusBarItem.activeBackground'
  new ColorElement('statusBarItem.activeBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'statusBarItem.prominentBackground'
  new ColorElement('statusBarItem.prominentBackground').setColorHex(x669944FF), // #669944FF
  //'statusBarItem.prominentForeground'
  new ColorElement('statusBarItem.prominentForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'statusBarItem.remoteBackground'
  new ColorElement('statusBarItem.remoteBackground').setColorHex(xFF0000FF), // #FF0000FF
  //'statusBarItem.remoteForeground'
  new ColorElement('statusBarItem.remoteForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'tab.lastPinnedBorder'
  new ColorElement('tab.lastPinnedBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'tab.border'
  new ColorElement('tab.border').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'tab.activeBorder'
  new ColorElement('tab.activeBorder').setColorHex(x1D254500), // #1D254500
  //'tab.unfocusedActiveBorder'
  new ColorElement('tab.unfocusedActiveBorder').setColorHex(x1D254500), // #1D254500
  //'tab.activeBackground'
  new ColorElement('tab.activeBackground').setColorHex(x1D2545FF), // #1D2545FF
  //'tab.unfocusedActiveBackground'
  new ColorElement('tab.unfocusedActiveBackground').setColorHex(x1D2545FF), // #1D2545FF
  //'tab.inactiveBackground'
  new ColorElement('tab.inactiveBackground').setColorHex(x2A2040FF), // #2A2040FF
  //'tab.unfocusedInactiveBackground'
  new ColorElement('tab.unfocusedInactiveBackground').setColorHex(x2A2040FF), // #2A2040FF
  //'tab.unfocusedHoverBorder'
  new ColorElement('tab.unfocusedHoverBorder').setColorHex(x3399CCDD), // #3399CCDD
  //'tab.hoverBorder'
  new ColorElement('tab.hoverBorder').setColorHex(x3399CCFF), // #3399CCFF
  //'tab.unfocusedHoverBackground'
  new ColorElement('tab.unfocusedHoverBackground').setColorHex(x5522AA44), // #5522AA44
  //'tab.hoverBackground'
  new ColorElement('tab.hoverBackground').setColorHex(x5522AA55), // #5522AA55
  //'tab.unfocusedActiveBorderTop'
  new ColorElement('tab.unfocusedActiveBorderTop').setColorHex(xAAEE4499), // #AAEE4499
  //'tab.activeBorderTop'
  new ColorElement('tab.activeBorderTop').setColorHex(xCCFF33FF), // #CCFF33FF
  //'tab.inactiveForeground'
  new ColorElement('tab.inactiveForeground').setColorHex(xD2C8BEAA), // #D2C8BEAA
  //'tab.unfocusedInactiveForeground'
  new ColorElement('tab.unfocusedInactiveForeground').setColorHex(xD2C8BEAA), // #D2C8BEAA
  //'tab.activeForeground'
  new ColorElement('tab.activeForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'tab.unfocusedActiveForeground'
  new ColorElement('tab.unfocusedActiveForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'tab.hoverForeground'
  new ColorElement('tab.hoverForeground').setColorHex(xD2C8BEFF), // #D2C8BEFF
  //'tab.unfocusedHoverForeground'
  new ColorElement('tab.unfocusedHoverForeground').setColorHex(xD2C8BEFF), // #D2C8BEFF
  //'tab.activeModifiedBorder'
  new ColorElement('tab.activeModifiedBorder').setColorHex(xFF3366FF), // #FF3366FF
  //'tab.unfocusedInactiveModifiedBorder'
  new ColorElement('tab.unfocusedInactiveModifiedBorder').setColorHex(xFF445555), // #FF445555
  //'tab.unfocusedActiveModifiedBorder'
  new ColorElement('tab.unfocusedActiveModifiedBorder').setColorHex(xFF445599), // #FF445599
  //'tab.inactiveModifiedBorder'
  new ColorElement('tab.inactiveModifiedBorder').setColorHex(xFF445599), // #FF445599
  //'testing.iconErrored'
  new ColorElement('testing.iconErrored').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.iconFailed'
  new ColorElement('testing.iconFailed').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.iconPassed'
  new ColorElement('testing.iconPassed').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.iconQueued'
  new ColorElement('testing.iconQueued').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.iconSkipped'
  new ColorElement('testing.iconSkipped').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.iconUnset'
  new ColorElement('testing.iconUnset').setColorHex(x00FF00FF), // #00FF00FF
  // 'warning.lineBackground'
  // new ColorElement('warning.lineBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.peekBorder'
  new ColorElement('testing.peekBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'testing.runAction'
  new ColorElement('testing.runAction').setColorHex(x00FF00FF), // #00FF00FF
  //'tree.tableColumnsBorder'
  new ColorElement('tree.tableColumnsBorder').setColorHex(x00FF00FF), // #00FF00FF
  //'tree.indentGuidesStroke'
  new ColorElement('tree.indentGuidesStroke').setColorHex(xFF0000FF), // #FF0000FF
  // 'progress.foreground'
  // new ColorElement('progress.foreground').setColorHex(x00FF00FF), // #00FF00FF
  //'welcomePage.tileBackground'
  new ColorElement('welcomePage.tileBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'welcomePage.tileHoverBackground'
  new ColorElement('welcomePage.tileHoverBackground').setColorHex(x00FF00FF), // #00FF00FF
  //'tileShadow.'
  // new ColorElement('tileShadow.').setColorHex(x00FF00FF), // #00FF00FF
  //'welcomePage.background'
  new ColorElement('welcomePage.background').setColorHex(x1D1028FF), // #1D1028FF
  //'welcomePage.buttonHoverBackground'
  new ColorElement('welcomePage.buttonHoverBackground').setColorHex(x3399CCCC), // #3399CCCC
  //'welcomePage.buttonBackground'
  new ColorElement('welcomePage.buttonBackground').setColorHex(x771166CC), // #771166CC
  //'scrollbar.shadow'
  new ColorElement('scrollbar.shadow').setColorHex(x111122FF), // #111122FF
  //'peekViewTitle.background'
  new ColorElement('peekViewTitle.background').setColorHex(x1144BB55), // #1144BB55
  //'dropdown.listBackground'
  new ColorElement('dropdown.listBackground').setColorHex(x19152FFF), // #19152FFF
  //'dropdown.background'
  new ColorElement('dropdown.background').setColorHex(x1C1E2AFF), // #1C1E2AFF
  //'dropdown.border'
  new ColorElement('dropdown.border').setColorHex(x771166AA), // #771166AA
  //'dropdown.foreground'
  new ColorElement('dropdown.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'window.inactiveBorder'
  new ColorElement('window.inactiveBorder').setColorHex(x1B1B26FF), // #1B1B26FF
  //'window.activeBorder'
  new ColorElement('window.activeBorder').setColorHex(x771166AA), // #771166AA
  //'editorHoverWidget.statusBarBackground'
  new ColorElement('editorHoverWidget.statusBarBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'editorHoverWidget.background'
  new ColorElement('editorHoverWidget.background').setColorHex(x1D2555EE), // #1D2555EE
  //'editorHoverWidget.foreground'
  new ColorElement('editorHoverWidget.foreground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'editorHoverWidget.border'
  new ColorElement('editorHoverWidget.border').setColorHex(xD2C8BE55), // #D2C8BE55
  //'editorGroup.focusedEmptyBorder'
  new ColorElement('editorGroup.focusedEmptyBorder').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'editorGroup.emptyBackground'
  new ColorElement('editorGroup.emptyBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'editorGroup.dropBackground'
  new ColorElement('editorGroup.dropBackground').setColorHex(x2C203CFF), // #2C203CFF
  //'editorGroup.border'
  new ColorElement('editorGroup.border').setColorHex(xFFCC6655), // #FFCC6655
  //'titleBar.activeBackground'
  new ColorElement('titleBar.activeBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'titleBar.inactiveBackground'
  new ColorElement('titleBar.inactiveBackground').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'titleBar.border'
  new ColorElement('titleBar.border').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'titleBar.inactiveForeground'
  new ColorElement('titleBar.inactiveForeground').setColorHex(xD2C8BEAA), // #D2C8BEAA
  //'titleBar.activeForeground'
  new ColorElement('titleBar.activeForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'editorPane.background'
  new ColorElement('editorPane.background').setColorHex(x1C1C2EFF), // #1C1C2EFF
  //'activityBar.background'
  new ColorElement('activityBar.background').setColorHex(x1C1C30FF), // #1C1C30FF
  //'activityBar.dropBorder'
  new ColorElement('activityBar.dropBorder').setColorHex(x3399CCFF), // #3399CCFF
  //'activityBar.activeBackground'
  new ColorElement('activityBar.activeBackground').setColorHex(x77116688), // #77116688
  //'activityBar.activeBorder'
  new ColorElement('activityBar.activeBorder').setColorHex(x771166FF), // #771166FF
  //'activityBar.activeFocusBorder'
  new ColorElement('activityBar.activeFocusBorder').setColorHex(x88BB33FF), // #88BB33FF
  //'activityBar.inactiveForeground'
  new ColorElement('activityBar.inactiveForeground').setColorHex(xC4BDB5AA), // #C4BDB5AA
  //'activityBar.foreground'
  new ColorElement('activityBar.foreground').setColorHex(xC4BDB5EE), // #C4BDB5EE
  //'activityBar.border'
  new ColorElement('activityBar.border').setColorHex(xFFCC6655), // #FFCC6655
  //'notifications.background'
  new ColorElement('notifications.background').setColorHex(x1D1028FF), // #1D1028FF
  //'notifications.border'
  new ColorElement('notifications.border').setColorHex(x77116611), // #77116611
  //'notifications.foreground'
  new ColorElement('notifications.foreground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'sideBar.background'
  new ColorElement('sideBar.background').setColorHex(x1D1028FF), // #1D1028FF
  //'sideBar.dropBackground'
  new ColorElement('sideBar.dropBackground').setColorHex(x77449933), // #77449933
  //'sideBar.foreground'
  new ColorElement('sideBar.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'sideBar.border'
  new ColorElement('sideBar.border').setColorHex(xFFCC3377), // #FFCC3377
  //'minimap.background'
  new ColorElement('minimap.background').setColorHex(x1D1C2FFF), // #1D1C2FFF
  //'minimap.selectionHighlight'
  new ColorElement('minimap.selectionHighlight').setColorHex(x88DDAA88), // #88DDAA88
  //'minimap.warningHighlight'
  new ColorElement('minimap.warningHighlight').setColorHex(xCCFF33FF), // #CCFF33FF
  //'minimap.errorHighlight'
  new ColorElement('minimap.errorHighlight').setColorHex(xFF3366FF), // #FF3366FF
  //'minimap.findMatchHighlight'
  new ColorElement('minimap.findMatchHighlight').setColorHex(xFF773388), // #FF773388
  //'editorGutter.background'
  new ColorElement('editorGutter.background').setColorHex(x1D1C2FFF), // #1D1C2FFF
  //'editorGutter.modifiedBackground'
  new ColorElement('editorGutter.modifiedBackground').setColorHex(x3399CCFF), // #3399CCFF
  //'editorGutter.commentRangeForeground'
  new ColorElement('editorGutter.commentRangeForeground').setColorHex(x5533EEAA), // #5533EEAA
  //'editorGutter.addedBackground'
  new ColorElement('editorGutter.addedBackground').setColorHex(x88BB33FF), // #88BB33FF
  //'editorGutter.deletedBackground'
  new ColorElement('editorGutter.deletedBackground').setColorHex(xBB3355FF), // #BB3355FF
  //'editorGutter.foldingControlForeground'
  new ColorElement('editorGutter.foldingControlForeground').setColorHex(xFFCC77CC), // #FFCC77CC
  //'peekViewEditorGutter.background'
  new ColorElement('peekViewEditorGutter.background').setColorHex(x1D2545FF), // #1D2545FF
  //'breadcrumb.background'
  new ColorElement('breadcrumb.background').setColorHex(x1D2547FF), // #1D2547FF
  //'breadcrumb.activeSelectionForeground'
  new ColorElement('breadcrumb.activeSelectionForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'breadcrumb.foreground'
  new ColorElement('breadcrumb.foreground').setColorHex(xD2C8BEAA), // #D2C8BEAA
  //'breadcrumb.focusForeground'
  new ColorElement('breadcrumb.focusForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'statusBar.background'
  new ColorElement('statusBar.background').setColorHex(x1D2547FF), // #1D2547FF
  //'statusBar.border'
  new ColorElement('statusBar.border').setColorHex(x77116600), // #77116600
  //'statusBar.debuggingBorder'
  new ColorElement('statusBar.debuggingBorder').setColorHex(x77116600), // #77116600
  //'statusBar.noFolderBorder'
  new ColorElement('statusBar.noFolderBorder').setColorHex(x77116600), // #77116600
  //'statusBar.noFolderBackground'
  new ColorElement('statusBar.noFolderBackground').setColorHex(x884488FF), // #884488FF
  //'statusBar.debuggingBackground'
  new ColorElement('statusBar.debuggingBackground').setColorHex(xCC6600FF), // #CC6600FF
  //'statusBar.foreground'
  new ColorElement('statusBar.foreground').setColorHex(xD2C8BEAA), // #D2C8BEAA
  //'statusBar.debuggingForeground'
  new ColorElement('statusBar.debuggingForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'statusBar.noFolderForeground'
  new ColorElement('statusBar.noFolderForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'debugExceptionWidget.background'
  new ColorElement('debugExceptionWidget.background').setColorHex(x1D2555EE), // #1D2555EE
  //'debugExceptionWidget.border'
  new ColorElement('debugExceptionWidget.border').setColorHex(xD2C8BE33), // #D2C8BE33
  //'editorWidget.background'
  new ColorElement('editorWidget.background').setColorHex(x1D2555EE), // #1D2555EE
  //'editorWidget.resizeBorder'
  new ColorElement('editorWidget.resizeBorder').setColorHex(x3399CCEE), // #3399CCEE
  //'editorWidget.foreground'
  new ColorElement('editorWidget.foreground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'editorWidget.border'
  new ColorElement('editorWidget.border').setColorHex(xD2C8BE55), // #D2C8BE55
  //'panel.background'
  new ColorElement('panel.background').setColorHex(x201039FF), // #201039FF
  //'panel.border'
  new ColorElement('panel.border').setColorHex(xD2C8BE55), // #D2C8BE55
  //'panel.dropBorder'
  new ColorElement('panel.dropBorder').setColorHex(xFF0000FF), // #FF0000FF
  //'inputValidation.infoBackground'
  new ColorElement('inputValidation.infoBackground').setColorHex(x22335533), // #22335533
  //'inputValidation.errorBackground'
  new ColorElement('inputValidation.errorBackground').setColorHex(x77222233), // #77222233
  //'inputValidation.warningBackground'
  new ColorElement('inputValidation.warningBackground').setColorHex(x77552233), // #77552233
  //'inputValidation.errorBorder'
  new ColorElement('inputValidation.errorBorder').setColorHex(xBB3355FF), // #BB3355FF
  //'inputValidation.errorForeground'
  new ColorElement('inputValidation.errorForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'inputValidation.infoForeground'
  new ColorElement('inputValidation.infoForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'inputValidation.warningForeground'
  new ColorElement('inputValidation.warningForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'inputValidation.infoBorder'
  new ColorElement('inputValidation.infoBorder').setColorHex(xFFCC55EE), // #FFCC55EE
  //'inputValidation.warningBorder'
  new ColorElement('inputValidation.warningBorder').setColorHex(xFFCC55EE), // #FFCC55EE
  //'peekViewEditor.background'
  new ColorElement('peekViewEditor.background').setColorHex(x223355BB), // #223355BB
  //'peekViewEditor.matchHighlightBackground'
  new ColorElement('peekViewEditor.matchHighlightBackground').setColorHex(x552266FF), // #552266FF
  //'peekViewEditor.matchHighlightBorder'
  new ColorElement('peekViewEditor.matchHighlightBorder').setColorHex(x661188FF), // #661188FF
  //'editorSuggestWidget.background'
  new ColorElement('editorSuggestWidget.background').setColorHex(x223355DD), // #223355DD
  //'editorSuggestWidget.selectedBackground'
  new ColorElement('editorSuggestWidget.selectedBackground').setColorHex(x44AAEE44), // #44AAEE44
  //'editorSuggestWidget.highlightForeground'
  new ColorElement('editorSuggestWidget.highlightForeground').setColorHex(x66BBFFDD), // #66BBFFDD
  //'editorSuggestWidget.border'
  new ColorElement('editorSuggestWidget.border').setColorHex(x66BBFFDD), // #66BBFFDD
  //'editorSuggestWidget.foreground'
  new ColorElement('editorSuggestWidget.foreground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'editorSuggestWidget.focusHighlightForeground'
  new ColorElement('editorSuggestWidget.focusHighlightForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorSuggestWidget.selectedForeground'
  new ColorElement('editorSuggestWidget.selectedForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorSuggestWidget.selectedIconForeground'
  new ColorElement('editorSuggestWidget.selectedIconForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorMarkerNavigation.background'
  new ColorElement('editorMarkerNavigation.background').setColorHex(x223355FF), // #223355FF
  //'editorCursor.background'
  new ColorElement('editorCursor.background').setColorHex(x22991155), // #22991155
  //'editorCursor.foreground'
  new ColorElement('editorCursor.foreground').setColorHex(xFF3333FF), // #FF3333FF
  //'menubar.selectionBackground'
  new ColorElement('menubar.selectionBackground').setColorHex(x22995555), // #22995555
  //'menubar.selectionBorder'
  new ColorElement('menubar.selectionBorder').setColorHex(x66118866), // #66118866
  //'menubar.selectionForeground'
  new ColorElement('menubar.selectionForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'breadcrumbPicker.background'
  new ColorElement('breadcrumbPicker.background').setColorHex(x2A255ADD), // #2A255ADD
  //'walkThrough.embeddedEditorBackground'
  new ColorElement('walkThrough.embeddedEditorBackground').setColorHex(x2C203CFF), // #2C203CFF
  //'debugToolBar.background'
  new ColorElement('debugToolBar.background').setColorHex(x2C203CFF), // #2C203CFF
  //'debugToolBar.border'
  new ColorElement('debugToolBar.border').setColorHex(x5522AA55), // #5522AA55
  //'menu.background'
  new ColorElement('menu.background').setColorHex(x2C203CFF), // #2C203CFF
  //'menu.separatorBackground'
  new ColorElement('menu.separatorBackground').setColorHex(x2C203CFF), // #2C203CFF
  //'menu.selectionBorder'
  new ColorElement('menu.selectionBorder').setColorHex(x5522AADD), // #5522AADD
  //'menu.border'
  new ColorElement('menu.border').setColorHex(x77116611), // #77116611
  //'menu.selectionForeground'
  new ColorElement('menu.selectionForeground').setColorHex(xC9BDB0DD), // #C9BDB0DD
  //'menu.foreground'
  new ColorElement('menu.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'menu.selectionBackground'
  new ColorElement('menu.selectionBackground').setColorHex(xEEBB5555), // #EEBB5555
  //'notificationCenterHeader.background'
  new ColorElement('notificationCenterHeader.background').setColorHex(x2C203CFF), // #2C203CFF
  //'notificationCenterHeader.foreground'
  new ColorElement('notificationCenterHeader.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'textBlockQuote.background'
  new ColorElement('textBlockQuote.background').setColorHex(x2C203CFF), // #2C203CFF
  //'textBlockQuote.border'
  new ColorElement('textBlockQuote.border').setColorHex(x77116611), // #77116611
  //'textCodeBlock.background'
  new ColorElement('textCodeBlock.background').setColorHex(x2C203CFF), // #2C203CFF
  //'input.background'
  new ColorElement('input.background').setColorHex(x3399CC33), // #3399CC33
  //'input.border'
  new ColorElement('input.border').setColorHex(xEEAA2288), // #EEAA2288
  //'input.placeholderForeground'
  new ColorElement('input.placeholderForeground').setColorHex(xFFEEDD88), // #FFEEDD88
  //'input.foreground'
  new ColorElement('input.foreground').setColorHex(xFFEEDDDD), // #FFEEDDDD
  //'merge.currentContentBackground'
  new ColorElement('merge.currentContentBackground').setColorHex(x3399CC33), // #3399CC33
  //'merge.currentHeaderBackground'
  new ColorElement('merge.currentHeaderBackground').setColorHex(x3399CCAA), // #3399CCAA
  //'merge.border'
  new ColorElement('merge.border').setColorHex(x3399CCCC), // #3399CCCC
  //'merge.commonContentBackground'
  new ColorElement('merge.commonContentBackground').setColorHex(x88DDAA33), // #88DDAA33
  //'merge.commonHeaderBackground'
  new ColorElement('merge.commonHeaderBackground').setColorHex(x88DDAAAA), // #88DDAAAA
  //'merge.incomingHeaderBackground'
  new ColorElement('merge.incomingHeaderBackground').setColorHex(xDD2255EE), // #DD2255EE
  //'merge.incomingContentBackground'
  new ColorElement('merge.incomingContentBackground').setColorHex(xEE447733), // #EE447733
  //'peekViewResult.matchHighlightBackground'
  new ColorElement('peekViewResult.matchHighlightBackground').setColorHex(x3399CC55), // #3399CC55
  //'peekViewResult.selectionBackground'
  new ColorElement('peekViewResult.selectionBackground').setColorHex(x4422BB44), // #4422BB44
  //'peekViewResult.background'
  new ColorElement('peekViewResult.background').setColorHex(x5522AA22), // #5522AA22
  //'peekViewResult.selectionForeground'
  new ColorElement('peekViewResult.selectionForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'peekViewResult.fileForeground'
  new ColorElement('peekViewResult.fileForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'peekViewResult.lineForeground'
  new ColorElement('peekViewResult.lineForeground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'scrollbarSlider.background'
  new ColorElement('scrollbarSlider.background').setColorHex(x3399CC99), // #3399CC99
  //'scrollbarSlider.activeBackground'
  new ColorElement('scrollbarSlider.activeBackground').setColorHex(x88BB33AA), // #88BB33AA
  //'scrollbarSlider.hoverBackground'
  new ColorElement('scrollbarSlider.hoverBackground').setColorHex(xFFCC66CC), // #FFCC66CC
  //'editorOverviewRuler.currentContentForeground'
  new ColorElement('editorOverviewRuler.currentContentForeground').setColorHex(x3399CCAA), // #3399CCAA
  //'editorOverviewRuler.modifiedForeground'
  new ColorElement('editorOverviewRuler.modifiedForeground').setColorHex(x3399CCAA), // #3399CCAA
  //'editorOverviewRuler.border'
  new ColorElement('editorOverviewRuler.border').setColorHex(x3399CCCC), // #3399CCCC
  //'editorOverviewRuler.findMatchForeground'
  new ColorElement('editorOverviewRuler.findMatchForeground').setColorHex(x3399CCFF), // #3399CCFF
  //'editorOverviewRuler.addedForeground'
  new ColorElement('editorOverviewRuler.addedForeground').setColorHex(x88BB33AA), // #88BB33AA
  //'editorOverviewRuler.commonContentForeground'
  new ColorElement('editorOverviewRuler.commonContentForeground').setColorHex(x88DDAAAA), // #88DDAAAA
  //'editorOverviewRuler.wordHighlightForeground'
  new ColorElement('editorOverviewRuler.wordHighlightForeground').setColorHex(x88DDAAFF), // #88DDAAFF
  //'editorOverviewRuler.bracketMatchForeground'
  new ColorElement('editorOverviewRuler.bracketMatchForeground').setColorHex(xAAEE44FF), // #AAEE44FF
  //'editorOverviewRuler.deletedForeground'
  new ColorElement('editorOverviewRuler.deletedForeground').setColorHex(xBB3355AA), // #BB3355AA
  //'editorOverviewRuler.warningForeground'
  new ColorElement('editorOverviewRuler.warningForeground').setColorHex(xCCFF33FF), // #CCFF33FF
  //'editorOverviewRuler.incomingContentForeground'
  new ColorElement('editorOverviewRuler.incomingContentForeground').setColorHex(xDD2255EE), // #DD2255EE
  //'editorOverviewRuler.wordHighlightStrongForeground'
  new ColorElement('editorOverviewRuler.wordHighlightStrongForeground').setColorHex(xEE4477FF), // #EE4477FF
  //'editorOverviewRuler.background'
  new ColorElement('editorOverviewRuler.background').setColorHex(xFF0000FF), // #FF0000FF
  //'editorOverviewRuler.errorForeground'
  new ColorElement('editorOverviewRuler.errorForeground').setColorHex(xFF3366FF), // #FF3366FF
  //'editorOverviewRuler.rangeHighlightForeground'
  new ColorElement('editorOverviewRuler.rangeHighlightForeground').setColorHex(xFF7733CC), // #FF7733CC
  //'editorOverviewRuler.infoForeground'
  new ColorElement('editorOverviewRuler.infoForeground').setColorHex(xFFCC55EE), // #FFCC55EE
  //'editorOverviewRuler.selectionHighlightForeground'
  new ColorElement('editorOverviewRuler.selectionHighlightForeground').setColorHex(xFFCC55EE), // #FFCC55EE
  //'minimapGutter.modifiedBackground'
  new ColorElement('minimapGutter.modifiedBackground').setColorHex(x3399CCCC), // #3399CCCC
  //'minimapGutter.addedBackground'
  new ColorElement('minimapGutter.addedBackground').setColorHex(x88BB33CC), // #88BB33CC
  //'minimapGutter.deletedBackground'
  new ColorElement('minimapGutter.deletedBackground').setColorHex(xBB3355CC), // #BB3355CC
  //'minimapSlider.activeBackground'
  new ColorElement('minimapSlider.activeBackground').setColorHex(x3399CCCC), // #3399CCCC
  //'minimapSlider.background'
  new ColorElement('minimapSlider.background').setColorHex(x5522AA44), // #5522AA44
  //'minimapSlider.hoverBackground'
  new ColorElement('minimapSlider.hoverBackground').setColorHex(x5522AA88), // #5522AA88
  //'panelTitle.activeBorder'
  new ColorElement('panelTitle.activeBorder').setColorHex(x3399CCCC), // #3399CCCC
  //'panelTitle.inactiveForeground'
  new ColorElement('panelTitle.inactiveForeground').setColorHex(xD2C8BEAA), // #D2C8BEAA
  //'panelTitle.activeForeground'
  new ColorElement('panelTitle.activeForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'badge.background'
  new ColorElement('badge.background').setColorHex(x3399CCCC), // #3399CCCC
  //'badge.foreground'
  new ColorElement('badge.foreground').setColorHex(xFFCC66CC), // #FFCC66CC
  //'progressBar.background'
  new ColorElement('progressBar.background').setColorHex(x3399CCCC), // #3399CCCC
  //'activityBarBadge.background'
  new ColorElement('activityBarBadge.background').setColorHex(x3399CCCC), // #3399CCCC
  //'activityBarBadge.foreground'
  new ColorElement('activityBarBadge.foreground').setColorHex(xFFCC66CC), // #FFCC66CC
  //'editorLightBulbAutoFix.foreground'
  new ColorElement('editorLightBulbAutoFix.foreground').setColorHex(x3399CCDD), // #3399CCDD
  //'extensionButton.prominentBackground'
  new ColorElement('extensionButton.prominentBackground').setColorHex(x3399CCFF), // #3399CCFF
  //'extensionButton.prominentHoverBackground'
  new ColorElement('extensionButton.prominentHoverBackground').setColorHex(x771166CC), // #771166CC
  //'extensionButton.prominentForeground'
  new ColorElement('extensionButton.prominentForeground').setColorHex(xFFEECCEE), // #FFEECCEE
  //'listFilterWidget.background'
  new ColorElement('listFilterWidget.background').setColorHex(x442266DD), // #442266DD
  //'listFilterWidget.noMatchesOutline'
  new ColorElement('listFilterWidget.noMatchesOutline').setColorHex(x442266DD), // #442266DD
  //'listFilterWidget.outline'
  new ColorElement('listFilterWidget.outline').setColorHex(x442266DD), // #442266DD
  //'editorIndentGuide.background'
  new ColorElement('editorIndentGuide.background').setColorHex(x44AAEE11), // #44AAEE11
  //'editorIndentGuide.activeBackground'
  new ColorElement('editorIndentGuide.activeBackground').setColorHex(x44AAEE33), // #44AAEE33
  //'textLink.activeForeground'
  new ColorElement('textLink.activeForeground').setColorHex(x6644CCDD), // #6644CCDD
  //'textLink.foreground'
  new ColorElement('textLink.foreground').setColorHex(x6699FFDD), // #6699FFDD
  //'selection.background'
  new ColorElement('selection.background').setColorHex(x669988AA), // #669988AA
  //'notificationLink.foreground'
  new ColorElement('notificationLink.foreground').setColorHex(x6699FFDD), // #6699FFDD
  //'diffEditor.border'
  new ColorElement('diffEditor.border').setColorHex(x77116600), // #77116600
  //'diffEditor.insertedTextBorder'
  new ColorElement('diffEditor.insertedTextBorder').setColorHex(x77116600), // #77116600
  //'diffEditor.removedTextBorder'
  new ColorElement('diffEditor.removedTextBorder').setColorHex(x77116600), // #77116600
  //'diffEditor.insertedTextBackground'
  new ColorElement('diffEditor.insertedTextBackground').setColorHex(x88DDAA33), // #88DDAA33
  //'diffEditor.removedTextBackground'
  new ColorElement('diffEditor.removedTextBackground').setColorHex(xEE447733), // #EE447733
  //'diffEditor.diagonalFill'
  new ColorElement('diffEditor.diagonalFill').setColorHex(xFF0000FF), // #FF0000FF
  //'notificationCenter.border'
  new ColorElement('notificationCenter.border').setColorHex(x77116611), // #77116611
  //'notificationToast.border'
  new ColorElement('notificationToast.border').setColorHex(x77116611), // #77116611
  //'pickerGroup.border'
  new ColorElement('pickerGroup.border').setColorHex(x77116611), // #77116611
  //'pickerGroup.foreground'
  new ColorElement('pickerGroup.foreground').setColorHex(xD2C8BEBB), // #D2C8BEBB
  //'panelInput.border'
  new ColorElement('panelInput.border').setColorHex(x77116655), // #77116655
  //'sideBarSectionHeader.background'
  new ColorElement('sideBarSectionHeader.background').setColorHex(x77116666), // #77116666
  //'sideBarSectionHeader.foreground'
  new ColorElement('sideBarSectionHeader.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'sideBarSectionHeader.border'
  new ColorElement('sideBarSectionHeader.border').setColorHex(xFFBBAA55), // #FFBBAA55
  //'inputOption.activeBackground'
  new ColorElement('inputOption.activeBackground').setColorHex(x77116688), // #77116688
  //'inputOption.activeForeground'
  new ColorElement('inputOption.activeForeground').setColorHex(xC4BDB5FF), // #C4BDB5FF
  //'inputOption.activeBorder'
  new ColorElement('inputOption.activeBorder').setColorHex(xEEAA22BB), // #EEAA22BB
  //'focusBorder'
  new ColorElement('focusBorder').setColorHex(x771166AA), // #771166AA
  //'extensionBadge.remoteBackground'
  new ColorElement('extensionBadge.remoteBackground').setColorHex(x771166CC), // #771166CC
  //'extensionBadge.remoteForeground'
  new ColorElement('extensionBadge.remoteForeground').setColorHex(xC9BDB0EE), // #C9BDB0EE
  //'searchEditor.findMatchBackground'
  new ColorElement('searchEditor.findMatchBackground').setColorHex(x99336655), // #99336655
  //'searchEditor.findMatchBorder'
  new ColorElement('searchEditor.findMatchBorder').setColorHex(xCC33CCAA), // #CC33CCAA
  //'searchEditor.textInputBorder'
  new ColorElement('searchEditor.textInputBorder').setColorHex(xFF0000FF), // #FF0000FF
  //'editorUnnecessaryCode.border'
  new ColorElement('editorUnnecessaryCode.border').setColorHex(x9955BB44), // #9955BB44
  //'editorUnnecessaryCode.opacity'
  new ColorElement('editorUnnecessaryCode.opacity').setColorHex(xFFFFFF66), // #FFFFFF66
  //'editorBracketMatch.background'
  new ColorElement('editorBracketMatch.background').setColorHex(xAAEE4444), // #AAEE4444
  //'editorBracketMatch.border'
  new ColorElement('editorBracketMatch.border').setColorHex(xAAEE44BB), // #AAEE44BB
  //'editorMarkerNavigationError.background'
  new ColorElement('editorMarkerNavigationError.background').setColorHex(xBB3355BB), // #BB3355BB
  //'quickInput.foreground'
  new ColorElement('quickInput.foreground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'quickInput.background'
  new ColorElement('quickInput.background').setColorHex(xFF0000FF), // #FF0000FF
  //'peekViewTitleDescription.foreground'
  new ColorElement('peekViewTitleDescription.foreground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'peekViewTitleLabel.foreground'
  new ColorElement('peekViewTitleLabel.foreground').setColorHex(xC4BDB5DD), // #C4BDB5DD
  //'descriptionForeground'
  new ColorElement('descriptionForeground').setColorHex(xC9BDB0EE), // #C9BDB0EE
  //'notificationsWarningIcon.foreground'
  new ColorElement('notificationsWarningIcon.foreground').setColorHex(xCCFF33FF), // #CCFF33FF
  //'problemsWarningIcon.foreground'
  new ColorElement('problemsWarningIcon.foreground').setColorHex(xCCFF33FF), // #CCFF33FF
  //'editorWhitespace.foreground'
  new ColorElement('editorWhitespace.foreground').setColorHex(xD2C8BE22), // #D2C8BE22
  //'editorCodeLens.foreground'
  new ColorElement('editorCodeLens.foreground').setColorHex(xD2C8BE33), // #D2C8BE33
  //'contrastBorder'
  new ColorElement('contrastBorder').setColorHex(xD2C8BE44), // #D2C8BE44
  //'editorLineNumber.foreground'
  new ColorElement('editorLineNumber.foreground').setColorHex(xD2C8BE55), // #D2C8BE55
  //'editorLineNumber.activeForeground'
  new ColorElement('editorLineNumber.activeForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'errorForeground'
  new ColorElement('errorForeground').setColorHex(xD2C8BEBB), // #D2C8BEBB
  //'editorLink.activeForeground'
  new ColorElement('editorLink.activeForeground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'foreground'
  new ColorElement('foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'sideBarTitle.foreground'
  new ColorElement('sideBarTitle.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'textPreformat.foreground'
  new ColorElement('textPreformat.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'textSeparator.foreground'
  new ColorElement('textSeparator.foreground').setColorHex(xD2C8BEDD), // #D2C8BEDD
  //'editorMarkerNavigationWarning.background'
  new ColorElement('editorMarkerNavigationWarning.background').setColorHex(xD8CDB4BB), // #D8CDB4BB
  //'editorRuler.foreground'
  new ColorElement('editorRuler.foreground').setColorHex(xEE447744), // #EE447744
  //'debugConsole.errorForeground'
  new ColorElement('debugConsole.errorForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugConsole.infoForeground'
  new ColorElement('debugConsole.infoForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugConsole.sourceForeground'
  new ColorElement('debugConsole.sourceForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugConsole.warningForeground'
  new ColorElement('debugConsole.warningForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugConsoleInputIcon.foreground'
  new ColorElement('debugConsoleInputIcon.foreground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.breakpointCurrentStackframeForeground'
  new ColorElement('debugIcon.breakpointCurrentStackframeForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.breakpointDisabledForeground'
  new ColorElement('debugIcon.breakpointDisabledForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.breakpointForeground'
  new ColorElement('debugIcon.breakpointForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.breakpointStackframeForeground'
  new ColorElement('debugIcon.breakpointStackframeForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.breakpointUnverifiedForeground'
  new ColorElement('debugIcon.breakpointUnverifiedForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.continueForeground'
  new ColorElement('debugIcon.continueForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.disconnectForeground'
  new ColorElement('debugIcon.disconnectForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.pauseForeground'
  new ColorElement('debugIcon.pauseForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.restartForeground'
  new ColorElement('debugIcon.restartForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.startForeground'
  new ColorElement('debugIcon.startForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.stepBackForeground'
  new ColorElement('debugIcon.stepBackForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.stepIntoForeground'
  new ColorElement('debugIcon.stepIntoForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.stepOutForeground'
  new ColorElement('debugIcon.stepOutForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.stepOverForeground'
  new ColorElement('debugIcon.stepOverForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugIcon.stopForeground'
  new ColorElement('debugIcon.stopForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugTokenExpression.boolean'
  new ColorElement('debugTokenExpression.boolean').setColorHex(xFF0000FF), // #FF0000FF
  //'debugTokenExpression.error'
  new ColorElement('debugTokenExpression.error').setColorHex(xFF0000FF), // #FF0000FF
  //'debugTokenExpression.name'
  new ColorElement('debugTokenExpression.name').setColorHex(xFF0000FF), // #FF0000FF
  //'debugTokenExpression.number'
  new ColorElement('debugTokenExpression.number').setColorHex(xFF0000FF), // #FF0000FF
  //'debugTokenExpression.string'
  new ColorElement('debugTokenExpression.string').setColorHex(xFF0000FF), // #FF0000FF
  //'debugTokenExpression.value'
  new ColorElement('debugTokenExpression.value').setColorHex(xFF0000FF), // #FF0000FF
  //'debugView.exceptionLabelBackground'
  new ColorElement('debugView.exceptionLabelBackground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugView.exceptionLabelForeground'
  new ColorElement('debugView.exceptionLabelForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugView.stateLabelBackground'
  new ColorElement('debugView.stateLabelBackground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugView.stateLabelForeground'
  new ColorElement('debugView.stateLabelForeground').setColorHex(xFF0000FF), // #FF0000FF
  //'debugView.valueChangedHighlight'
  new ColorElement('debugView.valueChangedHighlight').setColorHex(xFF0000FF), // #FF0000FF
  //'notebookStatusErrorIcon.foreground'
  new ColorElement('notebookStatusErrorIcon.foreground').setColorHex(xFF0000FF), // #FF0000FF
  //'notebookStatusRunningIcon.foreground'
  new ColorElement('notebookStatusRunningIcon.foreground').setColorHex(xFF0000FF), // #FF0000FF
  //'notebookStatusSuccessIcon.foreground'
  new ColorElement('notebookStatusSuccessIcon.foreground').setColorHex(xFF0000FF), // #FF0000FF
  //'checkbox.background'
  new ColorElement('checkbox.background').setColorHex(xFF0000FF), // #FF0000FF
  //'checkbox.border'
  new ColorElement('checkbox.border').setColorHex(xFF0000FF), // #FF0000FF
  //'checkbox.foreground'
  new ColorElement('checkbox.foreground').setColorHex(xFF0000FF), // #FF0000FF
  //'panelSection.border'
  new ColorElement('panelSection.border').setColorHex(xFF0000FF), // #FF0000FF
  //'panelSection.dropBackground'
  new ColorElement('panelSection.dropBackground').setColorHex(xFF0000FF), // #FF0000FF
  //'panelSectionHeader.background'
  new ColorElement('panelSectionHeader.background').setColorHex(xFF0000FF), // #FF0000FF
  //'panelSectionHeader.border'
  new ColorElement('panelSectionHeader.border').setColorHex(xFF0000FF), // #FF0000FF
  //'panelSectionHeader.foreground'
  new ColorElement('panelSectionHeader.foreground').setColorHex(xFF0000FF), // #FF0000FF
  //'quickInputTitle.background'
  new ColorElement('quickInputTitle.background').setColorHex(xFF0000FF), // #FF0000FF
  //'banner.background'
  new ColorElement('banner.background').setColorHex(xFF00FFFF), // #FF00FFFF
  //'banner.foreground'
  new ColorElement('banner.foreground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'banner.iconForeground'
  new ColorElement('banner.iconForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorGhostText.border'
  new ColorElement('editorGhostText.border').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorGhostText.foreground'
  new ColorElement('editorGhostText.foreground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorInlayHint.background'
  new ColorElement('editorInlayHint.background').setColorHex(xFF00FFFF), // #FF00FFFF
  //'editorInlayHint.foreground'
  new ColorElement('editorInlayHint.foreground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'keybindingLabel.background'
  new ColorElement('keybindingLabel.background').setColorHex(xFF00FFFF), // #FF00FFFF
  //'keybindingLabel.border'
  new ColorElement('keybindingLabel.border').setColorHex(xFF00FFFF), // #FF00FFFF
  //'keybindingLabel.bottomBorder'
  new ColorElement('keybindingLabel.bottomBorder').setColorHex(xFF00FFFF), // #FF00FFFF
  //'keybindingLabel.foreground'
  new ColorElement('keybindingLabel.foreground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'ports.iconRunningProcessForeground'
  new ColorElement('ports.iconRunningProcessForeground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'toolbar.activeBackground'
  new ColorElement('toolbar.activeBackground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'toolbar.hoverBackground'
  new ColorElement('toolbar.hoverBackground').setColorHex(xFF00FFFF), // #FF00FFFF
  //'toolbar.hoverOutline'
  new ColorElement('toolbar.hoverOutline').setColorHex(xFF00FFFF), // #FF00FFFF
  //'contrastActiveBorder'
  new ColorElement('contrastActiveBorder').setColorHex(xFF115500), // #FF115500
  //'problemsErrorIcon.foreground'
  new ColorElement('problemsErrorIcon.foreground').setColorHex(xFF3366FF), // #FF3366FF
  //'notificationsErrorIcon.foreground'
  new ColorElement('notificationsErrorIcon.foreground').setColorHex(xFF3366FF), // #FF3366FF
  //'editorLightBulb.foreground'
  new ColorElement('editorLightBulb.foreground').setColorHex(xFFCC33DD), // #FFCC33DD
  //'peekView.border'
  new ColorElement('peekView.border').setColorHex(xFFCC55EE), // #FFCC55EE
  //'editorHint.foreground'
  new ColorElement('editorHint.foreground').setColorHex(xFFCC55EE), // #FFCC55EE
  //'editorHint.border'
  new ColorElement('editorHint.border').setColorHex(xFFCC6644), // #FFCC6644
  //'editorMarkerNavigationInfo.background'
  new ColorElement('editorMarkerNavigationInfo.background').setColorHex(xFFCC55EE), // #FFCC55EE
  //'problemsInfoIcon.foreground'
  new ColorElement('problemsInfoIcon.foreground').setColorHex(xFFCC55EE), // #FFCC55EE
  //'notificationsInfoIcon.foreground'
  new ColorElement('notificationsInfoIcon.foreground').setColorHex(xFFCC55FF), // #FFCC55FF
  //'icon.foreground'
  new ColorElement('icon.foreground').setColorHex(xFFCC77CC), // #FFCC77CC
];

// console.log(colorList[0]?.toObject());
