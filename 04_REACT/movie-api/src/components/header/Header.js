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
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/100px-IMDB_Logo_2016.svg.png'
                alt='logo'>
                </img>
            </Link>
            <Link to={'/movies/popular'} style={{textDecoration: "none",fontSize: "1.3rem",cursor: "pointer",color: "white" }}>Popular</Link>
            <Link to={'/movies/top_rated'} style={{textDecoration: "none",fontSize: "1.3rem",cursor: "pointer",color: "white"}}>Top Rated</Link>
            <Link to={'/movies/upcoming'} style={{textDecoration: "none",fontSize: "1.3rem",cursor: "pointer",color: "white"}}>Upcoming</Link>
        </div>
      
    </div>
  )
}

export default Header
