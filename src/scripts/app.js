import React from 'react';
import ReactDom from 'react-dom';

import Editor from './components/editor.js';

class App extends React.Component {
  render() {
    return (
      <Editor/>
    );
  }
}

const app = document.getElementById('app');

ReactDom.render(<App/>, app);
