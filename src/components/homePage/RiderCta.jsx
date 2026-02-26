import React from 'react'
import { LuDollarSign, LuTrendingUp, LuCalendar, LuBike } from 'react-icons/lu'

const RiderCta = () => {
  return (
    <div className='w-full h-max flex justify-center items-center'>
        <div className='relative w-[90%] h-max flex justify-between items-start py-8'>

            <div className="absolute -left-20 top-[60%] w-80 h-40 bg-gradient-to-r from-secondaryCtaBtn-shade10 via-secondaryCtaBtn-defaultsec to-secondaryCtaBtn-descriptiveText blur-3xl opacity-30 rounded-full"></div>
            <div className='w-[40%] h-[30rem] flex justify-center items-center rounded-3xl'>
                <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/dispatcher.jpg" alt="Rider" /> 
            </div>


            <div className='w-[45%] h-max flex flex-col justify-start items-start gap-6'>
                <span className='w-max p-2 text-secondaryCtaBtn-defaultsec text-sm rounded-3xl bg-secondaryCtaBtn-shade10'>Earn with Fastitan</span>
                <h1 className='text-4xl font-bold text-white'>Got a Bike?</h1>
                <h1 className='text-4xl font-bold text-white'>Start Earning</h1>
                <h1 className='text-4xl font-bold text-white'>With Fastitan</h1>
                <div className='w-[88%]'>
                    <p className='text-xl text-secondaryTextColor'>Deliver on your own schedule and earn steady income with clear jobs and fair pay.</p>
                </div>
                <div className='w-[85%] grid grid-cols-2 grid-rows-2 gap-6'>
                    <div className='h-max flex items-start justify-start gap-4'>
                        <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                            <LuDollarSign />
                        </div>
                        <div>
                            <p className='text-md font-bold text-defaultTextColor'>Fair Pay</p>
                            <small className='text-sm text-[#99A1AF]'>Competitive rates for every delivery</small>
                        </div>
                    </div>

                    <div className=' h-max flex items-start justify-start gap-4'>
                        <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                            <LuCalendar />
                        </div>
                        <div>
                            <p className='text-md font-bold text-defaultTextColor'>Flexible Schedule</p>
                            <small className='text-sm text-[#99A1AF]'>Work when you want, where you want</small>
                        </div>
                    </div>

                    <div className='h-max flex items-start justify-start gap-4'>
                        <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                            <LuTrendingUp />
                        </div>
                        <div>
                            <p className='text-md font-bold text-defaultTextColor'>Steady Income</p>
                            <small className='text-sm text-[#99A1AF]'>Clear jobs and consistent earning</small>
                        </div>
                    </div>

                    <div className='h-max flex items-start justify-start gap-4'>
                        <div className='w-max p-4 flex items-center justify-center text-secondaryCtaBtn-defaultsec bg-secondaryCtaBtn-shade10 rounded-lg'>
                            <LuBike />
                        </div>
                        <div>
                            <p className='text-md font-bold text-defaultTextColor'>Easy Start</p>
                            <small className='text-sm text-[#99A1AF]'>Just a bike and smartphone needed</small>
                        </div>
                    </div>
                </div>
                <button className='bg-secondaryCtaBtn-defaultsec text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'>
                    Sign up as a Rider
                </button>
            </div>    
        </div>

        
    </div>
  )
}

export default RiderCta
