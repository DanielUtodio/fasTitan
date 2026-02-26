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
        <div className='w-[80%] h-max flex flex-col justify-center items-center gap-12 p-4 mt-14'>
            <h1 className='text-4xl font-bold text-white mb-12'>Our Story</h1>
            {
              storyline.map((item, index) => (
                <div key={index} className='w-[60%] h-max flex flex-col justify-center items-end gap-8'>
                  <div className='w-max h-max flex gap-4 items-start'>
                    <FakeIcon />
                    <div className='w-[30rem] h-max flex flex-col justify-between gap-2'>
                      <h2 className='text-[#FF1F1F] text-xl'>{item.year}</h2>
                      <small className='text-white'>
                        {item.description}
                      </small>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
  )
}

export default OurStory
