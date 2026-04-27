import React from 'react'

const ReadyToDeliver = () => {
  return (
    <div className='w-full h-[120vh] flex justify-center items-center p-8'>
        <div className='w-[90%] h-[90%] relative flex flex-col justify-center items-center gap-6'>
            <div className='absolute left-[30%] top-[10%] w-[20rem] h-[20rem] rounded-full bg-primaryCtaBtn-defaultpry blur-3xl opacity-15'></div>
            <div className='absolute left-[40%] top-[55%] w-[20rem] h-[20rem] rounded-full bg-[#FF6B00] blur-3xl opacity-15'></div>

            <div className='w-[40%] h-max'>
                <h1 className='text-white text-center font-bold text-5xl leading-normal'>Ready to Deliver with FasTitan?</h1>
            </div>
            <div className='w-[50%]'>
                <p className='text-white text-lg text-center'>Join thousands of satisfied customers who trust FastTitan for fast, reliable deliveries across Nigeria.</p>
            </div>
            <div className='w-[40%] h-max p-3 flex justify-center items-center gap-4'>
                <button className='w-max p-2 bg-primaryCtaBtn-defaultpry text-white rounded-lg'>order now</button>
            </div>

            <div className='w-[80%] flex justify-between items-center'>
                <div className='w-[30%] flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-primaryCtaBtn-defaultpry text-4xl font-semibold'>50k+</h1>
                    <p className='text-white'>Deliveries Completed</p>
                </div>


                <div className='w-[30%] flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-primaryCtaBtn-defaultpry text-4xl font-semibold'>1000+</h1>
                    <p className='text-white'>Verified Riders
</p>
                </div>


                <div className='w-[30%] flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-primaryCtaBtn-defaultpry text-4xl font-semibold'>4.8</h1>
                    <p className='text-white'>Average Rating</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadyToDeliver