"use client"
import React, { useState } from "react"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const TestimonialSection = () => {
     const [currentTestimonial, setCurrentTestimonial] = useState(0)

     // Testimonial data
     const testimonials = [
          {
               id: 1,
               name: "Michael R.",
               position: "CEO at FinTech Startup",
               avatar: "/avatar-1.png",
               testimonial:
                    "The team completely revamped our platform's UI/UX, making it more intuitive and engaging. Our user retention skyrocketed!",
               company: "Tintype",
          },
          {
               id: 2,
               name: "Sarah L.",
               position: "Product Manager at E-Commerce",
               avatar: "/avatar-2.png",
               testimonial:
                    "Outstanding work on our mobile app redesign. The user experience is now seamless and our conversion rates have improved by 40%.",
               company: "ShopFlow",
          },
          {
               id: 3,
               name: "David K.",
               position: "CTO at Healthcare Tech",
               avatar: "/avatar-3.png",
               testimonial:
                    "Incredible attention to detail and user-centered design approach. Our healthcare platform is now more accessible and user-friendly.",
               company: "MedTech Pro",
          },
     ]

     const handlePrevious = () => {
          setCurrentTestimonial((prev) =>
               prev === 0 ? testimonials.length - 1 : prev - 1
          )
     }

     const handleNext = () => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
     }

     const currentTest = testimonials[currentTestimonial]

     return (
          <section
               className="relative py-30 px-6 overflow-hidden "
               style={{
                    background: "linear-gradient(180deg, #17181B 0%, #000000 70%, #17181B 100%)"
               }}
          >
               <div className="max-w-[1920px] mx-auto hidden md:block">
                    {/* Left Green Shape */}
                    <div className="absolute left-23 top-130 -translate-y-1/2 -translate-x-1/4 w-48 sm:w-64 lg:w-90 h-64 sm:h-80 lg:h-[1400px] ">
                         <Image src="/FeedBackL.png" alt="" fill className="object-contain" />
                    </div>

                    {/* Right Green Shape */}
                    <div className="absolute right-19 top-130 -translate-y-1/2 translate-x-1/4 w-48 sm:w-64 lg:w-90 h-64 sm:h-80 lg:h-[1400px]">
                         <Image src="/FeedBackR.png" alt="" fill className="object-contain" />
                    </div>
               </div>

               <div className="max-w-3xl mx-auto text-center relative z-10">
                    {/* Header */}
                    <div className="mb-30">
                         <div className="inline-flex items-center border border-[#D1FF52] text-white px-6 py-2 mb-10 text-sm font-medium rounded-full">
                              What Clients Say
                         </div>
                         <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
                              Real Feedback, Real Impact
                         </h2>
                    </div>

                    {/* Testimonial */}
                    <div className="relative mb-15">
                         {/* Avatar + Name */}
                         <div className="flex items-center justify-start mb-10 space-x-4">
                              <div className=" relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-600">
                                   <Image
                                        src="/avatar.png"
                                        alt={currentTest.name}
                                        fill
                                        className="object-cover"
                                   />
                              </div>
                              <div className="text-left">
                                   <h3 className="text-white font-semibold text-lg">
                                        {currentTest.name}
                                   </h3>
                                   <p className="text-gray-400 text-sm">{currentTest.position}</p>
                              </div>
                         </div>

                         {/* Testimonial Text */}
                         <blockquote className="text-white text-left text-xl font-light sm:text-2xl lg:text-3xl leading-relaxed mb-6">
                              {currentTest.testimonial}
                         </blockquote>

                    </div>
                    <div className="flex items-center justify-between">
                         {/* Company */}
                         <div className="relative w-40 h-10 flex-shrink-0">
                              <Image
                                   src="/testominial-logo.png"
                                   alt={`${currentTest.company} logo`}
                                   fill
                                   className="object-contain"
                              />
                         </div>

                         {/* Controls */}
                         <div className="flex items-center justify-center space-x-6">
                              <button
                                   onClick={handlePrevious}
                                   className="w-10 h-10 rounded-full border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black transition-all duration-300 flex items-center justify-center"
                              >
                                   <ArrowLeft className="w-5 h-5" />
                              </button>
                              <button
                                   onClick={handleNext}
                                   className="w-10 h-10 rounded-full border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black transition-all duration-300 flex items-center justify-center"
                              >
                                   <ArrowRight className="w-5 h-5" />
                              </button>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default TestimonialSection
