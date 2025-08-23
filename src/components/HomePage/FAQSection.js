"use client"
import React, { useState } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1); // First FAQ is open by default

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What services does your agency offer?",
      answer:
        "We specialize in UI/UX design for web and mobile applications, including user research, wireframing, prototyping, usability testing, and design systems. We also offer branding and product design strategy to ensure a seamless user experience.",
    },
    {
      id: 2,
      question: "Who do you work with?",
      answer:
        "We work with startups, established businesses, and enterprises across various industries including fintech, healthcare, e-commerce, and SaaS platforms. Our clients range from early-stage companies to Fortune 500 corporations.",
    },
    {
      id: 3,
      question: "What's your design process?",
      answer:
        "Our design process follows a structured approach: Discovery & Research, Strategy & Planning, Wireframing & Prototyping, Visual Design, User Testing, and Implementation Support. We maintain close collaboration with clients throughout each phase.",
    },
    {
      id: 4,
      question: "How long does a project take?",
      answer:
        "Project timelines vary based on scope and complexity. Typical projects range from 4-12 weeks. Simple redesigns may take 2-4 weeks, while comprehensive digital products can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      id: 5,
      question: "Do you offer development services too?",
      answer:
        "While our primary focus is UI/UX design, we partner with trusted development teams and can provide front-end development services for design implementation. We ensure seamless handoff and collaboration throughout the development phase.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      className="py-20 sm:py-24 md:py-35 lg:py-50 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, #17181B 0%, #000000 70%, #17181B 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center justify-center border border-[#D1FF52] px-6 py-2 mb-8 text-sm font-medium text-gray-300 rounded-full bg-transparent ">
            FAQs
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
            Got Questions? We&apos;ve Got Answers!
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* FAQ Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>

                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === faq.id
                      ? "bg-gray-900 text-white rotate-180"
                      : "bg-[#D1FF52] text-black"
                  }`}
                >
                  <ArrowDown className="w-5 h-5" />
                </div>
              </button>

              {/* FAQ Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
