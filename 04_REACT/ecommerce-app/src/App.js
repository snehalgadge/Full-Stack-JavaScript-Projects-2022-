import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { productsData } from './api/api'
import Signin from './pages/Signin'
import Registration from './pages/Registration'
import Cart from './pages/Cart'

const Layout =() =>{
  return(
    <div className='bg-gray-100'>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
     <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* <Route path="/checkout" element={<Checkout />}></Route> */}
      </Route>
  ))
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
