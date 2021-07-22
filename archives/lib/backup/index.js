"use strict";
var foreground = "";
var focusBorder = "";
var contrastBorder = "";
var activeContrastBorder = "";
var selectBackground = "";
var listFocusBackground = "";
var mergeCurrentHeaderBackground = "";
var findMatchColorDefault = "";
var contentTransparency = "";
var currentBaseColor = "";
var commonBaseColor = "";
var incomingBaseColor = "";
var listActiveSelectionForeground = "";
var transparent = function (param1, param2) { };
var Color = {};
[
    {
        description: {
            foreground: "Overall foreground color. This color is only used if not overridden by a component."
        },
        name: "foreground",
        default: { dark: "#CCCCCC", light: "#616161", hc: "#FFFFFF" }
    },
    {
        description: {
            errorForeground: "Overall foreground color for error messages. This color is only used if not overridden by a component."
        },
        name: "errorForeground",
        default: { dark: "#F48771", light: "#A1260D", hc: "#F48771" }
    },
    {
        description: {
            descriptionForeground: "Foreground color for description text providing additional informatio, for example for a label."
        },
        name: "descriptionForeground",
        default: {
            light: "#717171",
            dark: transparent(foreground, 0.7),
            hc: transparent(foreground, 0.7)
        }
    },
    {
        description: {
            focusBorder: "Overall border color for focused elements. This color is only used if not overridden by a component."
        },
        name: "focusBorder",
        default: {
            dark: Color.fromHex("#0E639C").transparent(0.8),
            light: Color.fromHex("#007ACC").transparent(0.4),
            hc: "#F38518"
        }
    },
    {
        description: {
            contrastBorder: "An extra border around elements to separate them from others for greater contrast."
        },
        name: "contrastBorder",
        default: { light: null, dark: null, hc: "#6FC3DF" }
    },
    {
        description: {
            activeContrastBorder: "An extra border around active elements to separate them from others for greater contrast."
        },
        name: "contrastActiveBorder",
        default: { light: null, dark: null, hc: focusBorder }
    },
    {
        description: {
            selectionBackground: "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor."
        },
        name: "selection.background",
        default: { light: null, dark: null, hc: null }
    },
    {
        description: { textSeparatorForeground: "Color for text separators." },
        name: "textSeparator.foreground",
        default: { light: "#0000002e", dark: "#ffffff2e", hc: Color.black }
    },
    {
        description: { textLinkForeground: "Foreground color for links in text." },
        name: "textLink.foreground",
        default: { light: "#006AB1", dark: "#3794FF", hc: "#3794FF" }
    },
    {
        description: {
            textLinkActiveForeground: "Foreground color for links in text when clicked on and on mouse hover."
        },
        name: "textLink.activeForeground",
        default: { light: "#006AB1", dark: "#3794FF", hc: "#3794FF" }
    },
    {
        description: {
            textPreformatForeground: "Foreground color for preformatted text segments."
        },
        name: "textPreformat.foreground",
        default: { light: "#A31515", dark: "#D7BA7D", hc: "#D7BA7D" }
    },
    {
        description: {
            textBlockQuoteBackground: "Background color for block quotes in text."
        },
        name: "textBlockQuote.background",
        default: { light: "#7f7f7f1a", dark: "#7f7f7f1a", hc: null }
    },
    {
        description: {
            textBlockQuoteBorder: "Border color for block quotes in text."
        },
        name: "textBlockQuote.border",
        default: { light: "#007acc80", dark: "#007acc80", hc: Color.white }
    },
    {
        description: {
            textCodeBlockBackground: "Background color for code blocks in text."
        },
        name: "textCodeBlock.background",
        default: { light: "#dcdcdc66", dark: "#0a0a0a66", hc: Color.black }
    },
    {
        description: {
            widgetShadow: "Shadow color of widgets such as find/replace inside the editor."
        },
        name: "widget.shadow",
        default: { dark: "#000000", light: "#A8A8A8", hc: null }
    },
    {
        description: { inputBoxBackground: "Input box background." },
        name: "input.background",
        default: { dark: "#3C3C3C", light: Color.white, hc: Color.black }
    },
    {
        description: { inputBoxForeground: "Input box foreground." },
        name: "input.foreground",
        default: { dark: foreground, light: foreground, hc: foreground }
    },
    {
        description: { inputBoxBorder: "Input box border." },
        name: "input.border",
        default: { dark: null, light: null, hc: contrastBorder }
    },
    {
        description: {
            inputBoxActiveOptionBorder: "Border color of activated options in input fields."
        },
        name: "inputOption.activeBorder",
        default: { dark: "#007ACC", light: "#007ACC", hc: activeContrastBorder }
    },
    {
        description: {
            inputPlaceholderForeground: "Input box foreground color for placeholder text."
        },
        name: "input.placeholderForeground",
        default: {
            light: transparent(foreground, 0.5),
            dark: transparent(foreground, 0.5),
            hc: transparent(foreground, 0.7)
        }
    },
    {
        description: {
            inputValidationInfoBackground: "Input validation background color for information severity."
        },
        name: "inputValidation.infoBackground",
        default: { dark: "#063B49", light: "#D6ECF2", hc: Color.black }
    },
    {
        description: {
            inputValidationInfoForeground: "Input validation foreground color for information severity."
        },
        name: "inputValidation.infoForeground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            inputValidationInfoBorder: "Input validation border color for information severity."
        },
        name: "inputValidation.infoBorder",
        default: { dark: "#007acc", light: "#007acc", hc: contrastBorder }
    },
    {
        description: {
            inputValidationWarningBackground: "Input validation background color for warning severity."
        },
        name: "inputValidation.warningBackground",
        default: { dark: "#352A05", light: "#F6F5D2", hc: Color.black }
    },
    {
        description: {
            inputValidationWarningForeground: "Input validation foreground color for warning severity."
        },
        name: "inputValidation.warningForeground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            inputValidationWarningBorder: "Input validation border color for warning severity."
        },
        name: "inputValidation.warningBorder",
        default: { dark: "#B89500", light: "#B89500", hc: contrastBorder }
    },
    {
        description: {
            inputValidationErrorBackground: "Input validation background color for error severity."
        },
        name: "inputValidation.errorBackground",
        default: { dark: "#5A1D1D", light: "#F2DEDE", hc: Color.black }
    },
    {
        description: {
            inputValidationErrorForeground: "Input validation foreground color for error severity."
        },
        name: "inputValidation.errorForeground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            inputValidationErrorBorder: "Input validation border color for error severity."
        },
        name: "inputValidation.errorBorder",
        default: { dark: "#BE1100", light: "#BE1100", hc: contrastBorder }
    },
    {
        description: { dropdownBackground: "Dropdown background." },
        name: "dropdown.background",
        default: { dark: "#3C3C3C", light: Color.white, hc: Color.black }
    },
    {
        description: { dropdownListBackground: "Dropdown list background." },
        name: "dropdown.listBackground",
        default: { dark: null, light: null, hc: Color.black }
    },
    {
        description: { dropdownForeground: "Dropdown foreground." },
        name: "dropdown.foreground",
        default: { dark: "#F0F0F0", light: null, hc: Color.white }
    },
    {
        description: { dropdownBorder: "Dropdown border." },
        name: "dropdown.border",
        default: { dark: selectBackground, light: "#CECECE", hc: contrastBorder }
    },
    {
        description: {
            listFocusBackground: "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.focusBackground",
        default: { dark: "#062F4A", light: "#D6EBFF", hc: null }
    },
    {
        description: {
            listFocusForeground: "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.focusForeground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            listActiveSelectionBackground: "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.activeSelectionBackground",
        default: { dark: "#094771", light: "#0074E8", hc: null }
    },
    {
        description: {
            listActiveSelectionForeground: "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.activeSelectionForeground",
        default: { dark: Color.white, light: Color.white, hc: null }
    },
    {
        description: {
            listInactiveSelectionBackground: "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.inactiveSelectionBackground",
        default: { dark: "#37373D", light: "#E4E6F1", hc: null }
    },
    {
        description: {
            listInactiveSelectionForeground: "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.inactiveSelectionForeground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            listInactiveFocusBackground: "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focu, an inactive does not."
        },
        name: "list.inactiveFocusBackground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            listHoverBackground: "List/Tree background when hovering over items using the mouse."
        },
        name: "list.hoverBackground",
        default: { dark: "#2A2D2E", light: "#F0F0F0", hc: null }
    },
    {
        description: {
            listHoverForeground: "List/Tree foreground when hovering over items using the mouse."
        },
        name: "list.hoverForeground",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            listDropBackground: "List/Tree drag and drop background when moving items around using the mouse."
        },
        name: "list.dropBackground",
        default: { dark: listFocusBackground, light: listFocusBackground, hc: null }
    },
    {
        description: {
            highlight: "List/Tree foreground color of the match highlights when searching inside the list/tree."
        },
        name: "list.highlightForeground",
        default: { dark: "#0097fb", light: "#0066BF", hc: focusBorder }
    },
    {
        description: {
            invalidItemForeground: "List/Tree foreground color for invalid item, for example an unresolved root in explorer."
        },
        name: "list.invalidItemForeground",
        default: { dark: "#B89500", light: "#B89500", hc: "#B89500" }
    },
    {
        description: {
            listErrorForeground: "Foreground color of list items containing errors."
        },
        name: "list.errorForeground",
        default: { dark: "#F88070", light: "#B01011", hc: null }
    },
    {
        description: {
            listWarningForeground: "Foreground color of list items containing warnings."
        },
        name: "list.warningForeground",
        default: { dark: "#4d9e4d", light: "#117711", hc: null }
    },
    {
        description: {
            listFilterWidgetBackground: "Background color of the type filter widget in lists and trees."
        },
        name: "listFilterWidget.background",
        default: { light: "#efc1ad", dark: "#653723", hc: Color.black }
    },
    {
        description: {
            listFilterWidgetOutline: "Outline color of the type filter widget in lists and trees."
        },
        name: "listFilterWidget.outline",
        default: {
            dark: Color.transparent,
            light: Color.transparent,
            hc: "#f38518"
        }
    },
    {
        description: {
            listFilterWidgetNoMatchesOutline: "Outline color of the type filter widget in lists and tree, when there are no matches."
        },
        name: "listFilterWidget.noMatchesOutline",
        default: { dark: "#BE1100", light: "#BE1100", hc: contrastBorder }
    },
    {
        description: {
            pickerGroupForeground: "Quick picker color for grouping labels."
        },
        name: "pickerGroup.foreground",
        default: { dark: "#3794FF", light: "#0066BF", hc: Color.white }
    },
    {
        description: {
            pickerGroupBorder: "Quick picker color for grouping borders."
        },
        name: "pickerGroup.border",
        default: { dark: "#3F3F46", light: "#CCCEDB", hc: Color.white }
    },
    {
        description: { buttonForeground: "Button foreground color." },
        name: "button.foreground",
        default: { dark: Color.white, light: Color.white, hc: Color.white }
    },
    {
        description: { buttonBackground: "Button background color." },
        name: "button.background",
        default: { dark: "#0E639C", light: "#007ACC", hc: null }
    },
    {
        description: {
            buttonHoverBackground: "Button background color when hovering."
        },
        name: "button.hoverBackground",
        default: {
            dark: lighten(buttonBackground, 0.2),
            light: darken(buttonBackground, 0.2),
            hc: null
        }
    },
    {
        description: {
            badgeBackground: "Badge background color. Badges are small information label, e.g. for search results count."
        },
        name: "badge.background",
        default: { dark: "#4D4D4D", light: "#C4C4C4", hc: Color.black }
    },
    {
        description: {
            badgeForeground: "Badge foreground color. Badges are small information label, e.g. for search results count."
        },
        name: "badge.foreground",
        default: { dark: Color.white, light: "#333", hc: Color.white }
    },
    {
        description: {
            scrollbarShadow: "Scrollbar shadow to indicate that the view is scrolled."
        },
        name: "scrollbar.shadow",
        default: { dark: "#000000", light: "#DDDDDD", hc: null }
    },
    {
        description: {
            scrollbarSliderBackground: "Scrollbar slider background color."
        },
        name: "scrollbarSlider.background",
        default: {
            dark: Color.fromHex("#797979").transparent(0.4),
            light: Color.fromHex("#646464").transparent(0.4),
            hc: transparent(contrastBorder, 0.6)
        }
    },
    {
        description: {
            scrollbarSliderHoverBackground: "Scrollbar slider background color when hovering."
        },
        name: "scrollbarSlider.hoverBackground",
        default: {
            dark: Color.fromHex("#646464").transparent(0.7),
            light: Color.fromHex("#646464").transparent(0.7),
            hc: transparent(contrastBorder, 0.8)
        }
    },
    {
        description: {
            scrollbarSliderActiveBackground: "Scrollbar slider background color when clicked on."
        },
        name: "scrollbarSlider.activeBackground",
        default: {
            dark: Color.fromHex("#BFBFBF").transparent(0.4),
            light: Color.fromHex("#000000").transparent(0.6),
            hc: contrastBorder
        }
    },
    {
        description: {
            progressBarBackground: "Background color of the progress bar that can show for long running operations."
        },
        name: "progressBar.background",
        default: {
            dark: Color.fromHex("#0E70C0"),
            light: Color.fromHex("#0E70C0"),
            hc: contrastBorder
        }
    },
    {
        description: { menuBorder: "Border color of menus." },
        name: "menu.border",
        default: { dark: null, light: null, hc: contrastBorder }
    },
    {
        description: { menuForeground: "Foreground color of menu items." },
        name: "menu.foreground",
        default: { dark: selectForeground, light: foreground, hc: selectForeground }
    },
    {
        description: { menuBackground: "Background color of menu items." },
        name: "menu.background",
        default: {
            dark: selectBackground,
            light: selectBackground,
            hc: selectBackground
        }
    },
    {
        description: {
            menuSelectionForeground: "Foreground color of the selected menu item in menus."
        },
        name: "menu.selectionForeground",
        default: {
            dark: listActiveSelectionForeground,
            light: listActiveSelectionForeground,
            hc: listActiveSelectionForeground
        }
    },
    {
        description: {
            menuSelectionBackground: "Background color of the selected menu item in menus."
        },
        name: "menu.selectionBackground",
        default: {
            dark: listActiveSelectionBackground,
            light: listActiveSelectionBackground,
            hc: listActiveSelectionBackground
        }
    },
    {
        description: {
            menuSelectionBorder: "Border color of the selected menu item in menus."
        },
        name: "menu.selectionBorder",
        default: { dark: null, light: null, hc: activeContrastBorder }
    },
    {
        description: {
            menuSeparatorBackground: "Color of a separator menu item in menus."
        },
        name: "menu.separatorBackground",
        default: { dark: "#BBBBBB", light: "#888888", hc: contrastBorder }
    },
    {
        description: { editorBackground: "Editor background color." },
        name: "editor.background",
        default: { light: "#fffffe", dark: "#1E1E1E", hc: Color.black }
    },
    {
        description: { editorForeground: "Editor default foreground color." },
        name: "editor.foreground",
        default: { light: "#333333", dark: "#BBBBBB", hc: Color.white }
    },
    {
        description: {
            editorWidgetBackground: "Background color of editor widget, such as find/replace."
        },
        name: "editorWidget.background",
        default: { dark: "#252526", light: "#F3F3F3", hc: "#0C141F" }
    },
    {
        description: {
            editorWidgetBorder: "Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget."
        },
        name: "editorWidget.border",
        default: { dark: "#454545", light: "#C8C8C8", hc: contrastBorder }
    },
    {
        description: {
            editorWidgetResizeBorder: "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."
        },
        name: "editorWidget.resizeBorder",
        default: { light: null, dark: null, hc: null }
    },
    {
        description: {
            editorSelectionBackground: "Color of the editor selection."
        },
        name: "editor.selectionBackground",
        default: { light: "#ADD6FF", dark: "#264F78", hc: "#f3f518" }
    },
    {
        description: {
            editorSelectionForeground: "Color of the selected text for high contrast."
        },
        name: "editor.selectionForeground",
        default: { light: null, dark: null, hc: "#000000" }
    },
    {
        description: {
            editorInactiveSelection: "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editor.inactiveSelectionBackground",
        default: {
            light: transparent(editorSelectionBackground, 0.5),
            dark: transparent(editorSelectionBackground, 0.5),
            hc: transparent(editorSelectionBackground, 0.5)
        }
    },
    {
        description: {
            editorSelectionHighlight: "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editor.selectionHighlightBackground",
        default: {
            light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6),
            dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6),
            hc: null
        }
    },
    {
        description: {
            editorSelectionHighlightBorder: "Border color for regions with the same content as the selection."
        },
        name: "editor.selectionHighlightBorder",
        default: { light: null, dark: null, hc: activeContrastBorder }
    },
    {
        description: { editorFindMatch: "Color of the current search match." },
        name: "editor.findMatchBackground",
        default: { light: "#A8AC94", dark: "#515C6A", hc: null }
    },
    {
        description: {
            findMatchHighlight: "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editor.findMatchHighlightBackground",
        default: { light: "#EA5C0055", dark: "#EA5C0055", hc: null }
    },
    {
        description: {
            findRangeHighlight: "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editor.findRangeHighlightBackground",
        default: { dark: "#3a3d4166", light: "#b4b4b44d", hc: null }
    },
    {
        description: {
            editorFindMatchBorder: "Border color of the current search match."
        },
        name: "editor.findMatchBorder",
        default: { light: null, dark: null, hc: activeContrastBorder }
    },
    {
        description: {
            findMatchHighlightBorder: "Border color of the other search matches."
        },
        name: "editor.findMatchHighlightBorder",
        default: { light: null, dark: null, hc: activeContrastBorder }
    },
    {
        description: {
            findRangeHighlightBorder: "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editor.findRangeHighlightBorder",
        default: {
            dark: null,
            light: null,
            hc: transparent(activeContrastBorder, 0.4)
        }
    },
    {
        description: {
            hoverHighlight: "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editor.hoverHighlightBackground",
        default: { light: "#ADD6FF26", dark: "#264f7840", hc: "#ADD6FF26" }
    },
    {
        description: { hoverBackground: "Background color of the editor hover." },
        name: "editorHoverWidget.background",
        default: {
            light: editorWidgetBackground,
            dark: editorWidgetBackground,
            hc: editorWidgetBackground
        }
    },
    {
        description: { hoverBorder: "Border color of the editor hover." },
        name: "editorHoverWidget.border",
        default: {
            light: editorWidgetBorder,
            dark: editorWidgetBorder,
            hc: editorWidgetBorder
        }
    },
    {
        description: {
            statusBarBackground: "Background color of the editor hover status bar."
        },
        name: "editorHoverWidget.statusBarBackground",
        default: {
            dark: lighten(editorHoverBackground, 0.2),
            light: darken(editorHoverBackground, 0.05),
            hc: editorWidgetBackground
        }
    },
    {
        description: { activeLinkForeground: "Color of active links." },
        name: "editorLink.activeForeground",
        default: { dark: "#4E94CE", light: Color.blue, hc: Color.cyan }
    },
    {
        description: {
            diffEditorInserted: "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "diffEditor.insertedTextBackground",
        default: { dark: defaultInsertColor, light: defaultInsertColor, hc: null }
    },
    {
        description: {
            diffEditorRemoved: "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "diffEditor.removedTextBackground",
        default: { dark: defaultRemoveColor, light: defaultRemoveColor, hc: null }
    },
    {
        description: {
            diffEditorInsertedOutline: "Outline color for the text that got inserted."
        },
        name: "diffEditor.insertedTextBorder",
        default: { dark: null, light: null, hc: "#33ff2eff" }
    },
    {
        description: {
            diffEditorRemovedOutline: "Outline color for text that got removed."
        },
        name: "diffEditor.removedTextBorder",
        default: { dark: null, light: null, hc: "#FF008F" }
    },
    {
        description: {
            diffEditorBorder: "Border color between the two text editors."
        },
        name: "diffEditor.border",
        default: { dark: null, light: null, hc: contrastBorder }
    },
    {
        description: {
            snippetTabstopHighlightBackground: "Highlight background color of a snippet tabstop."
        },
        name: "editor.snippetTabstopHighlightBackground",
        default: {
            dark: new Color(new RGBA(124, 124, 124, 0.3)),
            light: new Color(new RGBA(10, 50, 100, 0.2)),
            hc: new Color(new RGBA(124, 124, 124, 0.3))
        }
    },
    {
        description: {
            snippetTabstopHighlightBorder: "Highlight border color of a snippet tabstop."
        },
        name: "editor.snippetTabstopHighlightBorder",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            snippetFinalTabstopHighlightBackground: "Highlight background color of the final tabstop of a snippet."
        },
        name: "editor.snippetFinalTabstopHighlightBackround'",
        default: { dark: null, light: null, hc: null }
    },
    {
        description: {
            snippetFinalTabstopHighlightBorder: "Highlight border color of the final stabstop of a snippet."
        },
        name: "editor.snippetFinalTabstopHighlightBorder",
        default: {
            dark: "#525252",
            light: new Color(new RGBA(10, 50, 100, 0.5)),
            hc: "#525252"
        }
    },
    {
        description: {
            breadcrumbsFocusForeground: "Color of focused breadcrumb items."
        },
        name: "breadcrumb.foreground",
        default: {
            light: transparent(foreground, 0.8),
            dark: transparent(foreground, 0.8),
            hc: transparent(foreground, 0.8)
        }
    },
    {
        description: {
            breadcrumbsBackground: "Background color of breadcrumb items."
        },
        name: "breadcrumb.background",
        default: {
            light: editorBackground,
            dark: editorBackground,
            hc: editorBackground
        }
    },
    {
        description: {
            breadcrumbsFocusForeground: "Color of focused breadcrumb items."
        },
        name: "breadcrumb.focusForeground",
        default: {
            light: darken(foreground, 0.2),
            dark: lighten(foreground, 0.1),
            hc: lighten(foreground, 0.1)
        }
    },
    {
        description: {
            breadcrumbsSelectedForegound: "Color of selected breadcrumb items."
        },
        name: "breadcrumb.activeSelectionForeground",
        default: {
            light: darken(foreground, 0.2),
            dark: lighten(foreground, 0.1),
            hc: lighten(foreground, 0.1)
        }
    },
    {
        description: {
            breadcrumbsSelectedBackground: "Background color of breadcrumb item picker."
        },
        name: "breadcrumbPicker.background",
        default: {
            light: editorWidgetBackground,
            dark: editorWidgetBackground,
            hc: editorWidgetBackground
        }
    },
    {
        description: {
            mergeCurrentHeaderBackground: "Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "merge.currentHeaderBackground",
        default: { dark: currentBaseColor, light: currentBaseColor, hc: null }
    },
    {
        description: {
            mergeCurrentContentBackground: "Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "merge.currentContentBackground",
        default: {
            dark: transparent(mergeCurrentHeaderBackground, contentTransparency),
            light: transparent(mergeCurrentHeaderBackground, contentTransparency),
            hc: transparent(mergeCurrentHeaderBackground, contentTransparency)
        }
    },
    {
        description: {
            mergeIncomingHeaderBackground: "Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "merge.incomingHeaderBackground",
        default: { dark: incomingBaseColor, light: incomingBaseColor, hc: null }
    },
    {
        description: {
            mergeIncomingContentBackground: "Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "merge.incomingContentBackground",
        default: {
            dark: transparent(mergeIncomingHeaderBackground, contentTransparency),
            light: transparent(mergeIncomingHeaderBackground, contentTransparency),
            hc: transparent(mergeIncomingHeaderBackground, contentTransparency)
        }
    },
    {
        description: {
            mergeCommonHeaderBackground: "Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "merge.commonHeaderBackground",
        default: { dark: commonBaseColor, light: commonBaseColor, hc: null }
    },
    {
        description: {
            mergeCommonContentBackground: "Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "merge.commonContentBackground",
        default: {
            dark: transparent(mergeCommonHeaderBackground, contentTransparency),
            light: transparent(mergeCommonHeaderBackground, contentTransparency),
            hc: transparent(mergeCommonHeaderBackground, contentTransparency)
        }
    },
    {
        description: {
            mergeBorder: "Border color on headers and the splitter in inline merge-conflicts."
        },
        name: "merge.border",
        default: { dark: null, light: null, hc: "#C3DF6F" }
    },
    {
        description: {
            overviewRulerCurrentContentForeground: "Current overview ruler foreground for inline merge-conflicts."
        },
        name: "editorOverviewRuler.currentContentForeground",
        default: {
            dark: transparent(mergeCurrentHeaderBackground, rulerTransparency),
            light: transparent(mergeCurrentHeaderBackground, rulerTransparency),
            hc: mergeBorder
        }
    },
    {
        description: {
            overviewRulerIncomingContentForeground: "Incoming overview ruler foreground for inline merge-conflicts."
        },
        name: "editorOverviewRuler.incomingContentForeground",
        default: {
            dark: transparent(mergeIncomingHeaderBackground, rulerTransparency),
            light: transparent(mergeIncomingHeaderBackground, rulerTransparency),
            hc: mergeBorder
        }
    },
    {
        description: {
            overviewRulerCommonContentForeground: "Common ancestor overview ruler foreground for inline merge-conflicts."
        },
        name: "editorOverviewRuler.commonContentForeground",
        default: {
            dark: transparent(mergeCommonHeaderBackground, rulerTransparency),
            light: transparent(mergeCommonHeaderBackground, rulerTransparency),
            hc: mergeBorder
        }
    },
    {
        description: {
            overviewRulerFindMatchForeground: "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editorOverviewRuler.findMatchForeground",
        default: {
            dark: findMatchColorDefault,
            light: findMatchColorDefault,
            hc: findMatchColorDefault
        }
    },
    {
        description: {
            overviewRulerSelectionHighlightForeground: "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations."
        },
        name: "editorOverviewRuler.selectionHighlightForeground",
        default: { dark: "#A0A0A0CC", light: "#A0A0A0CC", hc: "#A0A0A0CC" }
    }
];
/*

[{
description: {foreground: "Overall foreground color. This color is only used if not overridden by a component."},
name: "foreground",
default :{ dark: '#CCCCCC', light: '#616161', hc: '#FFFFFF' },
},{
description: {errorForeground: "Overall foreground color for error messages. This color is only used if not overridden by a component."},
name: "errorForeground",
default :{ dark: '#F48771', light: '#A1260D', hc: '#F48771' },
},{
description: {descriptionForeground: "Foreground color for description text providing additional informatio, for example for a label."},
name: "descriptionForeground",
default :{ light: '#717171', dark: transparent(foreground, 0.7), hc: transparent(foreground, 0.7) },
},{
description: {focusBorder: "Overall border color for focused elements. This color is only used if not overridden by a component."},
name: "focusBorder",
default :{ dark: Color.fromHex('#0E639C').transparent(0.8), light: Color.fromHex('#007ACC').transparent(0.4), hc: '#F38518' },
},{
description: {contrastBorder: "An extra border around elements to separate them from others for greater contrast."},
name: "contrastBorder",
default :{ light: null, dark: null, hc: '#6FC3DF' },
},{
description: {activeContrastBorder: "An extra border around active elements to separate them from others for greater contrast."},
name: "contrastActiveBorder",
default :{ light: null, dark: null, hc: focusBorder },
},{
description: {selectionBackground: "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor."},
name: "selection.background",
default :{ light: null, dark: null, hc: null },
},{
description: {textSeparatorForeground: "Color for text separators."},
name: "textSeparator.foreground",
default :{ light: '#0000002e', dark: '#ffffff2e', hc: Color.black },
},{
description: {textLinkForeground: "Foreground color for links in text."},
name: "textLink.foreground",
default :{ light: '#006AB1', dark: '#3794FF', hc: '#3794FF' },
},{
description: {textLinkActiveForeground: "Foreground color for links in text when clicked on and on mouse hover."},
name: "textLink.activeForeground",
default :{ light: '#006AB1', dark: '#3794FF', hc: '#3794FF' },
},{
description: {textPreformatForeground: "Foreground color for preformatted text segments."},
name: "textPreformat.foreground",
default :{ light: '#A31515', dark: '#D7BA7D', hc: '#D7BA7D' },
},{
description: {textBlockQuoteBackground: "Background color for block quotes in text."},
name: "textBlockQuote.background",
default :{ light: '#7f7f7f1a', dark: '#7f7f7f1a', hc: null },
},{
description: {textBlockQuoteBorder: "Border color for block quotes in text."},
name: "textBlockQuote.border",
default :{ light: '#007acc80', dark: '#007acc80', hc: Color.white },
},{
description: {textCodeBlockBackground: "Background color for code blocks in text."},
name: "textCodeBlock.background",
default :{ light: '#dcdcdc66', dark: '#0a0a0a66', hc: Color.black },
},{
description: {widgetShadow: "Shadow color of widgets such as find/replace inside the editor."},
name: "widget.shadow",
default :{ dark: '#000000', light: '#A8A8A8', hc: null },
},{
description: {inputBoxBackground: "Input box background."},
name: "input.background",
default :{ dark: '#3C3C3C', light: Color.white, hc: Color.black },
},{
description: {inputBoxForeground: "Input box foreground."},
name: "input.foreground",
default :{ dark: foreground, light: foreground, hc: foreground },
},{
description: {inputBoxBorder: "Input box border."},
name: "input.border",
default :{ dark: null, light: null, hc: contrastBorder },
},{
description: {inputBoxActiveOptionBorder: "Border color of activated options in input fields."},
name: "inputOption.activeBorder",
default :{ dark: '#007ACC', light: '#007ACC', hc: activeContrastBorder },
},{
description: {inputPlaceholderForeground: "Input box foreground color for placeholder text."},
name: "input.placeholderForeground",
default :{ light: transparent(foreground, 0.5), dark: transparent(foreground, 0.5), hc: transparent(foreground, 0.7) },
},{
description: {inputValidationInfoBackground: "Input validation background color for information severity."},
name: "inputValidation.infoBackground",
default :{ dark: '#063B49', light: '#D6ECF2', hc: Color.black },
},{
description: {inputValidationInfoForeground: "Input validation foreground color for information severity."},
name: "inputValidation.infoForeground",
default :{ dark: null, light: null, hc: null },
},{
description: {inputValidationInfoBorder: "Input validation border color for information severity."},
name: "inputValidation.infoBorder",
default :{ dark: '#007acc', light: '#007acc', hc: contrastBorder },
},{
description: {inputValidationWarningBackground: "Input validation background color for warning severity."},
name: "inputValidation.warningBackground",
default :{ dark: '#352A05', light: '#F6F5D2', hc: Color.black },
},{
description: {inputValidationWarningForeground: "Input validation foreground color for warning severity."},
name: "inputValidation.warningForeground",
default :{ dark: null, light: null, hc: null },
},{
description: {inputValidationWarningBorder: "Input validation border color for warning severity."},
name: "inputValidation.warningBorder",
default :{ dark: '#B89500', light: '#B89500', hc: contrastBorder },
},{
description: {inputValidationErrorBackground: "Input validation background color for error severity."},
name: "inputValidation.errorBackground",
default :{ dark: '#5A1D1D', light: '#F2DEDE', hc: Color.black },
},{
description: {inputValidationErrorForeground: "Input validation foreground color for error severity."},
name: "inputValidation.errorForeground",
default :{ dark: null, light: null, hc: null },
},{
description: {inputValidationErrorBorder: "Input validation border color for error severity."},
name: "inputValidation.errorBorder",
default :{ dark: '#BE1100', light: '#BE1100', hc: contrastBorder },
},{
description: {dropdownBackground: "Dropdown background."},
name: "dropdown.background",
default :{ dark: '#3C3C3C', light: Color.white, hc: Color.black },
},{
description: {dropdownListBackground: "Dropdown list background."},
name: "dropdown.listBackground",
default :{ dark: null, light: null, hc: Color.black },
},{
description: {dropdownForeground: "Dropdown foreground."},
name: "dropdown.foreground",
default :{ dark: '#F0F0F0', light: null, hc: Color.white },
},{
description: {dropdownBorder: "Dropdown border."},
name: "dropdown.border",
default :{ dark: selectBackground, light: '#CECECE', hc: contrastBorder },
},{
description: {listFocusBackground: "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."},
name: "list.focusBackground",
default :{ dark: '#062F4A', light: '#D6EBFF', hc: null },
},{
description: {listFocusForeground: "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."},
name: "list.focusForeground",
default :{ dark: null, light: null, hc: null },
},{
description: {listActiveSelectionBackground: "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."},
name: "list.activeSelectionBackground",
default :{ dark: '#094771', light: '#0074E8', hc: null },
},{
description: {listActiveSelectionForeground: "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focu, an inactive does not."},
name: "list.activeSelectionForeground",
default :{ dark: Color.white, light: Color.white, hc: null },
},{
description: {listInactiveSelectionBackground: "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focu, an inactive does not."},
name: "list.inactiveSelectionBackground",
default :{ dark: '#37373D', light: '#E4E6F1', hc: null },
},{
description: {listInactiveSelectionForeground: "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focu, an inactive does not."},
name: "list.inactiveSelectionForeground",
default :{ dark: null, light: null, hc: null },
},{
description: {listInactiveFocusBackground: "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focu, an inactive does not."},
name: "list.inactiveFocusBackground",
default :{ dark: null, light: null, hc: null },
},{
description: {listHoverBackground: "List/Tree background when hovering over items using the mouse."},
name: "list.hoverBackground",
default :{ dark: '#2A2D2E', light: '#F0F0F0', hc: null },
},{
description: {listHoverForeground: "List/Tree foreground when hovering over items using the mouse."},
name: "list.hoverForeground",
default :{ dark: null, light: null, hc: null },
},{
description: {listDropBackground: "List/Tree drag and drop background when moving items around using the mouse."},
name: "list.dropBackground",
default :{ dark: listFocusBackground, light: listFocusBackground, hc: null },
},{
description: {highlight: "List/Tree foreground color of the match highlights when searching inside the list/tree."},
name: "list.highlightForeground",
default :{ dark: '#0097fb', light: '#0066BF', hc: focusBorder },
},{
description: {invalidItemForeground: "List/Tree foreground color for invalid item, for example an unresolved root in explorer."},
name: "list.invalidItemForeground",
default :{ dark: '#B89500', light: '#B89500', hc: '#B89500' },
},{
description: {listErrorForeground: "Foreground color of list items containing errors."},
name: "list.errorForeground",
default :{ dark: '#F88070', light: '#B01011', hc: null },
},{
description: {listWarningForeground: "Foreground color of list items containing warnings."},
name: "list.warningForeground",
default :{ dark: '#4d9e4d', light: '#117711', hc: null },
},{
description: {listFilterWidgetBackground: "Background color of the type filter widget in lists and trees."},
name: "listFilterWidget.background",
default :{ light: '#efc1ad', dark: '#653723', hc: Color.black },
},{
description: {listFilterWidgetOutline: "Outline color of the type filter widget in lists and trees."},
name: "listFilterWidget.outline",
default :{ dark: Color.transparent, light: Color.transparent, hc: '#f38518' },
},{
description: {listFilterWidgetNoMatchesOutline: "Outline color of the type filter widget in lists and tree, when there are no matches."},
name: "listFilterWidget.noMatchesOutline",
default :{ dark: '#BE1100', light: '#BE1100', hc: contrastBorder },
},{
description: {pickerGroupForeground: "Quick picker color for grouping labels."},
name: "pickerGroup.foreground",
default :{ dark: '#3794FF', light: '#0066BF', hc: Color.white },
},{
description: {pickerGroupBorder: "Quick picker color for grouping borders."},
name: "pickerGroup.border",
default :{ dark: '#3F3F46', light: '#CCCEDB', hc: Color.white },
},{
description: {buttonForeground: "Button foreground color."},
name: "button.foreground",
default :{ dark: Color.white, light: Color.white, hc: Color.white },
},{
description: {buttonBackground: "Button background color."},
name: "button.background",
default :{ dark: '#0E639C', light: '#007ACC', hc: null },
},{
description: {buttonHoverBackground: "Button background color when hovering."},
name: "button.hoverBackground",
default :{ dark: lighten(buttonBackground, 0.2), light: darken(buttonBackground, 0.2), hc: null },
},{
description: {badgeBackground: "Badge background color. Badges are small information label, e.g. for search results count."},
name: "badge.background",
default :{ dark: '#4D4D4D', light: '#C4C4C4', hc: Color.black },
},{
description: {badgeForeground: "Badge foreground color. Badges are small information label, e.g. for search results count."},
name: "badge.foreground",
default :{ dark: Color.white, light: '#333', hc: Color.white },
},{
description: {scrollbarShadow: "Scrollbar shadow to indicate that the view is scrolled."},
name: "scrollbar.shadow",
default :{ dark: '#000000', light: '#DDDDDD', hc: null },
},{
description: {scrollbarSliderBackground: "Scrollbar slider background color."},
name: "scrollbarSlider.background",
default :{ dark: Color.fromHex('#797979').transparent(0.4), light: Color.fromHex('#646464').transparent(0.4), hc: transparent(contrastBorder, 0.6) },
},{
description: {scrollbarSliderHoverBackground: "Scrollbar slider background color when hovering."},
name: "scrollbarSlider.hoverBackground",
default :{ dark: Color.fromHex('#646464').transparent(0.7), light: Color.fromHex('#646464').transparent(0.7), hc: transparent(contrastBorder, 0.8) },
},{
description: {scrollbarSliderActiveBackground: "Scrollbar slider background color when clicked on."},
name: "scrollbarSlider.activeBackground",
default :{ dark: Color.fromHex('#BFBFBF').transparent(0.4), light: Color.fromHex('#000000').transparent(0.6), hc: contrastBorder },
},{
description: {progressBarBackground: "Background color of the progress bar that can show for long running operations."},
name: "progressBar.background",
default :{ dark: Color.fromHex('#0E70C0'), light: Color.fromHex('#0E70C0'), hc: contrastBorder },
},{
description: {menuBorder: "Border color of menus."},
name: "menu.border",
default :{ dark: null, light: null, hc: contrastBorder },
},{
description: {menuForeground: "Foreground color of menu items."},
name: "menu.foreground",
default :{ dark: selectForeground, light: foreground, hc: selectForeground },
},{
description: {menuBackground: "Background color of menu items."},
name: "menu.background",
default :{ dark: selectBackground, light: selectBackground, hc: selectBackground },
},{
description: {menuSelectionForeground: "Foreground color of the selected menu item in menus."},
name: "menu.selectionForeground",
default :{ dark: listActiveSelectionForeground, light: listActiveSelectionForeground, hc: listActiveSelectionForeground },
},{
description: {menuSelectionBackground: "Background color of the selected menu item in menus."},
name: "menu.selectionBackground",
default :{ dark: listActiveSelectionBackground, light: listActiveSelectionBackground, hc: listActiveSelectionBackground },
},{
description: {menuSelectionBorder: "Border color of the selected menu item in menus."},
name: "menu.selectionBorder",
default :{ dark: null, light: null, hc: activeContrastBorder },
},{
description: {menuSeparatorBackground: "Color of a separator menu item in menus."},
name: "menu.separatorBackground",
default :{ dark: '#BBBBBB', light: '#888888', hc: contrastBorder },
},{
description: {editorBackground: "Editor background color."},
name: "editor.background",
default :{ light: '#fffffe', dark: '#1E1E1E', hc: Color.black },
},{
description: {editorForeground: "Editor default foreground color."},
name: "editor.foreground",
default :{ light: '#333333', dark: '#BBBBBB', hc: Color.white },
},{
description: {editorWidgetBackground: "Background color of editor widget, such as find/replace."},
name: "editorWidget.background",
default :{ dark: '#252526', light: '#F3F3F3', hc: '#0C141F' },
},{
description: {editorWidgetBorder: "Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget."},
name: "editorWidget.border",
default :{ dark: '#454545', light: '#C8C8C8', hc: contrastBorder },
},{
description: {editorWidgetResizeBorder: "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."},
name: "editorWidget.resizeBorder",
default :{ light: null, dark: null, hc: null },
},{
description: {editorSelectionBackground: "Color of the editor selection."},
name: "editor.selectionBackground",
default :{ light: '#ADD6FF', dark: '#264F78', hc: '#f3f518' },
},{
description: {editorSelectionForeground: "Color of the selected text for high contrast."},
name: "editor.selectionForeground",
default :{ light: null, dark: null, hc: '#000000' },
},{
description: {editorInactiveSelection: "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."},
name: "editor.inactiveSelectionBackground",
default :{ light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hc: transparent(editorSelectionBackground, 0.5) },
},{
description: {editorSelectionHighlight: "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations."},
name: "editor.selectionHighlightBackground",
default :{ light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), hc: null },
},{
description: {editorSelectionHighlightBorder: "Border color for regions with the same content as the selection."},
name: "editor.selectionHighlightBorder",
default :{ light: null, dark: null, hc: activeContrastBorder },
},{
description: {editorFindMatch: "Color of the current search match."},
name: "editor.findMatchBackground",
default :{ light: '#A8AC94', dark: '#515C6A', hc: null },
},{
description: {findMatchHighlight: "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."},
name: "editor.findMatchHighlightBackground",
default :{ light: '#EA5C0055', dark: '#EA5C0055', hc: null },
},{
description: {findRangeHighlight: "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."},
name: "editor.findRangeHighlightBackground",
default :{ dark: '#3a3d4166', light: '#b4b4b44d', hc: null },
},{
description: {editorFindMatchBorder: "Border color of the current search match."},
name: "editor.findMatchBorder",
default :{ light: null, dark: null, hc: activeContrastBorder },
},{
description: {findMatchHighlightBorder: "Border color of the other search matches."},
name: "editor.findMatchHighlightBorder",
default :{ light: null, dark: null, hc: activeContrastBorder },
},{
description: {findRangeHighlightBorder: "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."},
name: "editor.findRangeHighlightBorder",
default :{ dark: null, light: null, hc: transparent(activeContrastBorder, 0.4) },
},{
description: {hoverHighlight: "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations."},
name: "editor.hoverHighlightBackground",
default :{ light: '#ADD6FF26', dark: '#264f7840', hc: '#ADD6FF26' },
},{
description: {hoverBackground: "Background color of the editor hover."},
name: "editorHoverWidget.background",
default :{ light: editorWidgetBackground, dark: editorWidgetBackground, hc: editorWidgetBackground },
},{
description: {hoverBorder: "Border color of the editor hover."},
name: "editorHoverWidget.border",
default :{ light: editorWidgetBorder, dark: editorWidgetBorder, hc: editorWidgetBorder },
},{
description: {statusBarBackground: "Background color of the editor hover status bar."},
name: "editorHoverWidget.statusBarBackground",
default :{ dark: lighten(editorHoverBackground, 0.2), light: darken(editorHoverBackground, 0.05), hc: editorWidgetBackground },
},{
description: {activeLinkForeground: "Color of active links."},
name: "editorLink.activeForeground",
default :{ dark: '#4E94CE', light: Color.blue, hc: Color.cyan },
},{
description: {diffEditorInserted: "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations."},
name: "diffEditor.insertedTextBackground",
default :{ dark: defaultInsertColor, light: defaultInsertColor, hc: null },
},{
description: {diffEditorRemoved: "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations."},
name: "diffEditor.removedTextBackground",
default :{ dark: defaultRemoveColor, light: defaultRemoveColor, hc: null },
},{
description: {diffEditorInsertedOutline: "Outline color for the text that got inserted."},
name: "diffEditor.insertedTextBorder",
default :{ dark: null, light: null, hc: '#33ff2eff' },
},{
description: {diffEditorRemovedOutline: "Outline color for text that got removed."},
name: "diffEditor.removedTextBorder",
default :{ dark: null, light: null, hc: '#FF008F' },
},{
description: {diffEditorBorder: "Border color between the two text editors."},
name: "diffEditor.border",
default :{ dark: null, light: null, hc: contrastBorder },
},{
description: {snippetTabstopHighlightBackground: "Highlight background color of a snippet tabstop."},
name: "editor.snippetTabstopHighlightBackground",
default :{ dark: new Color(new RGBA(124, 124, 124, 0.3)), light: new Color(new RGBA(10, 50, 100, 0.2)), hc: new Color(new RGBA(124, 124, 124, 0.3)) },
},{
description: {snippetTabstopHighlightBorder: "Highlight border color of a snippet tabstop."},
name: "editor.snippetTabstopHighlightBorder",
default :{ dark: null, light: null, hc: null },
},{
description: {snippetFinalTabstopHighlightBackground: "Highlight background color of the final tabstop of a snippet."},
name: "editor.snippetFinalTabstopHighlightBackround'",
default :{ dark: null, light: null, hc: null },
},{
description: {snippetFinalTabstopHighlightBorder: "Highlight border color of the final stabstop of a snippet."},
name: "editor.snippetFinalTabstopHighlightBorder",
default :{ dark: '#525252', light: new Color(new RGBA(10, 50, 100, 0.5)), hc: '#525252' },
},{
description: {breadcrumbsFocusForeground: "Color of focused breadcrumb items."},
name: "breadcrumb.foreground",
default :{ light: transparent(foreground, 0.8), dark: transparent(foreground, 0.8), hc: transparent(foreground, 0.8) },
},{
description: {breadcrumbsBackground: "Background color of breadcrumb items."},
name: "breadcrumb.background",
default :{ light: editorBackground, dark: editorBackground, hc: editorBackground },
},{
description: {breadcrumbsFocusForeground: "Color of focused breadcrumb items."},
name: "breadcrumb.focusForeground",
default :{ light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hc: lighten(foreground, 0.1) },
},{
description: {breadcrumbsSelectedForegound: "Color of selected breadcrumb items."},
name: "breadcrumb.activeSelectionForeground",
default :{ light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hc: lighten(foreground, 0.1) },
},{
description: {breadcrumbsSelectedBackground: "Background color of breadcrumb item picker."},
name: "breadcrumbPicker.background",
default :{ light: editorWidgetBackground, dark: editorWidgetBackground, hc: editorWidgetBackground },
},{
description: {mergeCurrentHeaderBackground: "Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."},
name: "merge.currentHeaderBackground",
default :{ dark: currentBaseColor, light: currentBaseColor, hc: null },
},{
description: {mergeCurrentContentBackground: "Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."},
name: "merge.currentContentBackground",
default :{ dark: transparent(mergeCurrentHeaderBackground, contentTransparency), light: transparent(mergeCurrentHeaderBackground, contentTransparency), hc: transparent(mergeCurrentHeaderBackground, contentTransparency) },
},{
description: {mergeIncomingHeaderBackground: "Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."},
name: "merge.incomingHeaderBackground",
default :{ dark: incomingBaseColor, light: incomingBaseColor, hc: null },
},{
description: {mergeIncomingContentBackground: "Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."},
name: "merge.incomingContentBackground",
default :{ dark: transparent(mergeIncomingHeaderBackground, contentTransparency), light: transparent(mergeIncomingHeaderBackground, contentTransparency), hc: transparent(mergeIncomingHeaderBackground, contentTransparency) },
},{
description: {mergeCommonHeaderBackground: "Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."},
name: "merge.commonHeaderBackground",
default :{ dark: commonBaseColor, light: commonBaseColor, hc: null },
},{
description: {mergeCommonContentBackground: "Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."},
name: "merge.commonContentBackground",
default :{ dark: transparent(mergeCommonHeaderBackground, contentTransparency), light: transparent(mergeCommonHeaderBackground, contentTransparency), hc: transparent(mergeCommonHeaderBackground, contentTransparency) },
},{
description: {mergeBorder: "Border color on headers and the splitter in inline merge-conflicts."},
name: "merge.border",
default :{ dark: null, light: null, hc: '#C3DF6F' },
},{
description: {overviewRulerCurrentContentForeground: "Current overview ruler foreground for inline merge-conflicts."},
name: "editorOverviewRuler.currentContentForeground",
default :{ dark: transparent(mergeCurrentHeaderBackground, rulerTransparency), light: transparent(mergeCurrentHeaderBackground, rulerTransparency), hc: mergeBorder },
},{
description: {overviewRulerIncomingContentForeground: "Incoming overview ruler foreground for inline merge-conflicts."},
name: "editorOverviewRuler.incomingContentForeground",
default :{ dark: transparent(mergeIncomingHeaderBackground, rulerTransparency), light: transparent(mergeIncomingHeaderBackground, rulerTransparency), hc: mergeBorder },
},{
description: {overviewRulerCommonContentForeground: "Common ancestor overview ruler foreground for inline merge-conflicts."},
name: "editorOverviewRuler.commonContentForeground",
default :{ dark: transparent(mergeCommonHeaderBackground, rulerTransparency), light: transparent(mergeCommonHeaderBackground, rulerTransparency), hc: mergeBorder },
},{
description: {overviewRulerFindMatchForeground: "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations."},
name: "editorOverviewRuler.findMatchForeground",
default :{ dark: findMatchColorDefault, light: findMatchColorDefault, hc: findMatchColorDefault },
},{
description: {overviewRulerSelectionHighlightForeground: "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations."},
name: "editorOverviewRuler.selectionHighlightForeground",
default :{ dark: '#A0A0A0CC', light: '#A0A0A0CC', hc: '#A0A0A0CC' },
}]

*/
