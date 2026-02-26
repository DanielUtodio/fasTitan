import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const DeliveryCta = () => {
  return (
    <div className='w-full h-[30rem] flex justify-center items-center bg-[linear-gradient(to_bottom,#0A0A0A_0%,#1A1A1A_40%,#0A0A0A_100%)]'>
        <div className='w-full h-max flex justify-start items-start'>
            <div className='w-[34rem] h-[308px] flex flex-col justify-start items-start gap-6 ml-20'>
                <h1 className='text-[2.5rem] text-white font-bold'>Need Something Delivered Today?</h1>
                <p className='text-[1.2rem] text-white'>Post your delivery request in under a minute and get matched with a verified rider instantly.</p>
                <button className='w-max h-max bg-red-600 text-white px-6 py-3 rounded-lg flex justify-center items-center gap-2'>Post a Delivery Now <IoMdArrowForward className='text-white' /></button>
            </div>
        </div>
    </div>
  )
}

export default DeliveryCta



