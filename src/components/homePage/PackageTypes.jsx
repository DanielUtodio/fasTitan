import React from 'react'
import { FiPackage } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const PackageTypes = () => {
  return (
    <div className='w-full h-[30rem] flex flex-col justify-center items-center bg-[#0A0A0A]'>
        <div className='w-max h-[3rem] flex items-start justify-center'>
            <h1 className='font-bold text-4xl text-white'>If It Fits, We'll Handle It.</h1>
        </div>

        <div className='w-[85%] h-[50%] flex justify-between items-center'>
            <aside className='w-[25%] h-max flex flex-col items-center gap-4'>
                <div className='w-max h-max p-6 flex justify-center items-center bg-primaryCtaBtn-defaultpry rounded-lg text-white text-4xl font-semibold'>
                    <IoRestaurantOutline />
                </div>
                <p className='text-white font-medium text-lg capitalize'>Hot Meals</p>
            </aside>

             <aside className='w-[25%] h-max flex flex-col items-center gap-4'>
                <div className='w-max h-max p-6 flex justify-center items-center bg-primaryCtaBtn-descriptiveText rounded-lg text-white text-3xl'>
                    <IoRestaurantOutline />
                </div>
                <p className='text-white font-medium text-lg capitalize'>Parcels & Boxes</p>
            </aside>

             <aside className='w-[25%] h-max flex flex-col items-center gap-4'>
                <div className='w-max h-max p-6 flex justify-center items-center shadow-[0_20px_10px_#070606] bg-[#000000]  rounded-lg text-white text-3xl'>
                    <IoRestaurantOutline />
                </div>
                <p className='text-white font-medium text-lg capitalize'>Documents</p>
            </aside>

             <aside className='w-[25%] h-max flex flex-col items-center gap-4'>
                <div className='w-max h-max p-6 flex justify-center items-center bg-primaryCtaBtn-defaultpry rounded-lg text-white text-3xl'>
                    <IoRestaurantOutline />
                </div>
                <p className='text-white font-medium text-lg capitalize'>Groceries</p>
            </aside>
        </div>

        <div className='w-[50%] flex justify-center items-center gap-4'>
            <div className='w-[30%] flex flex-col items-center gap-2'>
                <h1 className='font-bold text-primaryCtaBtn-defaultpry text-4xl'>50kg</h1>
                <small className='text-gray-300 text-[0.7rem]'>Max Weight</small>
            </div>

            <div className='w-[30%] flex flex-col items-center gap-2 border-x-2'>
                <h1 className='font-bold text-primaryCtaBtn-defaultpry text-4xl'>24/7</h1>
                <small className='text-gray-300 text-[0.7rem]'>Available</small>
            </div>

            <div className='w-[30%] flex flex-col items-center gap-2'>
                <h1 className='font-bold text-primaryCtaBtn-defaultpry text-4xl'>100%</h1>
                <small className='text-gray-300 text-[0.7rem]'>Insured</small>
            </div>
        </div>
    </div>
  )
}

export default PackageTypes
