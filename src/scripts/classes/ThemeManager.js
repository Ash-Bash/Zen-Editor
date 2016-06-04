"use strict";
const ZenDarkTheme = require('../themes/ZenDarkTheme');
const ZenLightTheme = require('../themes/ZenLightTheme');
const zenLightTheme = new ZenLightTheme();
const zenDarkTheme = new ZenDarkTheme();
var theme = zenDarkTheme;
module.exports = class ThemeManager {
    constructor(themeType) {
        if (themeType == "dark") {
            theme = zenDarkTheme;
        }
        else if (themeType == "light") {
            theme = zenLightTheme;
        }
        else {
            theme = zenDarkTheme;
        }
    }
    getEditorColorSchema() {
        return theme.getEditorColorSchema();
    }
    getInfoBarColorSchema() {
        return theme.getInfoBarColorSchema();
    }
    getTextColorSchema() {
        return theme.getTextColorSchema();
    }
}
;
//# sourceMappingURL=ThemeManager.js.map