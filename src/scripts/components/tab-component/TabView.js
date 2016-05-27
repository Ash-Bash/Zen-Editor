import React from 'react';
import TabViewStyle from '../../../styles/components/tab-component/TabView.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import TabBar from './TabBar.js';
import TabContent from './TabContent.js';
import View from '../view-component/View.js';

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
        <TabBar>
          
        </TabBar>
        <View>

        </View>
      </div>
    );
  }
}
