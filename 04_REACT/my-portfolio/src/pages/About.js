import React from 'react'

// components
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import HeroSection2 from '../components/HeroSection2/HeroSection2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="ABOUT ME" text="I A FRIENDLY FRONT_END DEVELOPER"/>
      <Footer/>
    </div>
  )
}

export default About
