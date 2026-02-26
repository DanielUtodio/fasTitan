import React from 'react'
import { FiPackage } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";


const OurServices = () => {
  return (  
    <div className='w-full h-[40rem] bg-background-reusable flex flex-col justify-center items-center gap-6'>
        <p className='mt-4 text-sm p-2 rounded-3xl text-primaryCtaBtn-descriptiveText bg-primaryCtaBtn-shade10'>our services</p>
        <h1 className='text-4xl text-white font-bold'>Everything you need delivered</h1>
        <span className='text-sm text-[#99A1AF]'>From food to groceries, we’ve got you covered</span>

        <div className='w-[80%] h-max flex justify-between items-center mt-4'>

            <div className='w-[28%] h-[16rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
                    <FiPackage size={32} />
                </div>
                <h2 className='text-2xl text-white'>Logistics & Parcel Delivery</h2>
                <span className='text-sm text-[#99A1AF]'>Fast document and package delivery across the city..</span>
            </div>

            <div className='w-[28%] h-[16rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
                    <FiPackage size={32} />
                </div>
                <h2 className='text-2xl text-white'>Food Delivery</h2>
                <span className='text-sm text-[#99A1AF]'>Hot, fast food delivery from restaurants and vendors.</span>
            </div>

             <div className='w-[28%] h-[16rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
                    <FiPackage size={32} />
                </div>
                <h2 className='text-2xl text-white'>Errands & Relocation</h2>
                <span className='text-sm text-[#99A1AF]'>Personal errands, item pickups, and small relocations.</span>
            </div>
        </div>
        <button className='w-max px-2 py-1 mt-6 flex justify-between items-center rounded-lg text-white bg-primaryCtaBtn-defaultpry'>Post a Delivery Now</button>
    </div>
  )
}

export default OurServices
