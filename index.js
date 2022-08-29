const { BrowserWindow, app } = require("electron");

let mainWindow;

app.on("ready", function() {
    mainWindow = new BrowserWindow({width: 800, height: 600, show: false, fullscreen: true});
    mainWindow.setBackgroundColor("#000032");
    mainWindow.title = "N&M Games";
    mainWindow.maximize();
    mainWindow.removeMenu();
    mainWindow.setIcon("icon.png");
    mainWindow.loadURL("https://nm-games.eu");
    mainWindow.webContents.on("did-finish-load", function() {
        mainWindow.webContents.executeJavaScript("if (document.querySelector('#utilitybar')) document.querySelector('#utilitybar ul').innerHTML += '<li onclick=\"self.close()\">Quit</li>';");
    });
    mainWindow.once("ready-to-show", function() {
        mainWindow.show();
    });
});
