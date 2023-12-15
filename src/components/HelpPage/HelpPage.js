import React from "react";
import styles from "./help.module.css";
import { Navbar } from "../Navbar/Navbar";
import { useMode } from "../ThemeGlobal/ModeContext";

export const HelpPage = () => {
  const { isLightMode } = useMode();

  return (
    <section
      className={styles.main}
      style={{
        background: isLightMode ? "#bebebe" : "",
        color: isLightMode ? "#000" : "",
      }}
    >
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div
        className={styles.caption}
        style={{ background: isLightMode ? "rgba(255, 255, 255, 0.250)" : "" }}
      >
        <h1>Help</h1>
        <p>Coming Soon...</p>
      </div>
    </section>
  );
};
