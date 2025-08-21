export default function Services() {
  const services = [
    {
      id: 1,
      title: "UI UX Design",
      tags: ["SaaS", "FinTech", "App", "B2B", "MedTech", "Retail", "E-Commerce", "Web", "Mobile"],
      price: "$400",
    },
    {
      id: 2,
      title: "Branding",
      tags: ["SaaS", "FinTech", "App", "B2B", "MedTech", "Retail", "E-Commerce"],
      price: "$400",
    },
    {
      id: 3,
      title: "SaaS Design",
      tags: ["SaaS", "FinTech", "App", "B2B", "MedTech", "Retail", "E-Commerce"],
      price: "$400",
    },
    {
      id: 4,
      title: "Web Design",
      tags: ["SaaS", "FinTech", "App", "B2B", "MedTech", "Retail", "E-Commerce"],
      price: "$400",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Services Badge */}
        <div className="flex justify-center mb-8 ">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#D1FF52]  text-gray-300 text-sm font-medium">
            Services We Offer
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
            Where Innovation Meets
            <br />
            User-Centric Design
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#D1FF52] rounded-full mb-6">
                <span className="text-black font-bold text-lg">{service.id}</span>
              </div>

              {/* Service Title */}
              <h3 className="text-white text-xl font-medium mb-6">{service.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black/10 text-gray-300 text-sm  rounded-full border border-[#D1FF52]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pricing and Button */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400 text-sm">Start from</span>
                  <div className="text-[#D1FF52] text-3xl font-medium">{service.price}</div>
                </div>
                <button className="bg-[#D1FF52] text-black px-4 py-2 mt-2 rounded-full font-normal transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
