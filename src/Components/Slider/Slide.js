// import react from "react";
import styles from "../Slider/Slider.module.css";
const Slide = function (props) {
  console.log("slide working");

  return (
    <div className={styles.slide}>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={props.leftClick}
      >
        &lt;
      </button>
      <div className={styles.content}>{props.content}</div>
      <address className={styles.writer}>{props.writer}</address>
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={props.rightClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slide;
