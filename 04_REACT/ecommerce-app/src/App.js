import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { productsData } from './api/api'
import Sigin from './pages/Sigin'

const Layout =() =>{
  return(
    <div className='bg-gray-100'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={productsData}></Route>
      <Route path='/signin' element={<Sigin />}></Route>
      </Route> 
  ))
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
