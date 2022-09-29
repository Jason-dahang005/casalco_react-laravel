import React from 'react'
import img1 from '../../../assets/client/membership/img1.png'
import img2 from '../../../assets/client/membership/img2.png'
import { GiCheckMark } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Requirements = () => {
  return (
    <div className="container mx-auto max-w-[1200px] my-28">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div>
          <h1 className="text-center text-[#fff] text-lg md:text-4xl py-3 bg-orange-500 font-bold">Membership Eligibility</h1>
          <div className='py-5 px-10 text-xl space-y-2'>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be a Filipino citizen</h1>
            </div>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be 18 years old or above</h1>
            </div>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be a Filipino citizen</h1>
            </div>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be a Filipino citizen</h1>
            </div>
          </div>
        </div>
        <div className='md:block hidden'>
          <img src={img1} alt="" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 py-32">
        <div className='md:block hidden'>
          <img src={img2} alt="" />
        </div>
        <div>
          <h1 className="text-center text-[#fff] text-lg md:text-4xl py-3 bg-orange-500 font-bold">Membership Requirements</h1>
          <div className='py-5 px-10 text-xl space-y-2'>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be a Filipino citizen</h1>
            </div>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be 18 years old or above</h1>
            </div>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be a Filipino citizen</h1>
            </div>
            <div className="flex">
              <GiCheckMark className='text-orange-600'/><h1 className='pl-2 font-semibold'>Must be a Filipino citizen</h1>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <div className='bg-orange-500 w-full'>
          <h1 className='uppercase font-bold text-lg md:text-4xl text-[#fff] py-3'>steps for membership application</h1>
        </div>
        <div>
          <p className='bg-blue-500 w-[60px] mx-auto border text-[#fff] font-bold text-4xl py-3 rounded-xl'>1</p>
          <p className='text-xl'>Fill up the membership application form</p>
        </div>
        <div>
          <p className='bg-red-500 w-[60px] mx-auto border text-[#fff] font-bold text-4xl py-3 rounded-xl'>2</p>
          <p className='text-xl'>Watch the Casalco Membership seminar Video</p>
        </div>
        <div>
          <p className='bg-green-500 w-[60px] mx-auto border text-[#fff] font-bold text-4xl py-3 rounded-xl'>3</p>
          <p className='text-xl'>Wait for a Call/Email and go for walk-in payment</p>
        </div>
        <div className='py-14'>
          <Link to="/membership-form" target='_blank' className='uppercase bg-orange-500 px-24 my-16 py-5 text-2xl font-bold text-[#fff] rounded-full hover:bg-orange-600'>apply now</Link>
        </div>
      </div>
    </div>
  )
}

export default Requirements