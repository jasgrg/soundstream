import React from "react";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1>About SoundStream</h1>
      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            At SoundStream, we believe that music should be accessible to
            everyone, everywhere. Our mission is to provide a seamless audio
            streaming experience that connects artists with listeners around the
            globe.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p>
            We offer a comprehensive music streaming platform with millions of
            tracks, curated playlists, and personalized recommendations. Whether
            you're discovering new artists or revisiting old favorites,
            SoundStream has something for everyone.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Technology</h2>
          <p>
            Built with cutting-edge web technologies including React,
            TypeScript, and modern build tools, we ensure a fast, reliable, and
            enjoyable user experience across all devices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
