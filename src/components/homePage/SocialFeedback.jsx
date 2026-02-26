import React from 'react'
import { RiStarFill } from 'react-icons/ri'
import { LuQuote } from 'react-icons/lu'


    const stars = [1, 2, 3, 4, 5]

    const Starz = () => {
        return (
        <>
            {stars.map((e, i)=> <span key={i} className='w-[1.5rem] h-[1.5rem] flex justify-center items-center '><RiStarFill className='text-orange-500' /></span>
            )}
        </>
        ) 
    }


export const FeedbackCard = () => {
    return (
        <div className='relative w-[30%] min-h-[20rem] h-max p-4 flex flex-col items-start justify-center gap-6 border border-[#1E2939] rounded-lg bg-gradientOne'>
            <div className='w-max h-max p-2 flex justify-center items-center  bg-gradient-to-b from-primaryCtaBtn-defaultpry to-primaryCtaBtn-descriptiveText absolute -top-5 left-5 shadow-[0_15px_20px_#FF1F1F4D] text-white             rounded-full'>
                    <LuQuote size={28} />
            </div>
            
            <div className='w-max flex m-0'><Starz /></div>
            <p className='text-white m-0'>"FastTitan delivered my documents in under 30 minutes. Reliable and professional."</p>
            <hr className='w-[12rem]' />
            <aside className='w-max flex gap-2'>
                <div className='w-[3rem] h-[3rem] rounded-full bg-orange-400'>
                    <img src="" alt="" />
                </div>
               <div>
                    <p className='text-white'>Michael Adams</p>
                    <small className='text-white'>Business Owner</small>
               </div>
            </aside>
        </div>
    )
}


const SocialFeedback = () => {


  return (
    <div className='w-full h-[40rem] bg-[#0A0A0A] flex flex-col justify-center items-center gap-8'>
        <p className='mt-4 text-sm p-2 rounded-3xl bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>Testimonials</p>
        <h1 className='text-4xl text-white font-bold'>What our customers say</h1>
        <span className='text-sm text-gray-500'>Real stories from real people who trust FastTitan</span>

        <div className='w-[70%] h-max flex justify-between items-center mt-4'>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
        </div>
    </div>
  )
}

export default SocialFeedback