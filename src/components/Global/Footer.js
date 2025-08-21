"use client";

import React, { useState } from "react";
import Image from "next/image";
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
               className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
               style={{
                    background:
                         "linear-gradient(180deg, #17181B 0%, #000000 70%, #17181B 100%)",
               }}
          >
               <div className="max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                         {/* Company Info */}
                         <div className="lg:col-span-1">
                              {!logoError ? (
                                   <Image
                                        src="/Logo.png"
                                        alt="Orituree Logo"
                                        width={100}
                                        height={100}
                                        className="h-13 w-auto mr-3"
                                        priority
                                        onError={() => setLogoError(true)}
                                   />
                              ) : (
                                   <div className="w-8 h-8 bg-[#D1FF52] rounded-full flex items-center justify-center mr-3">
                                        <span className="text-black font-bold text-sm">O</span>
                                   </div>
                              )}
                              {/* <span className="text-xl font-semibold text-white">Orituree</span> */}

                              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mt-4">
                                   Beyond being an innovative UI UX design hub, we&apos;re your
                                   one-stop for research, wireframing, design, and development!
                              </p>

                              <div className="flex flex-col sm:flex-row items-center justify-start space-y-4 sm:space-y-0 gap-4 group max-w-[350px] mx-auto">
                                   <button className="w-full sm:w-auto border border-[#D1FF52] bg-[#D1FF52] text-black px-6 sm:px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-base sm:text-lg font-medium cursor-pointer">
                                        Contact Us
                                   </button>
                                   <button className="border border-[#D1FF52] text-[#D1FF52] group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 group-hover:rotate-45  cursor-pointer">
                                        <MoveUpRight className="w-5 sm:w-6 h-5 sm:h-6 transition-colors duration-300" />
                                   </button>
                              </div>
                         </div>

                         {/* Services */}
                         <div>
                              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                              <ul className="space-y-3">
                                   {servicesLinks.map((link) => (
                                        <li key={link.name}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-[#D1FF52] transition-colors duration-300 text-sm"
                                             >
                                                  {link.name}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Company */}
                         <div>
                              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                              <ul className="space-y-3">
                                   {companyLinks.map((link) => (
                                        <li key={link.name}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-[#D1FF52] transition-colors duration-300 text-sm"
                                             >
                                                  {link.name}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Review */}
                         <div>
                              <h3 className="text-lg font-semibold text-white mb-6">Review</h3>
                              <ul className="space-y-3">
                                   {reviewLinks.map((link) => (
                                        <li key={link.name}>
                                             <a
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-[#D1FF52] transition-colors duration-300 text-sm"
                                             >
                                                  {link.name}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 pt-8">
                         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                              {/* Company Deck */}
                              <div className="flex items-center">
                                   <div className="w-10 h-10 bg-[#D1FF52] rounded-full flex items-center justify-center mr-3">
                                        <span className="text-black font-bold text-sm"><Download /></span>
                                   </div>
                                   <div>
                                        <h4 className="text-white font-medium text-sm">Company Deck</h4>
                                        <p className="text-gray-500 text-xs">PDF - 5MB</p>
                                   </div>
                              </div>

                              {/* Copyright */}
                              <div className="text-center">
                                   <p className="text-gray-500 text-sm">
                                        © 2024-2025, Orituree. All Rights Reserved.
                                   </p>
                              </div>

                              {/* Social Links */}
                              <div className="flex items-center space-x-3 mr-15">
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
