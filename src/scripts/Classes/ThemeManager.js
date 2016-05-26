import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ZenDarkTheme from '../Themes/ZenDarkTheme.js';
import ZenLightTheme from '../Themes/ZenLightTheme.js';

const zenLightTheme = new ZenLightTheme();
const zenDarkTheme = new ZenDarkTheme();

var theme = zenDarkTheme;

export default class ThemeManager {

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

  getEditorColorSchema(){
    return theme.getEditorColorSchema();
  }

  getMaterialTheme(){
    return getMuiTheme(theme.getMaterialTheme());
  }
}
