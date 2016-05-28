import React from 'react';

import Editor from './Editor.js';
import InfoBar from './InfoBar.js';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Editor className="EditorComponent" />
        <InfoBar />
      </div>
    );
  }
}
