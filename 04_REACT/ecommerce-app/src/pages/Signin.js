import React from 'react'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from 'react-router-dom';
import {logo} from "../assets/index"

const Signin = () => {
  return (
    <div className='w-full '>
      {/* Form starts here */}
      <div className='w-full bg-gray-100 p-10'>
        <form className='w-[350px] mx-auto flex flex-col items-center'>
            <img 
            src={logo}
            className='w-32 invert pb-5' 
            alt="darkLogo"
            />
            <div className='w-full border border-zinc-200 p-6'>
              <h1 className='font-bodyFont text-3xl font-medium mb-4'>Sign in</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 '>
                  <p className='text-sm font-medium'>Email or mobile phone number</p>
                  <input 
                  type="email"
                  className='w-full lowercase  py-1 border border-zinc-400 px-2 text-base 
                  rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-200'
                  />
                </div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-sm font-medium'>Password</p>
                  <input 
                  type="password"
                  className='w-full lowercase  py-1 border border-zinc-400 px-2 text-base 
                  rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100'
                  />
                  <p className='text-sm text-gray-600'>Password must be atleast  6 charcters</p>
                </div>
                <button className="w-full py-1.5 text-sm 
                font-medium rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] 
                hover:bg-gradient-to-border border-zinc-400 active:border-yellow-800 
                active:shadow-amazonInput duration-100">
                  Continue
                </button>
              </div>
              <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to 
              Amazon's <span className='text-blue-600'>Conditions of Use{" "}</span>and
              <span className='text-blue-600'>
                Privacy Notice
              </span>
              </p>
              <p className='text-sm text-gray-600 mt-4 cursor-pointer'>
                <ArrowRightIcon />
                <span className='text-blue-600 hover:text-orange-700
                hover:underline'>
                  Need help?
                </span>
              </p>
            </div>
            <p className="w-full text-sm text-gray-600 mt-4 flex items-center">
                <span className='w-1/3  h-[1px] bg-zinc-400 inline-flex'></span>
                <span className='w-1/3 text-center'>New to Amazon ?</span>
                <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex '></span>
            </p>
            <Link className="w-full mt-4 flex items-center " to="/registration">
            <buttton className=" text-sm w-full py-1.5 
            font-medium rounded-sm bg-gradient from-slate-200 to-slate-100 
            hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 
            active:shadow-amazonInput text-center cursor-pointer">
              Create your Amazon account
            </buttton>
            </Link> 
        </form>
      </div>
      {/* From end here */}

      {/* Footer of form starts here */}
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 
      flex flex-col gap-4 justify-center items-center py-10'>
        <div className='flex items-center gap-4'>
          <p className='text-xs text-blue-600 hover:text-orange-700
          hover:underline cursor-pointer'>
            Conditions of Use
          </p>
          <p className='text-xs text-blue-600 hover:text-orange-700
          hover:underline cursor-pointer'>
            Privacy Notice
          </p>
          <p className='text-xs text-blue-600 hover:text-orange-700
          hover:underline cursor-pointer'>
            Privacy Policies
          </p>
        </div>
        <p className='text-sm text-gray-600'>
          &copy; 1999-2023, Amazon.com, Snehal.com
        </p>
      </div>
      {/* footer of form end here */}
    </div>
  )
}

export default Signin
