import React from 'react'
import { LuQuote } from "react-icons/lu";
    
const OurValues = () => {
  return (
    <section className='w-full min-h-[35rem] flex flex-col gap-8 justify-center items-center relative px-4 sm:px-6 lg:px-8 py-16'>
      <div className='w-full max-w-4xl h-full flex flex-col lg:flex-row justify-between items-center border border-[#1E2939] rounded-lg'>
        <aside className='w-full lg:w-1/2 h-64 lg:h-full relative flex justify-center items-center rounded-bl-lg rounded-tl-lg'>
          <img className='w-full h-full object-cover' src="/assets/images/keyboarding.avif" alt="Our Values" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#00000080] to-transparent"></div>
          <div className='w-max h-max p-3 flex justify-center items-center bg-gradient-to-b from-primaryCtaBtn-defaultpry to-primaryCtaBtn-descriptiveText text-white rounded-full absolute -top-4 left-3 lg:left-11/12 shadow-[0_25px_25px_#FF1F1F4D]'>
            <LuQuote size={24} />
          </div>
        </aside>

        <div className='w-full lg:w-1/2 flex flex-col justify-center items-start p-4 gap-4 bg-gradientTwo rounded-2xl'>
          <div className='w-max flex justify-center'>
            <p className='py-1 px-2 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText text-xs sm:text-sm rounded-3xl capitalize'>our values</p>
          </div>
          <div className='w-full flex'>
            <h2 className='text-white text-xl sm:text-2xl lg:text-3xl text-center'>"Our focus on care, speed, and professionalism is what makes FastTitan reliable from day one."</h2>
          </div>
          <div className='w-full flex justify-center'>
          </div>
        </div>
      </div>

      <div className='w-full max-w-4xl flex flex-wrap justify-around text-white text-xs sm:text-sm gap-4'>
        <p className='py-2 px-4 bg-[#1A1A1A] rounded-3xl capitalize'>customer first</p>
        <p className='py-2 px-4 bg-[#1A1A1A] rounded-3xl capitalize'>speed and reliability</p>
        <p className='py-2 px-4 bg-[#1A1A1A] rounded-3xl capitalize'>transparency</p>
        <p className='py-2 px-4 bg-[#1A1A1A] rounded-3xl capitalize'>professionalism</p>
      </div>
    </section>
  )
}

export default OurValues
