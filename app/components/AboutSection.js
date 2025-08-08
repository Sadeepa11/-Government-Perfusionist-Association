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
      { threshold: 0.3 }
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
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-sky-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sky-800 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            About Our Association
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-sky-600 relative">
              "The Heartbeat of Perfusion
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
            <br />in Sri Lanka"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The nation's foremost collective of certified perfusionists, driving excellence in cardiopulmonary care
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="/images/logo/logo.jpeg"
                
                  alt="Government Perfusionist Association Team"
                  className="w-full  object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-2xl font-bold text-sky-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              {/* Who is a Perfusionist Section */}
              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <h3 className="text-2xl font-bold text-sky-800 mb-4">Who is a Perfusionist?</h3>
                <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-sky-400 pl-4">
                  "A clinical perfusionist is a highly specialized healthcare professional trained to operate extracorporeal circulation equipment during medical procedures where cardiac or respiratory function must be artificially supported."
                </p>
              </div>

              {/* About the Society */}
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Perfusion Society of Sri Lanka is the nation's foremost collective of certified perfusionists, driving excellence in cardiopulmonary care. Founded on the pillars of education, innovation, and advocacy, we unite specialists from major medical institutions to advance perfusion science through evidence-based practice.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our society collaborates with global partners like the International Society for Perfusion Technology (ISPT) and AmSECT to implement world-class protocols. We ensure Sri Lanka's perfusion community remains at the vanguard of life-support techniques—from ECMO to minimally invasive procedures—while nurturing the next generation of clinical leaders.
                </p>
              </div>

              {/* Key Responsibilities Header */}
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h3>
              </div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-500 hover:border-sky-200 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${700 + index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sky-800 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="group relative px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200 transform hover:-translate-y-0.5">
                  <span className="relative z-10">Learn More About Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action Section
        <div className={`text-center bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            "Every pulse we sustain echoes our mission:"
          </h3>
          <p className="text-sky-100 text-lg mb-6 max-w-2xl mx-auto font-semibold">
            Safe hearts, skilled hands, stronger communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Join Our Society
            </button>
            <button className="px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
              Learn About Perfusion
            </button>
          </div>
        </div> */}
      
    </section>
  )
}