import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Example = () => {

  const [example, SetExample] = useState({
    name: '',
    lastname: '',
    error_list: []
  })
  
  const handleExample = (e) => {
    e.persist();
    SetExample({...example, [e.target.name]: e.target.value})
  }

  const submitExample = (e) => {
    e.preventDefault();

    const data = {
      name: example.name,
      lastname: example.lastname
    }

    axios.post(`http://127.0.0.1:8000/api/example`, data).then(res => {
      if(res.data.status === 200){
        alert('yehey! addded')
        document.getElementById('exampleform').reset()
      }else if(res.data.status === 400){
        SetExample({...example, error_list:res.data.errors})
      }
    })
  }

  return (
    <div className='container w-[500px] mx-auto'>
      <form className='flex flex-col space-y-5' onSubmit={submitExample}>
        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={handleExample} value={example.name} id='exampleform' className="outline-none border rounded-lg py-5 px-5" />
        <label htmlFor="">Last Name</label>
        <input type="text" name='lastname' onChange={handleExample} value={example.lastname} id='exampleform'  className="outline-none border rounded-lg py-5 px-5" />
        <button type="submit"className="bg-green-500 py-5 my-10">Submit</button>
      </form>
    </div>
  )
}

export default Example
