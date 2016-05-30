const editorSchema = ['#363636','#222222','#292929'];
const infobarSchema = ['rgb(0, 168, 82)','rgba(0, 0, 0, 0.3)'];
const textColorSchema = ['#f7f7f7','#f1f1f1','#ffffff'];

export = class ZenDarkTheme {

  constructor() {

  }

  getEditorColorSchema() {
    return editorSchema;
  }

  getInfoBarColorSchema() {
    return infobarSchema;
  }

  getTextColorSchema() {
    return textColorSchema;
  }
}
