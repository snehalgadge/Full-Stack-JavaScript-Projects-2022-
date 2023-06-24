import React from 'react'
import {NavLink , Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <>
    <header className='py-3 bg-[#131921]'>
     <div className='md:container md:mx-auto '>
      <div className='md:container md:mx-auto mb-0 flex justify-evenly text-[white]'>
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
    <header className='py-3 bg-[#3b4149] '>
      <div className='container-xl text-[white]'>
        <div className='flex justify-evenly'>
            <Link className='text-3xl'>DigiTic.</Link>
            <div className=''>
              <input type='text-[febd69]' 
              className='placeholder:translate-x-[-9rem] px-44 py-2 rounded-md drop-shadow-xl border hover:border hover:border-stone-500 hover:drop-shadow-[0_5px_5px_rgba(184,160,171,0.38)] hover: cursor-pointer'
              placeholder='Search Product Here' 
              aria-label='Search Product Here'/>
              <span className='absolute top-[60.25px] right-[46rem] py-[12.5px] px-3 rounded-r-md bg-orange-600 hover:drop-shadow-[0_5px_5px_rgba(245,156,78,0.8)] hover: cursor-pointer'>
                <BsSearch className='fs-6'/>
              </span>
            </div>
              <div>
                <Link className='flex justify-between items-center'>
                <img 
                className='h-[30px] w-[30px]'
                src='images/compare.svg'
                alt='compare'></img>
                <p className='text-white ml-1'>Compare <br /> Products</p>
                </Link>
              </div>
              <div>
                <Link className='flex justify-between items-center'>
                <img 
                className='h-[30px] w-[30px]'
                src='images/wishlist.svg'
                alt='wishlist'></img>
                <p className='text-white ml-1'>Favourite <br /> Wishlist</p>
                </Link>
              </div>
              <div>
                <Link className='flex justify-between items-center'>
                <img 
                className='h-[30px] w-[30px]'
                src='images/user.svg'
                alt='user'></img>
                <p className='text-white  ml-1'>Log in <br />My Account</p>
                </Link>
              </div>
              <div>
                <Link className='flex justify-between items-center'>
                <img 
                className='h-[30px] w-[30px]'
                src='images/cart.svg'
                alt='cart'></img>
                <div>
                  <p className='bg-white text-gray-900 ml-1 text-center rounded-sm'>0</p>
                  <p className='text-white ml-1'>$0.00</p>
                </div>
                </Link>
              </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
