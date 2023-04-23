import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft' style={{ width:"50%",display: "flex" , justifyContent:"space-evenly",alignItems:"center"}}>
            <Link to={'/'}>
                <img 
                className='header-icon' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/90px-IMDB_Logo_2016.svg.png'
                alt='logo'>
                </img>
            </Link>
            <Link to={'/movies/popular'} style={{textDecoration: "none",fontSize: "1.3rem",cursor: "pointer",color: "red", fontWeight:"bold" }}>Popular</Link>
            <Link to={'/movies/top_rated'} style={{textDecoration: "none",fontSize: "1.3rem",cursor: "pointer",color: "red", fontWeight:"bold"}}>Top Rated</Link>
            <Link to={'/movies/upcoming'} style={{textDecoration: "none",fontSize: "1.3rem",cursor: "pointer",color: "red", fontWeight:"bold"}}>Upcoming</Link>
        </div>
      
    </div>
  )
}

export default Header
