import React from 'react'
import { FiPackage } from 'react-icons/fi'


const BeyondBasic = () => {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center items-center gap-12'>
      <div className='w-full max-w-4xl text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-normal text-white'>FastTitan continues to grow beyond basic delivery services.</h1>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='pt-10 px-4 min-h-[12rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
          <h2 className='text-xl sm:text-2xl text-white'>Business Logistics</h2>
          <span className='text-sm text-[#99A1AF]'>Scalable delivery solutions for growing businesses</span>
        </div>

        <div className='pt-10 px-4 min-h-[12rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
          <h2 className='text-xl sm:text-2xl text-white'>Food Delivery</h2>
          <span className='text-sm text-[#99A1AF]'>Connecting restaurants and vendors with customers</span>
        </div>

        <div className='pt-10 px-4 min-h-[12rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
          <h2 className='text-xl sm:text-2xl text-white'>Partner & Rider Network</h2>
          <span className='text-sm text-[#99A1AF]'>Building a trusted community of delivery professionals</span>
        </div>
      </div>
    </section>
  )
}

export default BeyondBasic