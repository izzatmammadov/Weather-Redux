import React from 'react'
import { ROUTERS } from './constants/routes/router'
import { Route, Routes } from 'react-router-dom'

import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Help} from "./pages/Help"

export const App = () => {
  return (
   <>
   <Routes>
    <Route path={ROUTERS.Home} element={<Home/>} />
    <Route path={ROUTERS.About} element={<About/>} />
    <Route path={ROUTERS.Help} element={<Help/>} />
   </Routes>
   </>
  )
}
