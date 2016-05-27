import React from 'react';
import IconButton from 'material-ui/IconButton';
import TabBarStyle from '../../../styles/components/tab-component/TabBar.js';
import Tab from './Tab.js';

//SVG-Icons Imports
import LeftArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import RightArrowIcon from 'material-ui/svg-icons/navigation/chevron-right';

const tabBarStyle = new TabBarStyle();

var tabs = [<Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>];

export default class TabBar extends React.Component {

  render() {
    return(
      <div>
        <div style={tabBarStyle.Container()}>
          <IconButton tooltip="Left" style={tabBarStyle.LeftBtn()}>
            <LeftArrowIcon />
          </IconButton>
          <div style={tabBarStyle.Bar()}>
            {tabs}
          </div>
          <IconButton tooltip="Right" style={tabBarStyle.RightBtn()}>
            <RightArrowIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}
