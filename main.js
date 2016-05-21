const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

const Menu = electron;
const MenuItem = electron;

var path = require('path');
global.appRoot = path.resolve(__dirname);

const delegate = require('./src/scripts/delegate.js');
var menu = require('./src/scripts/menu.js');

let app_title = "Zen Code Editor";
let app_version = app.getVersion();
let window;

function createWindow() {
    
    //Create The Browser Window
    window = new BrowserWindow({ width: 1024, height: 768 });
    
    //Set Title of Window.
    window.setTitle(app_title);
    
    //Emitted When The Window Is Closed.
    window.on('responsive', () => {
        delegate.windowIsResponsive();
    });
    
    window.on('unresponsive', () => {
        delegate.windowIsNotResponsive();
    });
    
    window.on('restore', () => {
        delegate.windowDidResume();
    });
    
    window.on('hide', () => {
        delegate.windowDidPause();
    });
    
    window.on('maximize', () => {
        delegate.windowDidMaximize();
    });
    
    window.on('unmaximize', () => {
        delegate.windowDidUnmaxinmized();
    });
    
    window.on('closed', () => {
        delegate.windowDidClose();
        window = null;
    });
    
   //var menuItems = Menu.buildFromTemplate(menu.menuItemsData);
   //Menu.setApplicationMenu(Menu.buildFromTemplate(menu.menuItemsData));
    
    delegate.applicationDidFinnishLoading(window);
}

app.setName(app_title);

app.on('will-finish-launching', () => {
    console.log('-----------------------------------');
    console.log('App Name: ' + app_title);
    console.log('App Version: ' + app_version);
    console.log('Developed By: Ashley James Chapman');
    console.log('-----------------------------------');
    console.log(' ');
    
    delegate.applicationWillFinnishLoading();
});

app.on('ready', createWindow);

//Quit When All Windows Are Closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('before-quit', () => {
    delegate.applicationWillClose();
});

app.on('will-quit', () => {
    delegate.applicationDidClose();
});

app.on('activate', () => {
    
    delegate.applicationDidResume();
    
    //Dock Icon Is Clicked And There Are No Other Windows Open.
    if (window == null){
        createWindow();
    }
});