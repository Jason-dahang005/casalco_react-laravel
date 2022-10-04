import React from 'react'
import sectionbg from '../../../assets/client/home/img1.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='w-full h-[100vh]'>
      <img src={sectionbg} alt="" className='object-cover h-full w-full absolute -z-10'/>
      <div className="relative w-full h-full top-0 left-0 bg-[#fff]/20">
      <div className="w-full flex flex-col justify-between pt-24">
        <div className='grid md:grid-cols-4 max-w-[1000px] m-auto text-[#fff]'>
          <div className="col-span-3 flex flex-col justify-center md:items-start w-full px-2 py-8">
            <div className='border-y-2 border-casalcoOrange text-[#000] font-bold uppercase'>
              <h1 className="text-casalcoOrange text-3xl">Welcome to CASALCO</h1>
            </div>
            <div className='flex flex-col justify-start items-center text-[#000]'>
              <h1 className='text-6xl font-bold uppercase'>save money and money will save you</h1>
            </div>
            <p className='text-3xl py-6 md:text-2xl font-bold text-[#1f1f2e]'>Do not save what is left after spending, but spend what is left after saving</p>
            <Link to="/membership" className='bg-casalcoOrange sm:w-[40%] hover:w-[60%] py-3 px-6 text-center font-semibold rounded-full hover:bg-[#fff] hover:text-[#ff3300] duration-1000'>BECOME A MEMBER NOW</Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection