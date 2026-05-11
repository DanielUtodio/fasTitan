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
    <section className='w-full min-h-[40rem] bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-8'>
        <p className='mt-4 text-sm p-2 rounded-3xl bg-primaryCtaBtn-shade10 text-primaryCtaBtn-descriptiveText'>Testimonials</p>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center'>What our customers say</h1>
        <p className='text-sm sm:text-base text-gray-500 text-center'>Real stories from real people who trust FastTitan</p>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>
    </section>
  )
}

export default TrustedAcross
