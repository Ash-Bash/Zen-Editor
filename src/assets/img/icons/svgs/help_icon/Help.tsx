/// <reference path="../../../../../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

interface ComponentProps {

}

interface ComponentState {

}

export = class Help extends React.Component<ComponentProps, ComponentState> {
    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path id="svgPath" d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/>
        </svg>
      );
    }
}