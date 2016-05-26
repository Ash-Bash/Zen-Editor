import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

//SVG-Icons Imports

export default class TabView extends React.Component {

  render(){
    return (
      <div>
        <Tabs className="TabViewComponent">
            <Tab label="Item 1" />
            <Tab label="Item 2" />
            <Tab label="Item 3" />
            <Tab label="Item 4" />
          </Tabs>
      </div>
    );
  }
}
