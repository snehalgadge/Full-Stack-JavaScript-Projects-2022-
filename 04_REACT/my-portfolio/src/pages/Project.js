import React from 'react'

// components
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import HeroSection2 from '../components/HeroSection2/HeroSection2'
import WorkCards from '../components/WorkCards/WorkCards'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading='PROJECTS.' text='Some of my most recent works'/>
      <WorkCards/>
      <Footer/>
    </div>
  )
}

export default Project
