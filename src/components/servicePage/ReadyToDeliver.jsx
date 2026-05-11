import React from 'react'

const ReadyToDeliver = () => {
  return (
    <section className='w-full min-h-screen flex justify-center items-center px-4 sm:px-8 py-16'>
      <div className='w-full max-w-7xl relative flex flex-col justify-center items-center gap-6'>
        <div className='absolute left-1/4 top-1/4 w-32 h-32 sm:w-80 sm:h-80 rounded-full bg-primaryCtaBtn-defaultpry blur-3xl opacity-15'></div>
        <div className='absolute left-1/2 top-3/4 w-32 h-32 sm:w-80 sm:h-80 rounded-full bg-[#FF6B00] blur-3xl opacity-15'></div>

        <div className='w-full max-w-2xl text-center'>
          <h1 className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight'>Ready to Deliver with FasTitan?</h1>
        </div>
        <div className='w-full max-w-3xl text-center'>
          <p className='text-white text-base sm:text-lg'>Join thousands of satisfied customers who trust FastTitan for fast, reliable deliveries across Nigeria.</p>
        </div>
        <div className='w-full max-w-md flex justify-center'>
          <button className='px-6 py-3 bg-primaryCtaBtn-defaultpry text-white rounded-lg hover:bg-primaryCtaBtn-descriptiveText transition-colors'>Order Now</button>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8'>
          <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <h1 className='text-primaryCtaBtn-defaultpry text-3xl sm:text-4xl font-semibold'>50k+</h1>
            <p className='text-white text-sm sm:text-base'>Deliveries Completed</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <h1 className='text-primaryCtaBtn-defaultpry text-3xl sm:text-4xl font-semibold'>1000+</h1>
            <p className='text-white text-sm sm:text-base'>Verified Riders</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <h1 className='text-primaryCtaBtn-defaultpry text-3xl sm:text-4xl font-semibold'>4.8</h1>
            <p className='text-white text-sm sm:text-base'>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadyToDeliver