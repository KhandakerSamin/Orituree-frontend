"use client"
import { MoveUpRight, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation items with their routes
  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]

  // Mobile navigation items (includes Home)
  const mobileNavigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Full-width navbar background wrapper */}
      <div className="relative w-full  bg-black/80">
        {/* Base gradient layer */}
        

        
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Content container */}
        <nav className="relative z-[60] flex items-center justify-between px-6 py-5 lg:px-12 max-w-[1400px] border-l border-r border-b rounded-b-2xl border-white/10 mx-auto">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center group">
            <Image
              src="/LOGO.svg"
              alt="Oriture Logo"
              width={180}
              height={40}
              quality={100}
              priority
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden md:flex items-center space-x-10">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/85 hover:text-white transition-colors duration-300 text-[16px] font-light "
            >
              {item.name}
            </a>
          ))}
          </div>

         
                <div className="relative z-10 hidden md:flex items-center space-x-3 group">
                <a 
                href="/contact"
                className="border border-[#D1FF52]/50 text-white group-hover:text-black bg-transparent px-6 py-2.5 rounded-full transition-all duration-300 group-hover:border-[#D1FF52]/80 group-hover:bg-[#D1FF52] cursor-pointer text-[15px] font-medium"
                >
                Hire Us
                </a>
                <a 
                href="/contact"
                className="border border-[#D1FF52]/50 text-white group-hover:text-black bg-transparent p-2.5 rounded-full transition-all duration-300 group-hover:border-[#D1FF52]/80 group-hover:bg-[#D1FF52] group-hover:rotate-45 cursor-pointer"
                >
                <MoveUpRight className="w-5 h-5" />
                </a>
                </div>

                {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-[70] text-white hover:text-white/80 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                }`}
              />
              <span
                className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-in-out top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Modal/Dropdown */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out md:hidden ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Dropdown Content */}
        <div
          className={`relative bg-slate-900/95 backdrop-blur-xl border-b border-gray-700/30 shadow-2xl transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6  border-gray-700/30">
          </div>

          {/* Navigation Grid */}
          <div className="px-6 py-10">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {mobileNavigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/30 hover:border-[#D1FF52]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/10 ${
                    isMenuOpen ? 'animate-slideUp' : ''
                  }`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-[#D1FF52] font-medium transition-colors duration-300">
                      {item.name}
                    </span>
                    <MoveUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#D1FF52] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D1FF52]/0 to-[#D1FF52]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Section */}
            <div className={`space-y-4 ${isMenuOpen ? 'animate-slideUp' : ''}`} style={{ animationDelay: '600ms' }}>
              <a
                href="/contact"
                className="block w-full bg-gradient-to-r from-[#D1FF52] to-[#B8E63F] text-black px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#D1FF52]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Us
              </a>
              
              {/* Contact Info */}
              <div className="flex items-center justify-center space-x-6 py-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-[#D1FF52] rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <span className="text-gray-400">Let&apos;s create something amazing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  )
}