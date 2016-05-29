/// <reference path="../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

interface ComponentProps {

}

interface ComponentState {

}

export = class MainWindow extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <div>
            <h1>Hello World</h1>
        </div>
      );
    }
}
