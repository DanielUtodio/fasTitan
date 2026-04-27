import React from 'react'
import { FiPackage } from 'react-icons/fi'

const WhatWeDeliver = () => {
  return (
    <div className='w-full h-[40rem] bg-background-reusable flex flex-col justify-center items-center gap-6'>

            <h1 className='text-4xl text-white font-bold'>Everything you need delivered</h1>
            <span className='text-sm text-[#99A1AF]'>From food to groceries, we’ve got you covered</span>
    
            <div className='w-[80%] h-max flex justify-between items-center mt-4'>
    
                <div className='w-[28%] h-max flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                   <aside className='w-full relative'>
                        <img className='w-full h-full/2 object-cover rounded-lg' src="/assets/images/fooddelivery.png" alt="Food Delivery"  />
                         <div className='w-max p-2 text-white bg-red-500 rounded-lg absolute top-2 left-2'>
                        <FiPackage size={22} />
                    </div>
                   </aside>
                    <div className='w-full h-max p-3'>
                        <h2 className='text-2xl text-white'>Logistics & Parcel Delivery</h2>
                    <span className='text-sm text-[#99A1AF]'>Fast document and package delivery across the city..</span>
                    </div>
                </div>
    
                <div className='w-[28%] h-[20rem] flex flex-col jus tify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                    <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
                        <FiPackage size={32} />
                    </div>
                    <h2 className='text-2xl text-white'>Food Delivery</h2>
                    <span className='text-sm text-[#99A1AF]'>Hot, fast food delivery from restaurants and vendors.</span>
                </div>
    
                 <div className='w-[28%] h-[20rem] flex flex-col justify-center items-center text-center gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                    <div className='w-max p-4 text-white bg-red-500 rounded-lg'>
                        <FiPackage size={32} />
                    </div>
                    <h2 className='text-2xl text-white'>Errands & Relocation</h2>
                    <span className='text-sm text-[#99A1AF]'>Personal errands, item pickups, and small relocations.</span>
                </div>
            </div>
    
        </div>
  )
}

export default WhatWeDeliver
