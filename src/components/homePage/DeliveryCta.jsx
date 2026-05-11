import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const DeliveryCta = () => {
  return (
    <section className='w-full min-h-[30rem] flex justify-center items-center bg-[linear-gradient(to_bottom,#0A0A0A_0%,#1A1A1A_40%,#0A0A0A_100%)] px-4 sm:px-6 lg:px-8 py-12'>
      <div className='w-full max-w-4xl flex justify-start items-start'>
        <div className='w-full max-w-2xl flex flex-col justify-start items-start gap-6'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold'>Need Something Delivered Today?</h1>
          <p className='text-base sm:text-lg lg:text-xl text-white'>Post your delivery request in under a minute and get matched with a verified rider instantly.</p>
          <button className='w-max h-max bg-red-600 text-white px-6 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-700 transition-colors'>Post a Delivery Now <IoMdArrowForward className='text-white' /></button>
        </div>
      </div>
    </section>
  )
}

export default DeliveryCta



