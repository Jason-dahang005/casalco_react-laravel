import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import img1 from '../../../assets/client/auth/img2.png'
import Header from '../../../layouts/client/Header'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  const [register, setRegister] = useState({
    id_no:        '',
    firstname:    '',
    lastname:     '',
    email:        '',
    password:     '',
    error_list:   []
  })

  const handleRegister = (e) => {
    e.persist()
    setRegister({...register, [e.target.name]: e.target.value })
  }

  const submitRegister = (e) => {
    e.preventDefault()

    const data = {
      id_no:      register.id_no,
      firstname:  register.firstname,
      lastname:   register.lastname,
      email:      register.email,
      password:   register.password
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`http://127.0.0.1:8000/api/register`, data).then(res => {
        if(res.data.status){
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_firstname', res.data.firstname)
          swal('Success', res.data.message, 'success')
          history.push('/')
        }else{
          setRegister({ ...register, error_list: res.data.validation_errors})
        }
      })
    })
  }
  return (
    <>
    <Header/>
    <form  onSubmit={submitRegister} className='flex flex-col px-48 py-12'>
      
              <label htmlFor="" className='pl-5 font-bold text-darkGray'>*CASALCO Identification Number</label>
              <input 
                type="text"
                name='id_no'
                onChange={handleRegister}
                value={register.id_no}
                className='outline-none border border-veryLightGray text-darkGray px-4 py-2 text-sm rounded-lg'/>
                <span className="text-errorColor">{register.error_list.id_no}</span>

              <label htmlFor="" className='pl-5 font-bold text-darkGray '>*First Name</label>
              <input 
                type="text"
                name='firstname'
                onChange={handleRegister}
                value={register.firstname}
                className='outline-none border border-veryLightGray text-darkGray px-4 py-2 text-sm rounded-lg'/>
                <span className="text-errorColor">{register.error_list.firstname}</span>

              <label htmlFor="" className='pl-5 font-bold text-darkGray '>*Last Name</label>
              <input 
                type="text"
                name='lastname'
                onChange={handleRegister}
                value={register.lastname}
                className='outline-none border border-veryLightGray text-darkGray px-4 py-2 text-sm rounded-lg'/>
                <span className="text-errorColor">{register.error_list.lastname}</span>

              <label htmlFor="" className='pl-5 font-bold text-darkGray '>*Email Address</label>
              <input 
                type="email"
                name='email'
                onChange={handleRegister}
                value={register.email}
                className='outline-none border border-veryLightGray text-darkGray px-4 py-2 text-sm rounded-lg'/>
                <span className="text-errorColor">{register.error_list.email}</span>

              <label htmlFor="" className='pl-5 font-bold text-darkGray '>*Password</label>
              <input
                type="password"
                name='password'
                onChange={handleRegister}
                value={register.password}
                className='outline-none border border-veryLightGray text-darkGray px-4 py-2 text-sm rounded-lg'/>
                <span className="text-errorColor">{register.error_list.password}</span>

              <button type="submit" className='rounded-lg w-full mt-5 py-2 text-[#fff] bg-casalcoOrange font-semibold hover:bg-orange-500 '>Sign In</button>
              <p className='text-end py-1 font-semibold'>Already registered? <Link to="/login" className='text-casalcoOrange'>Sign in here</Link></p>

          </form>
    </>
  )
}

export default Register