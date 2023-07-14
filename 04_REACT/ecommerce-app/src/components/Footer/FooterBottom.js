import React from 'react'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-4'>
      <div className='flex gap-6 justify-center items-center text-white 
      font-bodyFont text-sm '>
        <p className='footerLink'>Conditions of Use</p>
        <p className='footerLink'>Privacy Notice </p>
        <p className='footerLink'>Your Ads Privacy Choices</p>
      </div>
      <div className='flex justify-center text-white tracking-wide font-bodyFont text-sm'>
        <p className='footerLink'>&copy; 1999-2023, Amazon.com, Snehal.com</p>
      </div>
    </div>
  )
}

export default FooterBottom
