# YouTube Music OBS Overlay

A beautiful volcano-themed overlay for OBS that displays currently playing songs from YouTube Music with animated fire effects.

## Features

- **Real-time song tracking** - Automatically detects and displays currently playing songs from YouTube Music
- **Volcano theme** - Stunning volcanic-themed overlay with glowing red borders and animated fire particles
- **OBS-ready** - Transparent background perfect for browser source in OBS
- **Auto-refreshing** - Updates every 2 seconds with the latest track information
- **Album artwork** - Displays album art alongside song and artist information

## Installation

### Download Latest Release

Get the latest version by downloading the `.exe` file from the [releases page](https://github.com/username/youtube-music-obs-overlay/releases).

### Manual Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## Usage

1. Launch the application - it will open YouTube Music in an Electron window
2. The overlay server will start automatically on `http://localhost:3000`
3. In OBS, add a Browser Source with the URL: `http://localhost:3000`
4. Set the browser source dimensions to 800x200 (or adjust as needed)
5. Play music on YouTube Music and watch the overlay update in real-time!

## How It Works

- **Electron App**: Loads YouTube Music and extracts song data using DOM polling
- **Express Server**: Serves the overlay HTML and provides a JSON API endpoint
- **Real-time Updates**: Song information is polled every 2 seconds and served via `/now-playing` endpoint
- **Volcanic Theme**: CSS animations create glowing borders and falling fire particle effects

## API

The application exposes a JSON API at `http://localhost:3000/now-playing` that returns:

```json
{
  "title": "Song Title",
  "artist": "Artist Name",
  "albumArt": "https://album-art-url.jpg"
}
```

## Customization

The overlay styling can be customized by editing `/public/index.html`. The volcanic theme includes:

- Glowing red borders with pulsing animation
- Fire particle effects that fall inside the overlay
- Custom "Orbitron" font for a futuristic look
- Semi-transparent volcanic color scheme

## Requirements

- Node.js
- YouTube Music account (free or premium)

## License

ISC