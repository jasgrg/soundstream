import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} SoundStream. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
