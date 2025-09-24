const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const express = require('express');

// Initialize Express server
const server = express();

// Serve static files from the public folder
server.use(express.static(path.join(__dirname, 'public')));

let currentSong = {
    title: '',
    artist: '',
    albumArt: ''
};

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    win.loadURL('https://music.youtube.com');

    // Debugging
    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

ipcMain.on('update-song', (event, data) => {
    currentSong = data;
});

// JSON API route
server.get('/now-playing', (req, res) => {
    res.json(currentSong);
});

server.listen(3000, () => {
    console.log('Overlay server running at http://localhost:3000');
    console.log('Overlay page: http://localhost:3000/index.html');
});
