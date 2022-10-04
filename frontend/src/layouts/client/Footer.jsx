import React from 'react'
import logo from '../../assets/client/header/CasalcoLogo-7.png'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='h-[500px] bg-[#262626] text-lightGray font-semibold'>
      <div className="w-[1250px] mx-auto grid grid-cols-4 gap-x-4 py-14">
        <div className="flex flex-col space-y-10 px-10">
          <img src={logo} alt="" className='w-[90%]' />
          <div className="flex items-center space-x-2">
            <h1>Follow us on:</h1>
            <BsFacebook/>
          </div>
        </div>

        <div className="flex flex-col space-y-10 px-10">
          <h1 className='capitalize text-xl font-bold'>loan products</h1>
          <ul className='capitalize space-y-2'>
            <li>regular loan</li>
            <li>express loan</li>
            <li>special loan</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-10 px-10">
          <h1 className='capitalize text-xl font-bold'>units</h1>
          <ul className='capitalize space-y-2'>
            <li>capitol university (main)</li>
            <li>capitol university medical center</li>
            <li>capitol university basic education department</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-10 px-10">
          <h1 className='capitalize text-xl font-bold'>contact</h1>
          <ul className='capitalize space-y-2'>
            <li>Address: Capitol University Compound, Corrales Ext. CDOC 9000</li>
            <li>Address: Capitol University Compound, Corrales Ext. CDOC 9000</li>
            <li>contact: (088) 856-2710</li>
          </ul>
        </div>
      </div>

      <div className="w-[1250px] mx-auto">
        <div className="h-[1px] bg-lightGray">
          <div className="py-10 px-10 flex">
          <h1>&#169; 2022 - all rights reserved. </h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer