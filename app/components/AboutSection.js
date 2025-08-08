'use client'
import { useState, useEffect, useRef } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats] = useState([
    { number: 'ISPT', label: 'Global Partner' },
    { number: 'AmSECT', label: 'Collaboration' },
    { number: 'ECMO', label: 'Advanced Care' }
  ])
  
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      icon: '🫀',
      title: 'Cardiopulmonary Bypass (CPB) Management',
      description: 'Temporarily assuming the function of the heart and lungs during open-heart surgery, ensuring vital organ perfusion'
    },
    {
      icon: '🩺',
      title: 'Advanced Life Support',
      description: 'Administering extracorporeal membrane oxygenation (ECMO), ventricular assist devices (VADs) and autotransfusion systems'
    },
    {
      icon: '📊',
      title: 'Physiological Monitoring',
      description: 'Controlling anticoagulation, blood gas parameters, thermodynamics and temperature to maintain patient homeostasis'
    },
    {
      icon: '🤝',
      title: 'Critical Care Collaboration',
      description: 'Partnering with cardiac surgeons, anesthesiologists and intensivists to optimize patient outcomes'
    }
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-sky-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-96 sm:h-96 bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 sm:-bottom-24 sm:-left-24 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-sky-100 rounded-full text-sky-800 text-xs sm:text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            About Our Association
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
            <span className="text-sky-600 relative block sm:inline">
              "The Heartbeat of Perfusion
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
            <span className="block sm:inline mt-2 sm:mt-0">
              <br className="hidden sm:block" />in Sri Lanka"
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            The nation's foremost collective of certified perfusionists, driving excellence in cardiopulmonary care
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white p-2 sm:p-4 rounded-2xl shadow-2xl">
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                  <div className="text-center p-4">
                    <div className="text-4xl sm:text-6xl mb-2">🫀</div>
                    <p className="text-sky-700 font-semibold text-sm sm:text-base">Perfusion Society Logo</p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Government Perfusionist Association</p>
                  </div>
                </div>
                <div className="absolute inset-2 sm:inset-4 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Stats - Repositioned for mobile */}
            <div className="relative sm:absolute sm:-bottom-6 sm:-right-6 mt-4 sm:mt-0 bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 mx-auto sm:mx-0 max-w-sm sm:max-w-none">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-lg sm:text-2xl font-bold text-sky-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-4 sm:space-y-6">
              {/* Who is a Perfusionist Section */}
              <div className="bg-sky-50 rounded-2xl p-4 sm:p-6 border border-sky-100">
                <h3 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3 sm:mb-4">Who is a Perfusionist?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic border-l-4 border-sky-400 pl-3 sm:pl-4">
                  "A clinical perfusionist is a highly specialized healthcare professional trained to operate extracorporeal circulation equipment during medical procedures where cardiac or respiratory function must be artificially supported."
                </p>
              </div>

              {/* About the Society */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Perfusion Society of Sri Lanka is the nation's foremost collective of certified perfusionists, driving excellence in cardiopulmonary care. Founded on the pillars of education, innovation, and advocacy, we unite specialists from major medical institutions to advance perfusion science through evidence-based practice.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our society collaborates with global partners like the International Society for Perfusion Technology (ISPT) and AmSECT to implement world-class protocols. We ensure Sri Lanka's perfusion community remains at the vanguard of life-support techniques—from ECMO to minimally invasive procedures—while nurturing the next generation of clinical leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Responsibilities Section - Full width on mobile */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center sm:text-left mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Responsibilities</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-500 hover:border-sky-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sky-800 transition-colors duration-300 text-sm sm:text-base leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center pt-8 sm:pt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200 transform hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none">
            <span className="relative z-10">Learn More About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  )
}