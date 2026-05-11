import React from 'react'
import { FiPackage } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";


const OurServices = () => {
  return (
    <section className='w-full min-h-[40rem] bg-background-reusable flex flex-col justify-center items-center gap-6 px-4 sm:px-6 lg:px-8 py-16'>
      <p className='mt-4 text-sm p-2 rounded-3xl text-primaryCtaBtn-descriptiveText bg-primaryCtaBtn-shade10'>Our Services</p>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center'>Everything you need delivered</h1>
      <p className='text-sm sm:text-base text-[#99A1AF] text-center'>From food to groceries, we've got you covered</p>

      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        <div className='min-h-[16rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md p-6'>
          <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
            <FiPackage size={32} />
          </div>
          <h2 className='text-xl sm:text-2xl text-white'>Logistics & Parcel Delivery</h2>
          <p className='text-sm text-[#99A1AF]'>Fast document and package delivery across the city.</p>
        </div>

        <div className='min-h-[16rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md p-6'>
          <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
            <IoRestaurantOutline size={32} />
          </div>
          <h2 className='text-xl sm:text-2xl text-white'>Food Delivery</h2>
          <p className='text-sm text-[#99A1AF]'>Hot, fast food delivery from restaurants and vendors.</p>
        </div>

        <div className='min-h-[16rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md p-6'>
          <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
            <FiShoppingBag size={32} />
          </div>
          <h2 className='text-xl sm:text-2xl text-white'>Errands & Relocation</h2>
          <p className='text-sm text-[#99A1AF]'>Personal errands, item pickups, and small relocations.</p>
        </div>
      </div>
      <button className='w-max px-6 py-3 mt-6 flex justify-center items-center rounded-lg text-white bg-primaryCtaBtn-defaultpry hover:bg-primaryCtaBtn-descriptiveText transition-colors'>Post a Delivery Now</button>
    </section>
  )
}

export default OurServices
