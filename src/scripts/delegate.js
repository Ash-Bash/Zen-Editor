//Delegation Script

let win;

function LoadWindow(window) {
  win = window;
}

function applicationWillFinnishLoading(){
    console.log('Application Will Finnish Loading');
}

function applicationDidFinnishLoading(window){
    console.log('Application Did Finnish Loading');
    win = window;

    //Load the index.html of the app.
    win.loadURL('file://' + appRoot + '/layouts/editor_shell-react-v1.html');
}

function applicationDidResume(){
    console.log('Application Did Resume');
}

function applicationWillClose(){
    console.log('Application Will Close');
}

function applicationDidClose(){
    console.log('Application Did Close');
}

function windowDidMaximize(){
    console.log('Window Did Maximize');
}

function windowDidUnmaxinmized(){
    console.log('Window Did Unmaximized');
}

function windowDidResume(){
    console.log('Window Did Resume');
}

function windowDidPause() {
    console.log('Window Did Pause');
}

function windowIsResponsive(){
    console.log('Window Is Responsive');
}

function windowIsNotResponsive(){
    console.log('Window Is Not Responsive');
}

function windowDidClose(){
    console.log('Window Did Close');
}

function getWindow(){
    return win;
}

function getAppRoot(){
    return appRoot;
}

module.exports = {
    applicationWillFinnishLoading: applicationWillFinnishLoading,

    applicationDidFinnishLoading: applicationDidFinnishLoading,

    applicationDidResume: applicationDidResume,

    applicationWillClose: applicationWillClose,

    applicationDidClose: applicationDidClose,

    windowDidMaximize: windowDidMaximize,

    windowDidUnmaxinmized: windowDidUnmaxinmized,

    windowDidResume: windowDidResume,

    windowDidPause: windowDidPause,

    windowIsResponsive: windowIsResponsive,

    windowIsNotResponsive: windowIsNotResponsive,

    windowDidClose: windowDidClose,

    getWindow: getWindow,

    getAppRoot: getAppRoot

}
