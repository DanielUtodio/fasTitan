import React from 'react'
import { Link } from "react-router-dom"
const HowItWworks = () => {
  return (
    <section className='w-full py-16 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-screen-xl flex flex-col items-center gap-8'>
        <p className='mt-4 text-sm p-2 rounded-3xl text-primaryCtaBtn-descriptiveText bg-primaryCtaBtn-shade10'>our services</p>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center'>Key Areas</h1>

        <div className='w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='w-full min-h-[15rem] p-6 flex flex-col justify-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
            <h2 className='text-xl sm:text-2xl text-white'>Business Logistics</h2>
            <span className='text-sm text-[#99A1AF]'>Scalable delivery solutions for growing businesses</span>
          </div>

          <div className='w-full min-h-[15rem] p-6 flex flex-col justify-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
            <h2 className='text-xl sm:text-2xl text-white'>Food Delivery</h2>
            <span className='text-sm text-[#99A1AF]'>Connecting restaurants and vendors with customers</span>
          </div>

          <div className='w-full min-h-[15rem] p-6 flex flex-col justify-start gap-3 bg-gradients-gradientOne border border-[#1E2939] rounded-md'>
            <h2 className='text-xl sm:text-2xl text-white'>Partner & Rider Network</h2>
            <span className='text-sm text-[#99A1AF]'>Building a trusted community of delivery professionals</span>
          </div>
        </div>
        <span className='text-white text-center'>Ready to get started? <Link to="#" className='text-red-500'>contact us now</Link></span>
      </div>
    </section>
  )
}

export default HowItWworks
