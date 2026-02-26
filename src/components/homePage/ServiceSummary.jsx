import React from 'react'

const ServiceSummary = () => {
  return (
    <div className='w-[90%] h-max flex flex-col justify-center items-start pt-4 gap-16 bg-background-reusableTwo'>
      <div className='w-[93%] h-max flex justify-between items-start'>
        <div className='w-[30%] flex flex-col justify-start items-start gap-4'>
            <p className='text-[1.4rem] font-medium text-defaultTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
            <small className='text-[1rem] text-secondaryTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</small>
        </div>
        <div className='w-[40%] h-[15rem] flex justify-center items-center rounded-3xl'>
            <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/pkg.jpg" alt="Service" />
        </div>
      </div>

      <div className='w-[93%] h-max flex justify-between items-center'>
        <div className='w-[40%] h-[24rem] flex justify-center items-center rounded-3xl'>
            <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/rider.png" alt="Riders" />
        </div>
        <div className='w-[30%] flex flex-col justify-start items-start gap-4'>
             <p className='text-[1.4rem] font-medium text-defaultTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
            <small className='text-[1rem] text-secondaryTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</small>
            <button className='bg-secondaryCtaBtn-defaultsec text-white px-4 py-2 rounded-lg transition-colors duration-300'>Let's help you deliver</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceSummary
