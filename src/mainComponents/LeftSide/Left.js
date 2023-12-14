import React from 'react'
import styles from "./left.module.css"
import {Form} from "../../components/Form/Form"
import {Result} from "../../components/Result/Result"

export const Left = () => {
  return (
    <div className={styles.main}>
        <Form/>
        <Result/>
    </div>
  )
}
