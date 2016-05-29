/// <reference path="../../typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');

import Layout = require('./components/Layout');

ReactDom.render(
  <Layout/>,
  document.getElementById('app')
);
