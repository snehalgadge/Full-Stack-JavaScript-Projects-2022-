import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header  from './components/header/Header'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<h1>Hello World</h1>}></Route>
          <Route path='movie/:id' element={<h1>movie details page</h1>}></Route>
          <Route path='movies/:type' element={<h1>Movie list page</h1>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

