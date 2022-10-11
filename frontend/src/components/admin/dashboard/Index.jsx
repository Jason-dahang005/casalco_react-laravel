import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sd:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

        <div className="card w-full h-40 rounded-md bg-[#4d4dff]">
          <div className="flex flex-col py-2 px-2 text-[#fff]">
            <h1 className='text-4xl font-bold'>0</h1>
            <h2 className="font-semibold font-sans">Pre-approved membership application</h2>
            <Link to='/admin/membership-application' className='bg-[#0000cc] font-semibold text-center rounded-md hover:bg-[#000080]'>See more</Link>
          </div>
        </div>

        <div className="card w-full h-40 rounded-md bg-[#47d147]">
        <div className="flex flex-col p-5 text-[#fff]">
            <h1 className='text-4xl font-bold'>0</h1>
            <h2 className="font-semibold font-sans">Pre-approved loan application</h2>

          </div>
        </div>

        <div className="card w-full h-40 rounded-md bg-[#fff]">
          <div className="flex flex-col p-5 text-[#fff]">
            <h1 className='text-4xl font-bold'>0</h1>
            <h2 className="font-semibold font-sans">Regular members</h2>
          </div>
        </div>

        <div className="card w-full h-40 rounded-md bg-[#fff]">
          <div className="flex flex-col p-5 text-[#fff]">
            <h1 className='text-4xl font-bold'>0</h1>
            <h2 className="font-semibold font-sans">Associate members</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index