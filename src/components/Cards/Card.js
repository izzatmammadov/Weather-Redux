import React from "react";
import styles from "./card.module.css";
import { useMode } from "../ThemeGlobal/ModeContext";

export const Card = () => {
  const { isLightMode } = useMode();

  return (
    <section className={styles.main}>
      <div
        className={styles.card}
        style={{
          background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "",
          color: isLightMode ? "#000" : "",
        }}
      >
        <p>Visibility</p>
        <span>1</span>
      </div>
      <div
        className={styles.card}
        style={{
          background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "",
          color: isLightMode ? "#000" : "",
        }}
      >
        <p>Wind Speed</p>
        <span>5.66</span>
      </div>
      <div
        className={styles.card}
        style={{
          background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "",
          color: isLightMode ? "#000" : "",
        }}
      >
        <p>Timezone</p>
        <span>13.4</span>
      </div>
      <div
        className={styles.card}
        style={{
          background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "",
          color: isLightMode ? "#000" : "",
        }}
      >
        <p>Humidity</p>
        <span>36</span>
      </div>
      <div
        className={styles.card}
        style={{
          background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "",
          color: isLightMode ? "#000" : "",
        }}
      >
        <p>Pressure</p>
        <span>1014</span>
      </div>
      <div
        className={styles.card}
        style={{
          background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "",
          color: isLightMode ? "#000" : "",
        }}
      >
        <p>Country Cod</p>
        <span>AE</span>
      </div>

      <div
        className={styles.copyright}
        style={{ color: isLightMode ? "#000" : "" }}
      >
        "&#169; 2024 Imaginary Innovations. All rights absurdly reserved.
        Unauthorized use of unicorns and rainbows strictly prohibited."
      </div>
    </section>
  );
};
