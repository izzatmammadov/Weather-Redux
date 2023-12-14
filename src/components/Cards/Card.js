import React from "react";
import styles from "./card.module.css";

export const Card = () => {
  return (
    <section className={styles.main}>
      <div className={styles.card}>
        <p>Visibility</p>
        <span>1</span>
      </div>
      <div className={styles.card}>
        <p>Wind Speed</p>
        <span>5.66</span>
      </div>
      <div className={styles.card}>
        <p>Timezone</p>
        <span>13.4</span>
      </div>
      <div className={styles.card}>
        <p>Humidity</p>
        <span>36</span>
      </div>
      <div className={styles.card}>
        <p>Pressure</p>
        <span>1014</span>
      </div>
      <div className={styles.card}>
        <p>Country Cod</p>
        <span>AE</span>
      </div>

      <div className={styles.copyright}>
        "&#169; 2024 Imaginary Innovations. All rights absurdly reserved.
        Unauthorized use of unicorns and rainbows strictly prohibited."
      </div>
    </section>
  );
};
