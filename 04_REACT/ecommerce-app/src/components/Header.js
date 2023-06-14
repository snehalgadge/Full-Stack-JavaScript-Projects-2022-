import React from 'react'
import {NavLink , Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='py-3'>
     <div className='md:container md:mx-auto '>
      <div className='md:container md:mx-auto flex justify-evenly'>
        <div className=''>
          <p>Free Shipping Over $100 & Free Returns</p>
        </div>
        <div className=''>
          <p> Hotline:
            <a href='tel:+91 0342954234'> +91 0342954234</a>
          </p>
        </div>
      </div>
     </div>
    </header>
    </>
  )
}

export default Header
