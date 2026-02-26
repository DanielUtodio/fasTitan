import React from 'react'
import VerticalBar from '../ui/VerticalBar'
import { LuQuote } from 'react-icons/lu'

const CustomerTestify = () => {

const circles = [1, 2, 3, 4, 5]

const Corcles = () => {
    return (
       <>
         {circles.map((e, i)=> <span key={i} className='w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full bg-orange-500'>{e=""}</span>)}
       </> 
    ) 
}

  return (
    <div className='w-full h-[40rem] flex justify-center items-center bg-[#161616]'>
        <div className='w-[55%] h-[65%] py-10 px-8 flex justify-between items-center shadow-[20px_20px_40px_#0000001A] rounded-3xl relative'>
            <aside className='w-[50%] h-full relative'>
                <img className='w-full h-full object-cover rounded-lg' src="/assets/images/customer.jpg" alt="Customer Testimonial" />
                <div className=' w-max h-max p-2 flex justify-center items-center bg-[#FF1F1F] text-white rounded-lg absolute -top-5 -left-5'>
                    <LuQuote size={28} />
                </div>
            </aside>

            <div className='w-[50%] h-[100%] flex flex-col justify-center items-start rounded-lg p-2 gap-4'>
                <div className='w-[85%] flex justify-center'>
                    <h2 className='text-white text-lg ml-4 italic font-sans'>"FastTitan helped my business deliver faster and more reliably. Tracking and rider communication made everything stress-free."</h2>
                </div>
                   <div className='w-[70%] flex justify-center items-center'>
                     <VerticalBar name="Adaeze Okoro"
                    role="Small Business Owner, Lagos">
                        <div className='w-1 h-[4rem] rounded-md bg-[#FF1F1F]'></div> 
                    </VerticalBar>
                   </div>

                    <div className='w-[70%] h-max p-2 flex justify-start items-center gap-2 ml-2'>
                        <Corcles />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerTestify
