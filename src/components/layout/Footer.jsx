import React from 'react'
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='w-full h-[22rem] flex justify-center items-center bg-black'>
        <div className='w-[90%] h-[90%] flex flex-col justify-start items-start  gap-6'>

            <div className='w-full h-[90%] flex justify-between items-start '>
                <div className='w-[27%] h-[85%] flex flex-col justify-start gap-4 '>   
                    <aside>
                        <h2 className='font-semibold text-white text-2xl'>FasTitan</h2>
                    </aside>
                    <p className='text-white'>Fast, reliable last-mile delivery for food, parcels, and errands across Nigeria. Verified riders. Real-time tracking. Secure payments.</p>
                    <div className='w-max flex justify-start items-center gap-4'>
                      <div className='w-max h-max p-2 flex justify-center items-center text-lg text-white bg-[#1E2939] rounded-lg'>
                            <SlSocialFacebook />
                      </div>

                      <div className='w-max h-max p-2 flex justify-center items-center text-lg text-white bg-[#1E2939] rounded-lg'>
                            <SlSocialTwitter />
                      </div>

                      <div className='w-max h-max p-2 flex justify-center items-center text-lg text-white bg-[#1E2939] rounded-lg'>
                            <SlSocialInstagram />
                      </div>
                </div>
            </div>

            <section className='w-[60%] h-[90%] flex justify-start items-start gap-4 '>
                <div className='w-full h-[90%] flex flex-col justify-start gap-4'>
                    <h3 className='text-xl text-white'>company</h3>
                    <ul className='w-full h-max text-gray-400'>
                        <li>about fasTitan</li>
                        <li>services</li>
                        <li>rider signup</li>
                        <li>careers</li>
                    </ul>
                </div>

                <div className='w-full h-[90%] flex flex-col justify-start gap-4'>
                    <h3 className='text-2xl text-white'>support</h3>
                    <ul className='w-full h-max text-gray-400'>
                        <li>FAQs</li>
                        <li>contact</li>
                        <li>privacy policy</li>
                        <li>terms of service</li>
                    </ul>
                </div>

                <div className='w-full h-[90%] flex flex-col justify-start gap-4'>
                    <h3 className='text-2xl text-white'>company</h3>
                    <ul className='w-full h-max text-gray-400'>
                        <li>support@fasTitan.ng</li>
                        <li>+234 802 - 469 - 2297</li>
                        <li>Lagos, Nigeia</li>
                    </ul>
                </div>
            </section>
          </div>
          <hr className='w-full' />
          <div className='w-full flex justify-between items-center'>
            <small className='text-gray-400'>©2026 FastTitan Logistics. All rights reserved.</small>
            <div className='text-gray-400 w-max flex gap-3'>
                <small>privacy</small>
                <small>terms</small>
                <small>cookies</small>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
