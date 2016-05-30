/// <reference path="../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

import Theme = require('../../classes/Theme');
import ThemeManager = require('../../classes/ThemeManager');

const themeManager = new ThemeManager(Theme);
const infobarSchema = themeManager.getInfoBarColorSchema();

const SidePaneSectionStyle = {
  'background-color': infobarSchema[1]
}

const InfoBarStyle = {
  'background-color': infobarSchema[0]
}

interface ComponentProps {

}

interface ComponentState {

}

export = class InfoBar extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <div className="InfoBarComponent" style={InfoBarStyle}>
            <div className="SidePaneSection" style={SidePaneSectionStyle}></div>
            <div className="ContentSection"></div>
        </div>
      );
    }
}
