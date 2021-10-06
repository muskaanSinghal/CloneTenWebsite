import React from "react";
import styles from "./Cart.module.css";
const Cart = function () {
  return (
    <React.Fragment>
      <button className={styles.btn}>
        <svg viewBox="-5 -10 24 24" width="50" height="64">
          <polyline
            className={styles.cart}
            points="0 0 , 5 0 , 7 5, 12 5 ,14 0 , 10 0"
          />
          {/* <polyline className={styles.cart} points="7 5,7 7,12 7"></polyline> */}
          <circle className={styles.wheel} cx="7.5" cy="8.5" r="1"></circle>
          <circle className={styles.wheel} cx="11" cy="8.5" r="1"></circle>
        </svg>
      </button>
    </React.Fragment>
  );
};

export default Cart;
