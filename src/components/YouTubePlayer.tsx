import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

import type Player from 'video.js/dist/types/player';

interface YouTubePlayerProps {
  videoId: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  onReady?: (player: Player) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export default function YouTubePlayer({
  videoId,
  width = '100%',
  height = 'auto',
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  className = '',
  onReady,
  onPlay,
  onPause,
  onEnded,
}: YouTubePlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    // Initialize Video.js player
    if (videoRef.current && !playerRef.current) {
      const videoElement = videoRef.current;

      playerRef.current = videojs(videoElement, {
        techOrder: ['youtube'],
        sources: [
          {
            type: 'video/youtube',
            src: `https://www.youtube.com/watch?v=${videoId}`,
          },
        ],
        autoplay,
        controls,
        loop,
        muted,
        youtube: {
          iv_load_policy: 3, // Hide annotations
          modestbranding: 1, // Minimal YouTube branding
          rel: 0, // Don't show related videos from other channels
          playsinline: 1, // Play inline on mobile
        },
      });

      // Event handlers
      if (onReady) {
        playerRef.current.ready(() => {
          if (playerRef.current) {
            onReady(playerRef.current);
          }
        });
      }

      if (onPlay) {
        playerRef.current.on('play', onPlay);
      }

      if (onPause) {
        playerRef.current.on('pause', onPause);
      }

      if (onEnded) {
        playerRef.current.on('ended', onEnded);
      }
    }

    // Cleanup on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoId, autoplay, controls, loop, muted, onReady, onPlay, onPause, onEnded]);

  // Update source when videoId changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src({
        type: 'video/youtube',
        src: `https://www.youtube.com/watch?v=${videoId}`,
      });
    }
  }, [videoId]);

  return (
    <div
      className={`video-player-wrapper ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        aspectRatio: height === 'auto' ? '16/9' : undefined,
      }}
    >
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
        style={{
          width: '100%',
          height: typeof height === 'number' ? `${height}px` : height === 'auto' ? '100%' : height,
        }}
      />
    </div>
  );
}
