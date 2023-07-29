import  CheckCircleIcon  from '@mui/icons-material/CheckCircle';
import { ScrollRestoration} from 'react-router-dom' 
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, resetCart, decrementQuantity, incrementQuantity} 
from '../redux/amazonSlice'
import { emptyCart } from "../assets/index"

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.amazon.products)
    const [totalPrice, setTotalPrice] = useState("")

    useEffect(() =>{
        let Total = 0;
        products.map((item)=>{
            Total += item.price * item.quantity;
            return setTotalPrice(Total.toFixed(2)) 
        })
    },[products])
  return (
    <div className='w-full bg-gray-100 p-4'>
        {
            products.length > 0 ? (
            <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
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
                            items-center gap-6'>
                             <div className='w-full flex items-center gap-6'>
                                <div key={item.id}
                                className='w-1/5'>
                                <img 
                                src={item.image}
                                className='w-full h-44 object-contain' 
                                alt='ProductsImgs'/>
                                </div>
                                <div className='w-1/5'>
                                    <h2 className='font-semibold text-lg'>{item.title}</h2>
                                    <p className='text-sm'>{item.description.substring(0,100)}</p>
                                    <p className='text-base'>Unit Price
                                    <span className='font-semibold'>
                                        ${item.price}
                                    </span></p>
                                    <div className='bg-[#F0F2F2] flex justify-center items-center gap-1 w-24
                                    py-1 text-center drop-shadow-lg rounded-md'>
                                        <p>Qty:</p>
                                        <p onClick={()=>dispatch(decrementQuantity(item.id))} 
                                        className='cursor-pointer bg-gray-200 px-1 rounded-md
                                        hover:bg-gray-300'>
                                            -
                                        </p>
                                        <p>{item.quantity}</p>
                                        <p onClick={()=>dispatch(incrementQuantity(item.id))}
                                        className='cursor-pointer bg-gray-200 px-1 rounded-md
                                        hover:bg-gray-300'>
                                            +
                                        </p>
                                    </div>
                                    <button onClick={() => dispatch(deleteItem(item.id))} 
                                    className='bg-red-500 w-36 py-1 rounded-lg
                                    text-white mt-2 hover:bg-red-700 
                                    active:bg-red-900 duration-300'>
                                        Delete Item
                                    </button>
                                </div>
                                <div>
                                    <p className='text-lg font-bodyFont font-semibold'>
                                        ${item.price * item.quantity}
                                    </p>
                                </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='w-full h-auto py-2'>
                    <button onClick={() =>dispatch(resetCart())} className='bg-red-500 w-36 py-2 rounded-lg text-white mt-2
                    hover:bg-red-700 active:bg-red-900 duration-300'>Clear Cart</button>
                </div>
            </div>
            <div className='w-full h-52 bg-white col-span-1 flex flex-col 
            items-center p-4'>
                <div>
                    <p className='flex gap-2 items-start text-sm'>
                        <span>
                            <CheckCircleIcon className='bg-white text-green-500 rounded-full'/>
                        </span>{" "}
                    Your order qualifies for FREE Shipping Choose this option at checkout. See details....
                    </p>
                </div>
                <div>
                    <p className='font-semibold px-10 py-1 flex flex-col gap-2 items-cente justify-center'>
                        Total: <span className='text-lg font-bold'>${totalPrice}</span></p>
                </div>
                <button className='w-full font-medium text-base bg-gradient-to-tr 
              from-yellow-400 to yellow-500 border hover:from-yellow-300 hover:to-yellow-600
              active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md
              mt-3'>Proceed to Pay</button>
            </div>
        </div>
        ) : (
        <motion.div intial={{ y:70, opacity: 0 }}
         animate= {{ y:0, opacity: 1 }}
         transition={{ dealy: 0.5, duration: 0.5 }}
         className="w-full flex justify-center items-center gap-4 py-28">
            <ScrollRestoration />
            <div>
                <img className="w-full rounded-lg mx-auto"
                src={emptyCart} 
                alt="emptyCart"/>
            </div>
            <div className='w-96 p-4 bg-white flex flex-col items-center rounded-md'>
                <h1 className='font-bodyFont text-xl font-bold'>Your Cart feels lonely.</h1>
                <p className='text-sm text-center'>{" "}Give it purpose- fill it with 
                books, electornics, videos, etc. and make it happy.
                </p>
                <Link to='/'><button className='mt-6 text-lg bg-gradient-to-tr 
              from-yellow-400 to yellow-500 border hover:from-yellow-300 hover:to-yellow-600
              active:from-yellow-400 active:to-yellow-500 duration-200 py-2 px-8 
              rounded-md'>Continue Shopping</button></Link>
            </div>
        </motion.div>)
        }
    </div>
  )
}

export default Cart