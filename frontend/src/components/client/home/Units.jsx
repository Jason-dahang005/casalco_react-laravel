import React from 'react'
import img1 from '../../../assets/client/home/cu.jpg'
import img2 from '../../../assets/client/home/cubed.jpg'
import img3 from '../../../assets/client/home/cumc.svg'

const Units = () => {
  return (
    <div className="w-[1200px] mx-auto py-24">
      <div className="py-10 w-[200px] mx-auto">
        <h1 className="text-center text-4xl font-bold border-t-4 pb-2 border-casalcoOrange">Our Units</h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex justify-center items-center">
          <img src={img1} alt="" className='w-[70%]'/>
        </div>

        <div className="flex justify-center items-center">
          <img src={img2} alt="" className='w-[55%]' />
        </div>

        <div className="flex justify-center items-center">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Units