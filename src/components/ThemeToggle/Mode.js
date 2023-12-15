import React from 'react';
import Switch from 'react-switch';
import { useMode } from '../ThemeGlobal/ModeContext';
import styles from "./mode.module.css"

export const DarkLightModeToggle = () => {
  const { isLightMode, toggleMode } = useMode();

  return (
    <div className={styles.toggle}>
      <Switch
        onChange={toggleMode}
        checked={isLightMode}
        height={24}
        width={50}
        onColor='#404040'
        offColor='#FFDE55'
        uncheckedIcon={<span className="material-symbols-outlined">wb_sunny</span>}
        checkedIcon={<span className="material-symbols-outlined">dark_mode</span>}
      />
    </div>
  );
};
