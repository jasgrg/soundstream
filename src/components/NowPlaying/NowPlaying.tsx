import React from "react";
import { usePlayer } from "../../context/PlayerContext";
import styles from "./NowPlaying.module.scss";

const NowPlaying: React.FC = () => {
  const { currentTrack, isPlaying, currentTime, duration, play, pause, seek } =
    usePlayer();

  if (!currentTrack) {
    return null;
  }

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value);
    seek(newTime);
  };

  return (
    <div className={styles.nowPlaying}>
      <div className={styles.container}>
        <div className={styles.trackInfo}>
          <button
            className={styles.playButton}
            onClick={isPlaying ? pause : play}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <div className={styles.info}>
            <div className={styles.title}>{currentTrack.title}</div>
            {currentTrack.artist && (
              <div className={styles.artist}>{currentTrack.artist}</div>
            )}
          </div>
        </div>
        <div className={styles.controls}>
          <span className={styles.time}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className={styles.seekSlider}
            step="0.1"
          />
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
