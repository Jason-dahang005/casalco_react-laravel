import React from 'react'
import sectionbg from '../../../assets/client/hero1.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='w-full h-[100vh]'>
      <img src={sectionbg} alt="" className='object-cover h-full w-full absolute -z-10'/>
      <div className="relative w-full h-full top-0 left-0 bg-gray-900/50">
      <div className="w-full h-screen flex flex-col justify-between">
        <div className='grid md:grid-cols-2 max-w-[1000px] m-auto text-[#fff]'>
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className='text-3xl py-6 md:text-6xl font-bold'>Capitol Savings and Loan Cooperative</p>
            <Link to="/membership" className='bg-orange-600 sm:w-[60%] py-3 px-6 text-center font-semibold rounded-full hover:bg-orange-700'>BECOME A MEMBER NOW</Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection