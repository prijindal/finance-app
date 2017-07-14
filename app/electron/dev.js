const {app, BrowserWindow} = require('electron');

export const startApp = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
};

exports.startApp = startApp;
