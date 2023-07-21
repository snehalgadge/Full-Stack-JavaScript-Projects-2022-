import React from 'react'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom p-4'>
      <div className='flex gap-3 mdl:gap-6 justify-center items-center text-white 
      font-bodyFont'>
        <p className='footerLink text-[10px] mdl:text-sm'>Conditions of Use</p>
        <p className='footerLink text-[10px] mdl:text-sm'>Privacy Notice </p>
        <p className='footerLink text-[10px] mdl:text-sm'>Your Ads Privacy Choices</p>
      </div>
      <div className='flex justify-center text-white tracking-wide font-bodyFont  
      mdl:text-sm'>
        <p className='footerLink text-[10px] mdl:text-sm'>&copy; 1999-2023, Amazon.com, Snehal.com</p>
      </div>
    </div>
  )
}

export default FooterBottom
