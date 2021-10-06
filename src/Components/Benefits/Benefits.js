import React from "react";
import teacher from "../Benefits/teacher.jpg";
import community from "../Benefits/community.jpg";
import curiculum from "../Benefits/curiculum.jpg";
import styles from "../Benefits/Benefits.module.css";
const Benefits = function () {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div>
          <img src={teacher} className={styles.image} />
        </div>
        <div className={styles.title}>Expert Teachers</div>
        <div className={styles.content}>
          Our instructors are more adept at monitoring student problems and
          assessing their level of understanding and progress, and they provide
          much more relevant, useful feedback. We are experts in developing and
          testing hypotheses about learning difficulties or instructional
          strategies.
        </div>
      </div>
      <div className={styles.div}>
        <div>
          <img src={community} className={styles.image} />
        </div>
        <div className={styles.title}>Online Community</div>
        <div className={styles.content}>
          Feel like home, with a "family of invisible friends"
        </div>
      </div>
      <div className={styles.div}>
        <div>
          <img src={curiculum} className={styles.image} />
        </div>
        <div className={styles.title}>Flexible Curriculum</div>
        <div className={styles.content}>
          Our expert teachers design and curate the curriculum using best
          practices and careful consideration of how people learn and retain
          information with the ongoing tech trends in the professional domain.
          We've debated every facet of our methodology, from the order in which
          to teach concepts, the analogies used to clarify them and how
          exercises should be structured to deliver the maximum educational
          punch.
        </div>
      </div>
    </div>
  );
};

export default Benefits;
