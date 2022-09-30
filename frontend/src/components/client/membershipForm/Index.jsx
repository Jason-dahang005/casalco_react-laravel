import React from 'react'

import logo from '../../../assets/client/header/CasalcoLogo-7.png'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Index = () => {
  const [example, SetExample] = useState({
    fname: '',
    mname: '',
    lname: '',
    error_list: []
  })
  
  const handleExample = (e) => {
    e.persist();
    SetExample({...example, [e.target.name]: e.target.value})
  }

  const submitExample = (e) => {
    e.preventDefault();

    const data = {
      fname: example.fname,
      mname: example.mname,
      lname: example.lname
    }

    axios.post(`http://127.0.0.1:8000/api/membership`, data).then(res => {
      if(res.data.status === 200){
        alert('yehey! addded')
        document.getElementById('exampleform').reset();
      }else if(res.data.status === 400){
        SetExample({...example, error_list:res.data.errors})
      }
    })
  }

  return (
    <div className='container w-[500px] mx-auto'>
      <form className='flex flex-col space-y-5' onSubmit={submitExample} id='exampleform'>
        <label htmlFor="">First Name</label>
        <input type="text" name='fname' onChange={handleExample} value={example.fname}  className="outline-none border rounded-lg py-5 px-5" />
        <label htmlFor="">Middle Name</label>
        <input type="text" name='mname' onChange={handleExample} value={example.mname} className="outline-none border rounded-lg py-5 px-5" />
        <label htmlFor="">Last Name</label>
        <input type="text" name='lname' onChange={handleExample} value={example.lname} className="outline-none border rounded-lg py-5 px-5" />
        <button type="submit"className="bg-green-500 py-5 my-10">Submit</button>
      </form>
    </div>
  )
}

export default Index