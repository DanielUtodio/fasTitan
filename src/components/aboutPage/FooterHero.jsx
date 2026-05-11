import React from 'react'

const FooterHero = () => {
  return (
    <section className='w-full min-h-[30rem] flex justify-center items-center bg-[linear-gradient(to_bottom,#0A0A0A_0%,#1A1A1A_40%,#0A0A0A_100%)] px-4 sm:px-6 lg:px-8 py-12'>
      <div className='w-full max-w-4xl flex justify-start items-start'>
        <div className='w-full max-w-2xl flex flex-col justify-start items-start gap-6'>
          <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white'>We're just getting started. FastTitan is committed to building a delivery system that works — faster, smarter, and better for everyone.</h1>
        </div>
      </div>
    </section>
  )
}

export default FooterHero
