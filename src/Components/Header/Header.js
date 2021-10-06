import React from "react";
import styles from "./Header.module.css";
const Header = function () {
  return (
    <div>
      <div className={styles.label}>The</div>
      <div className={styles.label}>Entrepreneurship</div>
      <div className={styles.label}>Network</div>
    </div>
  );
};

export default Header;
