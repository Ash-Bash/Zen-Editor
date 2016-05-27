import React from 'react';

import TabView from './tab-component/TabView.js';
import Tab from './tab-component/Tab.js';


//SVG-Icons Imports

export default class Content extends React.Component {

  render(){
    return (
      <div>
        <TabView />
        <Tab/>
      </div>
    );
  }
}
