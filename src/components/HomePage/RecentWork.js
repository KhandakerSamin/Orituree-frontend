"use client"
import { ArrowUpRight, MoveUpRight } from "lucide-react"

const RecentWork = () => {
  // Dummy data - this will come from backend later
  const recentWorks = [
    {
      id: 1,
      image: "/RW-1.png",
      category: "E-Commerce",
      title: "Revamping E-Commerce UX for Higher Conversions",
      bgColor: "from-gray-300 to-gray-500",
    },
    {
      id: 2,
      image: "/RW-2.png",
      category: "Mobile App",
      title: "Next-Gen Banking App Design",
      bgColor: "from-gray-200 to-gray-400",
    },
  ]

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-6 border-[#D1FF52] text-sm font-medium text-gray-300 border  rounded-full bg-transparent">
            Recent Work
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-medium text-white leading-tight max-w-4xl mx-auto">
            Showcasing Innovative &
            <br />
            <span className="inline-block mt-1">Impactful Digital Experiences</span>
          </h2>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {recentWorks.map((work, index) => (
            <div
              key={work.id}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${work.bgColor} opacity-20`}></div>

              {/* Card Content */}
              <div className="relative  h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col">
                <div className="flex-1 rounded-2xl overflow-hidden bg-gray-800 relative hover:cursor-pointer">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't load
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "flex"
                    }}
                  />
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm hidden">
                    Project Image
                  </div>

                  {/* Hover Overlay with custom gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(180deg, rgba(1, 2, 6, 0) 0%, #09122F 100%)",
                    }}
                  ></div>

                  {/* Hover Arrow Button */}
                  <button className="absolute bottom-10 right-10 flex items-center justify-center w-10 h-10 border   border-[#D1FF52] bg-[#D1FF52] text-black  hover:text-black backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 group/arrow">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/arrow:rotate-45" />
                  </button>

                  {/* Hover Content at Bottom */}
                  <div className="absolute bottom-8 left-8 right-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="inline-block px-3 border-[#D1FF52]  py-1 mb-2 text-xs font-medium text-white/80 bg-white/5 backdrop-blur-sm rounded-full border ">
                      {work.category}
                    </div>

                    <h3 className="text-lg sm:text-xl mx-w-[100px] font-semibold text-white leading-tight">{work.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Works Button */}
        <div className=" flex items-center space-x-4 mt-10 justify-center group max-w-[310px] mx-auto">
          <button className="border border-[#D1FF52] bg-[#D1FF52] text-black   px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-lg font-medium cursor-pointer">
            See More Works
          </button>
          <button className="border border-[#D1FF52] text-[#D1FF52] group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 group-hover:rotate-45 cursor-pointer">
            <MoveUpRight className="w-6 h-6 transition-colors duration-300 group-hover:text-black" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default RecentWork
