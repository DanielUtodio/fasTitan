import React from 'react'
import { FaRegClock } from 'react-icons/fa6'

const FastBusinesses = () => {
  return (
    <section className='w-full min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center items-center'>
      <div className='max-w-screen-xl w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-14'>
        <div className='w-full lg:w-1/2 flex flex-col items-start justify-start gap-6'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-semibold'>Built for businesses that move fast</h1>
          <p className='text-white text-sm sm:text-base'>We understand that every minute counts. That's why we've built a logistics network that combines speed, reliability, and transparency.</p>

          <div className='w-full flex flex-col gap-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 p-3 bg-primaryCtaBtn-descriptiveText rounded-lg'>
                <FaRegClock color='white' />
              </div>
              <div>
                <h3 className='text-white text-lg sm:text-xl font-semibold'>Fast Turnaround</h3>
                <span className='text-white text-sm'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</span>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 p-3 bg-primaryCtaBtn-descriptiveText rounded-lg'>
                <FaRegClock color='white' />
              </div>
              <div>
                <h3 className='text-white text-lg sm:text-xl font-semibold'>Fast Turnaround</h3>
                <span className='text-white text-sm'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</span>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 p-3 bg-primaryCtaBtn-descriptiveText rounded-lg'>
                <FaRegClock color='white' />
              </div>
              <div>
                <h3 className='text-white text-lg sm:text-xl font-semibold'>Fast Turnaround</h3>
                <span className='text-white text-sm'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</span>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 p-3 bg-primaryCtaBtn-descriptiveText rounded-lg'>
                <FaRegClock color='white' />
              </div>
              <div>
                <h3 className='text-white text-lg sm:text-xl font-semibold'>Fast Turnaround</h3>
                <span className='text-white text-sm'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-2/5 flex justify-center items-center relative'>
          <img className='w-full max-w-md h-auto object-cover rounded-lg' src="/assets/images/dispatcher.jpg" alt="dispatcher" />
          <div className='absolute -top-4 -right-6 w-20 h-20 border-2 border-[#FF1F1F33] rounded-md hidden sm:block'></div>
          <div className='absolute bottom-0 -left-4 w-20 h-20 border-2 border-[#FF6B3533] rounded-md hidden sm:block'></div>
        </div>
      </div>
    </section>
  )
}

export default FastBusinesses
