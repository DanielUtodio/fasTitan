import React from 'react'
import AboutHero from '../components/aboutPage/AboutHero'
import Fastitan from '../components/aboutPage/Fastitan'
import WhatWeDo from '../components/aboutPage/WhatWeDo'
import FoodDelivery from '../components/aboutPage/FoodDelivery'
import ErrandsBiz from '../components/aboutPage/ErrandsBiz'
import HowWeOperate from '../components/aboutPage/HowWeOperate'
import GrowthAndVision from '../components/aboutPage/GrowthAndVision'
import OurStory from '../components/aboutPage/OurStory'
import BeyondBasic from '../components/aboutPage/BeyondBasic'
import FooterHero from '../components/aboutPage/FooterHero'

const About = () => {
  return (
    <div className='w-full h-max flex flex-col justify-start items-center gap-14 bg-background-defaultbg'>
      <AboutHero />
      <Fastitan />
      <WhatWeDo />
      <FoodDelivery />
      <ErrandsBiz />
      <HowWeOperate />
      <GrowthAndVision />
      <OurStory />
      <BeyondBasic />
      <FooterHero />
    </div>
  )
}

export default About
