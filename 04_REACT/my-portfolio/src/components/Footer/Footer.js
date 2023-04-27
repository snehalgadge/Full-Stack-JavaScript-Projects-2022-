import React from 'react'

import './Footer.css'

import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    <div>
                        <p>202 Housing Society.</p>
                        <p>India</p>
                    </div>
                </div>    
                <div className='phone'>
                   <h4><FaPhone size={20} 
                   style={{color:'#fff',marginRight:'2rem'}}/>
                   11-000-29394</h4>
                </div>
                <div className='mail'>
                   <h4><FaMailBulk size={20} 
                   style={{color:'#fff',marginRight:'2rem'}}/>
                   snehalgadge205@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h1>About the company</h1>
                <p>This is Snehal. I enjoy doing coding and accepting challenges </p>
                <div className='social'>
                <FaInstagram size={40} 
                   style={{color:'#fff',marginRight:'2rem',cursor:'pointer'}}/>
                <FaLinkedin size={40} 
                   style={{color:'#fff',marginRight:'2rem',cursor:'pointer'}}/>
                <FaGithub size={40} 
                   style={{color:'#fff',marginRight:'2rem',cursor:'pointer'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer