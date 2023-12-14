import React, { useState } from 'react';
import Switch from 'react-switch';
import styles from "./mode.module.css"

export const DarkLightModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.toggle}>
      <Switch
        onChange={toggleMode}
        checked={isDarkMode}
        height={24}
        width={50}
        onColor='#404040'
        offColor='#FFDE55'
        uncheckedIcon={<span class="material-symbols-outlined">
        wb_sunny
        </span>}
        checkedIcon={<span class="material-symbols-outlined">
        dark_mode
        </span>}
      />
    </div>
  );
};

