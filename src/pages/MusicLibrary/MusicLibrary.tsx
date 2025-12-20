import MusicCard from "@components/MusicCard/MusicCard";
import React from "react";
import { musicLibrary } from "../../data/musicLibrary";
import styles from "./MusicLibrary.module.scss";

const MusicLibrary: React.FC = () => {
  return (
    <div className={styles.musicLibrary}>
      <div className={styles.header}>
        <h1 className={styles.title}>Music Library</h1>
        <p className={styles.subtitle}>
          {musicLibrary.length} {musicLibrary.length === 1 ? "track" : "tracks"}{" "}
          available
        </p>
      </div>

      <div className={styles.musicGrid}>
        {musicLibrary.map((music) => (
          <MusicCard
            key={music.id}
            title={music.title}
            artist={music.artist}
            filePath={`${process.env.PUBLIC_URL || ''}/music/${music.filename}`}
          />
        ))}
      </div>

      {musicLibrary.length === 0 && (
        <div className={styles.emptyState}>
          <p>No music in your library yet</p>
          <p className={styles.hint}>
            Add music files to the public/music/ directory and update the
            musicLibrary array
          </p>
        </div>
      )}
    </div>
  );
};

export default MusicLibrary;
