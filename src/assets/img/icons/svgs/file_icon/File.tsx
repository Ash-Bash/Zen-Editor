/// <reference path="../../../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

interface ComponentProps {

}

interface ComponentState {

}

export = class File extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="svgPath" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      );
    }
  }
