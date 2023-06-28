import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   <footer className='bg-[#232f3e]   pt-5 pb-6 '>
    <div className='flex justify-around items-center '>
        <div className='flex justify-evenly font-bold items-center w-[20%] '>
          <img src='images/newsletter.png'  alt='newsletter'/>
          <h2 className='mb-0 text-white text-xl font-bold'>Sign Up for Newsletter</h2>
        </div>
      <div>
              <input type='text-[febd69]' 
              className='placeholder:translate-x-[-9rem] px-44 py-2 rounded-md drop-shadow-xl border hover:border hover:border-stone-500 hover:drop-shadow-[0_5px_5px_rgba(184,160,171,0.38)] hover: cursor-pointer'
              placeholder='Your Email Address' 
              aria-label='Your Email Address'/>
              <span className='absolute top-[13.25rem] left-[79rem] py-[2.5px] px-2 bg-[#232f3e]  rounded-md text-sm  text-white uppercase hover: cursor-pointer'>
                Subscribe
              </span>
       </div>
    </div>
   </footer>
   <footer className='bg-[#232f3e] py-10 '>
     <div className='flex justify-evenly items-center text-white'>
      <div className=' '>
        <h4 className='mb-4 text-xl font-bold'>Contact Us</h4>
        <div>
          <address className='text-sm'>H.NO. 111 , Saket<br/>
            New Delhi-11102
          </address>
          <a href='tel: +918382830'
          className='text-sm mt-3 block'>
          +91 893894893
          </a>
          <a href='mailto:snehalgadge205@gmail.com' 
          className='text-sm mt-3'>
          snehalgadge205@gmail.com
          </a>
          <div className='mt-3'>
            <a href='https://github.com/snehalgadge' className='mr-5'> <AiFillGithub size={30}/></a>
            <a href='https://www.linkedin.com/in/snehal-gadge-28a966201/' className='mr-5'><FaLinkedin size={30}/></a>
            <a href='https://leetcode.com/snehalGadge/' className='mr-5'> <SiLeetcode size={30}/></a>
            <a href='https://auth.geeksforgeeks.org/user/snehalgadge/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'><SiGeeksforgeeks size={35}/></a>
          </div>
        </div>
      </div>
      <div>
        <h4 className='mb-4 text-xl font-bold'>Information</h4>
        <div className='flex flex-col justify-between '>
          <Link className='mb-2'>Privacy Policy</Link>
          <Link className='mb-2'>Refund Policy</Link>
          <Link className='mb-2'>Shipping Policy</Link>
          <Link className='mb-2'>Terms of Service</Link>
          <Link className='mb-2'>Blog</Link>
        </div>
      </div>
      <div>
        <h4 className='mb-4 text-xl font-bold'>Account</h4>
        <div className='flex flex-col justify-between '>
          <Link className='mb-2'>Search</Link>
          <Link className='mb-2'>About</Link>
          <Link className='mb-2'>Faq</Link>
          <Link className='mb-2'>Contact</Link>
          <Link className='mb-2'>Size Chart</Link>
        </div>
      </div>
      <div>
        <h4 className='mb-4 text-xl font-bold'>Quick Links</h4>
        <div className='flex flex-col justify-between '>
          <Link className='mb-2'>Accessories</Link>
          <Link className='mb-2'>HeadPhones</Link>
          <Link className='mb-2'>Tablet</Link>
          <Link className='mb-2'>Smart Watches</Link>
          <Link className='mb-2'>Laptop</Link>
        </div>
      </div>
      <div>
        <h4 className='text-xl font-bold'>Our App</h4>
        <div></div>
      </div>
     </div>
   </footer>
   <footer className='container-2xl bg-[#232f3e] py-4 '>
    <div>
      <div>
        <p className='text-center text-white '> 
        &copy; {new Date().getFullYear()}; Powered by Snehal;
        </p>
      </div>
    </div>
   </footer>
    </>
  )
}

export default Footer