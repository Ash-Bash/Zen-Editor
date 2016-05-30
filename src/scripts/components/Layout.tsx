/// <reference path="../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

import Editor = require('./editor-component/Editor');
import InfoBar = require('./infobar-component/InfoBar');

interface ComponentProps {

}

interface ComponentState {

}

export = class Layout extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <div className="LayoutComponent">
            <Editor />
            <InfoBar />
        </div>
      );
    }
}
