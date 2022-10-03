import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import img1 from '../../../assets/client/auth/img2.png'
import Header from '../../../layouts/client/Header'

import { Link } from 'react-router-dom'

const Register = () => {
  const [login, setLogin] = useState({
    email:    '',
    password: ''
  })

  const handleLogin = (e) => {
    e.persist()
    setLogin({...login, [e.target.name]: e.target.value })
  }

  const submitLogin = (e) => {
    e.preventDefault()

    const data = {
      email:      login.email,
      password:   login.password
    }

    axios.post(`/api/login`).then(res => [
      
    ])
  }
  return (
    <>
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-5 h-full w-[1200px] mx-auto">
        <div className='hidden sm:block col-span-3'>
          <img src={img1} alt="" className='max-w-[1000px] h-full w-full object-cover' />
        </div>
        <div className='flex flex-col justify-center col-span-2'>
          <form onSubmit={submitLogin} className='max-w-[400px] w-full mx-auto px-5 rounded-lg shadow-xl'>
            <div className="py-6 text-center">
              <h1 className='text-4xl font-bold'>Hello, welcome!</h1>
              <h2 className='text-xl font-semibold'>Please Sign in</h2>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="" className='pl-5 font-bold'>ID No.</label>
              <input type="text" className='py-2 outline-none rounded-full px-5 border border-casalcoOrange' name='acc_no'/>
            </div>
            <div className='flex flex-col pt-1'>
              <label htmlFor="" className='pl-5 font-bold'>Username</label>
              <input type="text" className='py-2 outline-none rounded-full px-5 border border-casalcoOrange' name='acc_no'/>
            </div>
            <div className='flex flex-col pt-1'>
              <label htmlFor="" className='pl-5 font-bold'>Email</label>
              <input type="email" className='py-2 outline-none rounded-full px-5 border border-casalcoOrange' name='email' onChange={handleLogin} value={login.email} />
            </div>
            <div className='flex flex-col pt-1'>
              <label htmlFor="" className='pl-5 font-bold'>Password</label>
              <input type="password" className='py-2 outline-none rounded-full px-5 border border-casalcoOrange' name='password' onChange={handleLogin} value={login.password}/>
            </div>
            <div>
              <button type="submit" className='border border-orange-500 rounded-full w-full mt-5 py-2 text-[#fff] bg-casalcoOrange font-semibold hover:bg-orange-500 '>Sign In</button>
              <p className='text-end py-1 font-semibold'>Already registered? <Link to="/login" className='text-casalcoOrange'>Sign in here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register