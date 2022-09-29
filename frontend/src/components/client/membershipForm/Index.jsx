import React from 'react'

import logo from '../../../assets/client/header/CasalcoLogo-7.png'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="grid grid-cols-5">
      <div className='col-span-1'>
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="" className='py-3' />
          <div className="bg-gray-200 h-[1px] w-full"></div>
          <div>
            <Link className='flex items-center-justify-center py-5 hover:text-orange-600'>
              <AiFillHome className=' text-2xl'/><h1 className='font-semibold text-lg'>Return home</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className='col-span-4 border pb-24'>
        <div className="w-[90%] mx-auto">
          <div className='py-5'>
            <h1 className='text-2xl font-bold'>CASALCO Membership Form</h1>
          </div>
          <div className="bg-orange-500 h-[4px]"></div>
          <div className='py-3'>
            <h1 className='text-xl font-bold'>Personal Information</h1>
            <p>We require your personal information to ensure calidty of you memnbership application</p>
          </div>
          <div className="bg-gray-200 h-[1px]"></div>
          <div className="grid grid-cols-3 gap-x-4">
            {/* <div className='relative my-5'>
              <input type="text" id='firstname' className='w-full border-b py-1 focus:outline-none focus:border-orange-500 focus:border-b-2 transition-colors peer' autoComplete='off'/>
              <label for="firstname" className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-500 transition-all font-semibold'>First Name</label>
            </div>
            <div className='relative my-5'>
              <input type="text" id='middlename' className='w-full border-b py-1 focus:outline-none focus:border-orange-500 focus:border-b-2 transition-colors peer' autoComplete='off'/>
              <label for="middlename" className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-500 transition-all font-semibold '>Middle Name</label>
            </div>
            <div className='relative my-5'>
              <input type="text" id='lastname' className='w-full border-b py-1 focus:outline-none focus:border-orange-500 focus:border-b-2 transition-colors peer' autoComplete='off'/>
              <label for="lastname" className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-500 transition-all font-semibold'>Last Name</label>
            </div> */}
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='First Name' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='MIddle Name' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Last Name' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Suffix' />
            </div>
            <div className='my-3'>
              <select name="" id="" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg bg-white'>
                <option value="" selected disabled>Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div className='my-3'>
              <input type="date" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' />
            </div>
            <div className='my-3'>
              <input type="text" className=' outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Birth Place' />
            </div>
            <div className='my-3 col-span-2'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Address' />
            </div>
            <div className='my-3'>
              <select name="" id="" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg bg-white'>
                <option value="" selected disabled>Unit</option>
                <option value="">Capitol University (Main)</option>
                <option value="">Capitol University Medical Center</option>
                <option value="">Capitol University Basic Education Department</option>
                <option value="">Support Zebra</option>
                <option value="">Associate</option>
              </select>
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Occupation' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Educational Attainment' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Monthly Income' />
            </div>
            <div className='my-3'>
              <select name="" id="" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg bg-white'>
                <option value="" selected disabled>Civil Status</option>
                <option value="">Single</option>
                <option value="">Married</option>
                <option value="">Divorced</option>
                <option value="">Separated</option>
                <option value="">Widowed</option>
              </select>
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Religion' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Contact No.' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Email Address ' />
            </div>
            <div className='my-3'>
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='No. of Dependents' />
            </div>
          </div>
          <div className='py-3'>
            <h1 className='text-xl font-bold'>Spouse Personal Information</h1>
          </div>
          <div className="bg-gray-200 h-[1px]"></div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span-3 my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Full Name' />
            </div>
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Age' />
            </div>
            <div className="my-3 col-span-2">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Occupation' />
            </div>
            <div className="my-3 col-span-2">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='monthly Income' />
            </div>
            <div className="my-3 col-span-2">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder="Employer's Name" />
            </div>
            <div className="my-3 col-span-2">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder="Contact No." />
            </div>
          </div>

          <div className='py-3'>
            <h1 className='text-xl font-bold'>Nomination of Beneficiary</h1>
          </div>
          <div className="bg-gray-200 h-[1px]"></div>
          <div className="grid grid-cols-3 gap-x-4">
            <div className="col-span-2 my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Full Name' />
            </div>
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Relationship' />
            </div>
            <div className="my-3 col-span-2">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Address' />
            </div>
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Age' />
            </div>
          </div>

          <p>Mothers's Maiden Name</p>
          <div className="grid grid-cols-3 gap-x-4">
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder="Last Name" />
            </div>
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder="First Name" />
            </div>
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder="Middle Name" />
            </div>
          </div>

          <div className='py-3'>
            <h1 className='text-xl font-bold'>Government ID Number</h1>
            <p>The fields below are optional but we encourage you to provide the information</p>
          </div>
          <div className="bg-gray-200 h-[1px]"></div>
          <div className="grid grid-cols-3 gap-x-4">
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Full Name' />
            </div>
            <div className="my-3">
              <input type="text" className='outline-none w-full px-3 h-[40px] shadow-md border rounded-lg' placeholder='Relationship' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index