'use client'
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, X, ChevronLeft, ChevronRight, MapPin, Users, Heart } from 'lucide-react';

const NewsEventsSection = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(6); // Show 6 items initially

  // Your news data - easily expandable
const allNewsData = [
  {
    id: 1,
    title: "Pioneering Excellence: Sri Lanka's Inaugural Perfusionist Educational Programme Launches at NHSL Colombo",
    excerpt: "A landmark moment in Sri Lanka's healthcare education unfolded today at the National Hospital of Sri Lanka (NHSL), Colombo, with the official commencement of the nation's first dedicated Perfusionist Educational Programme.",
    date: "August 11, 2025",
    author: "Ministry of Health ET&R Unit",
    category: "Education",
    image: "/images/news/news1-img1.jpeg",
    images: [
      "/images/news/news1-img2.jpg",
      "/images/news/news1-img3.webp",
      "/images/news/news1-img4.jpg",
      "/images/news/news1-img1.webp"
    ],
    content: `A landmark moment in Sri Lanka's healthcare education unfolded today at the National Hospital of Sri Lanka (NHSL), Colombo, with the official commencement of the nation's **first dedicated Perfusionist Educational Programme.** Conducted under the auspices of the Ministry of Health's **Education, Training, and Research (ET&R) Unit**, this pioneering initiative marks a significant leap forward in enhancing specialized cardiac and thoracic surgical care for the Sri Lankan people.

This groundbreaking programme represents a direct response to the critical need for highly skilled perfusion science professionals within our national healthcare system. Perfusionists are the vital, behind-the-scenes specialists who operate the heart-lung machine during complex open-heart surgeries and other procedures requiring extracorporeal circulation. Their expertise is fundamental to maintaining a patient's vital functions – oxygenation, circulation, and temperature – while the surgical team operates on the heart or lungs. The quality of perfusion directly impacts patient safety, surgical outcomes, and recovery.

Housed within the prestigious Neurotrauma Auditorium at NHSL Colombo, this programme is strategically positioned at the heart of the country's leading tertiary care and teaching hospital.

This location provides unparalleled access to world-class surgical facilities, experienced cardiothoracic surgeons and anaesthetists, and real-world clinical scenarios – creating an optimal environment for immersive, hands-on training.

**Elevating Patient Care Standards:**  
To directly enhance the safety, efficiency, and success rates of complex cardiac and thoracic surgeries performed within Sri Lanka by providing dedicated, expert perfusion support.

**Establishing a Formal Career Pathway:**  
To create a recognized, specialized professional track within the healthcare system, attracting talented individuals and providing clear career progression for perfusion science.

**Promoting Excellence in Perfusion Science:**  
To foster a culture of continuous learning, research, and adherence to international best practices in perfusion technology and patient management.

**Strengthening the Healthcare Ecosystem:**  
To solidify the multidisciplinary team approach essential for modern cardiothoracic surgery, integrating perfusionists as core members alongside surgeons, anaesthetists, and nurses.

Under the expert guidance of the Ministry of Health's **ET&R Unit**, the programme combines rigorous theoretical instruction with intensive practical clinical rotations. Trainees will gain mastery over the sophisticated technology of the heart-lung machine, learn advanced techniques in blood conservation and management, understand the complex physiology involved, and develop critical decision-making skills essential in high-stakes surgical environments. NHSL Colombo's state-of-the-art operating theatres and dedicated cardiothoracic units serve as the primary training ground.

The launch of this programme on August 11, 2025, is more than just the start of a course; it is the foundation of a new era in specialized cardiac care for Sri Lanka. It signifies the Ministry of Health's and NHSL Colombo's unwavering commitment to advancing medical education, embracing technological specialization, and, ultimately, delivering the highest possible standards of life-saving surgical care to our citizens. We embark on this journey with immense pride and a deep sense of responsibility towards shaping the future of perfusion science in our nation. This programme is a vital investment in Sri Lanka's healthcare future, ensuring that world-class cardiac surgical expertise is supported by equally world-class perfusion specialists, trained right here at home.`,
    location: "NHSL Colombo, Neurotrauma Auditorium",
    readTime: "5 min read",
    tags: ["Education", "Healthcare", "Innovation", "Training", "Ministry of Health", "ET&R Unit", "Perfusion Science"],
    views: 1250,
    likes: 89
  }
];


  const displayedNews = allNewsData.slice(0, displayCount);
  const hasMoreNews = allNewsData.length > displayCount;

  const loadMoreNews = () => {
    setDisplayCount(prev => prev + 3);
  };

  const openNewsModal = (news) => {
    setSelectedNews(news);
    setCurrentImageIndex(0);
  };

  const closeNewsModal = () => {
    setSelectedNews(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedNews && selectedNews.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedNews.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedNews && selectedNews.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedNews.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* News & Events Section */}
      <section id='newsandevents' className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Latest Updates
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              News & 
              <span className="block text-blue-600 mt-2">Events</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest developments, educational programs, and achievements 
              in perfusion science across Sri Lanka.
            </p>
          </div>

          {/* News Grid */}
          <div className="w-[100%] gap-6 lg:gap-8 mb-12">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"> */}
            {displayedNews.map((news, index) => (
              <article 
                key={news.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
                onClick={() => openNewsModal(news)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${
                      news.category === 'Education' ? 'bg-blue-600/80' :
                      news.category === 'Workshop' ? 'bg-emerald-600/80' :
                      news.category === 'Conference' ? 'bg-purple-600/80' : 'bg-gray-600/80'
                    }`}>
                      {news.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1 text-white text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{news.location}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 truncate">{news.author}</span>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {news.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                    {news.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{news.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreNews && (
            <div className="text-center">
              <button 
                onClick={loadMoreNews}
                className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Load More Articles ({allNewsData.length - displayCount} remaining)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* All Loaded Message */}
          {!hasMoreNews && displayedNews.length > 3 && (
            <div className="text-center pt-8">
              <p className="text-gray-600">You've reached the end of our news archive</p>
            </div>
          )}
        </div>
      </section>

      {/* Full News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen py-4 sm:py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center z-10">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    selectedNews.category === 'Education' ? 'bg-blue-600' :
                    selectedNews.category === 'Workshop' ? 'bg-emerald-600' :
                    selectedNews.category === 'Conference' ? 'bg-purple-600' : 'bg-gray-600'
                  }`}>
                    {selectedNews.category}
                  </span>
                </div>
                
                <button
                  onClick={closeNewsModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Gallery */}
              {selectedNews.images && selectedNews.images.length > 0 && (
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <img
                    src={selectedNews.images[currentImageIndex]}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {selectedNews.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedNews.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Article Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{selectedNews.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedNews.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedNews.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{selectedNews.views} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>{selectedNews.likes} likes</span>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedNews.title}
                </h1>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none mb-8">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedNews.content}
                  </div>
                </div>

                {/* Tags */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNews.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share and Actions */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{selectedNews.views} people read this</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{selectedNews.likes} likes</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>Like Article</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <span>Share</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Related Articles or Call to Action */}
                <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h4>
                  <p className="text-gray-600 mb-4">
                    Don't miss out on the latest developments in perfusion science and healthcare education in Sri Lanka.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Subscribe to Updates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsEventsSection;