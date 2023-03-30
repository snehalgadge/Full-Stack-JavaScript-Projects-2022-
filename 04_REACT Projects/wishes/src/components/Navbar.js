import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className='navBar'>
        <h1>{props.title}</h1>
        <ul>
          <li>{props.list1}</li>
          <li>About Us</li>
          <li>Connect</li>
          <li>Projects</li>
          <li>Support</li>
        </ul>
        <div className='input-box'>
          <input type={Text} placeholder='Search'></input>
          <button>Download</button>
        </div>
      </div>
    </>
  )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    list1: PropTypes.string.isRequired
}

export default Navbar
