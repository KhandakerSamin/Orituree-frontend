"use client";

import React, { useState } from "react";
import {
     ArrowUpRight,
     Facebook,
     Instagram,
     Twitter,
     Youtube,
     Linkedin,
     MoveUpRight,
     Download,
} from "lucide-react";

const Footer = () => {
     const [logoError, setLogoError] = useState(false);

     const servicesLinks = [
          { name: "UI/UX Design", href: "#" },
          { name: "Branding", href: "#" },
          { name: "App Design", href: "#" },
          { name: "Web Design", href: "#" },
          { name: "SaaS Design", href: "#" },
     ];

     const companyLinks = [
          { name: "Home", href: "#" },
          { name: "Case Study", href: "#" },
          { name: "Contact Us", href: "#" },
          { name: "About Us", href: "#" },
          { name: "Blog", href: "#" },
     ];

     const reviewLinks = [
          { name: "Clutch", href: "#" },
          { name: "Behance", href: "#" },
          { name: "Dribbble", href: "#" },
          { name: "LinkedIn", href: "#" },
     ];

     const socialLinks = [
          { name: "Facebook", icon: Facebook, href: "#" },
          { name: "Instagram", icon: Instagram, href: "#" },
          { name: "Twitter", icon: Twitter, href: "#" },
          { name: "Youtube", icon: Youtube, href: "#" },
          { name: "LinkedIn", icon: Linkedin, href: "#" },
     ];

     return (
          <footer
               className="relative z-10 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8"
               style={{
                    background:
                         "linear-gradient(180deg, #17181B 0%, #000000 70%, #17181B 100%)",
               }}
          >
               <div className="max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                         {/* Company Info */}
                         <div>
                              {!logoError ? (
                                   <img
                                        src="/Logo.png"
                                        alt="Orituree Logo"
                                        className="h-12 sm:h-13 w-auto mr-3"
                                        onError={() => setLogoError(true)}
                                   />
                              ) : (
                                   <div className="w-8 h-8 bg-[#D1FF52] rounded-full flex items-center justify-center mr-3">
                                        <span className="text-black font-bold text-sm">O</span>
                                   </div>
                              )}

                              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mt-4">
                                   Beyond being an innovative UI UX design hub, we&apos;re your
                                   one-stop for research, wireframing, design, and development!
                              </p>

                              {/* Contact Button - Mobile: Single, Desktop: Two buttons */}
                              <div className="flex items-center justify-start">
                                   {/* Mobile: Single combined button */}
                                   <button className="md:hidden flex items-center justify-center space-x-3 border border-[#D1FF52] bg-[#D1FF52] text-black px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 text-base font-medium cursor-pointer w-full max-w-xs">
                                        <span>Contact Us</span>
                                        <MoveUpRight className="w-5 h-5" />
                                   </button>

                                   {/* Desktop: Two separate buttons */}
                                   <div className="hidden md:flex items-center gap-4 group max-w-[350px]">
                                        <button className="flex-1 border border-[#D1FF52] bg-[#D1FF52] text-black px-6 lg:px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-base lg:text-lg font-medium cursor-pointer">
                                             Contact Us
                                        </button>
                                        <button className="border border-[#D1FF52] text-[#D1FF52] group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 group-hover:rotate-45 cursor-pointer flex-shrink-0">
                                             <MoveUpRight className="w-5 lg:w-6 h-5 lg:h-6 transition-colors duration-300" />
                                        </button>
                                   </div>
                              </div>
                         </div>

                         {/* Services, Company, Review in one column */}
                         <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                              {/* Services */}
                              <div>
                                   <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Services</h3>
                                   <ul className="space-y-2 sm:space-y-3">
                                        {servicesLinks.map((link) => (
                                             <li key={link.name}>
                                                  <a
                                                       href={link.href}
                                                       className="text-gray-400 hover:text-[#D1FF52] transition-colors duration-300 text-sm block"
                                                  >
                                                       {link.name}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* Company */}
                              <div>
                                   <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Company</h3>
                                   <ul className="space-y-2 sm:space-y-3">
                                        {companyLinks.map((link) => (
                                             <li key={link.name}>
                                                  <a
                                                       href={link.href}
                                                       className="text-gray-400 hover:text-[#D1FF52] transition-colors duration-300 text-sm block"
                                                  >
                                                       {link.name}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* Review */}
                              <div>
                                   <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Review</h3>
                                   <ul className="space-y-2 sm:space-y-3">
                                        {reviewLinks.map((link) => (
                                             <li key={link.name}>
                                                  <a
                                                       href={link.href}
                                                       className="text-gray-400 hover:text-[#D1FF52] transition-colors duration-300 text-sm block"
                                                  >
                                                       {link.name}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 pt-6 sm:pt-8">
                         <div className="flex flex-col space-y-4 sm:space-y-6 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
                              {/* Company Deck */}
                              <div className="flex items-center justify-center sm:justify-start">
                                   <div className="w-10 h-10 bg-[#D1FF52] rounded-full flex items-center justify-center mr-3">
                                        <Download className="w-5 h-5 text-black" />
                                   </div>
                                   <div>
                                        <h4 className="text-white font-medium text-sm">Company Deck</h4>
                                        <p className="text-gray-500 text-xs">PDF - 5MB</p>
                                   </div>
                              </div>

                              {/* Copyright - Center on desktop, top on mobile */}
                              <div className="text-center order-first lg:order-none">
                                   <p className="text-gray-500 text-xs sm:text-sm">
                                        © 2024-2025, Orituree. All Rights Reserved.
                                   </p>
                              </div>

                              {/* Social Links */}
                              <div className="flex items-center justify-center space-x-3">
                                   {socialLinks.map((social) => {
                                        const IconComponent = social.icon;
                                        return (
                                             <a
                                                  key={social.name}
                                                  href={social.href}
                                                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-white hover:border-[#D1FF52] hover:text-[#D1FF52] transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20"
                                             >
                                                  <IconComponent className="w-4 h-4" />
                                             </a>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;