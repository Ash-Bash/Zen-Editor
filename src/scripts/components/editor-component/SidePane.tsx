/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import ThemeManager = require('../../classes/ThemeManager');

import Theme = require('../../classes/Theme');

const themeManager = new ThemeManager(Theme.themeType);

const editorSchema = themeManager.getEditorColorSchema();

const ipc = electron.ipcRenderer;


const SidePaneStyle = {
  'background-color': editorSchema[1]
}

var dir_name = "";

ipc.on('selected-directory', function (event, path) {
  //store.dispatch({ type: 'OPEN_EXISTING_PROJECT_DIRECTORY', path});
})

export = class SidePane extends React.Component<ISidePaneProps, ISidePaneState> {

    constructor() {
      super();
      this.state = {
        inputDir: 'Test Dir'
      }
    }

    handleChange(event) {
      this.state = {
        inputDir: dir_name
      }
    }

    SelectDirectory = function () {
      ipc.send('open-file-dialog');

      ipc.on('selected-directory', function (event, path) {
        this.state = {
          inputDir: path
        }
      })
    }

    LoadDirectory(dir) {
      console.log(dir);
      this.setState({
        inputDir: dir
      })
    }

    render() {
      return (
        <div className="SidePane" style={SidePaneStyle}>
          <button id="select-directory" className="OAEDButton" onClick={this.SelectDirectory}>Open An Existing Directory</button>
          <h5>{this.state.inputDir}</h5>
        </div>
      );
    }
}
