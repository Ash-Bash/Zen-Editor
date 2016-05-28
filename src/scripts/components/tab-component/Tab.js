import React from 'react';
import TabStyle from '../../../styles/components/tab-component/Tab.js';
import IconButton from 'material-ui/IconButton';

//SVG-Icons Imports
import CloseIcon from 'material-ui/svg-icons/navigation/close';

const tabStyle = new TabStyle();

var tabTitle = "Untitled";

var IsCloseButtonDisabled = false;

export default class Tab extends React.Component {

  setTabTitle(title) {
    tabTitle = title;
  }

  getTabTitle() {
    return tabTitle;
  }

  CloseBtnOnMouseEnter() {
    IsCloseButtonDisabled = false;
  }

  CloseBtnOnMouseLeave() {
    IsCloseButtonDisabled = true;
  }

  render(){
    return (
      <div style={tabStyle.Tab()}>
        <span style={tabStyle.TabTitle()}>{tabTitle}</span>
        <IconButton tooltip="Close" style={tabStyle.TabCloseBtn()} disabled={IsCloseButtonDisabled} onMouseEnter={this.CloseBtnOnMouseEnter()} onMouseLeave={this.CloseBtnOnMouseLeave()}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  }
}
