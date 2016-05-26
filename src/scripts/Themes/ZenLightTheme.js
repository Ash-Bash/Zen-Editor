import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
pinkA200,
white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const editorSchema = ['#f7f7f7','#f1f1f1','#ffffff'];

const theme = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 48,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: editorSchema[0],
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: editorSchema[1],
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: '#222222',
    canvasColor: white,
    borderColor: grey300,
    disabledColor: (0, fade)(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack
  },
};

export default class ZenLightTheme {

  constructor() {

  }

  getEditorColorSchema() {
    return editorSchema;
  }

  getMaterialTheme() {
    return theme;
  }
}
