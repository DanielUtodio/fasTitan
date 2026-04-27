import React from 'react'
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Logo from "/assets/images/logo.png"

const links = [
  {
    nameOne: "company",
    company: [
      {text: "about fasTitan", link: "/about"},
      {text: "services", link: "/services"},
      {text: "rider signup", link: "/services"},
      {text: "careers", link: "/careers"}
    ],
    nameTwo: "support",
    support: [
      {text: "FAQs", link: "/faqs"},
      {text: "contact", link: "/contact"},
      {text: "privacy policy", link: "/policy"},
      {text: "terms of service", link: "/terms-of-service"}
    ],
    nameThree: "contact",
    contact: [
      {text: "support@fasTitan.com", link: "/support"},
      {text: "+234 802 - 469 - 2297", link: "/contact"},
      {text: "Lagos, Nigeria", link: "#"}
    ]
  }
]

const Footer = () => {
  const sectionItems = links.flatMap(group => ([
    { title: group.nameOne, items: group.company },
    { title: group.nameTwo, items: group.support },
    { title: group.nameThree, items: group.contact }
  ]))

  return (
    <footer className='w-full bg-black text-white'>
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col gap-8'>
        <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-8'>
          <div className='w-full lg:w-1/3 flex flex-col gap-4'>
            <img src={Logo} alt="fasTitan logo" className="w-20 h-20"/>
            <p className='text-sm leading-relaxed text-gray-300'>
              Fast, reliable last-mile delivery for food, parcels, and errands across Nigeria.
              Verified riders. Real-time tracking. Secure payments.
            </p>
            <div className='flex gap-3'>
              <span className='p-2 bg-[#1E2939] rounded-lg text-lg'><SlSocialFacebook /></span>
              <span className='p-2 bg-[#1E2939] rounded-lg text-lg'><SlSocialTwitter /></span>
              <span className='p-2 bg-[#1E2939] rounded-lg text-lg'><SlSocialInstagram /></span>
            </div>
          </div>

          <div className='w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
            {sectionItems.map((section, idx) => (
              <div key={idx} className='space-y-3'>
                <h3 className='text-xl font-semibold capitalize'>{section.title}</h3>
                <ul className='space-y-2 text-sm'>
                  {section.items.map((item, i) => (
                    <li key={`${section.title}-${i}`}>
                      <Link to={item.link} className='text-gray-300 hover:text-white'>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className='border-gray-700' />
        <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm'>
          <small>©2026 FastTitan Logistics. All rights reserved.</small>
          <div className='flex gap-4'>
            <span className='hover:text-white cursor-pointer'>privacy</span>
            <span className='hover:text-white cursor-pointer'>terms</span>
            <span className='hover:text-white cursor-pointer'>cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer