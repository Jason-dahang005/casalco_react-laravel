import React from 'react'
import img2 from '../../../assets/client/home/img2.jpg'
import img3 from '../../../assets/client/home/img3.jpg'
import img4 from '../../../assets/client/home/img4.jpg'

const ProductLoans = () => {
  return (
    <div className="h-screen bg-veryLightGray">
      <div className="w-[1200px] mx-auto py-10">
      <div className="py-10 w-[400px] mx-auto">
        <h1 className="text-center text-4xl font-bold border-t-4 pb-2 border-casalcoOrange">Offered Loan Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-3 z-10">
        <div className="design-button">
          <img src={img3} alt=""/>
          <div className='absolute z-20'>
            <h1 className='text-4xl font-bold '>REGULAR LOAN</h1>
          </div>
        </div>

        <div className="design-button">
          <img src={img2} alt="" />
          <div className='absolute z-20'>
            <h1 className='text-4xl font-bold'>EXPRESS LOAN</h1>
          </div>
        </div>

        <div className="design-button">
          <img src={img4} alt="" />
          <div className='absolute z-20'>
            <h1 className='text-4xl font-bold'>SPECIAL LOAN</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductLoans