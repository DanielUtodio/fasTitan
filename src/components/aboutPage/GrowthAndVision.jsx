import React from 'react'


const GrowthAndVision = () => {
  return (
    <div className='w-[90%] h-max flex justify-center items-center gap-6 bg-background-defaultbg'>
        <div className='w-[50%] h-max flex flex-col gap-4 justify-start items-start '>
            <h1 className='text-[2.5rem] text-white font-bold'>Our Growth and Vision</h1>
            <small className='text-white text-[1.2rem]'>
                FastTitan was built to solve real delivery problems — speed, trust, and affordability. As demand grows, we are expanding our rider network, improving our technology, and building systems that support businesses and everyday users.
            </small>
        </div>

        <div className='w-[45%] h-max p-6 flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-[#FF1F1F0D] to-[#FF6B350D] rounded-lg'>
            <div className='w-[90%] h-max p-2 flex justify-between items-center border-b border-white'>
                <h1 className='text-4xl font-bold text-[#FF1F1F]'>500+</h1>
                <span className='text-white'>active riders</span>
            </div>

            <div className='w-[90%] h-max p-2 flex justify-between items-center border-b border-white'>
                <h1 className='text-4xl font-bold text-[#FF1F1F]'>10k+</h1>
                <span className='text-white'>Deliveries completed </span>
            </div>

            <div className='w-[90%] h-max p-2 flex justify-between items-center'>
                <h1 className='text-4xl font-bold text-[#FF1F1F]'>24/7</h1>
                <span className='text-white'>services available</span>
            </div>
        </div>
    </div>
  )
}

export default GrowthAndVision
