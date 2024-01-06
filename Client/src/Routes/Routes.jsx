import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Products gender={"male"}/>}/>
        <Route path='/women' element={<Products gender={"female"}/>}/>
        <Route path='/search' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes