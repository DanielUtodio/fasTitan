import React from 'react'

const FoodDelivery = () => {
  return (
    <div className='w-full h-[20rem] flex justify-center gap-8 items-center bg-defaultbg'>
        <div className='w-[45%] h-max flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-white'>What is FastTitan?</h1>
            <small className='text-white'>
                FastTitan is a technology-driven logistics platform designed to simplify everyday deliveries for individuals, businesses, and food vendors. From parcels and errands to food delivery, we provide fast, affordable, and dependable services powered by trained riders and smart systems.
            </small>
        </div>
        <div className='w-[40%] h-max
         rounded-lg'>
            <img className='w-full h-full object-cover rounded-lg' src="/assets/images/fooddelivery.png" alt="Food Delivery" />
        </div>
    </div>
  )
}

export default FoodDelivery
