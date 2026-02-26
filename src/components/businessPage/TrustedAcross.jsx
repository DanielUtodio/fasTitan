import React from 'react'
import { LuQuote } from 'react-icons/lu'
import { RiStarFill } from 'react-icons/ri'
import { FeedbackCard } from '../homePage/SocialFeedback'

    const stars = [1, 2, 3, 4, 5]

    const Starz = () => {
        return (
        <>
            {stars.map((e, i)=> <span key={i} className='w-[1.5rem] h-[1.5rem] flex justify-center items-center '><RiStarFill className='text-orange-500' /></span>
            )}
        </>
        ) 
    }

const TrustedAcross = () => {
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

export default TrustedAcross
