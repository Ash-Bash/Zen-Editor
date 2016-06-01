/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import Editor = require('./editor-component/Editor');
import InfoBar = require('./infobar-component/InfoBar');

export = class Layout extends React.Component<ILayoutProps, ILayoutState> {
    render() {
      return (
        <div className="LayoutComponent">
            <Editor />
            <InfoBar />
        </div>
      );
    }
}
