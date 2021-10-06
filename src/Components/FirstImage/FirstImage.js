import newImage from "../FirstImage/firstImage.jpg";
import styles from "./FirstImage.module.css";

const FirstImage = function () {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.image}>
        <img src={newImage} className={styles.image} />
      </div>
      <div className={styles.description}>
        A World of knowledge at
        <br /> your doorsteps.
      </div>
    </div>
  );
};

export default FirstImage;
