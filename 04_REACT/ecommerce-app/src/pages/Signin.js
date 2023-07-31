import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from 'react-loader-spinner'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from 'react-router-dom';
import {logo} from "../assets/index"
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/amazonSlice';

const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error handling state
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
 
  // firebase Error
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");

  // loading state start
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
    setErrPassword("")
  }

  // Email Validation
  const emailValidation = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    if(!email){
      setErrEmail("Enter your Email")
    }else if(!emailValidation(email)){
      setErrEmail("Invaild email");
    }
    if(!password){
      setErrPassword("Enter your Password")
    }
    if(email && password && emailValidation(email)){
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(setUserInfo({
          _id:user.uid,
          userName:user.displayName,
          email:user.email,
          image:user.photoURL,
        }))
        // ...
        setLoading(false)
        setSuccessMsg("Logged in Successfull! Welcome you back!")
        setTimeout(()=>{
          navigate("/")
        },1500)
      })
      .catch((error) => {
       setLoading(false);
       const errorCode = error.code;
       if(errorCode.include("auth/invalid-email")){
        setUserEmailErr("Invalid Email");
       }
       if(errorCode.include("auth/wrong-password")){
        setUserPassErr("Wrong password! try again");
       }
       console.log("Something is up, Try with correct Credential!")
      });
        setEmail("");
        setPassword("");
    }
  }
  return (
    <div className='w-full '>
      {/* Form starts here */}
      <div className='w-full bg-gray-100 p-10'>
      {
        successMsg ? <div>
        <p className="text-base font-bodyFont font-semibold text-green-500 border-[1px]
        border-green-500 px-2 text-center">
          {successMsg}
        </p>
      </div> : <form className='w-[350px] mx-auto flex flex-col items-center'>
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
              onChange={handleEmail}
              value={email}
              type="email"
              className='w-full lowercase  py-1 border border-zinc-400 px-2 text-base 
              rounded-sm outline-none focus-within:border-[#e77600] 
              focus-within:shadow-amazonInput duration-200'
              />
              {
                errEmail && ( 
                <p className='text-red-600 text-xs font-semibold tracking-wide
                flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                !</span>{errEmail}</p>
                )
              }
              {
                userEmailErr && ( 
                <p className='text-red-600 text-xs font-semibold tracking-wide
                flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                !</span>{userEmailErr}</p>
                )
              }
            </div>
            <div className='flex flex-col gap-2 '>
              <p className='text-sm font-medium'>Password</p>
              <input 
              onChange={handlePassword}
              value={password}
              type="password"
              className='w-full lowercase  py-1 border border-zinc-400 px-2 text-base 
              rounded-sm outline-none focus-within:border-[#e77600] 
              focus-within:shadow-amazonInput duration-100'
              />
              {
                errPassword && ( 
                <p className='text-red-600 text-xs font-semibold tracking-wide
                flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                !</span>{errPassword}</p>
                )
              }
              {
                userPassErr && ( 
                <p className='text-red-600 text-xs font-semibold tracking-wide
                flex items-center gap-2 -mt-1.5'><span className="italic font-bold">
                !</span>{userPassErr}</p>
                )
              }
              <p className='text-sm text-gray-600'>Password must be atleast  6 charcters</p>
            </div>
            <button 
            onClick={handleLogin}
            className="w-full py-1.5 text-sm 
            font-medium rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] 
            hover:bg-gradient-to-border border-zinc-400 active:border-yellow-800 
            active:shadow-amazonInput duration-100">
              Continue
            </button>
            {
              loading && (
                <div className='flex justify-center'>
                  <RotatingLines
                    strokeColor="#febd69"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                  />
                </div>
              )
            }
          </div>
          <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to 
          Amazon's <span className='text-blue-600 hover:underline'>Conditions of Use{" "}</span>and
          <span className='text-blue-600 hover:underline'>
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
      }
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
