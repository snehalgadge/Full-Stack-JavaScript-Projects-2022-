import { Link } from 'react-router-dom'
import './AboutContent.css'
import AboutContentImg from './AboutContentImg.jpg'
import AboutContentImg2 from './AboutContentImg2.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me</h1>
            <p>This is snehal</p>
            <Link to='/connect'>
                <button className='btn'>Connect</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={AboutContentImg2} className='img' alt='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={AboutContentImg} className='img' alt='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent