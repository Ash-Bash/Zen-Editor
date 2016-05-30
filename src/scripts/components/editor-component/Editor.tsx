/// <reference path="../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

import SidePane = require('./SidePane');
import ContentView = require('./ContentView');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme);

const editorSchema = themeManager.getEditorColorSchema();

const SidePaneStyle = {
  'background-color': editorSchema[1]
}

const ContentViewStyle = {
  'background-color': editorSchema[2]
}

interface ComponentProps {

}

interface ComponentState {

}

export = class Editor extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <div className="EditorComponent">
          <SidePane />
          <ContentView />
        </div>
      );
    }
}
