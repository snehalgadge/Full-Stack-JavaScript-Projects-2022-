import React from 'react'
import {NavLink , Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='py-5'>
     <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <p>Free Shipping Over $100 & Free Returns</p>
        </div>
        <div className='col-6'>
          <p> Hotline:
            <a href='tel:+91 0342954234'>+91 0342954234</a>
          </p>
        </div>
      </div>
     </div>
    </header>
    </>
  )
}

export default Header
