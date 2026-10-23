import React from 'react'
import Banner from '../components/Banner'
import Catagories from '../components/Catagories'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
        <Banner />
        <Catagories/>
        <BestSeller/>
    </div>
  )
}

export default Home