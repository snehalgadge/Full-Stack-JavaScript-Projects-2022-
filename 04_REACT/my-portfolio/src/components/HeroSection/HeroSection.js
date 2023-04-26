import React from 'react'
import './HeroSection.css'

import heroImg from './heroImg.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='heroImg' src={heroImg} alt='heroImg' style={{}} />
      </div>
      <div className = "content"> 
      <p>Hello! I am Snehal.</p>
      <h1>FrontEnd Developer</h1>
      <div>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/connect" className='btn btn-light'>Connect</Link>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
