import React from 'react'
import { Link } from "react-router-dom"
const HowItWworks = () => {
  return (
    <div className='w-[80%] h-max flex flex-col items-center justify-center gap-14 py-4'>
        <p className='mt-4 text-sm p-2 rounded-3xl text-primaryCtaBtn-descriptiveText bg-primaryCtaBtn-shade10'>our services</p>
        <h1 className='text-4xl font-bold text-white'>Key Areas</h1>


        <div className='w-full h-max flex justify-between items-center mt-4'>
        
                    <div className='w-[28%] pt-10 px-4 h-[15rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                        <h2 className='text-2xl text-white'>Business Logistics</h2>
                        <span className='text-sm text-[#99A1AF]'>Scalable delivery solutions for growing businesses</span>
                    </div>
        
                    <div className='w-[28%] pt-10 px-4 h-[15rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                        <h2 className='text-2xl text-white'>Food Delivery</h2>
                        <span className='text-sm text-[#99A1AF]'>Connecting restaurants and vendors with customers</span>
                    </div>
        
                     <div className='w-[28%] pt-10 px-4 h-[15rem] flex flex-col justify-start items-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
                        <h2 className='text-2xl text-white'>Partner & Rider Network</h2>
                        <span className='text-sm text-[#99A1AF]'>Building a trusted community of delivery professionals</span>
                    </div>
                </div>
                <span className='text-white'>Ready to get started? <Link to="#" className='text-red-500'>contact us now</Link></span>
    </div>
  )
}

export default HowItWworks
