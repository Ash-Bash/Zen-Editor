/// <reference path="../../../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

interface ComponentProps {

}

interface ComponentState {

}

export = class Redo extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="svgPath" d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
        </svg>
      );
    }
}
