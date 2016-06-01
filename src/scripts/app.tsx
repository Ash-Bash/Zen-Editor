/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./classes/interfaces.d.ts"/>

declare var electron: any;

import React = require('react');
import ReactDom = require('react-dom');

import Layout = require('./components/Layout');

var configureStore = require('./redux/store');
import { Provider } from 'react-redux';

// Configure and Creates a Store for the App to used
// var store = createStore(reducers, initialState) // []
let initialState = {
  dir: 'none'
}

let store = '';

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <Layout />
    );
  }
}

ReactDom.render(
    <App />,
  document.getElementById('app')
);
