/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../../classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

//Svg Images
import AddIcon = require('../../../../assets/img/icons/svgs/add_icon/Add');
import NewFolderIcon = require('../../../../assets/img/icons/svgs/newfolder_icon/NewFolder');
import RefreshIcon = require('../../../../assets/img/icons/svgs/refresh_icon/Refresh');
import SettingsIcon = require('../../../../assets/img/icons/svgs/settings_icon/Settings');

export = class SidePaneTray extends React.Component<ISidePaneTrayProps, ISidePaneTrayState> {
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
