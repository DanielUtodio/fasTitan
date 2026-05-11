import React from 'react'
import { FiPackage } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const PackageTypes = () => {
  return (
    <section className='w-full min-h-[30rem] flex flex-col justify-center items-center bg-[#0A0A0A] px-4 sm:px-6 lg:px-8 py-16'>
      <div className='w-max flex items-start justify-center mb-8'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-white'>If It Fits, We'll Handle It.</h1>
      </div>

      <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <aside className='flex flex-col items-center gap-4'>
          <div className='p-6 flex justify-center items-center bg-primaryCtaBtn-defaultpry rounded-lg text-white text-3xl sm:text-4xl'>
            <IoRestaurantOutline />
          </div>
          <p className='text-white font-medium text-base sm:text-lg capitalize'>Hot Meals</p>
        </aside>

        <aside className='flex flex-col items-center gap-4'>
          <div className='p-6 flex justify-center items-center bg-primaryCtaBtn-descriptiveText rounded-lg text-white text-2xl sm:text-3xl'>
            <FiPackage />
          </div>
          <p className='text-white font-medium text-base sm:text-lg capitalize'>Parcels & Boxes</p>
        </aside>

        <aside className='flex flex-col items-center gap-4'>
          <div className='p-6 flex justify-center items-center shadow-[0_20px_10px_#070606] bg-[#000000] rounded-lg text-white text-2xl sm:text-3xl'>
            <FiShoppingBag />
          </div>
          <p className='text-white font-medium text-base sm:text-lg capitalize'>Documents</p>
        </aside>

        <aside className='flex flex-col items-center gap-4'>
          <div className='p-6 flex justify-center items-center bg-primaryCtaBtn-defaultpry rounded-lg text-white text-2xl sm:text-3xl'>
            <IoRestaurantOutline />
          </div>
          <p className='text-white font-medium text-base sm:text-lg capitalize'>Groceries</p>
        </aside>
      </div>

      <div className='w-full max-w-md flex justify-center items-center gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='font-bold text-primaryCtaBtn-defaultpry text-2xl sm:text-3xl lg:text-4xl'>50kg</h1>
          <small className='text-gray-300 text-xs sm:text-sm'>Max Weight</small>
        </div>

        <div className='flex flex-col items-center gap-2 border-x-2 border-gray-600 px-4'>
          <h1 className='font-bold text-primaryCtaBtn-defaultpry text-2xl sm:text-3xl lg:text-4xl'>24/7</h1>
          <small className='text-gray-300 text-xs sm:text-sm'>Services Available</small>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <h1 className='font-bold text-primaryCtaBtn-defaultpry text-2xl sm:text-3xl lg:text-4xl'>Fast</h1>
          <small className='text-gray-300 text-xs sm:text-sm'>Delivery Speed</small>
        </div>
      </div>
    </section>
  )
}

export default PackageTypes
