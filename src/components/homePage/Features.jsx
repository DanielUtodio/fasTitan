import React from 'react'
import { GrLocation } from 'react-icons/gr'

const Features = () => {
  return (
    <section className='w-full min-h-max px-4 sm:px-6 lg:px-8 py-16 box-border flex flex-col items-center justify-center bg-gradientTwo gap-12 lg:gap-24'>
      <div className='w-full max-w-2xl text-center'>
        <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-white'>Everything You Need in One Delivery App.</h2>
      </div>

      <div className='w-full max-w-6xl flex flex-col-reverse lg:flex-row justify-center items-start gap-8'>
        <aside className='w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10'>
          <div className='bg-[#161616] p-4 sm:p-6 flex flex-col gap-2 rounded-lg text-white'>
            <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
              <GrLocation />
            </div>
            <p className='text-sm sm:text-base'>Live Tracking</p>
            <small className='text-xs sm:text-sm'>Track your delivery in real-time</small>
          </div>

          <div className='bg-[#161616] p-4 sm:p-6 flex flex-col gap-2 rounded-lg text-white'>
            <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
              <GrLocation />
            </div>
            <p className='text-sm sm:text-base'>Live Tracking</p>
            <small className='text-xs sm:text-sm'>Track your delivery in real-time</small>
          </div>

          <div className='bg-[#161616] p-4 sm:p-6 flex flex-col gap-2 rounded-lg text-white'>
            <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
              <GrLocation />
            </div>
            <p className='text-sm sm:text-base'>Live Tracking</p>
            <small className='text-xs sm:text-sm'>Track your delivery in real-time</small>
          </div>

          <div className='bg-[#161616] p-4 sm:p-6 flex flex-col gap-2 rounded-lg text-white'>
            <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
              <GrLocation />
            </div>
            <p className='text-sm sm:text-base'>Live Tracking</p>
            <small className='text-xs sm:text-sm'>Track your delivery in real-time</small>
          </div>

          <div className='bg-[#161616] p-4 sm:p-6 flex flex-col gap-2 rounded-lg text-white'>
            <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
              <GrLocation />
            </div>
            <p className='text-sm sm:text-base'>Live Tracking</p>
            <small className='text-xs sm:text-sm'>Track your delivery in real-time</small>
          </div>

          <div className='bg-[#161616] p-4 sm:p-6 flex flex-col gap-2 rounded-lg text-white'>
            <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
              <GrLocation />
            </div>
            <p className='text-sm sm:text-base'>Live Tracking</p>
            <small className='text-xs sm:text-sm'>Track your delivery in real-time</small>
          </div>
        </aside>

        <div className='w-full lg:w-2/5 min-h-[20rem] sm:min-h-[24rem] lg:min-h-[26rem] rounded-3xl overflow-hidden relative z-0'>
          <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/mobilescreen.jpg" alt="Features" />
        </div>
      </div>
    </section>
  )
}

export default Features
