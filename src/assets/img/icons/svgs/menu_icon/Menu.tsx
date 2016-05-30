/// <reference path="../../../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

interface ComponentProps {

}

interface ComponentState {

}

export = class Menu extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="svgPath" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      );
    }
}
