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

const Layout =() =>{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      </Route> 
  ))
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
