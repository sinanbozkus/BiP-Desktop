const path = require('path')
const url = require('url')
const customTitlebar = require('custom-electron-titlebar')

// var appVersion = require('electron').remote.app.getVersion()

window.addEventListener('DOMContentLoaded', () => {
    var tb = new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#242a32'),
        icon: url.format(path.join(__dirname, '/icons', '/biplogo.png')),
        // shadow: true,
         minimizable: true,
         maximizable: false,
        titleHorizontalAlignment: 'left',
        menu: null,
        // enableMnemonics: false,
    });

    //   document.title = 'KnightLauncher (' + appVersion + ')'
    document.title = 'BiP Desktop'
    tb.updateTitle()

    // const replaceText = (selector, text) => {
    //     const element = document.getElementById(selector)
    //     if (element) element.innerText = text
    // }
})