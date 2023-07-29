import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react'
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';


const Products = () => {
  const disptach = useDispatch();
  const data = useLoaderData();
  const productsData = data.data;

    // useEffect(() => {
    //     async function ProductsData(){
    //         let data = await axios.get(
    //         "https://fakestoreapi.com/products"
    //         );
    //     }
    // })

  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 
    xl:grid-cols-4 gap-6 xl:gap-10 place-items-center px-4'>
      {
        productsData.map((item) =>{
         return <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 
         py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 
         relative flex flex-col gap-4'>
          <div className='w-full h-auto flex items-center justify-center relative group'>
          <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
            {item.category}
          </span>
          <img 
          className='w-52 h-64 object-contain' 
          src={item.image} 
          alt='ProductImg'
          />
          <ul className='w-full h-36 bg-gray-100 absolute -bottom-[168px] 
          group-hover:bottom-2 duration-700 flex flex-col items-end justify-center gap-2
          px-2 border-1 border-r'>
            <li className='productli'>
              Compare{' '}
            <span>
              <ApiIcon />
            </span>
          </li>
          <li className='productli'>
              Compare{' '}
            <span>
              <ApiIcon />
            </span>
          </li>
          <li className='productli'>
              Add to Cart{' '}
            <span>
              <ShoppingCartIcon />
            </span>
          </li>
          <li className='productli'>
              View Details{' '}
            <span>
              <ArrowCircleRightIcon />
            </span>
          </li>
          <li className='productli'>
              Add to Wish List{' '}
            <span>
              <FavoriteIcon />
            </span>
          </li>
          </ul>
          </div>
          <div className='px-4 py-4 z-10 bg-white'>
          <div className='flex items-center justify-between'>
            <h2 className='tracking-wide text-lg text-amazon_blue
            font-medium'>
            {item.title.substring(0,10)}...
            </h2>
            <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
          </div>
          <div>
            <p className='text-sm '>{item.description.substring(0,100)}...</p>
            <div className='text-yellow-500'>
              {/* {item.rating} */}
             <StarBorderIcon />
             <StarBorderIcon />
             <StarBorderIcon />
             <StarBorderIcon />
             <StarBorderIcon />
            </div>
            <div>
              <button onClick={()=>disptach(addToCart({
                id:item.id,
                title:item.title,
                description:item.description,
                price:item.price,
                category:item.category,
                image:item.image,
                quantity:1,
              }))} 
              className='w-full font-medium text-base bg-gradient-to-tr 
              from-yellow-400 to yellow-500 border hover:from-yellow-300 hover:to-yellow-600
              active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md
              mt-3'>
                 Add to Cart
              </button>
            </div>
          </div> 
          </div>
          </div>
        })
      }
    </div>
  )
}

export default Products