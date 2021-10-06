import digitalMarketing from "../Extra/digitalMarketing.jpg";
import laptop from "../Extra/laptop.jpg";
import man from "../Extra/man.jpg";
import styles from "../Extra/Extra.module.css";
import React from "react";

const Extra = function () {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={digitalMarketing} alt="digital marketing" />
      </div>

      <div className={styles.marketing}>
        <div className={styles.left}>
          <a className={styles.heading} href="#">
            Digital Marketing
          </a>
          <button className={styles.btn}>Explore here</button>
        </div>

        <div className={styles.imageMan}>
          <img src={man} />
        </div>
      </div>

      <div className={styles.third}>
        <a className={styles.heading} href="#">
          Product Management
          <br /> like a pro
        </a>
        <button className={styles.btn}>Explore here</button>
      </div>
      <div className={styles.image}>
        <img src={laptop} />
      </div>
    </div>
  );
};

export default Extra;
