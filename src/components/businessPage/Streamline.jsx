import React from 'react'

const Streamline = () => {
  return (
    <div className='w-full h-[30rem] flex flex-col items-center text-center gap-10 justify-start bg-red-500'>
        <div className='w-[40%]'>
            <h1 className='text-white text-4xl mt-[6rem]'>Ready to Streamline Your Deliveries?</h1>
        </div>
        <p className='text-white'>Join hundreds of businesses that trust FastTitan for fast, reliable logistics</p>
        <div className='w-full flex justify-center'>
            <button className='w-max h-max p-2 flex justify-center items-center bg-white rounded-lg '>Contact Sales</button>
        </div>
    </div>
  )
}

export default Streamline
