import React from 'react'
import { IoRestaurantOutline } from "react-icons/io5";
import { CiHeart, CiShop } from "react-icons/ci";
import { PiBuildingOfficeLight } from "react-icons/pi";

const yourBusinesses = [
  {
    icon: IoRestaurantOutline,
    title: "Restaurants & Food Vendors",
    description: "Deliver fresh meals to customers with speed and reliability"
  },
  {
    icon: CiShop,
    title: "Retail & Online Stores",
    description: "Fast last-mile delivery for e-commerce and retail orders"
  },
  {
    icon: CiHeart,
    title: "Pharmacies & Clinics",
    description: "Secure and timely delivery of medical supplies and prescriptions" 
  },
  {
    icon: PiBuildingOfficeLight,
    title: "Corporate Offices",
    description: "Document delivery and business errands handled professionally"
  }
]



const BusinessesLikeYours = () => {
  return (
    <section className='w-full bg-background-footer py-12 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-10'>
        <div className='max-w-3xl text-center'>
          <h1 className='text-white text-3xl sm:text-4xl font-semibold'>Built for Businesses Like Yours</h1>
          <p className='mt-4 text-white text-sm sm:text-base'>FasTitan serves a wide range of businesses across industries</p>
        </div>

        <div className='w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {yourBusinesses.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className='w-full min-h-[18rem] rounded-xl border border-[#1E2939] bg-[#090909] p-6 flex flex-col justify-start gap-4'>
                <div className='inline-flex items-center justify-center rounded-2xl bg-primaryCtaBtn-shade10 p-3'>
                  <Icon size={28} color="#FF1F1F" />
                </div>
                <h2 className='text-white text-xl'>{item.title}</h2>
                <p className='text-white text-sm'>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BusinessesLikeYours
