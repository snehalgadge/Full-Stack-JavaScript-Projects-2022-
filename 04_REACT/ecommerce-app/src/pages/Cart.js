import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const products = useSelector((state) => state.amazonReducer.products)
  return (
    <div className='w-full bg-gray-100 p-4'>
        <div className='container mx-auto h-96  grid grid-cols-5 gap-8'>
            <div className='w-full h-auto bg-white px-4 col-span-4'>
                <div className='flex items-center justify-between border-b-[1px]
                border-b-gray-400 py-3'>
                    <h1 className='text-3xl font-semibold'>Shopping Cart</h1>
                    <h4 className='text-xl font-semibold'>Subtitle</h4>
                </div>
                {/* Products start here */}
                <div>
                    {
                        products.map((item)=>(
                            <div className='w-full border-b-[1px] border-b-gray-300 p-4 flex
                            items-center gap-6' >
                                <div>
                                <img 
                                src={item.image}
                                className='w-full h-44 object-contain' 
                                alt='ProductsImgs'/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full h-full bg-white col-span-1'></div>
        </div>
    </div>
  )
}

export default Cart