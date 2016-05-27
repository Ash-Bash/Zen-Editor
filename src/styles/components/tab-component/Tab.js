
const tab = {
  width: '200px',
  'min-width': '156px',
  'max-width': '240px',
  display: 'inline-block'
}

const tabTitle = {
  'vertical-align': 'middle',
  'margin-top': '19.5px',
  'margin-bottom': '19.5px',
  display: 'inline-block',
}

const tabCloseBtn = {
  'vertical-align': 'middle',
  'float': 'right',
  right: '0',
  display: 'inline-block',
  'margin-top': '4px',
  'margin-bottom': '4px'
}

export default class Tab {
  constructor() {

  }

  Tab() {
    return tab;
  }

  TabTitle() {
    return tabTitle;
  }

  TabCloseBtn() {
    return tabCloseBtn;
  }
}
