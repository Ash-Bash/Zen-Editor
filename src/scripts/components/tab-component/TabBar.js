import React from 'react';
import IconButton from 'material-ui/IconButton';
import TabBarStyle from '../../../styles/components/tab-component/TabBar.js';
import Tab from './Tab.js';

//SVG-Icons Imports
import LeftArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import RightArrowIcon from 'material-ui/svg-icons/navigation/chevron-right';

const tabBarStyle = new TabBarStyle();

var tabs = [<Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>, <Tab>Hello</Tab>];

var IsLeftButtonDisabled = true;
var IsRightButtonDisabled = false;

export default class TabBar extends React.Component {

  MoveLeft() {
    console.log('Left Button');
  }

  MoveRight() {
    console.log('Right Button');
  }

  render() {
    return(
      <div>
        <div style={tabBarStyle.Container()}>
          <IconButton tooltip="Left" style={tabBarStyle.LeftBtn()} disabled={IsLeftButtonDisabled} onClick={this.MoveLeft()}>
            <LeftArrowIcon />
          </IconButton>
          <div style={tabBarStyle.Bar()}>
            {tabs}
          </div>
          <IconButton tooltip="Right" style={tabBarStyle.RightBtn()} disabled={IsRightButtonDisabled} onClick={this.MoveRight()}>
            <RightArrowIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}
