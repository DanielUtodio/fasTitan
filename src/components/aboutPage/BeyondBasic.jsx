import React from 'react'
import { FiPackage } from 'react-icons/fi'


const BeyondBasic = () => {
  return (
    <div className='w-[80%] h-max flex flex-col justify-center items-center gap-12 p-4 mt-14 mb-6'>
        <div className='w-[60%] text-center'>
            <h1 className='text-4xl font-normal text-white'>FastTitan continues to grow beyond basic delivery services.</h1>
        </div>

        <div className='w-[80%] h-max flex justify-between items-center mt-4'>
        
                    <div className='w-[30%] pt-10 px-4 h-[12rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                        <h2 className='text-2xl text-white'>Business Logistics</h2>
                        <span className='text-sm text-[#99A1AF]'>Scalable delivery solutions for growing businesses</span>
                    </div>
        
                    <div className='w-[30%] pt-10 px-4 h-[12rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                        <h2 className='text-2xl text-white'>Food Delivery</h2>
                        <span className='text-sm text-[#99A1AF]'>Connecting restaurants and vendors with customers</span>
                    </div>
        
                     <div className='w-[30%] pt-10 px-4 h-[12rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                        <h2 className='text-2xl text-white'>Partner & Rider Network</h2>
                        <span className='text-sm text-[#99A1AF]'>Building a trusted community of delivery professionals</span>
                    </div>
                </div>
    </div>
  )
}

export default BeyondBasic