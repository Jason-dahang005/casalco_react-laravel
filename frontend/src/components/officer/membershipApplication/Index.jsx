import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'

const Index = () => {

  const [membership, setMembership] = useState([])

  const [load, setLoad] = useState(true)

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/membership`).then(res => {
      if(res.data.status === 200){
        setMembership(res.data.m)
        setLoad(false)
      }
    })
  }, [])

  var listMembership = ""

  if(load){
    return <div className="h-[5in] flex justify-center items-center">
      <h1 className='text-casalcoOrange text-2xl'>Loading Membership...</h1>
    </div>
  }else{
    listMembership = membership.map((item) => {
      return (
       
        <tr key={item.id}>
          <td className='border border-veryLightGray pl-5'>{item.firstname}</td>
          <td className='border border-veryLightGray pl-5'>
            <img src={`http://localhost:8000/${item.image}`} className="h-[50px] max-w-[150px] " alt="" />
          </td>
          <td className='border border-veryLightGray text-center'>
            <span className="bg-pendingGray text-xs py-[3px] px-[5px] text-[#fff] rounded-full">Pending</span>
          </td>
          <td className='border border-veryLightGray pl-5'>{item.created_at}</td>
          <td className='border border-veryLightGray pl-5 text-center'>
            <button className='bg-successGreen px-2 py-1 rounded-lg text-[#fff] text-sm font-semibold'>View Details</button>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className='p-5 bg-[#fff] h-full '>
      <table className=" w-full">
        <thead>
          <tr>
            <th className='border border-veryLightGray py-3'>First Name</th>
            <th className='border border-veryLightGray py-3'>Image</th>
            <th className='border border-veryLightGray py-3'>Status</th>
            <th className='border border-veryLightGray py-3'>Date Applied</th>
            <th className='border border-veryLightGray py-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listMembership}
        </tbody>
      </table>
    </div>
  )
}

export default Index