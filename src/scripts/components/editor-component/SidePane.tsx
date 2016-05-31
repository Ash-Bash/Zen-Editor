/// <reference path="../../../../typings/tsd.d.ts" />

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme);

const editorSchema = themeManager.getEditorColorSchema();

const ipc = electron.ipcRenderer;


const SidePaneStyle = {
  'background-color': editorSchema[1]
}

var dir_name = "";

interface ComponentProps {

}

interface ComponentState {

}

export = class SidePane extends React.Component<ComponentProps, ComponentState> {

    SelectDirectory() {
      ipc.send('open-file-dialog');
    }

    LoadDirectory(dir) {
      console.log(dir);
      dir_name = dir;
    }

    render() {
      return (
        <div className="SidePane" style={SidePaneStyle}>
          <button id="select-directory" className="OAEDButton" onClick={this.SelectDirectory}>Open An Existing Directory</button>
          <h6>{dir_name}</h6>
        </div>
      );
    }
}

ipc.on('selected-directory', function (event, path) {
    dir_name = path;
})
