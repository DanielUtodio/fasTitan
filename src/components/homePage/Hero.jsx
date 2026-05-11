import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-[url('/assets/images/fastitan_hero.png')] bg-cover bg-center px-4 sm:px-6 lg:px-8 py-16">
      <div className='w-full max-w-7xl flex justify-start items-start'>
        <div className='w-full max-w-2xl flex flex-col justify-start items-start gap-6'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold'>Fast & Reliable Last-Mile Delivery in Your City.</h1>
          <p className='text-base sm:text-lg lg:text-xl text-white'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
          <a href="https://chat.whatsapp.com/FVoh3UL5JDKGu3oIjQEhO3" className='bg-primaryCtaBtn-defaultpry text-white px-6 py-3 rounded-lg hover:bg-primaryCtaBtn-descriptiveText transition-colors'>Join Our Community</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
