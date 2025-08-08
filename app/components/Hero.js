'use client'
import React from 'react';
import { Heart, Activity, Users, Award, ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with patriotic gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(239, 68, 68, 0.85) 0%, rgba(255, 255, 255, 0.9) 35%, rgba(147, 197, 253, 0.85) 70%, rgba(59, 130, 246, 0.8) 100%), url('/images/gallery/img5.jpeg')`,
        }}
      />
      
      {/* Animated background elements with patriotic colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-200/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-200/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 bg-red-300/35 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Logo/Badge with patriotic styling */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/15 backdrop-blur-sm rounded-full p-6 border border-white/25 shadow-lg">
              <Heart className="w-12 h-12 text-red-400" fill="currentColor" />
            </div>
          </div>

          {/* Main heading with patriotic color scheme */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-red-600 via-white to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              Pioneering Perfusion Excellence
            </span>
            <span className="block text-slate-800 text-3xl md:text-4xl lg:text-5xl font-medium mt-2 drop-shadow-md">
              in Sri Lanka
            </span>
          </h1>

          {/* Subtitle with better contrast */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-slate-700 font-light max-w-4xl mx-auto drop-shadow-sm">
            Advancing cardiovascular care through knowledge, innovation, and unity
          </p>

          {/* Mission Statement */}
          <p className="text-lg md:text-xl mb-8 text-slate-700/90 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
            Dedicated to elevating patient outcomes and empowering perfusion professionals nationwide
          </p>

          {/* Tagline with patriotic accent */}
          <p className="text-base md:text-lg mb-12 text-slate-600 max-w-2xl mx-auto font-medium italic">
            <span className="text-red-600">"</span>Precision in circulation, commitment to life<span className="text-blue-600">"</span>
          </p>

         

         
        </div>
      </div>

      {/* Bottom decorative wave in patriotic colors */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#ef4444', stopOpacity:0.3}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:0.8}} />
              <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.4}} />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#waveGradient)" opacity="0.4"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="url(#waveGradient)" opacity="0.6"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}