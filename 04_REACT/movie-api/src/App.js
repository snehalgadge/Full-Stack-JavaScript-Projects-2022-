import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header  from './components/header/Header'
import Home from './pages/Home/Home'
import MovieList from './components/movieList/movieList';
import MovieDetails from './pages/moveDetails/MovieDetails';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<MovieDetails/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

