import React from 'react'

const FoodDelivery = () => {
  return (
    <section className='w-full min-h-[20rem] flex flex-col lg:flex-row justify-center gap-8 items-center bg-background-defaultbg px-4 sm:px-6 lg:px-8 py-12'>
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>What is FastTitan?</h1>
        <p className='text-white text-sm sm:text-base'>
          FastTitan is a technology-driven logistics platform designed to simplify everyday deliveries for individuals, businesses, and food vendors. From parcels and errands to food delivery, we provide fast, affordable, and dependable services powered by trained riders and smart systems.
        </p>
      </div>
      <div className='w-full lg:w-2/5 h-64 lg:h-80 rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="/assets/images/fooddelivery.png" alt="Food Delivery" />
      </div>
    </section>
  )
}

export default FoodDelivery
