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
    <div className='w-full h-max flex justify-center items-center p-12'>
        <div className='w-[80%] h-[20rem] flex flex-col items-center justify-center gap-10'>
            <h1 className='text-white text-4xl'>Built for Businesses Like Yours</h1>
            <small className='text-white'>FasTitan serves a wide range of businesses across industries</small>

            <div className='w-[85%] h-max flex justify-center items-center gap-8'>
            {yourBusinesses.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className='w-[33%] h-[20rem] border border-[#1E2939] rounded-lg flex flex-col justify-start items-start gap-4 py-6 px-4 box-border'>
                            <div className='w-max h-max p-2 rounded-2xl bg-primary flex justify-center items-center bg-primaryCtaBtn-shade10'>
                              <Icon size={28} color="#FF1F1F" />
                            </div>
                            <h2 className='text-white text-xl'>{item.title}</h2>
                            <p className='text-white text-sm'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default BusinessesLikeYours
