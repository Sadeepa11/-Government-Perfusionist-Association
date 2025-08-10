'use client'
import { useState, useEffect, useRef } from 'react'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const services = [
    {
      icon: "🎓",
      title: "Professional Development",
      subtitle: "Building Excellence Through Education",
      features: [
        "Accredited workshops and international certification programs",
        "Journal clubs, grand rounds and annual scientific congresses",
        "Mentorship for early career perfusionists"
      ],
      color: "from-blue-500 to-sky-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800"
    },
    {
      icon: "🫀",
      title: "Patient Centred Protocols",
      subtitle: "Evidence-Based Clinical Standards",
      features: [
        "Cardiopulmonary bypass (CPB) management standards",
        "ECMO - VAD support networks",
        "Blood conservation and transfusion guidelines"
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800"
    },
    {
      icon: "🌍",
      title: "Public Health Advocacy",
      subtitle: "Community Impact & Outreach",
      features: [
        "Community heart-health screening initiatives",
        "Disaster response perfusion teams",
        "Government advisory on cardiovascular infrastructure"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800"
    },
    {
      icon: "🔬",
      title: "Research & Innovation Hub",
      subtitle: "Advancing Perfusion Science",
      features: [
        "Sri Lankan perfusion outcomes registry",
        "Collaborative trials with global research consortia",
        "Technology assessment for resource-optimized care"
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800"
    }
  ]

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-200 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full text-sky-800 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-sky-600 relative">
              Clinical Excellence,
              {/* <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div> */}
            </span>
            <br />
            <span className="text-gray-900">Community Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive perfusion services driving healthcare excellence across Sri Lanka through education, innovation, and community engagement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} hover:border-opacity-50 transform hover:-translate-y-2 ${
                hoveredCard === index ? 'scale-105' : ''
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`font-bold text-xl ${service.textColor} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-6">
                    {service.subtitle}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-start space-x-3 transition-all duration-300 ${
                          hoveredCard === index ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className={`w-2 h-2 ${service.bgColor} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        {/* <div className={`mt-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}> */}
          {/* <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sky-100 font-medium">Healthcare Professionals Trained</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-sky-100 font-medium">Major Hospitals Supported</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sky-100 font-medium">Emergency Response Ready</div>
              </div>
            </div>
          </div>
        </div> */}

   
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Ready to Advance Your Perfusion Career?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200 transform hover:-translate-y-0.5">
              <span className="relative z-10">Explore Programs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl border-2 border-sky-200 hover:border-sky-300 hover:bg-sky-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}