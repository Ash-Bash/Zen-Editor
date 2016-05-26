import React from 'react';
import ReactDom from 'react-dom';
import ThemeManager from './Classes/ThemeManager.js';
import ZenDarkTheme from './Themes/ZenDarkTheme.js';
import ZenLightTheme from './Themes/ZenLightTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout.js';

const themeManager = new ThemeManager("dark");

const theme = getMuiTheme(themeManager.getMaterialTheme());

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
