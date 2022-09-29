import React from 'react'
import hero from '../../../assets/client/membership/hero-wallpaper2.jpg'

const Hero = () => {
  return (
    <div className="w-full relative">
      <img src={hero} alt="" className="w-full object-none object-bottom bg-yellow-500 h-72"/>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/60">
        <div className="absolute w-full h-full top-0 flex flex-col justify-center text-center text-white">
          <h1 className='lg:text-5xl text-3xl font-bold'>MEMBERSHIP</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero