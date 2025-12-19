import MusicCard from "@components/MusicCard/MusicCard";
import React from "react";
import { Link } from "react-router-dom";
import { musicLibrary } from "../../data/musicLibrary";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to SoundStream</h1>
        <p className={styles.subtitle}>Your premier audio streaming platform</p>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Get Started</button>
          <Link to="/about">
            <button className={styles.secondaryButton}>Learn More</button>
          </Link>
        </div>
      </section>

      <section className={styles.listenNow}>
        <h2>Listen Now</h2>
        {musicLibrary.length > 0 ? (
          <div className={styles.musicGrid}>
            {musicLibrary.map((track) => (
              <MusicCard
                key={track.id}
                title={track.title}
                artist={track.artist}
                filePath={`/music/${track.filename}`}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No music files available yet.</p>
            <p className={styles.hint}>
              Add music files to <code>public/music/</code> and update{" "}
              <code>src/data/musicLibrary.ts</code> to display them here.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
