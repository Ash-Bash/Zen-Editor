/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme.themeType);

const editorSchema = themeManager.getEditorColorSchema();

const ContentViewStyle = {
  'background-color': editorSchema[2]
}

export = class SidePane extends React.Component<IContentViewProps, IContentViewState> {
    render() {
      return (
        <div className="ContentView" style={ContentViewStyle}>
        </div>
      );
    }
}
