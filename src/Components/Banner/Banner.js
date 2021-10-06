import React from "react";
import styles from "../Banner/Banner.module.css";

const Banner = function () {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <p className={styles.text}>Our Course Benefits</p>
      </div>
    </React.Fragment>
  );
};

export default Banner;
