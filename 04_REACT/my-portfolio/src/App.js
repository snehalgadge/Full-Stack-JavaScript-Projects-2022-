import React from 'react'
import "./index.css"
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Connect from './pages/Connect'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/project'element={<Project/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/connect'element={<Connect/>} />
      </Routes>
    </>
  )
}

export default App

