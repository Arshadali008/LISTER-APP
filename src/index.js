import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Home from './Components/Pages/Home';
// import Counter from './Components/Pages/Counter';
// import Signin from './Components/Auth/Signin';
// import Signup from './Components/Auth/Signup';
// import Protected from './Components/Pages/Protected';
// import ProductDetails from './Components/Pages/ProductDetail';
// import NotFound from './Components/Router/NotFound';

// const router=createBrowserRouter(
//   createRoutesFromElements(
//           <Route path='/' element={<Home/>}>
//           <Route path='/counter' element={<Counter/>}/>
//           <Route path='/product/:id' element={<ProductDetails/>} />
//           <Route path='/signin' element={<Signin/>} />
//           <Route path='/signup' element={<Signup/>} />
//           <Route path='/' element={<Protected/>} >
//           <Route path='*' element={<NotFound/>}/>
//           </Route>
//           </Route>
//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  // <RouterProvider router={router}/>
);

