import React from 'react';
import TabStyle from '../../../styles/components/tab-component/Tab.js';
import IconButton from 'material-ui/IconButton';

//SVG-Icons Imports
import CloseIcon from 'material-ui/svg-icons/navigation/cancel';

const tabStyle = new TabStyle();

var tabTitle = "Untitled";

export default class Tab extends React.Component {

  setTabTitle(title) {
    tabTitle = title;
  }

  getTabTitle() {
    return tabTitle;
  }

  render(){
    return (
      <div>
        <span style={tabStyle.TabTitle()}>{tabTitle}</span>
        <IconButton tooltip="Close" style={tabStyle.TabCloseBtn()}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  }
}
