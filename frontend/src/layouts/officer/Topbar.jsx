import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

const Topbar = () => {

  const history = useHistory()

  const logoutSubmmit = (e) => {
    e.preventDefault()

    axios.post(`/api/logout`).then(res => {
      if(res.data.status === 200){
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_firstname')
        swal('Success', res.data.message, 'success')
        history.push('/')
      }
    })
  }

  return (
    <header className='sticky top-0 z-50 bg-[#fff] px-2 py-2 drop-shadow-lg'>
      <div className="flex justify-between">
        <h1 className='font-bold'>Dashboard</h1>
        <h1 onClick={logoutSubmmit} className='cursor-pointer'>Logout</h1>
      </div>
    </header>
  )
}

export default Topbar