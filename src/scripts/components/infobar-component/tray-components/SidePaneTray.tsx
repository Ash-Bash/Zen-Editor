/// <reference path="../../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

//Svg Images
import AddIcon = require('../../../../assets/img/icons/svgs/add_icon/Add');
import NewFolderIcon = require('../../../../assets/img/icons/svgs/newfolder_icon/NewFolder');
import RefreshIcon = require('../../../../assets/img/icons/svgs/refresh_icon/Refresh');
import SettingsIcon = require('../../../../assets/img/icons/svgs/settings_icon/Settings');

interface ComponentProps {

}

interface ComponentState {

}

export = class SidePaneTray extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <div className="SidePaneTrayComponent">
          <button className="TrayButtonComponent">
            <AddIcon />
          </button>
          <button className="TrayButtonComponent">
            <NewFolderIcon />
          </button>
          <button className="TrayButtonComponent">
            <RefreshIcon />
          </button>

          <button className="TrayButtonComponent SPTSettingsButton">
            <SettingsIcon />
          </button>
        </div>
      );
    }
}
