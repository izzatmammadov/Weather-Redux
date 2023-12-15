import React from 'react'
import styles from "./left.module.css"
import {Form} from "../../components/Form/Form"
import {Result} from "../../components/Result/Result"
import { useMode } from '../../components/ThemeGlobal/ModeContext'

export const Left = () => {

  const { isLightMode } = useMode();

  return (
    <div className={isLightMode ? styles.main_light : styles.main_dark}>
        <Form/>
        <Result/>
    </div>
  )
}
