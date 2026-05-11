import React from 'react'


const GrowthAndVision = () => {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row justify-center items-center gap-6 bg-background-defaultbg'>
      <div className='w-full lg:w-1/2 flex flex-col gap-4 justify-start items-start'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold'>Our Growth and Vision</h1>
        <p className='text-white text-sm sm:text-base lg:text-lg'>
          FastTitan was built to solve real delivery problems — speed, trust, and affordability. As demand grows, we are expanding our rider network, improving our technology, and building systems that support businesses and everyday users.
        </p>
      </div>

      <div className='w-full lg:w-1/2 p-6 flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-[#FF1F1F0D] to-[#FF6B350D] rounded-lg'>
        <div className='w-full max-w-sm p-2 flex justify-between items-center border-b border-white'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF1F1F]'>500+</h1>
          <span className='text-white text-sm sm:text-base'>active riders</span>
        </div>

        <div className='w-full max-w-sm p-2 flex justify-between items-center border-b border-white'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF1F1F]'>10k+</h1>
          <span className='text-white text-sm sm:text-base'>Deliveries completed</span>
        </div>

        <div className='w-full max-w-sm p-2 flex justify-between items-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF1F1F]'>24/7</h1>
          <span className='text-white text-sm sm:text-base'>services available</span>
        </div>
      </div>
    </section>
  )
}

export default GrowthAndVision
