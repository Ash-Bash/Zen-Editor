const editorSchema = ['#f7f7f7','#f1f1f1','#ffffff'];
const infobarSchema = ['rgb(0, 168, 82)','rgba(0, 0, 0, 0.3)'];
const textColorSchema = ['#363636','#222222','#292929'];

export = class ZenLightTheme {

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
