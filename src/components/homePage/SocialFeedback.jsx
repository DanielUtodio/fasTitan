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
        <div className='relative w-full min-h-[20rem] h-max p-4 flex flex-col items-start justify-center gap-6 border border-[#1E2939] rounded-lg bg-gradientOne'>
            <div className='w-max h-max p-2 flex justify-center items-center  bg-gradient-to-b from-primaryCtaBtn-defaultpry to-primaryCtaBtn-descriptiveText absolute -top-5 left-5 shadow-[0_15px_20px_#FF1F1F4D] text-white             rounded-full'>
                    <LuQuote size={28} />
            </div>
            
            <div className='w-max flex m-0'><Starz /></div>
            <p className='text-white m-0'>"FastTitan delivered my documents in under 30 minutes. Reliable and professional."</p>
            <hr className='w-full max-w-[12rem]' />
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
    <section className='w-full min-h-[40rem] bg-[#0A0A0A] flex flex-col justify-center items-center gap-8 px-4 sm:px-6 lg:px-8 py-16'>
      <p className='mt-4 text-sm p-2 rounded-3xl bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>Testimonials</p>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center'>What our customers say</h1>
      <p className='text-sm sm:text-base text-gray-500 text-center'>Real stories from real people who trust FastTitan</p>

      <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6'>
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </section>
  )
}

export default SocialFeedback