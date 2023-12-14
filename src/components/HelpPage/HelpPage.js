import React from "react";
import styles from "./help.module.css";
import { Navbar } from "../Navbar/Navbar";

export const HelpPage = () => {
  return (
    <section className={styles.main}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.caption}>
        <h1>Help</h1>
        <p>Coming Soon...</p>
      </div>
    </section>
  );
};
