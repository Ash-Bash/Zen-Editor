/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import SidePaneTray = require('./tray-components/SidePaneTray');
import ContentViewTray = require('./tray-components/ContentViewTray');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme.themeType);
const infobarSchema = themeManager.getInfoBarColorSchema();

const SidePaneSectionStyle = {
  'background-color': infobarSchema[1]
}

const InfoBarStyle = {
  'background-color': infobarSchema[0]
}

export = class InfoBar extends React.Component<IInfoBarProps, IInfoBarState> {
    render() {
      return (
        <div className="InfoBarComponent" style={InfoBarStyle}>
            <div className="SidePaneSection" style={SidePaneSectionStyle}>
              <SidePaneTray />
            </div>
            <div className="ContentSection">
              <ContentViewTray />
            </div>
        </div>
      );
    }
}
