import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[110vh] flex justify-center items-center bg-[url('/assets/images/fastitan_hero.png')] bg-cover">
        <div className='w-full h-max flex justify-start items-start'>
            <div className='w-[36rem] h-[308px] flex flex-col justify-start items-start gap-6 ml-20'>
                <h1 className='text-[2.5rem] text-white font-bold'>Fast & Reliable Last-Mile Delivery in Your City.</h1>
                <p className='text-[1.4rem] text-white'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
                <button className=' bg-primaryCtaBtn-defaultpry text-white px-6 py-2 rounded-lg'>Let’s help you deliver</button>
            </div>
        </div>
    </div>
  )
}

//[linear-gradient(180deg, rgba(10, 10, 10, 1)_0%, rgba(26, 26, 26, 1)_50%, rgba(10, 10, 10, 1)_100%)]
export default Hero
