'use client'
import React from 'react';
import { Heart, Activity, Users, Award, ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id='home' className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background with image and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/gallery/img5.jpeg')`,
        }}
      />
      
      {/* Clean overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-blue-50/80 backdrop-blur-[1px]"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-300/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 bg-red-300/35 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-red-300/30 rounded-full animate-ping"></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center py-20">
          
          {/* Logo/Badge with clean styling */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white rounded-full p-6 shadow-xl border border-gray-100">
              <Heart className="w-12 h-12 text-red-500" fill="currentColor" />
            </div>
          </div>

          {/* Main heading with clear contrast */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 mb-2">
              Pioneering Perfusion Excellence
            </span>
            <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              in Sri Lanka
            </span>
          </h1>

          {/* Subtitle with excellent readability */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-700 font-light max-w-4xl mx-auto">
            Advancing cardiovascular care through knowledge, innovation, and unity
          </p>

          {/* Mission Statement */}
          <p className="text-lg sm:text-xl mb-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dedicated to elevating patient outcomes and empowering perfusion professionals nationwide
          </p>

          {/* Tagline with clear accent */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              <span className="text-red-600 text-2xl">"</span>
              <span className="italic">Precision in circulation, commitment to life</span>
              <span className="text-blue-600 text-2xl">"</span>
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-blue-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Learn More About Us
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
              <span className="flex items-center justify-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </span>
            </button>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
              <Activity className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600 text-sm">Leading perfusion professionals</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">United for better outcomes</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
              <Award className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Committed to highest standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clean bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#ef4444', stopOpacity:0.1}} />
              <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.1}} />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#waveGradient)" opacity="0.6"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}