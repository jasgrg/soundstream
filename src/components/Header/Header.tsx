import React from "react";
import { Link } from "react-router-dom";
import NowPlaying from "../NowPlaying/NowPlaying";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1>SOUNDSTREAM</h1>
        </Link>
        <NowPlaying />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/library" className={styles.navLink}>
                Music Library
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
