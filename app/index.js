const {app, BrowserWindow, ipcMain} = require('electron');

var mainWindow = null;
let ENV = 'DEVELOPMENT'
ENV = 'PRODUCTION'

app.on('window-all-closed', function() {
  //if (process.platform != 'darwin') {
    app.quit();
  //}
});

let starttime = Date.now();

app.on('ready', function() {
  // call python?
  if(ENV === 'DEVELOPMENT') {
    let { startApp } = require('./electron/dev');
    startApp();
  } else {
    let { startApp } = require('./electron/prod');
    startApp();
  }
});
