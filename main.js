const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let window;

function createWindow() {
    
    //Create The Browser Window
    window = new BrowserWindow({ width: 800, height: 600 });
    
    //Load the index.html of the app.
    window.loadURL('file://' + __dirname + '/src/layouts/index.html');
    
    //Emitted When The Window Is Closed.
    window.on('closed', () => {
        window = null;
    });
}

app.on('ready', createWindow);

//Quit When All Windows Are Closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    
    //Dock Icon Is Clicked And There Are No Other Windows Open.
    if (window == null){
        createWindow();
    }
});