import React from 'react'
import styles from "./right.module.css"
import {Navbar} from "../../components/Navbar/Navbar"
import {Card} from "../../components/Cards/Card"
import { useMode } from '../../components/ThemeGlobal/ModeContext'

export const Right = () => {
  const { isLightMode } = useMode();

  return (
  
    <div className={isLightMode ? styles.main_light : styles.main_dark}  >
        <Navbar/>
        <Card/>
    </div>
  )
}
