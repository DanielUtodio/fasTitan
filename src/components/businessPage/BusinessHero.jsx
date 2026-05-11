import React from 'react'

const BusinessHero = () => {
  return (
    <section className='w-full min-h-screen h-screen flex justify-center items-center bg-[url("/assets/images/businesshero.png")] bg-cover bg-center'>
      <div className='w-full h-full flex justify-start items-center bg-black bg-opacity-50'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='max-w-lg lg:max-w-xl flex flex-col justify-center items-start gap-6'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold'>Business</h1>
            <p className='text-sm sm:text-base lg:text-lg text-white'>Professional logistics for businesses that don't wait. Same-day delivery across the city with real-time tracking.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessHero
