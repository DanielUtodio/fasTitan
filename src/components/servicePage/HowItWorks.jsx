const steps = [
  { id: 1, text: "Select your service and provide pickup and delivery details." },
  { id: 2, text: "Get real-time tracking and updates on your delivery." },
  { id: 3, text: "Enjoy fast and secure delivery to your doorstep." },
  { id: 4, text: "Rate your experience and save your favorite locations." },
];

const HowItWorks = () => (
  <section className="text-center">
    <h2 className="text-4xl font-semibold text-defaultTextColor mb-4">How It Works</h2>
    <p className="text-secondaryTextColor mb-16">Simple, fast, and reliable. Get your items delivered in four easy steps.</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center">
          <div className="w-24 h-24 bg-primaryCtaBtn-defaultpry rounded-full flex items-center justify-center mb-6 shadow-lg">
            {/* Replace with actual Lucide or Heroicons icons */}
            <div className="text-white text-3xl">Icon</div>
          </div>
          <span className="bg-primaryCtaBtn-defaultpry text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
            Step {step.id}
          </span>
          <p className="text-secondaryTextColor text-sm px-4 leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;