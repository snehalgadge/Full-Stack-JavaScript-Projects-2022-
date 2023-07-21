import React from 'react'
import Banner from '../components/Home/Banner'
import Products from '../components/Home/Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='w-full -mt-10 xl:-mt-36 py-10'>
         <Products />
      </div>
    </div>
  )
}

export default Home
