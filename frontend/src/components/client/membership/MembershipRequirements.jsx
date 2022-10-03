import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai'

const MembershipRequirements = () => {
  return (
    <div className="container w-[1200px] mx-auto my-10">
      <div className="bg-casalcoOrange rounded-lg">
        <h1 className='text-[#fff] uppercase px-10 text-2xl font-bold py-3'>membership requirements</h1>
      </div>
      <div className='px-16 flex flex-col'>
        <div className="flex py-5">
          <AiFillCheckSquare className='text-2xl text-[#262626]'/>
          <h1 className='text-xl font-semibold px-3 text-[#262626]'>All employees of CU, CUMC, CUBED, SUPPORT ZEBRA and its dependents.</h1>
        </div>
        <div className="flex py-3">
          <AiFillCheckSquare className='text-2xl text-[#262626]'/>
          <h1 className='text-xl font-semibold px-3 text-[#262626]'>Must be 18 years old and above.</h1>
        </div>
        <div className="flex py-3">
          <AiFillCheckSquare className='text-2xl text-[#262626]'/>
          <h1 className='text-xl font-semibold px-3 text-[#262626]'>Must be a Filipino citizen.</h1>
        </div>
      </div>
    </div>
  )
}

export default MembershipRequirements
