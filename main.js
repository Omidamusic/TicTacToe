const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will

let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()


  win.on('closed', () => {
  
    win = null
  })
}


app.on('ready', createWindow)


