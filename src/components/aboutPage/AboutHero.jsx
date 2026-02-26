import React from 'react'

const AboutHero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-defaultbg'>
      <div className='w-full h-full flex justify-start items-center'>
            <div className='w-[36rem] h-full flex flex-col justify-center items-start gap-6 ml-20'>
                <h1 className='text-[2.5rem] text-white font-bold'>About FasTitan</h1>
                <p className='text-[1.4rem] text-white'>FastTitan is a fast-growing logistics and delivery company built to move packages, food, and errands quickly, safely, and professionally across cities.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutHero
