/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import SidePane = require('./SidePane');
import ContentView = require('./ContentView');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme.themeType);

const editorSchema = themeManager.getEditorColorSchema();

const SidePaneStyle = {
  'background-color': editorSchema[1]
}

const ContentViewStyle = {
  'background-color': editorSchema[2]
}

export = class Editor extends React.Component<IEditorProps, IEditorState> {
    render() {
      return (
        <div className="EditorComponent">
          <SidePane />
          <ContentView />
        </div>
      );
    }
}
