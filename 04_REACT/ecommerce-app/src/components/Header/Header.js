import React from 'react'
import { useState, useRef, useEffect} from 'react';
import { userSignout } from '../../redux/amazonSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { allItems } from '../../constants/headerData';
import {logo} from "../../assets/index"
import HeaderBottom from './HeaderBottom';


const Header = () => {
  const ref = useRef();
  const auth = getAuth();
  const dispatch = useDispatch();
  const[showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products)
  const userInfo = useSelector((state) => state.amazon.userInfo)
  
  useEffect(() =>{
    document.body.addEventListener("click",(e) =>{
      if(e.target.contains(ref.current)){
        setShowAll(false)
      }
    })
  },[ref, setShowAll])

  const handleLogout = () =>{
    signOut(auth)
    .then(() => {
      dispatch(userSignout())
    })
    .catch((error) => {
      
    });
    
  }
  return (
    <div className='w-full font-bodyFont sticky top-0 z-50'>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4' >
            {/* <------------Image start here -----------> */}
            <Link to="/">
            <div className='headerHover'>
            <img className='w-24 mt-2' src={logo} alt='logo'/>
            </div>
            </Link>
            {/* <------------Image End here -----------> */}

            {/* <------------Deliver Start here ----------->  */}
            <div className='headerHover hidden mdl:inline-flex'>
                <LocationOnOutlinedIcon/>
                <p className='text-sm text-lightText font-light flex flex-col'>Deliver to 
                <span className='font-semibold -mt-1 text-whiteText'>Delhi</span></p>
            </div>
            {/* <------------Deliver End here -----------> */}

            {/* <------------ Searchbar Start here ----------->  */}
            <div className='h-10 rounded-md hidden lgl:flex flex-grow relative '>
                <span onClick={()=>setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 
                cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex 
                items-center justify-center rounded-tl-md rounded-bl-md'>
                All <span></span>
                <ArrowDropDownOutlinedIcon />
                </span>
                {
                  showAll && (
                    <div ref={ref} >
                      <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll 
                      overflow-x-hidden bg-white border-[1px] border-amazon_blue
                      text-black p-2 flex-col gap-1 z-50'>
                        {
                          allItems.map((item) => {
                            return <li className='text-sm tracking-wide font-bodyFont
                            border-b-[1px] border-b-transparent 
                            hover:border-b-amazon_blue text-black cursor-pointer 
                            duration-200' 
                            key={ item._id }>{ item.title }</li>
                          })
                        }
                      </ul>
                    </div>
                  )
                }
                <input
                  className="h-full text-base text-amazon_blue flex-grow outline-none 
                  border-none py-2"
                  type='text'
                />
                <span className='w-12 h-full flex items-center justify-center 
                bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue 
                cursor-pointer rounded-tr-md rounded-br-md'>
                  <SearchIcon />
                </span>
            </div>
            {/* <------------SeacrhBar End here -----------> */}

            {/* <------------Signin Start here ----------->  */}
           <Link to="/signin">
           <div className='flex flex-col items-start justify-center headerHover'>
            {
              userInfo ? 
              (
              <p className='text-xs mdl:text-sm text-white text-lightText font-light'>
                {userInfo.userName}
              </p>
              ) : 
              (
              <p className='text-sm mdl:text-xs text-white text-lightText font-light'>
                Hello, sign in
              </p>
              )
            }

              <p className='text-xs font-semibold -mt-1 text-white hidden mdl:inline-flex'>
              Accounts & Lists 
              <span><ArrowDropDownOutlinedIcon /></span>
              </p>
            </div>
           </Link>
            {/* <------------Signin End here ----------->  */}

            {/* <------------Order Start here ----------->  */}
            <div className=' hidden lgl:flex flex-col items-start justify-center headerHover'>
              <p className='text-xs text-lightText font-light'>Return</p>
              <p className='text-xs font-semibold -mt-1 text-white'>&Orders</p>
            </div>
            {/* <------------Order End here ----------->  */}

            {/* <------------Cart Start here ----------->  */}
            <Link to="/cart">
            <div className='flex items-start justify-center headerHover relative'>
              <ShoppingCartOutlinedIcon />
              <p className='text-xs font-semibold mt-3 text-white'>
              Cart<span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 
              bg-[#f3a847] text-amazon_blue rounded-full flex justify-center 
              items-center'>
                {products.length > 0?products.length:0}
              </span>
              </p>
            </div>
            </Link> 
            {
              userInfo && (
                <div onClick={handleLogout} className ="flex flex-col justify-center items-center headerHover relative">
                  <LogoutIcon />
                  <p className="hidden mdl:inline-flex text-xs font-semibold text-white">Log out</p>
                </div>
              )
            }
            {/* <------------Cart End here ----------->  */} 
        </div>

        {/* <-- Header Bottom -->*/}
        <HeaderBottom/>

    </div>
  )
}

export default Header