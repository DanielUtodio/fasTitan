import React from 'react';
import { FiPackage, FiShield, FiClock, FiMapPin } from 'react-icons/fi';

const whyChooseData = [
  {
    id: 1,
    icon: <FiClock size={28} />,
    title: "Fast Delivery",
    desc: "Most deliveries completed within 45 minutes. We value your time as much as you do."
  },
  {
    id: 2,
    icon: <FiShield size={28} />,
    title: "Secure Handling",
    desc: "Your items are insured and handled with the utmost care by our professional team."
  },
  {
    id: 3,
    icon: <FiPackage size={28} />,
    title: "Bulk Logistics",
    desc: "From small parcels to large business inventory, we move it all seamlessly."
  },
  {
    id: 4,
    icon: <FiMapPin size={28} />,
    title: "Real-time Tracking",
    desc: "Know exactly where your package is at every moment with our live GPS tracking."
  }
];

const WhyChooseFasTitan = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center gap-20 py-16 bg-background-defaultbg'>
      <h2 className='text-white text-3xl font-semibold capitalize'>why choose FasTitan</h2>
      
      <div className='w-[90%] max-w-7xl flex flex-wrap justify-between items-stretch gap-y-10'>
        {whyChooseData.map((item, index) => {          
          return (
            <div 
              key={item.id} 
              className="w-full md:w-[23%] h-auto p-6 flex flex-col gap-4 items-center justify-start rounded-xl transition-all border border-[#1E2939]"
            >
              <div className='w-max h-max p-3 bg-primaryCtaBtn-shade10 text-primaryCtaBtn-defaultpry rounded-lg shadow-sm'>
                {item.icon}
              </div>
              
              <h3 className='text-white text-xl font-medium'>{item.title}</h3>
              
              <p className='text-center text-secondaryTextColor text-sm leading-relaxed'>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseFasTitan;