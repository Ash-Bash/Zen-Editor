/// <reference path="../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme);

const editorSchema = themeManager.getEditorColorSchema();

const SidePaneStyle = {
  'background-color': editorSchema[1]
}

interface ComponentProps {

}

interface ComponentState {

}

export = class SidePane extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <div className="SidePane" style={SidePaneStyle}>
        </div>
      );
    }
}
