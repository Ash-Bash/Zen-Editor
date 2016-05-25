import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

//SVG-Icons Imports
import FolderIcon from 'material-ui/svg-icons/file/folder'
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file'

export default class SidePane extends React.Component {

  render(){
    return (
      <div>
        <Toolbar color="#087cff">
          <ToolbarGroup>
            <ToolbarTitle text="Dir Name"/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator/>
            <FontIcon className="muidocs-icon-custom-sort" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <FontIcon className="muidocs-icon-custom-sort" />
          </ToolbarGroup>
        </Toolbar>
        <div>
          <List>
            <Subheader>Directory</Subheader>
            <ListItem primaryText="src" leftIcon={<FolderIcon />} primaryTogglesNestedList={true} nestedItems={[
              <ListItem primaryText="index.html" leftIcon={<FileIcon />} />,
              <ListItem primaryText="JS" leftIcon={<FolderIcon />} nestedItems={[
                  <ListItem primaryText="hello.js" leftIcon={<FileIcon />} />,
                ]}/>,
              ]}
            />
            <ListItem primaryText="package.json" leftIcon={<FileIcon />} />
          </List>
        </div>
      </div>
    );
  }
}
