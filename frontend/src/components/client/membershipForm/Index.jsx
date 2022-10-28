import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert'

const Index = () => {

  const [membership, setMembership] = useState({
    firstname:    '',

  })

  const [error, setError] = useState([])

  const [picture, setPicture] = useState([])

  const handleMembership = (e) => {
    e.persist()
    setMembership({...membership, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setPicture({ image: e.target.files[0] })
  }

  const submitMembership = (e) => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('image',      picture.image) // the image next to the picture state is the name attribute of the input file
    fd.append('firstname',  membership.firstname)

    axios.post(`/api/membership`, fd).then(res => {
      if(res.data.status === 200){
        swal("Sucess", res.data.message, "success")
        setMembership({...membership,
          firstname: '',
        })
        setError([])
      }else if (res.data.status === 422) {
        swal("All Field Are Required")
        setError(res.data.errors)
      } else {
        
      }
    })
  }


  return (
    <div>
      <form onSubmit={submitMembership} className='w-[1000px] mx-auto space-y-5'>
        <div className="w-full">
          <label htmlFor="" className="pr-3">First Name:</label>
          <input
            type="text"
            name="firstname"
            onChange={ handleMembership }
            value={ membership.firstname}
            className="outline-none border-b border-veryLightGray w-full"
          />
          <span className="text-errorColor">{error.firstname}</span>
        </div>
        <div className="w-full">
          <label htmlFor="" className="pr-3">Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImage}
            className="w-full"
          />
          <span className="text-errorColor">{error.image}</span>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-casalcoOrange text-[#fff] px-5 py-2 rounded-full w-full">Submit Membership</button>
        </div>
      </form>
    </div>
  )
}

export default Index
