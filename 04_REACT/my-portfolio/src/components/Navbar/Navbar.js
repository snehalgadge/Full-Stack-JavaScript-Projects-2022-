import React, { useState } from 'react'
import './Navbar.css'

import myLogo from './myLogo.png';
import {Link} from "react-router-dom"

import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[color, setColor] = useState(false);
  const changeColor = () =>{

    if(window.scrollY>=100){
      setColor(true);
    }
    else{
      setColor(false);
    }

  };
  window.addEventListener("scroll",changeColor);

  return (

    <div className={color ? "header header-bg" : "header"}>

      <Link to={'/'}>
        <img src={myLogo} alt='myLogo'/>
      </Link>

      <ul className= {click ? "nav-menu active" : "nav-menu"}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/project'>Project</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <div className='hamburger' 
      onClick={handleClick}> 
      {click ? 
      <FaTimes size={20} style={{color:'#fff',position:'absolute',top:'2%',right:'5%'}}/>
      :
      <FaBars size={20} style={{color:'#fff',position:'absolute',top:'2%',right:'5%'}}/>
      }
      </div>

    </div>
  )
}

export default Navbar
