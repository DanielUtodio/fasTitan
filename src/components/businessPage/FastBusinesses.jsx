import React from 'react'
import { FaRegClock } from 'react-icons/fa6'

const FastBusinesses = () => {
  return (
    <div className='w-full h-screen p-3 flex justify-center items-center'>
        <section className='w-[65%] h-[95%] flex justify-between items-center gap-14'>

            <div className='w-[50%] h-max flex flex-col items-start justify-start gap-4'>
                <h1 className='text-white text-4xl font-semibold'>Built for businesses that move fast</h1>
                <p className='text-white'>We understand that every minute counts. That's why we've built a logistics network that combines speed, reliability, and transparency.</p>

                <div className='w-[90%] h-max flex justify-between items-start gap-3'>
                    <div className='w-max h-max p-3 box-border
                     flex justify-center items-center text-white bg-primaryCtaBtn-descriptiveText rounded-lg'>
                        <FaRegClock color='white' />
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-semibold'>Fast Turnaround</h3>
                        <small className='text-white'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</small>
                    </div>
                </div>

                <div className='w-[90%] h-max flex justify-between items-start gap-3'>
                    <div className='w-max h-max p-3 box-border
                     flex justify-center items-center text-white bg-primaryCtaBtn-descriptiveText rounded-lg'>
                        <FaRegClock color='white' />
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-semibold'>Fast Turnaround</h3>
                        <small className='text-white'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</small>
                    </div>
                </div>

                <div className='w-[90%] h-max flex justify-between items-start gap-3'>
                    <div className='w-max h-max p-3 box-border
                     flex justify-center items-center text-white bg-primaryCtaBtn-descriptiveText rounded-lg'>
                        <FaRegClock color='white' />
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-semibold'>Fast Turnaround</h3>
                        <small className='text-white'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</small>
                    </div>
                </div>

                <div className='w-[90%] h-max flex justify-between items-start gap-3'>
                    <div className='w-max h-max p-3 box-border
                     flex justify-center items-center text-white bg-primaryCtaBtn-descriptiveText rounded-lg'>
                        <FaRegClock color='white' />
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-semibold'>Fast Turnaround</h3>
                        <small className='text-white'>We prioritize speed without compromising safety. Most deliveries completed within 2 hours.</small>
                    </div>
                </div>

                <div className='w-[50%] h-max'></div>
            </div>

             <div className='w-[45%] h-[80%] flex justify-center items-center relative z-20'>
                <img className='w-full h-full object-cover rounded-lg' src="/assets/images/dispatcher.jpg" alt="dispatcher" />
                <div className='absolute -top-7 -right-10  w-[5rem] -z-10 h-[5rem] border-2 border-[#FF1F1F33] rounded-md'></div>
                <div className='absolute top-[90%] -left-7 w-[5rem] -z-10 h-[5rem] border-2 border-[#FF6B3533] rounded-md'></div>
            </div>
        </section>
    </div>
  )
}

export default FastBusinesses
