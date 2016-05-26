import {
cyan500, cyan700,
grey100, grey300, grey400, grey500, grey600,
pinkA100, pinkA200, pinkA400,
white, fullWhite, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const editorSchema = ['#363636','#222222','#292929'];

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
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: editorSchema[1],
    accent3Color: pinkA100,
    textColor: fullWhite,
    alternateTextColor: '#f9f9f9',
    canvasColor: '#303030',
    borderColor: (0, fade)(fullWhite, 0.3),
    disabledColor: (0, fade)(fullWhite, 0.3),
    pickerHeaderColor: (0, fade)(fullWhite, 0.12),
    clockCircleColor: (0, fade)(fullWhite, 0.12)
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
