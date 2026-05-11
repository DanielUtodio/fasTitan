import React from 'react'

const Streamline = () => {
  return (
    <section className='w-full min-h-[30rem] flex flex-col items-center text-center gap-10 justify-start bg-red-500 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white mt-12 lg:mt-24'>Ready to Streamline Your Deliveries?</h1>
      </div>
      <p className='text-white text-sm sm:text-base max-w-md'>Join hundreds of businesses that trust FastTitan for fast, reliable logistics</p>
      <div className='w-full flex justify-center'>
        <button className='px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors'>Contact Sales</button>
      </div>
    </section>
  )
}

export default Streamline
