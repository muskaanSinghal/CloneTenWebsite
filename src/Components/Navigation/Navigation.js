import React from "react";
import styles from "./Navigation.module.css";
import image from "../Navigation/logo.jpg";
const Navigation = function () {
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.image}>
          <img src={image} alt="logo" className={styles.imageContainer} />
        </div>
        {/* <img src="C:\Users\HP\Desktop\VISHU_CAMERA\102APPLE\IMG_2017.JPG" /> */}
        <nav className={styles.container}>
          <a href="#" className={styles.link}>
            Home
          </a>
          <a href="#" className={styles.link}>
            Online Courses
          </a>
          <a href="#" className={styles.link}>
            We're Hiring
          </a>
          <a href="#" className={styles.link}>
            More
          </a>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
