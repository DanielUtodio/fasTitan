import React from 'react'

const Fastitan = () => {
  return (
    <div className='w-[90%] h-[20rem] flex justify-between gap-8 items-center bg-defaultbg'>
        <div className='w-[35%] h-max flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-white'>What is FastTitan?</h1>
            <small className='text-white'>
                FastTitan is a technology-driven logistics platform designed to simplify everyday deliveries for individuals, businesses, and food vendors. From parcels and errands to food delivery, we provide fast, affordable, and dependable services powered by trained riders and smart systems.
            </small>
        </div>
        <div className='w-[50%] h-full rounded-lg'>
            <img className='w-full h-full object-cover rounded-lg' src="/assets/images/whatisfasTitan.png" alt="FastTitan Platform" />
        </div>
    </div>
  )
}

export default Fastitan
