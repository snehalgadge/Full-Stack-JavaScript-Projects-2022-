import React from 'react'

const FooterMiddleList = ({title,listItem}) => {
  return (  
    <div>
      <div>
        <h3 className=' text-white text-base font-semibold mb-3'>
            {title}
        </h3>
        <ul className='flex flex-col gap-2 font-bodyFont'>
           {
            listItem.map((item) => item.listData.map((data,i) =>{
              return <li 
              key={i} 
              className='footerLink'>
              {data}
              </li>
            }))
           }
        </ul>
      </div>
    </div>
  )
}

export default FooterMiddleList


