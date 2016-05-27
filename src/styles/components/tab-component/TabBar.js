//TabBar Style Javascript
import ThemeManager from '../../../scripts/Classes/ThemeManager.js';
import Theme from '../../../scripts/Classes/Theme.js';

const themeManager = new ThemeManager(Theme);
const themeColor = themeManager.getEditorColorSchema();

const container = {
  display: 'inline-block',
  'background-color': themeColor[0],
  width: '100%'
}

const bar = {
  display: 'inline-block',
  width: '85%',
  height: '56px',
  'min-height': '56px',
  'max-height': '56px',
  'text-align': 'center',
  overflow: 'hidden',
  'overflow-x': 'scrol',
  'overflow-y': 'hidden'
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
