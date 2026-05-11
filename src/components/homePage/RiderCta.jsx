import React from 'react'
import { LuDollarSign, LuTrendingUp, LuCalendar, LuBike } from 'react-icons/lu'

const RiderCta = () => {
  return (
    <section className='w-full min-h-max flex justify-center items-center px-4 sm:px-6 lg:px-8 py-16'>
      <div className='relative w-full max-w-6xl flex flex-col lg:flex-row justify-between items-start gap-8'>
        <div className="absolute -left-20 top-1/4 w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-40 bg-gradient-to-r from-secondaryCtaBtn-shade10 via-secondaryCtaBtn-defaultsec to-secondaryCtaBtn-descriptiveText blur-3xl opacity-30 rounded-full"></div>
        <div className='w-full lg:w-2/5 h-64 lg:h-96 flex justify-center items-center rounded-3xl'>
          <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/dispatcher.jpg" alt="Rider" />
        </div>

        <div className='w-full lg:w-3/5 flex flex-col justify-start items-start gap-6'>
          <span className='w-max p-2 text-secondaryCtaBtn-defaultsec text-sm rounded-3xl bg-secondaryCtaBtn-shade10'>Earn with FastTitan</span>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>Got a Bike?</h1>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>Start Earning</h1>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>With FastTitan</h1>
          <div className='w-full max-w-lg'>
            <p className='text-lg sm:text-xl text-secondaryTextColor'>Deliver on your own schedule and earn steady income with clear jobs and fair pay.</p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='flex items-start justify-start gap-4'>
              <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                <LuDollarSign />
              </div>
              <div>
                <p className='text-base sm:text-lg font-bold text-defaultTextColor'>Fair Pay</p>
                <small className='text-sm text-[#99A1AF]'>Competitive rates for every delivery</small>
              </div>
            </div>

            <div className='flex items-start justify-start gap-4'>
              <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                <LuCalendar />
              </div>
              <div>
                <p className='text-base sm:text-lg font-bold text-defaultTextColor'>Flexible Schedule</p>
                <small className='text-sm text-[#99A1AF]'>Work when you want, where you want</small>
              </div>
            </div>

            <div className='flex items-start justify-start gap-4'>
              <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                <LuTrendingUp />
              </div>
              <div>
                <p className='text-base sm:text-lg font-bold text-defaultTextColor'>Steady Income</p>
                <small className='text-sm text-[#99A1AF]'>Clear jobs and consistent earning</small>
              </div>
            </div>

            <div className='flex items-start justify-start gap-4'>
              <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                <LuBike />
              </div>
              <div>
                <p className='text-base sm:text-lg font-bold text-defaultTextColor'>Easy Start</p>
                <small className='text-sm text-[#99A1AF]'>Simple registration and training</small>
              </div>
            </div>
          </div>
          <button className='bg-secondaryCtaBtn-defaultsec text-white px-6 py-3 rounded-lg hover:bg-secondaryCtaBtn-descriptiveText transition-colors'>Sign up as a Rider</button>
        </div>
      </div>
    </section>
  )
}

export default RiderCta
