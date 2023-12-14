import React from 'react'
import styles from "./right.module.css"
import {Navbar} from "../../components/Navbar/Navbar"
import {Card} from "../../components/Cards/Card"

export const Right = () => {
  return (
    <div className={styles.main}>
        <Navbar/>
        <Card/>
    </div>
  )
}
