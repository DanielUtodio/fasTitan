const services = [
  { title: "Food Delivery", desc: "Hot meals from your favorite restaurants...", btnText: "Order Food Now", img: "/assets/images/servicehero.png" },
  { title: "Parcel Delivery", desc: "Send documents, packages, and items...", btnText: "Send a Parcel", img: "/assets/images/servicehero.png" },
  { title: "Apartment Moving", desc: "Full apartment relocation with trucks...", btnText: "Book Movers", img: "/assets/images/servicehero.png" },
  { title: "Business Delivery", desc: "Bulk orders, scheduled deliveries...", btnText: "Get Business Plan", img: "/assets/images/servicehero.png" },
];

const ServicesSection = () => (
  <section className="text-center mb-24">
    <h2 className="text-4xl font-semibold text-defaultTextColor mb-4">What We Deliver</h2>
    <p className="text-secondaryTextColor mb-12 max-w-lg mx-auto">
      Choose the service that fits your needs. Fast, professional, and reliable every time.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-background-reusableOne border border-white/10 rounded-2xl overflow-hidden flex flex-col">
          <img src={service.img} alt={service.title} className="h-48 w-full object-cover" />
          <div className="p-6 flex-grow flex flex-col text-left">
            <h3 className="text-xl font-semibold text-defaultTextColor mb-3">{service.title}</h3>
            <p className="text-secondaryTextColor text-sm mb-6 flex-grow">{service.desc}</p>
            <button className="bg-primaryCtaBtn-defaultpry text-white py-3 rounded-lg font-medium transition-opacity hover:opacity-90">
              {service.btnText}
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;