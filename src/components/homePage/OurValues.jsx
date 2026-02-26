import React from 'react'
import { LuQuote } from "react-icons/lu";
import VerticalBar from '../ui/VerticalBar';

const OurValues = () => {
  return (
    <div className='w-full h-[35rem] flex flex-col gap-8 justify-center items-center relative'>
        <div className='w-[55%] h-[75%] flex justify-between items-center border border-[#1E2939] rounded-lg'>
            <aside className='w-[50%] h-full relative flex justify-center items-center rounded-bl-lg rounded-tl-lg'>
                <img className='w-full h-full object-cover' src="/assets/images/keyboarding.avif" alt="Our Values" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#00000080] to-transparent"></div>
                <div className='w-max h-max p-3 flex justify-center items-center bg-gradient-to-b from-primaryCtaBtn-defaultpry to-primaryCtaBtn-descriptiveText text-white rounded-full absolute top-[40%] left-[93%] shadow-[0_25px_25px_#FF1F1F4D]'> 
                    <LuQuote size={24} />
                </div>
            </aside>

            <div className='w-[50%] h-[100%] flex flex-col justify-center items-start p-2 gap-4 bg-gradientTwo rounded-2xl'>
               <div className='w-[35%] flex justify-center'>
                 <p className='w-max py-1 px-2 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText text-[0.7rem] rounded-3xl capitalize'>our values</p>
               </div>
                <div className='w-[85%] flex justify-center'>
                    <h2 className='text-white text-3xl ml-6'>"Our focus on care, speed, and professionalism is what makes FastTitan reliable from day one."</h2>
                </div>
                <div className='w-[68%] flex justify-center'>
                    <VerticalBar
                    name="Adebayo Johnson"
                    role="Founder & CEO, FastTitan"
                    >
                        <div className='w-1 h-[4rem] rounded-md bg-orange-500'></div> 
                    </VerticalBar>
                </div>
            </div>
        </div>

        <div className='w-[55%] flex justify-around text-white text-sm capitalize'>
            <p className='w-max h-max  text-[0.8rem] py-2 px-4 bg-[#1A1A1A] rounded-3xl'><span>customer first</span></p>
            <p className='w-max h-max  text-[0.8rem] py-2 px-4 bg-[#1A1A1A] rounded-3xl'><span>speed and relaibility</span></p>
            <p className='w-max h-max  text-[0.8rem] py-2 px-4 bg-[#1A1A1A] rounded-3xl'>transparency</p>
            <p className='w-max h-max  text-[0.8rem] py-2 px-4 bg-[#1A1A1A] rounded-3xl'>professionalism</p>
        </div>

        <div className='w-[20rem] h-[20rem] bg-[#ffffff, #11111111, #ffffff]'>
            
        </div>
    </div>
  )
}

export default OurValues
