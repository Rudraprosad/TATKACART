import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='relative'>
         <img src="/banner_mobile.jpg" alt="" className='w-full hidden md:block h-80'/>
                 <img src="/banner2.jpg" alt="" className='w-full md:hidden h-70'/>
    
    <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
 <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
            Freshness You Can Trust, Savings You Will Love!
        </h1>
        <div className=' items-center mt-6 font-medium absolute top-1/2 translate-y-19'>
         <Link to={'/products'} className='group  items-center gap-2 px-7 md:px-9 py-3 bg-black hover:bg-primary-dull transitions rounded text-white cursor-pointer h-10 w-25'>
        Shop Now
        </Link>
    </div>
    </div>
    
    
    </div>
  )
}

export default Banner