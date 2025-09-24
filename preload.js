const { contextBridge, ipcRenderer } = require('electron');

function pollSongData() {
    const titleEl = document.querySelector('.title.ytmusic-player-bar');
    const artistEl = document.querySelector('.byline.ytmusic-player-bar');
    const albumArtEl = document.querySelector('ytmusic-player-bar img');

    const title = titleEl?.innerText || '';
    const artist = artistEl?.innerText || '';
    const albumArt = albumArtEl?.src || '';

    ipcRenderer.send('update-song', { title, artist, albumArt });
}

setInterval(pollSongData, 2000); // Check every 2s
