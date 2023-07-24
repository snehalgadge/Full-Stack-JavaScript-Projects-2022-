import React, {useState} from 'react'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from 'react-router-dom';
import {logo} from "../assets/index"

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Error Message
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  // Handle function
  const handleName = (e) =>{
    setName(e.target.value)
    setErrName("")
  }
   const handleEmail = (e) =>{
    setEmail(e.target.value)
    setErrEmail("")
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
    setErrPassword("")
  }
  const handleCPassword = (e) =>{
    setCPassword(e.target.value)
    setErrCPassword("")
  }

  // Email validation
  const emailValidation = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  // Continue button functionality start here
  const handleRegistration = (e) =>{
    e.preventDefault()
    if(!name){
      setErrName("Enter your name");
    }
    if(!email){
      setErrEmail("Enter your email")
    }else if(!emailValidation(email)){
      setErrEmail("Enter a valid email")
    }
    if(!password){
      setErrPassword("Password can't be empty")
    }else if(password.length < 6){
        setErrPassword("Password must be atleat 6 character"); 
    }
    if(!cPassword){
      setErrCPassword("Confirm your password")

    }else if(cPassword !== password){
      setErrCPassword("Password not matched")
    }

    if(name && email && password && cPassword && password.length >= 6 && 
      cPassword === password && emailValidation(email)){
        console.log(name,email, password,cPassword)
        setName("");
        setEmail("");
        setPassword("");
        setCPassword("");
    }
  }

  return (
    <div className='w-full '>
        <div className='w-full bg-gray-100 p-10 '>
            <form className='w-[350px] mx-auto flex flex-col items-center'>
            <img 
            src={logo}
            className='w-32 invert pb-5' 
            alt="darkLogo"
            />
            <div className='w-full border border-zinc-200 p-6'>
              <h1 className='font-bodyFont text-3xl font-medium mb-4'>Create Account</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 '>
                  <p className='text-sm font-medium'>Your name</p>
                  <input
                  onChange={handleName} 
                  value={name}
                  type="text"
                  className='w-full py-1 border border-zinc-400 px-2 text-base 
                  rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-200'
                  />
                  {/*Valitation*/}
                  {
                    errName && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide
                      flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                      !</span>{errName}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-sm font-medium'>Email or mobile phone number</p>
                  <input
                  onChange={handleEmail} 
                  value={email}
                  type="email"
                  className='w-full lowercase  py-1 border border-zinc-400 px-2 text-base 
                  rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-200'
                  />
                  {/* Validation */}
                  {
                    errEmail && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide
                      flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                      !</span>{errEmail}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-sm font-medium'>Password</p>
                  <input 
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className='w-full  py-1 border border-zinc-400 px-2 text-base 
                  rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-200'
                  />
                  {/* Validation */}
                  {
                    errPassword && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide
                      flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                      !</span>{errPassword}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2 '>
                  <p className='text-sm font-medium'>Re-enter Password</p>
                  <input 
                  onChange={handleCPassword}
                  value={cPassword}
                  type="password"
                  className='w-full  py-1 border border-zinc-400 px-2 text-base 
                  rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100'
                  />
                   {/* Validation */}
                   {
                    errCPassword && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide
                      flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                      !</span>{errCPassword}</p>
                    )
                  }
                  <p className='text-sm text-gray-600'>
                    Password must be atleast  6 charcters
                  </p>
                </div>
                <button onClick={handleRegistration} className="w-full py-1.5 text-sm 
                font-medium rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] 
                hover:bg-gradient-to-border border-zinc-400 active:border-yellow-800 
                active:shadow-amazonInput duration-100">
                  Continue
                </button>
              </div>
              <p className='text-xs text-black leading-4 mt-4'>
              By Continuing, you agree to Amazon's {" "}
              <span className='text-blue-600 cursor-pointer hover:underline'>
              Conditions of Use{" "}
              </span> and <span className='text-blue-600 cursor-pointer hover:underline'>
                Privacy Notice
              </span>
              </p>
              <p className='text-xs text-black leading-4 mt-4'>
              Already have an account?<span className='text-blue-600 cursor-pointer 
              hover:underline'>
              <Link to="/signin">Sign in</Link><ArrowRightIcon /></span>
              </p>
              <p className='text-xs text-black '>Buying for work?
              <span className='text-blue-600 cursor-pointer hover:underline'>
                Create a free business account <ArrowRightIcon />
              </span>
              </p>
            </div>           
            </form>         
        </div>

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

export default Registration