import React from 'react';
import ThemeManager from '../Classes/ThemeManager.js';
import ThemeType from '../Classes/Theme.js';
import SidePane from './SidePane.js';
import Content from './Content.js';

const themeManager = new ThemeManager(ThemeType);

export default class Editor extends React.Component {

  render(){

    const themeColor = themeManager.getEditorColorSchema();

    const sidePaneThemeStyle = {
      'background-color': themeColor[1]
    };

    const contentThemeStyle = {
      'background-color': themeColor[2]
    };
    return (
      <div className="EditorComponent">
        <div className="SidePane" style={sidePaneThemeStyle}>
          <SidePane/>
        </div>
        <div className="Content" style={contentThemeStyle}>
          <Content/>
        </div>
      </div>
    );
  }
}
