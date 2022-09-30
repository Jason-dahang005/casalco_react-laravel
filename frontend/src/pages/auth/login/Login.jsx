import React from 'react'
import img1 from '../../../assets/client/auth/img1.jpg'
import Header from '../../../layouts/client/Header'

const Login = () => {
  return (
    <>
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-5 h-full w-full">
        <div className='hidden sm:block col-span-3'>
          <img src={img1} alt="" className='max-w-[1000px] h-full w-full object-cover' />
        </div>
        <div className='flex flex-col justify-center col-span-2'>
          <form action="" className='max-w-[400px] w-full mx-auto px-5 rounded-lg shadow-xl'>
            <div className="py-6 text-center">
              <h1 className='text-4xl font-bold'>Welcome Back!</h1>
              <h2 className='text-xl font-semibold'>kindly login</h2>
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor="" className='pl-5'>Email</label>
              <input type="text" className='py-2 outline-none rounded-full border px-5'/>
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor="" className='pl-5'>Password</label>
              <input type="password" className='py-2 outline-none rounded-full border px-5'/>
            </div>
            <div>
              <button type="submit" className='border border-orange-500 rounded-full w-full my-5 py-2 text-orange-500 font-semibold hover:bg-orange-500 hover:text-[#fff]'>Sign In</button>
            </div>
            <div>
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login