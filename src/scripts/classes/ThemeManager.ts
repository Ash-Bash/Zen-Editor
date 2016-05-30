import ZenDarkTheme = require('../themes/ZenDarkTheme');
import ZenLightTheme = require('../themes/ZenLightTheme');

const zenLightTheme = new ZenLightTheme();
const zenDarkTheme = new ZenDarkTheme();

var theme = zenDarkTheme;

export = class ThemeManager {

  constructor(themeType) {
    if (themeType == "dark"){
      theme = zenDarkTheme;
    }
    else if (themeType == "light"){
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
