import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full h-[110vh] flex justify-center items-center 
    // bg-[url('/assets/images/fastitan_hero.png')] 
    bg-cover">
        <div className='w-full h-max flex justify-start items-start'>
            <div className='w-[36rem] h-[308px] flex flex-col justify-start items-start gap-6 ml-20'>
                <h1 className='text-[2.5rem] text-white font-bold'>Fast & Reliable Last-Mile Delivery in Your City.</h1>
                <p className='text-[1.4rem] text-white'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
                <Link to="https://chat.whatsapp.com/FVoh3UL5JDKGu3oIjQEhO3" className=' bg-primaryCtaBtn-defaultpry text-white px-6 py-2 rounded-lg'>join our community</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
