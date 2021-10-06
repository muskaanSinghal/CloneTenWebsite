import React from "react";
import image from "../Additional/newThing.jpg";
import styles from "../Additional/Additional.module.css";

const Additional = function () {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={image} className={styles.image} />
        <h3 className={styles.header}>Our Courses</h3>
        <p className={styles.heading}>
          Your New <br />
          Journey Begins Here,
          <br /> Today
        </p>
      </div>
      <div className={styles.right}>
        <p>Entrepreneurship made fun</p>
        <button className={styles.btn}>Explore Here</button>
      </div>
    </div>
  );
};

export default Additional;
