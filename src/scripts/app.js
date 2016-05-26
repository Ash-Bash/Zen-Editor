import React from 'react';
import ReactDom from 'react-dom';
import ThemeManager from './Classes/ThemeManager.js';
import ThemeType from './Classes/Theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout.js';

const themeManager = new ThemeManager(ThemeType);

const theme = themeManager.getMaterialTheme();

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
