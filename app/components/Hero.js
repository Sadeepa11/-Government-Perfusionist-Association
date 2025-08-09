'use client'
import React from 'react';
import { Heart, Activity, Users, Award, ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(14, 165, 233, 0.8) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(16, 185, 129, 0.8) 100%), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&q=80')`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 bg-white/25 rounded-full animate-ping"></div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          
          {/* Logo/Badge */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
              <Heart className="w-12 h-12 text-red-300" fill="currentColor" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
              Pioneering Perfusion Excellence
            </span>
            <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
              in Sri Lanka
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-white/90 font-light max-w-4xl mx-auto">
            Advancing cardiovascular care through knowledge, innovation, and unity
          </p>

          {/* Mission Statement */}
          <p className="text-lg md:text-xl mb-8 text-white/85 max-w-4xl mx-auto leading-relaxed">
            Dedicated to elevating patient outcomes and empowering perfusion professionals nationwide
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg mb-12 text-white/80 max-w-2xl mx-auto font-medium italic">
            "Precision in circulation, commitment to life"
          </p>
        </div>
      </div>



      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}