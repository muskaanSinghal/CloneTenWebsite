import styles from "./Input.module.css";
const Input = function () {
  return (
    <input type="text" className={styles.input} placeholder="Search here..." />
  );
};

export default Input;
