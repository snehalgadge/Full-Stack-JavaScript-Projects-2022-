import React from 'react'
import { useState, useRef, useEffect  } from 'react'
import {motion} from 'framer-motion';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from './SideNavContent';


const HeaderBottom = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false)
    useEffect(() =>{
        document.body.addEventListener("click",(e) =>{
          if(e.target.contains(ref.current)){
            setSidebar(false)
          }
        })
      },[ref, setSidebar])
 
  return (
    <div  className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
        {/* <---------------- ListItems Start here ------------->*/}
        <ul className='flex items-center gap-2 text-sm tracking-wide'>
            <li onClick={() => setSidebar(true)} className='headerHover flex items-center 
            gap-1'> 
            <MenuIcon /> 
            All
            </li>
            <li className='headerHover'>Today's Deals</li>
            <li className='headerHover'>Customer Service</li>
            <li className='headerHover'>Gift Cards</li>
            <li className='headerHover'>Registry</li>
            <li className='headerHover'>Sell</li>
        </ul>
        {/* <---------------- ListItems End here ------------->*/}

        {/* <---------------- SideNav Start here ------------->*/}
        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 
                bg-amazon_blue bg-opacity-50 z-10'>
                    <div className='w-full h-full relative'> 
                    <motion.div ref={ref} 
                    initial={{x:-500, opacity:0}}
                    animate={{x:0, opacity:1}} 
                    transition={{duration:.2}} 
                    className='w-[350px] h-full bg-white border border-black'>
                        <div className='w-full bg-amazon_light text-white py-2 px-0
                        flex items-center gap-4'>
                            <AccountCircleIcon />
                            <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                            Hello, Sign in
                            </h3>
                        </div>
                        <SideNavContent 
                        title='Digittal Content & Devices' 
                        one='Amazon Music'
                        two='Kindle E-readers & Books'
                        three='Amazon & AppStore'
                        />
                        <SideNavContent
                        title='Shop By Department' 
                        one='Gift Electronics'
                        two='Computers'
                        three='Smart Home'
                        />
                        <SideNavContent
                        title='Programs & Features' 
                        one='Gift Cards'
                        two='Amazon Live'
                        three='International Shopping'
                        />
                        <SideNavContent
                        title='Help & Settings' 
                        one='Your Account'
                        two='Customer Service'
                        three='Contact us'
                        />
                    <span onClick={() => setSidebar(false)} className='cursor-pointer absolute top-0 
                    left-[360px] w-10 h-10 text-black flex items-center justify-center
                     border bg-gray-200 hover:bg-red-500 hover:text-white duration-300'>
                      <CloseIcon />
                    </span>
                    </motion.div>
                </div>
            </div>
            )
        }
        {/* <---------------- SideNav End here ------------->*/}
    </div>
  )
}

export default HeaderBottom
