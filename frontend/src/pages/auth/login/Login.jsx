import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import img1 from '../../../assets/client/auth/img1.png'
import Header from '../../../layouts/client/Header'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

const Login = () => {
  const history = useHistory()

  const [login, setLogin] = useState({
    email:        '',
    password:     '',
    error_list:   []
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

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/login`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_firstname', res.data.firstname)
          swal('Success', res.data.message, 'success')
          if(res.data.role === 'admin'){
            history.push('/admin/dashboard')
          }else if (res.data.role === 'officer') {
            history.push('/officer/dashboard')
          } else {
            history.push('/')
          }
        }else if(res.data.status === 401) {
          swal('Warning', res.data.message, 'warning')
        }else{
          setLogin({...login, error_list: res.data.validation_errors })
        }
      })
    })
  }

  return (
    <>
      <Header/>
      <form onSubmit={submitLogin} className='flex flex-col px-48'>

        <div className='flex flex-col py-2'>
          <label htmlFor="" className='pl-5 font-bold'>Email</label>
          <input
            type="email"
            name='email'
            onChange={handleLogin}
            value={login.email}
            className='py-2 outline-none rounded-full backdrop:px-5 border border-casalcoOrange px-5'/>
            <span className="text-errorColor">{login.error_list.email}</span>

          <label htmlFor="" className='pl-5 font-bold'>Password</label>
          <input
            type="password"
            name='password'
            onChange={handleLogin}
            value={login.password}
            className='py-2 outline-none rounded-full backdrop:px-5 border border-casalcoOrange px-5'/>
            <span className="text-errorColor">{login.error_list.password}</span>

          <button type="submit" className='border border-orange-500 rounded-full w-full mt-5 py-2 bg-casalcoOrange font-semibold hover:bg-orange-500 text-[#fff]'>Sign In</button>
        </div>
      </form>
    </>
  )
}

export default Login