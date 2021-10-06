import React from "react";
import image from "../AboutUs/students.jpg";
import styles from "../AboutUs/AboutUs.module.css";
const AboutUs = function () {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heading}>About Us</div>
        <div className={styles.leftElement}>
          <div className={styles.description}>
            Learning Together From the Comfort of Your Home
          </div>
          <button className={styles.btn}>Learn More</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
