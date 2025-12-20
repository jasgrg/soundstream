import React, { createContext, useContext, useState } from "react";

interface PlayerContextType {
  currentTrack: {
    title: string;
    artist?: string;
    filePath: string;
  } | null;
  audioRef: React.RefObject<HTMLAudioElement> | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  setCurrentTrack: (track: {
    title: string;
    artist?: string;
    filePath: string;
  } | null) => void;
  setAudioRef: (ref: React.RefObject<HTMLAudioElement>) => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = useState<{
    title: string;
    artist?: string;
    filePath: string;
  } | null>(null);
  const [audioRef, setAudioRef] = useState<React.RefObject<HTMLAudioElement> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const play = () => {
    if (audioRef?.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
    }
  };

  const pause = () => {
    if (audioRef?.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seek = (time: number) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        audioRef,
        isPlaying,
        currentTime,
        duration,
        setCurrentTrack,
        setAudioRef,
        setIsPlaying,
        setCurrentTime,
        setDuration,
        play,
        pause,
        seek,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};
