'use client'
import React from 'react';
import { Heart, Activity, Droplets, Shield, Users, Settings, ChevronRight, Stethoscope } from 'lucide-react';

export default function PerfusionistRole() {
  const responsibilities = [
    {
      icon: Heart,
      title: "Operate heart–lung machine",
      description: "Manage extracorporeal circulation during surgery",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Activity,
      title: "Monitor patient physiology",
      description: "Blood flow, oxygenation, temperature, coagulation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Droplets,
      title: "Administer medications/products",
      description: "Intravenous drugs or transfusions via bypass circuit",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Manage emergency support (ECMO, etc.)",
      description: "Initiate and maintain life support in ICU settings",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Users,
      title: "Coordinate with surgical team",
      description: "Close collaboration with surgeons and anesthesiologists",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Settings,
      title: "Equipment & supply management",
      description: "Oversight of technical and quality processes",
      color: "from-slate-500 to-gray-600"
    }
  ];

  return (
    <section id='overview' className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Stethoscope className="w-4 h-4" />
            Professional Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            At a Glance: 
            <span className="block text-blue-600 mt-2">Perfusionist Role</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the critical responsibilities and expertise that define the perfusion profession. 
            Our specialists are the guardians of circulation during life-saving procedures.
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {responsibilities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Learn more link */}
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Statistics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">24/7</h4>
              <p className="text-gray-600">Critical Care Support</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">100%</h4>
              <p className="text-gray-600">Precision Monitoring</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Expert</h4>
              <p className="text-gray-600">Emergency Response</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Team</h4>
              <p className="text-gray-600">Collaborative Care</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Perfusion Excellence?
            </h3>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Join our community of dedicated professionals committed to advancing cardiovascular care in Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Career Opportunities
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}