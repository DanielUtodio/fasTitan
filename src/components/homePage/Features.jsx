import React from 'react'
import { GrLocation } from 'react-icons/gr'

const Features = () => {
  return (
    <div className='w-full h-max p-6 box-border flex flex-col items-center justify-center bg-gradientTwo gap-24'>
        <div className='w-[35%] h-max p-4 text-center'>
          <h2 className='font-bold text-4xl text-white'>Everything You Need in One Delivery App.</h2>
        </div>

        <div className='w-[75%] flex justify-between items-center'>
            <aside className='w-[40%] h-[30rem] grid grid-cols-2 grid-rows-3 gap-2'>
                <div className='bg-[#161616] p-6 flex flex-col gap-2 rounded-lg text-white'>
                    <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
                        <GrLocation />
                    </div>
                    <p>Live Tracking</p>
                    <small>Track your delivery in real-time</small>
                </div>

                <div className='bg-[#161616] p-6 flex flex-col gap-2 rounded-lg text-white'>
                    <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
                        <GrLocation />
                    </div>
                    <p>Live Tracking</p>
                    <small>Track your delivery in real-time</small>
                </div>

                <div className='bg-[#161616] p-6 flex flex-col gap-2 rounded-lg text-white'>
                    <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
                        <GrLocation />
                    </div>
                    <p>Live Tracking</p>
                    <small>Track your delivery in real-time</small>
                </div>

                <div className='bg-[#161616] p-6 flex flex-col gap-2 rounded-lg text-white'>
                    <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
                        <GrLocation />
                    </div>
                    <p>Live Tracking</p>
                    <small>Track your delivery in real-time</small>
                </div>

                <div className='bg-[#161616] p-6 flex flex-col gap-2 rounded-lg text-white'>
                    <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
                        <GrLocation />
                    </div>
                    <p>Live Tracking</p>
                    <small>Track your delivery in real-time</small>
                </div>

                <div className='bg-[#161616] p-6 flex flex-col gap-2 rounded-lg text-white'>
                    <div className='w-max h-max p-2 rounded-lg bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>
                        <GrLocation />
                    </div>
                    <p>Live Tracking</p>
                    <small>Track your delivery in real-time</small>
                </div>
            </aside>


            <div className='w-[45%] h-[20rem] rounded-3xl'>
                <img className='w-full h-full object-cover rounded-3xl' src="/assets/images/mobilescreen.jpg" alt="Features" />
            </div>
        </div>
    </div>
  )
}

export default Features
