import React from 'react'

const WhatWeDo = () => {
  return (
    <section className='w-full min-h-[24rem] flex flex-col lg:flex-row justify-center gap-8 items-center bg-background-defaultbg px-4 sm:px-6 lg:px-8 py-12'>
      <div className='w-full lg:w-2/5 h-64 lg:h-80 rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="/assets/images/whatwedo.png" alt="FastTitan Platform" />
      </div>

      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>What We Do</h1>
        <p className='text-white text-sm sm:text-base'>
          Logistics & Parcel Delivery Fast and secure delivery of documents, packages, and goods.
        </p>
      </div>
    </section>
  )
}

export default WhatWeDo
