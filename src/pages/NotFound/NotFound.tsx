import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className={styles.homeButton}>Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
