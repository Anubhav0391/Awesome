import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Mens from '../pages/Men'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes