import React from 'react'
import { Left } from '../mainComponents/LeftSide/Left'
import { Right } from '../mainComponents/RightSide/Right'

export const Home = () => {
  return (
    <div style={{display:'flex', height:"auto"}}>
      <Left/>
      <Right/>
    </div>
  )
}