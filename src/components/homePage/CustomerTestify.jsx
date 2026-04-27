import React from 'react'
import { LuQuote } from 'react-icons/lu'
import VerticalBar from '../ui/VerticalBar'

const circles = [1, 2, 3, 4, 5]
const Corcles = () => {
  return (
    <div className='flex gap-2'>
      {circles.map((circle) => (
        <div key={circle} className='w-3 h-3 rounded-full bg-[#FF1F1F]' />
      ))}
    </div>
  )
}

const CustomerTestify = () => {
  return (
    <div className='w-full min-h-[320px] flex justify-center items-center bg-[#161616] py-12 overflow-hidden'>
      <div className='relative max-w-5xl w-full'>
        <div className='w-full py-10 px-8 flex flex-col md:flex-row justify-center items-center gap-8 shadow-[20px_20px_40px_#0000001A] rounded-3xl relative'>
          <aside className='w-full md:w-1/2 h-64 relative md:h-auto'>
            <img
              className='w-full max-h-[30rem] md:h-full object-cover rounded-lg'
              src="/assets/images/customer.jpg"
              alt="Customer Testimonial"
              loading="lazy"
            />
            <div className=' w-max h-max p-2 flex justify-center items-center bg-[#FF1F1F] text-white rounded-lg absolute -top-3 -left-3'>
              <LuQuote size={28} />
            </div>
          </aside>

          <div className='w-full md:w-1/2 flex flex-col justify-center items-start rounded-lg p-2 gap-4 md:px-4 md:py-8 md:gap-8'>
            <div className='w-full'>
              <h2 className='text-white text-lg ml-4 italic font-sans'>
                "FastTitan helped my business deliver faster and more reliably. Tracking and rider communication made everything stress-free."
              </h2>
            </div>
            <div className='w-full flex justify-start items-center'>
              <VerticalBar name="Adaeze Okoro" role="Small Business Owner, Lagos">
                <div className='w-1 h-[4rem] rounded-md bg-[#FF1F1F]'></div>
              </VerticalBar>
            </div>

            <div className='w-full h-max p-2 flex justify-start items-center gap-2'>
              <Corcles />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerTestify