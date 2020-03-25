const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {

    // Create the browser window.
    let win = new BrowserWindow({
        frame: false,
        width: 900,
        height: 700,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            maximizable: false,
            preload: path.join(__dirname, 'preload.js')
        },
        icon: __dirname + '/icons/bip.ico',
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.whenReady().then(createWindow);