import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='w-full h-[24rem] flex justify-center gap-8 items-center bg-defaultbg'>
        <div className='w-[40%] h-full rounded-lg'>
            <img className='w-full h-full object-cover rounded-lg' src="/assets/images/whatwedo.png" alt="FastTitan Platform" />
        </div>

        <div className='w-[45%] h-max flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-white'>What We Do</h1>
            <small className='text-white'>
               Logistics & Parcel Delivery Fast and secure delivery of documents, packages, and goods.s.
            </small>
        </div>
    </div>
  )
}

export default WhatWeDo
