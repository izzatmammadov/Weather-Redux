import React from "react";
import styles from "./navbar.module.css";

import {DarkLightModeToggle} from "../ThemeToggle/Mode"
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h3>Weather App</h3>
      </div>

    <ul className={styles.list}>
      <li onClick={()=> navigate("/")}  style={{ color: location.pathname === "/" && "#fff"}}>Home</li>
      <li onClick={()=> navigate("/about")} style={{ color: location.pathname === "/about" && "#fff"}}>About</li>
      <li onClick={()=> navigate("/help")} style={{ color: location.pathname === "/help" && "#fff"}}>Help</li>
    </ul>

      <DarkLightModeToggle/>
    
    </nav>
  );
};
