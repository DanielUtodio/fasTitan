import React from 'react'

const ServiceSummary = () => {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center items-start gap-16 bg-background-reusableTwo'>
      <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-8'>
        <div className='w-full lg:w-1/3 flex flex-col justify-start items-start gap-4'>
          <p className='text-base sm:text-lg font-medium text-defaultTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
          <p className='text-sm sm:text-base text-secondaryTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
        </div>
        <div className='w-full lg:w-2/5 h-48 lg:h-60 flex justify-center items-center rounded-3xl'>
          <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/pkg.jpg" alt="Service" />
        </div>
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-8'>
        <div className='w-full lg:w-2/5 h-48 lg:h-96 flex justify-center items-center rounded-3xl'>
          <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/rider.png" alt="Riders" />
        </div>
        <div className='w-full lg:w-1/3 flex flex-col justify-start items-start gap-4'>
          <p className='text-base sm:text-lg font-medium text-defaultTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
          <p className='text-sm sm:text-base text-secondaryTextColor'>Food, parcels, and errands delivered fast by verified riders with real-time tracking.</p>
          <button className='bg-secondaryCtaBtn-defaultsec text-white px-6 py-3 rounded-lg hover:bg-secondaryCtaBtn-descriptiveText transition-colors'>Let's help you deliver</button>
        </div>
      </div>
    </section>
  )
}

export default ServiceSummary
