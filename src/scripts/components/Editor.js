import React from 'react';

export default class Editor extends React.Component {

  render(){

    const darkThemeColor = ['#222222','#292929'];

    const lightThemeColor = ['#f1f1f1','#ffffff'];

    const themeColor = darkThemeColor;

    const sidePaneThemeStyle = {
      'background-color': themeColor[0]
    };

    const contentThemeStyle = {
      'background-color': themeColor[1]
    };
    return (
      <div className="EditorComponent">
        <div className="SidePane" style={sidePaneThemeStyle}>
        </div>
        <div className="Content" style={contentThemeStyle}>
        </div>
      </div>
    );
  }
}
