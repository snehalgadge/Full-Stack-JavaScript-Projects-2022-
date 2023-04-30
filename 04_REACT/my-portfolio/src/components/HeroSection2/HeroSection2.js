import React, { Component } from 'react'


import  './HeroSection2.css'

class HeroSection2 extends Component {
  render(){
    return (
      <div className='hero-section'>
          <div className='heading'>
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default HeroSection2