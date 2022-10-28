import React from 'react'
import LoanCard from './LoanCard'
import MemberCard from './MemberCard'
import MembershipCard from './MembershipCard'

const Index = () => {
  return (
    <div className='grid grid-cols-4 gap-x-4 text-[#fff]'>
      <MembershipCard/>
      <LoanCard/>
      <MemberCard/>
    </div>
  )
}

export default Index