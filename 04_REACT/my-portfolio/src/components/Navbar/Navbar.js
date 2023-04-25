import React, { useState } from 'react'
import './Navbar.css'

import myLogo from './myLogo.png';
import {Link} from "react-router-dom"

import {FaBars} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (

    <div className='header'>

      <Link to={'/'}>
        <img src={myLogo} alt='myLogo'/>
      </Link>

      <ul className='nav-menu'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/project'>Project</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <div className='hamburger'> 
      <FaBars onclick={'handleClick()'} size={20} style={{color:'#fff',position:'absolute',top:'2%',right:'5%'}}/>
      </div>

    </div>
  )
}

export default Navbar
