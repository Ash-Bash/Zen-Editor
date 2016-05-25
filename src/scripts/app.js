import React from 'react';
import ReactDom from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout.js';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component {

    render() {
        return (
          <MuiThemeProvider muiTheme={darkMuiTheme}>
            <Layout className="LayoutComponent"/>
          </MuiThemeProvider>
        );
    }
}

const app = document.getElementById('app');
ReactDom.render(<App className="AppComponent"/>, app);
