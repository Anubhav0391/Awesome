import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Auth from '../pages/Auth'
import PrivateRoute from './Private'
import Cart from '../pages/Cart'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Products gender={"male"}/>}/>
        <Route path='/women' element={<Products gender={"female"}/>}/>
        <Route path='/search' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/auth/:route' element={<Auth/>}/>
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes