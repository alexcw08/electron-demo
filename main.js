const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Load our webpage into newly instantiated BrowserWindow
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
