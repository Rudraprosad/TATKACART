import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'


const Catagories = () => {
    const navigate = useAppContext()
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Ctagories</p>
        <div className='grid gird-clos-2 sm-grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
       
       <div onClick={() => {
        navigate(`/products/seafood`)
        scrollTo(0,0)
       }} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='seafood.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>sea food</p>
       </div>

       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='mutton.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>mutton</p>
       </div>
       
        <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='chicken.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>chiken</p>
       </div>
       
       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='rtc.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>ready to cook</p>
       </div>

     <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='fruits.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>fruits</p>
       </div>

       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='packet.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>deiry</p>
       </div>

       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='123.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>frozen</p>
       </div>

       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='instant.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>instant</p>
       </div>

       
       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='ghee.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>ghee</p>
       </div>

       <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
        <img src='combo.webp' alt='' className='group-hover:scale-108 transition max-w-28'/>
        <p className='text-sm font-medium'>combo</p>
       </div>


        </div>
        </div>
  )
}

export default Catagories