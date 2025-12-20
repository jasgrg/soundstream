import React, { useRef, useState, useEffect } from "react";
import { usePlayer } from "../../context/PlayerContext";
import styles from "./MusicCard.module.scss";

interface MusicCardProps {
  title: string;
  artist?: string;
  filePath: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, artist, filePath }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const globalPlayer = usePlayer();

  useEffect(() => {
    // Register this audio element with the global player when it starts playing
    if (isPlaying) {
      globalPlayer.setCurrentTrack({ title, artist, filePath });
      globalPlayer.setAudioRef(audioRef);
    }
  }, [isPlaying, title, artist, filePath, globalPlayer]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        globalPlayer.setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            globalPlayer.setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
            globalPlayer.setIsPlaying(false);
          });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);
      globalPlayer.setCurrentTime(time);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const dur = audioRef.current.duration;
      setDuration(dur);
      globalPlayer.setDuration(dur);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    globalPlayer.setIsPlaying(false);
    globalPlayer.setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.musicCard}>
      <div className={styles.cardContent}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          {artist && <p className={styles.artist}>{artist}</p>}
        </div>

        <button
          className={styles.playButton}
          onClick={togglePlay}
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
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.timeInfo}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className={styles.seekSlider}
          step="0.1"
        />
      </div>

      <audio
        ref={audioRef}
        src={filePath}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
        crossOrigin="anonymous"
        onError={(e) => {
          const target = e.currentTarget as HTMLAudioElement;
          console.error("Audio error for:", title);
          console.error("File path:", filePath);
          console.error("Error code:", target.error?.code);
          console.error("Error message:", target.error?.message);
        }}
        onLoadStart={() => {
          console.log("Loading audio:", title, filePath);
        }}
        onCanPlay={() => {
          console.log("Audio ready to play:", title);
        }}
      />
    </div>
  );
};

export default MusicCard;
