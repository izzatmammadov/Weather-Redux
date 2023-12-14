import React from "react";
import styles from "./result.module.css";
import sunCloud from "../../assets/images/sunCloud.svg"
// import sunny from "../../assets/images/sunny.svg"
// import cloudy from "../../assets/images/cloudy.svg"
// import rainy from "../../assets/images/rainy.svg"

export const Result = () => {
  return (
    <section className={styles.result}>
      <img src={sunCloud}/>
      <h1 className={styles.celcius}>4<sup className={styles.sup}>°C</sup></h1>

      <div className={styles.result_inner}>
        <div className={styles.title}>
          <h2 className={styles.city}>Baku</h2>
          <p className={styles.date}>12/14/2023</p>
        </div>

        <div className={styles.about_weather}>
          <h3 className={styles.weather_status}><span class="material-symbols-outlined">cloud_sync</span>Overcast Clouds</h3>
          <p className={styles.time_zone}><span class="material-symbols-outlined">schedule</span>13:4</p>
        </div>
      </div>
    </section>
  );
};
