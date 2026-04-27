import React, { useState, useEffect } from 'react'
import ServiceHero from '../components/servicePage/ServiceHero'
import WhatWeDeliver from '../components/servicePage/WhatWeDeliver'
import WhyChooseFasTitan from '../components/servicePage/WhyChooseFasTitan'
import ReadyToDeliver from '../components/servicePage/ReadyToDeliver'


const Services = () => {
  useEffect(()=> {
  const handleTop = () => {
  window.scrollTo({
    top: 0,
    scrollBehaviour: "smooth"
  })
}
window.addEventListener('load', handleTop)
return () => window.removeEventListener('load', handleTop())
}, [])

  return (
    <div className='w-full h-max flex flex-col justify-start items-center gap-14 bg-background-defaultbg'>
      <ServiceHero />
      <WhatWeDeliver />
      <WhyChooseFasTitan />
      <ReadyToDeliver />
    </div>
  )
}

export default Services
