const {app, BrowserWindow, ipcMain} = require('electron');

var mainWindow = null;

app.on('window-all-closed', function() {
  //if (process.platform != 'darwin') {
    app.quit();
  //}
});

let starttime = Date.now();

app.on('ready', function() {
  // call python?

  mainWindow = new BrowserWindow({width: 800, height: 600});
  // mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
