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
                  <p className='bg-white text-gray-900 ml-1 text-center rounded-lg'>0</p>
                  <p className='text-white ml-1'>&#8377;0.00</p>
                </div>
                </Link>
              </div>
        </div>
      </div>
    </header>
    <header className='py-3 bg-[#232f3e] flex justify-evenly text-white'>
      <div className='flex justify-evenly  w-[30%] text-white '>
      <div className='ml-20'><img src='images/menu.svg' alt='menu' className='h-[30px] w-[30px]'/></div>
      <div className='dropdown flex w-[65%] justify-between relative inline-block text-left '>
        <button 
         id="dropdownDefaultButton" 
         data-dropdown-toggle="dropdown" 
         class="text-white bg-[#232f3e] uppercase hover:bg-[#232f3e] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " 
         type="button">Shop Categories 
        </button>
        <svg class="w-4 h-4 mr-5 mt-3" 
          aria-hidden="true" fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" 
          stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
       <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
</div>
<div className='h-[100%]  bg-white ring-1 ring-gray-100 shadow-2xl'></div>
      </div>
        <div className='flex justify-start items-center w-[70%]'>
          <NavLink to="/"
          className='px-4 text-[14px] leading-[14px] tracking-[0.3] font-[400] uppercase hover:text-gray-300'>
          Home</NavLink>
          <NavLink to="/"
          className='px-4 text-[14px] leading-[14px] tracking-[0.3] font-[400] uppercase hover:text-gray-300'>
          Our Store</NavLink>
          <NavLink to="/"
          className='px-4 text-[14px] leading-[14px] tracking-[0.3] font-[400] uppercase hover:text-gray-300'>
          Blog</NavLink>
          <NavLink to="/contact"
          className='px-4 text-[14px] leading-[14px] tracking-[0.3] font-[400] uppercase hover:text-gray-300'>
          Contact</NavLink>
        </div>
    </header>
    </>
  )
}

export default Header
