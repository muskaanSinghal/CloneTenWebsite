import React from "react";
import Cart from "./Cart";
import Header from "./Header";
import Input from "./Input";
import LogIn from "./LogIn";
import styles from "./MainHeader.module.css";
const MainHeader = function () {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.right}>
        <div className={styles.block}>
          <Cart />
          <LogIn />
        </div>

        <Input />
      </div>
    </div>
  );
};
export default MainHeader;
