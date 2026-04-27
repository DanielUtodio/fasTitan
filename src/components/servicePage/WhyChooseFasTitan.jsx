import React from 'react'
import { FiPackage } from 'react-icons/fi'

const WhyChooseFasTitan = () => {
  return (
    <div className='w-[80%] h-[60vh] flex flex-col justify-center items-center gap-20 py-10'>
        <h1 className='text-white text-3xl font-semibold capitalize'>why choose FasTitan</h1>
        <div className='w-full flex justify-between items-center'>
            <div className='w-[20%] h-max p-3 flex flex-col gap-4 items-center justify-start'>
                <div className='w-max h-max p-3 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-defaultpry rounded-lg'>
                <FiPackage size={28} />
                </div>
                <h3 className='text-white text-xl font-medium'>Fast Delivery</h3>
                <p className='text-center text-white'>
                    Most deliveries completed within 45 minutes. We value your time as much as you do.
                </p>
            </div>

             <div className='w-[20%] h-max p-3 flex flex-col gap-4 items-center justify-start border border-[#1E2939] rounded-lg'>
                <div className='w-max h-max p-3 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-defaultpry rounded-lg'>
                <FiPackage size={28} />
                </div>
                <h3 className='text-white text-xl font-medium'>Fast Delivery</h3>
                <p className='text-center text-white'>
                    Most deliveries completed within 45 minutes. We value your time as much as you do.
                </p>
            </div>

             <div className='w-[20%] h-max p-3 flex flex-col gap-4 items-center justify-start border border-[#1E2939] rounded-lg'>
                <div className='w-max h-max p-3 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-defaultpry rounded-lg'>
                <FiPackage size={28} />
                </div>
                <h3 className='text-white text-xl font-medium'>Fast Delivery</h3>
                <p className='text-center text-white'>
                    Most deliveries completed within 45 minutes. We value your time as much as you do.
                </p>
            </div>

             <div className='w-[20%] h-max p-3 flex flex-col gap-4 items-center justify-start'>
                <div className='w-max h-max p-3 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-defaultpry rounded-lg'>
                <FiPackage size={28} />
                </div>
                <h3 className='text-white text-xl font-medium'>Fast Delivery</h3>
                <p className='text-center text-white'>
                    Most deliveries completed within 45 minutes. We value your time as much as you do.
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseFasTitan
