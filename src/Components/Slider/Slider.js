import styles from "../Slider/Slider.module.css";
import React, { useState } from "react";
import Slide from "./Slide";

const Slider = function () {
  const [transform, setTransform] = useState(0);
  const data = [
    [
      "TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
      "-Harsh Rajput, General Management Intern",
    ],
    [
      "I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.",
      "-Kshema Unni, Business Development Intern",
    ],
    [
      "TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
      "-Kshema Unni, Business Development Intern",
    ],
  ];

  let n = data.length;
  let value = 100 / n;

  const LeftClickHandler = function () {
    setTransform((prev) => {
      if (prev <= -1 * ((n - 1) * value)) {
        return 0;
      } else {
        return prev - value;
      }
    });
  };

  const RightClickHandler = function () {
    console.log(transform);
    setTransform((prev) => {
      if (prev >= 0) {
        return -1 * (n - 1) * value;
      } else {
        return prev + value;
      }
    });
  };

  return (
    <React.Fragment>
      <div className={styles.heading}>Testimonials</div>
      <div className={styles.container}>
        <div
          className={styles.slides}
          style={{ transform: `translate(${transform}%)` }}
        >
          {data.map((item, index) => {
            return (
              <Slide
                content={item[0]}
                writer={item[1]}
                key={index}
                leftClick={LeftClickHandler}
                rightClick={RightClickHandler}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
