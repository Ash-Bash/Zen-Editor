import React from 'react';
import ReactDom from 'react-dom';
import zenDarkTheme from './Themes/ZenDarkTheme.js';
import zenLightTheme from './Themes/ZenLightTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout.js';

const theme = getMuiTheme(zenDarkTheme);

export default class App extends React.Component {

    render() {
        return (
          <MuiThemeProvider muiTheme={theme}>
            <Layout className="LayoutComponent"/>
          </MuiThemeProvider>
        );
    }
}

const app = document.getElementById('app');
ReactDom.render(<App className="AppComponent"/>, app);
