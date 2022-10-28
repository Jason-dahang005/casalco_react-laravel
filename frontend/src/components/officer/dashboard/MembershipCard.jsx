import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MembershipCard = () => {

  const [memCount, setMemcount] = useState([])

  useEffect(() => {
    axios.get(`/api/officer-dashboard`).then(res => {
      if(res.data.status === 200){
        setMemcount(res.data.ms)
      }
    })
  })
  return (
    <Link to='/officer/membership-application-list' className='hover:bg-[#cc0000] w-full bg-errorColor p-5 rounded-md'>
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl">0</h1>
        <h1 className="font-semibold">Pending Membership Application</h1>
      </div>
    </Link>
  )
}

export default MembershipCard
