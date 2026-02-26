import React from 'react'
import Hero from "../components/homePage/Hero"
import ServiceSummary from '../components/homePage/ServiceSummary'
import RiderCta from '../components/homePage/RiderCta'
import OurServices from '../components/homePage/OurServices'
import OurValues from '../components/homePage/OurValues'
import CustomerTestify from '../components/homePage/CustomerTestify'
import Features from '../components/homePage/Features'
import SocialFeedback from '../components/homePage/SocialFeedback'
import PackageTypes from '../components/homePage/PackageTypes'
import DeliveryCta from '../components/homePage/DeliveryCta'

const Home = () => {
  return (
    <main className='w-full h-max flex flex-col justify-start items-center gap-8 bg-background-defaultbg pt-14 px-1 box-border'>
      <Hero />
      <ServiceSummary />
      <RiderCta />
      <OurServices />
      <OurValues />
      <CustomerTestify />
      <Features />
      <SocialFeedback />
      <PackageTypes />
      <DeliveryCta />
    </main>
  )
}

export default Home
