const {app, BrowserWindow, ipcMain} = require('electron');

const startApp = () => {
  mainWindow = new BrowserWindow({width: 1366, height: 768});
  mainWindow.loadURL('file://' + __dirname + '/../build/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
};

exports.startApp = startApp;
