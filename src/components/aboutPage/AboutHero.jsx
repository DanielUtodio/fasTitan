import React from 'react'

const AboutHero = () => {
  return (
    <section className='w-full min-h-screen flex justify-center items-center bg-[url("/assets/images/abouthero.png")] bg-cover bg-center'>
      <div className='w-full h-full flex justify-start items-center bg-black bg-opacity-50'>
        <div className='w-full max-w-2xl px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-start gap-6'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold'>About FasTitan</h1>
          <p className='text-base sm:text-lg lg:text-xl text-white'>FastTitan is a fast-growing logistics and delivery company built to move packages, food, and errands quickly, safely, and professionally across cities.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
