var template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New File',
                accelerator: 'CmdOrCtrl+N',
                role: ''
            },
            {
                label: 'New Folder',
                accelerator: 'Shift+CmdOrCtrl+N',
                role: ''
            },
            {
                label: 'New Window',
                accelerator: 'Shift+CmdOrCtrl+W',
                role: ''
            },
            {
                type: 'separator'
            },
            {
                label: 'Open File...',
                accelerator: 'CmdOrCtrl+O',
                role: ''
            },
            {
                label: 'Open Folder...',
                accelerator: '',
                role: ''
            },
            {
                label: 'Open Recent',
                accelerator: '',
                role: ''
            },
            {
                type: 'separator'
            },
            {
                label: 'Save',
                accelerator: 'CmdOrCtrl+S',
                role: ''
            },
            {
                label: 'Save As...',
                accelerator: 'Shift+CmdOrCtrl+S',
                role: ''
            },
            {
                label: 'Save All',
                accelerator: '',
                role: ''
            },
            {
                type: 'separator'
            },
            {
                label: 'Preferences',
                accelerator: '',
                role: ''
            },
            {
                type: 'separator'
            },
            {
                label: 'Revert File',
                accelerator: '',
                role: ''
            },
            {
                label: 'Close Editor',
                accelerator: 'CmdOrCtrl+F4',
                role: ''
            },
            {
                label: 'Close File',
                accelerator: '',
                role: ''
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Esc',
                role: ''
            },
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Close Tab',
                accelerator: 'Shift+CmdOrCtrl+T',
                role: ''
            },
            {
                type: 'separator'
            },
            {
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                role: 'undo'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'CmdOrCtrl+X',
                role: 'cut'
            },
            {
                label: 'Copy',
                accelerator: 'CmdOrCtrl+C',
                role: 'copy'
            },
            {
                label: 'Paste',
                accelerator: 'CmdOrCtrl+V',
                role: 'paste'
            },
            {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                role: 'selectall'
            },
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.reload();
                }
            },
            {
                label: 'Toggle Full Screen',
                accelerator: (function () {
                    if (process.platform == 'darwin')
                        return 'Ctrl+Command+F';
                    else
                        return 'F11';
                })(),
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                }
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: (function () {
                    if (process.platform === 'darwin') {
                        return 'Alt+Command+I';
                    }
                    else {
                        return 'Ctrl+Shift+I';
                    }
                })(),
                click: function (item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                }
            },
        ]
    },
    {
        label: 'Window',
        role: 'window',
        submenu: [
            {
                label: 'Minimize',
                accelerator: 'CmdOrCtrl+M',
                role: 'minimize'
            },
            {
                label: 'Close',
                accelerator: 'CmdOrCtrl+W',
                role: 'close'
            },
        ]
    },
    {
        label: 'Help',
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: function () { require('electron').shell.openExternal('http://electron.atom.io'); }
            },
        ]
    },
];
if (process.platform == 'darwin') {
    var name = require('electron').app.getName();
    template.unshift({
        label: name,
        submenu: [
            {
                label: 'About ' + name,
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                label: 'Services',
                role: 'services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                label: 'Hide ' + name,
                accelerator: 'Command+H',
                role: 'hide'
            },
            {
                label: 'Hide Others',
                accelerator: 'Command+Shift+H',
                role: 'hideothers'
            },
            {
                label: 'Show All',
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: function () { app.quit(); }
            },
        ]
    });
    template[3].submenu.push({
        type: 'separator'
    }, {
        label: 'Bring All to Front',
        role: 'front'
    });
}
(module).exports = {
    menuItemsData: template
};
//# sourceMappingURL=menu.js.map