import React from 'react'
import ApplyButton from './ApplyButton'
import Hero from './Hero'
import MembershipEligibility from './MembershipEligibility'
import MembershipRequirements from './MembershipRequirements'
import MembershipSteps from './MembershipSteps'
import Requirements from './Requirements'

const Index = () => {
  return (
    <>
      <Hero/>
      <MembershipEligibility/>
      <MembershipRequirements/>
      <MembershipSteps/>
      <ApplyButton/>
    </>
  )
}

export default Index