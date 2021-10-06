import React from "react";
// import image from "../Join/join.jpg";
import styles from "../Join/Join.module.css";
const Join = function () {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heading}> Welcome to </div>
        <div className={styles.title}>THE NEXT BIG THING</div>
        <button className={styles.btn}>Join TEN Virtual Campus</button>
      </div>
    </div>
  );
};

export default Join;
