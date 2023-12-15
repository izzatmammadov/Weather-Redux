import React from "react";
import styles from "./navbar.module.css";

import { DarkLightModeToggle } from "../ThemeToggle/Mode";
import { useMode } from "../ThemeGlobal/ModeContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { isLightMode } = useMode();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={isLightMode ? styles.navbar_light : styles.navbar_dark}>
      <div className={styles.logo}>
        <h3>Weather App</h3>
      </div>

      <ul className={isLightMode ? styles.list_light : styles.list_dark}>
        <li
          onClick={() => navigate("/")}
          style={{ color: location.pathname === "/" && "#fff" }}
        >
          Home
        </li>
        <li
          onClick={() => navigate("/about")}
          style={{ color: location.pathname === "/about" && "#fff" }}
        >
          About
        </li>
        <li
          onClick={() => navigate("/help")}
          style={{ color: location.pathname === "/help" && "#fff" }}
        >
          Help
        </li>
      </ul>

      <DarkLightModeToggle />
    </nav>
  );
};
