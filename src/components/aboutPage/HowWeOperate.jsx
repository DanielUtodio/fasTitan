import React from 'react'

const HowWeOperate = () => {
  return (
    <section className='w-full min-h-[20rem] flex flex-col lg:flex-row justify-center gap-8 items-center bg-background-defaultbg px-4 sm:px-6 lg:px-8 py-12'>
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>How We Operate</h1>
        <p className='text-white text-sm sm:text-base'>
          FastTitan operates through a seamless integration of technology and human expertise. Our platform connects users with trained riders who ensure timely and secure deliveries. We leverage smart systems to optimize routes, track packages in real-time, and provide transparent updates throughout the delivery process.
        </p>
      </div>
      <div className='w-full lg:w-2/5 h-64 lg:h-80 rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuQA-Fm77X1ja4mHgIJv_E4l-ncKyIJZBykrbNCGgHw&s" alt="operational process" />
      </div>
    </section>
  )
}

export default HowWeOperate
