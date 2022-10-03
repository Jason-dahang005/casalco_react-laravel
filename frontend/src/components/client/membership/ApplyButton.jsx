import React from 'react'
import { Link } from 'react-router-dom'

const ApplyButton = () => {
  return (
    <div className='py-14 text-center'>
      <Link to="/membership-form" target='_blank' className='uppercase bg-casalcoOrange px-24 my-16 py-5 text-2xl font-bold text-[#fff] rounded-full hover:bg-orange-600'>apply now</Link>
    </div>
  )
}

export default ApplyButton