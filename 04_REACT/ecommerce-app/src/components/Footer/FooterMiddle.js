import React from 'react'
import { middleList } from '../../constants/headerData'
import {INDflag, logo} from "../../assets/index"
import FooterMiddleList from './FooterMiddleList'

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_blue text-white'>
        {/* <------------- Top Start here-- ----------> */}
        <div className='w-full border-b-[1px] border-gray-500 p-10' >
            <div className='max-w-5xl mx-auto text-gray-300'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 
                md:items-start'>
                    {
                        middleList.map((item) => {
                            return <FooterMiddleList 
                            key={item._id}
                            title={item.title}
                            listItem={item.listItem}
                            />
                        })
                    }
                </div>
            </div>
        </div>
        {/* <------------- Top End here --------------> */}

        {/* <------------- Bottom Start here ----------> */}
        <div className='w-full flex gap-6 items-center justify-center py-6 '>
            <div className='headerHover'>
                <img className='w-20 pt-3' src={logo} alt='logo'/>
            </div>
            <div className='flex gap-2'>
                <p className='footerBottom'>
                English
                </p>
                <div className='footerBottom'>
                <img className='w-6' src={INDflag} alt='flag'/>
                <p>India</p>
                </div>
            </div>
        </div>
        {/* <------------- Bottom End here -----------> */}

    </div>
  )
}

export default FooterMiddle