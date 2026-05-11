import React from 'react'

const storyline = [
    {
        year: '2024',
        description: 'FastTitan was founded to simplify local logistics and improve delivery reliability.'
    },
    {
        year: '2025',
        description: 'Expansion into food delivery and business dispatch services.'
    },
    { year: '2026', 
      description: 'Platform growth, rider network expansion, and mobile app development.'
    }
]

const FakeIcon = () => {
    return (
        <div className='w-max h-max flex flex-col items-center'>
            <p className='w-3 h-3 bg-[#FF1F1F] rounded-full'></p>
            <div className='w-[1px] h-[3.5rem] bg-white'></div>
        </div>
    )
}

const OurStory = () => {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center items-center gap-12'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12'>Our Story</h1>
      {storyline.map((item, index) => (
        <div key={index} className='w-full max-w-4xl flex flex-col justify-center items-center gap-8'>
          <div className='w-full max-w-2xl flex gap-4 items-start'>
            <FakeIcon />
            <div className='flex-1 flex flex-col justify-between gap-2'>
              <h2 className='text-[#FF1F1F] text-lg sm:text-xl'>{item.year}</h2>
              <p className='text-white text-sm sm:text-base'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default OurStory
