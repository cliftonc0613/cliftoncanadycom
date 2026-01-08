# Video.js YouTube Player Setup Guide

This guide explains how to use the Video.js YouTube player components in your Astro project.

## Overview

The implementation uses:
- **Video.js** - HTML5 video player framework
- **videojs-youtube** - YouTube playback tech for Video.js
- **Custom theming** - Styled to match site colors (primary blue, accent orange)

## Prerequisites

Before using the video player, install the required dependencies:

```bash
cd website
npm install video.js videojs-youtube
```

**Note:** If you encounter npm cache permission errors, run:
```bash
sudo chown -R $(whoami) ~/.npm
```

Then retry the install command.

## Quick Start

### Basic Usage (Astro)

```astro
---
import VideoPlayer from '@/components/VideoPlayer.astro';
---

<VideoPlayer videoId="dQw4w9WgXcQ" />
```

### Basic Usage (React)

```tsx
import YouTubePlayer from '@/components/YouTubePlayer';

export default function MyComponent() {
  return <YouTubePlayer videoId="dQw4w9WgXcQ" />;
}
```

## Component Reference

### VideoPlayer.astro

The Astro wrapper component for easy static site usage.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoId` | `string` | **required** | YouTube video ID (the part after `?v=` in URLs) |
| `width` | `number \| string` | `'100%'` | Player width in pixels or CSS value |
| `height` | `number \| string` | `'auto'` | Player height (`'auto'` maintains 16:9 ratio) |
| `autoplay` | `boolean` | `false` | Auto-play the video |
| `controls` | `boolean` | `true` | Show player controls |
| `loop` | `boolean` | `false` | Loop video playback |
| `muted` | `boolean` | `false` | Mute the video |
| `class` | `string` | `''` | Additional CSS classes |

### YouTubePlayer.tsx

The React component with full Video.js functionality.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoId` | `string` | **required** | YouTube video ID |
| `width` | `number \| string` | `'100%'` | Player width |
| `height` | `number \| string` | `'auto'` | Player height |
| `autoplay` | `boolean` | `false` | Auto-play |
| `controls` | `boolean` | `true` | Show controls |
| `loop` | `boolean` | `false` | Loop playback |
| `muted` | `boolean` | `false` | Mute audio |
| `className` | `string` | `''` | Additional CSS classes |
| `onReady` | `(player) => void` | - | Callback when player is ready |
| `onPlay` | `() => void` | - | Callback when video plays |
| `onPause` | `() => void` | - | Callback when video pauses |
| `onEnded` | `() => void` | - | Callback when video ends |

## Usage Examples

### Responsive Video (Default)

```astro
<VideoPlayer videoId="dQw4w9WgXcQ" />
```

The default settings create a responsive 16:9 video that fills its container.

### Fixed Dimensions

```astro
<VideoPlayer
  videoId="dQw4w9WgXcQ"
  width={800}
  height={450}
/>
```

### Autoplay with Mute

Browsers require videos to be muted for autoplay to work.

```astro
<VideoPlayer
  videoId="dQw4w9WgXcQ"
  autoplay
  muted
/>
```

### Background Video (No Controls)

```astro
<VideoPlayer
  videoId="dQw4w9WgXcQ"
  autoplay
  muted
  loop
  controls={false}
/>
```

### With Event Handlers (React)

```tsx
import YouTubePlayer from '@/components/YouTubePlayer';

export default function VideoSection() {
  const handleReady = (player) => {
    console.log('Player ready!', player);
  };

  const handlePlay = () => {
    console.log('Video started playing');
  };

  const handleEnded = () => {
    console.log('Video finished');
  };

  return (
    <YouTubePlayer
      videoId="dQw4w9WgXcQ"
      onReady={handleReady}
      onPlay={handlePlay}
      onEnded={handleEnded}
    />
  );
}
```

### Multiple Videos on a Page

```astro
---
import VideoPlayer from '@/components/VideoPlayer.astro';

const videos = [
  { id: 'video1', title: 'Introduction' },
  { id: 'video2', title: 'Tutorial' },
  { id: 'video3', title: 'Advanced Tips' },
];
---

<div class="video-grid">
  {videos.map((video) => (
    <div class="video-item">
      <h3>{video.title}</h3>
      <VideoPlayer videoId={video.id} />
    </div>
  ))}
</div>
```

### Inside a Modal/Dialog

```astro
---
import VideoPlayer from '@/components/VideoPlayer.astro';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
---

<Dialog client:load>
  <DialogTrigger asChild>
    <Button>Watch Video</Button>
  </DialogTrigger>
  <DialogContent class="max-w-4xl">
    <VideoPlayer videoId="dQw4w9WgXcQ" />
  </DialogContent>
</Dialog>
```

## Extracting Video IDs

The `videoId` is the unique identifier from YouTube URLs:

| URL Format | Video ID |
|------------|----------|
| `youtube.com/watch?v=dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| `youtu.be/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| `youtube.com/embed/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |

## Styling

### Theme Colors

The player is themed to match the site:
- **Control bar**: Primary blue (#3D4E76) gradient
- **Progress bar**: Accent orange (#F66733)
- **Big play button**: Primary blue with orange border
- **Hover states**: Accent orange highlights

### Custom CSS

Override styles in `globals.css` using the `.video-js` class:

```css
/* Example: Change progress bar color */
.video-js .vjs-play-progress {
  background: #yourcolor;
}

/* Example: Customize big play button */
.video-js .vjs-big-play-button {
  background: #yourcolor;
  border-radius: 10px; /* Square corners */
}
```

### Container Styling

```astro
<VideoPlayer
  videoId="dQw4w9WgXcQ"
  class="my-4 shadow-2xl rounded-xl overflow-hidden"
/>
```

## Troubleshooting

### Video Not Loading

1. **Check the video ID** - Ensure it's a valid YouTube video ID
2. **Check browser console** - Look for CORS or API errors
3. **Verify dependencies** - Run `npm list video.js videojs-youtube`

### Player Not Rendering

1. **Astro hydration** - The component uses `client:load` directive
2. **Check imports** - Ensure paths are correct with `@/` alias

### Autoplay Not Working

Browsers block autoplay with sound. Always use `muted` with `autoplay`:

```astro
<VideoPlayer videoId="..." autoplay muted />
```

### TypeScript Errors

If you see type errors, ensure you have the correct types:

```bash
npm install -D @types/video.js
```

### Player Controls Hidden

The YouTube API may hide controls. Use the `controls` prop:

```astro
<VideoPlayer videoId="..." controls />
```

## File Locations

| File | Purpose |
|------|---------|
| `src/components/VideoPlayer.astro` | Astro wrapper component |
| `src/components/YouTubePlayer.tsx` | React component with Video.js |
| `src/styles/globals.css` | Theme overrides (search for "Video.js Theme") |

## Dependencies

```json
{
  "dependencies": {
    "video.js": "^8.x",
    "videojs-youtube": "^3.x"
  },
  "devDependencies": {
    "@types/video.js": "^7.x"
  }
}
```

## Resources

- [Video.js Documentation](https://videojs.com/guides/)
- [videojs-youtube GitHub](https://github.com/videojs/videojs-youtube)
- [YouTube Player Parameters](https://developers.google.com/youtube/player_parameters)
