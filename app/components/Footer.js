"use client"
import React, { useState } from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: '#',
      label: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      href: '#',
      label: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },
    {
      href: '#',
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      href: '#',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      href: '#',
      label: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];



  return (
    <footer id='contact' className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-400/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Logo and Company Info Section */}
          <div className="text-center lg:text-left space-y-6">
            {/* Main Company Logo */}
            <div className="group">
              <div className="relative">
                <img
                  src="/images/footer/footer.jpeg"
                  alt="Government Perfusionist Association Logo"
                  className="w-56 h-auto mx-auto lg:mx-0 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
              </div>
            </div>

            <div className="space-y-4">
              {/* <h3 className="text-2xl font-bold text-cyan-400 tracking-wide">
                Government Perfusionist Association
              </h3> */}
              <p className="text-slate-300 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Leading healthcare technology solutions with innovation and excellence in perfusion services. Committed to advancing medical care through cutting-edge perfusion technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-cyan-400/20 hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-cyan-400/50 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-8">
              Get in Touch
            </h4>
            <div className="space-y-6 text-slate-300">
              <div className="group">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold group-hover:text-cyan-400 transition-colors duration-300">Address</h5>
                    <p className="text-sm">No:345/10,Kananvila,Horana,Colombo,Wetern Province,Sri Lanka</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold group-hover:text-cyan-400 transition-colors duration-300">Phone</h5>
                    <p className="text-sm">(+94) 77 807 8781 / (+94) 72 384 9025 / (+94) 71 384 9025</p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold group-hover:text-cyan-400 transition-colors duration-300">Email</h5>
                    <p className="text-sm">governmentperfusionists@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* <div className="text-slate-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Government Perfusionist Association. All rights reserved.
            </div> */}

            <div className="text-slate-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;