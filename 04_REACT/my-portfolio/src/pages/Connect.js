import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import HeroSection2 from '../components/HeroSection2/HeroSection2'
import Form from '../components/Form/Form'


const Connect = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="Connect" text="Lets have a chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Connect
