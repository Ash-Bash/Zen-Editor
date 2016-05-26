import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
pinkA200,
white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const ZenLightTheme = {
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
    primary1Color: '#9f9f9f',
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: '#f1f1f1',
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
