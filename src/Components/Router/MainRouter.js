import React from 'react'
import Home from '../Pages/Home.js'
import Counter from '../Pages/Counter.js'
import NotFound from './NotFound.js'
import { Route, Routes } from 'react-router'
import ProductDetail from '../Pages/ProductDetail.js'
import Signin from '../Auth/Signin.js'
import Signup from '../Auth/Signup.js'
import Cart from '../Pages/Cart.js'

const MainRouter = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="*"element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default MainRouter