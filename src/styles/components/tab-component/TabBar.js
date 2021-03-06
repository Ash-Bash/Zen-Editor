//TabBar Style Javascript
import ThemeManager from '../../../scripts/Classes/ThemeManager.js';
import Theme from '../../../scripts/Classes/Theme.js';

const themeManager = new ThemeManager(Theme);
const themeColor = themeManager.getEditorColorSchema();

const container = {
  display: 'inline-block',
  'background-color': themeColor[0],
  width: '100%',
  'text-align': 'center'
}

const bar = {
  display: 'inline-block',
  width: '88%',
  height: '56px',
  'min-height': '52px',
  'max-height': '52px',
  'text-align': 'center',
  'overflow-x': 'hidden',
  'overflow-y': 'hidden',
  'white-space': 'nowrap',
  margin: 'auto'
}

const leftBtn = {
  'vertical-align': 'middle',
  'float': 'left',
  left: '0',
  display: 'inline-block',
  'margin-top': '4px',
  'margin-bottom': '4px'
}

const rightBtn = {
  'vertical-align': 'middle',
  'float': 'right',
  right: '0',
  display: 'inline-block',
  'margin-top': '4px',
  'margin-bottom': '4px'
}

export default class TabBar {
  constructor() {

  }

  Container() {
    return container;
  }

  Bar() {
    return bar;
  }

  LeftBtn() {
    return leftBtn;
  }

  RightBtn() {
    return rightBtn;
  }
}
