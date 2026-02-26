import React from 'react'

const HowWeOperate = () => {
  return (
    <div className='w-full h-[20rem] flex justify-center gap-8 items-center bg-defaultbg'>
        <div className='w-[45%] h-max flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-white'>How We Operate</h1>
            <small className='text-white'>
                FastTitan operates through a seamless integration of technology and human expertise. Our platform connects users with trained riders who ensure timely and secure deliveries. We leverage smart systems to optimize routes, track packages in real-time, and provide transparent updates throughout the delivery process.
            </small>
        </div>
        <div className='w-[40%] h-[80%] rounded-lg'>
            <img className='w-full h-full object-cover rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuQA-Fm77X1ja4mHgIJv_E4l-ncKyIJZBykrbNCGgHw&s" alt="operational process" />
        </div>
    </div>
  )
}

export default HowWeOperate
