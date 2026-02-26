import React from 'react'
import BusinessHero from '../components/businessPage/BusinessHero'
import BusinessesLikeYours from '../components/businessPage/BusinessesLikeYours'
import FastBusinesses from '../components/businessPage/FastBusinesses'
import HowItWworks from '../components/businessPage/HowItWworks'
import BusinessNeeds from '../components/businessPage/BusinessNeeds' 
import TrustedAcross from '../components/businessPage/TrustedAcross'
import OurPricing from '../components/businessPage/OurPricing'
import Streamline from '../components/businessPage/Streamline'



const Business = () => {
  return (
    <main className='w-full h-max flex flex-col justify-start items-center gap-14 bg-background-defaultbg'>
        <BusinessHero />
        <BusinessesLikeYours />
        <FastBusinesses />
        <HowItWworks />
        <BusinessNeeds />
        <TrustedAcross />
        <OurPricing />
        <Streamline />
    </main>
  )
}

export default Business
