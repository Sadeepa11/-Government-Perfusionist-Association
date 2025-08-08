"use client"
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const images = [
    {
      id: 1,
      src: '/images/gallery/img1.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 2,
     src: '/images/gallery/img2.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 3,
     src: '/images/gallery/img3.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 4,
    src: '/images/gallery/img4.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 5,
      src: '/images/gallery/img5.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 6,
     src: '/images/gallery/img6.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 7,
   src: '/images/gallery/img7.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 8,
      src: '/images/gallery/img8.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  const categories = [...new Set(images.map(img => img.category))];

  return (
    <div id='gallery' className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
                Visual Gallery
              </h1>
              <p className="text-blue-700">Discover stunning photography and art</p>
            </div>
            {/* <div className="flex items-center gap-2 bg-blue-200/30 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-blue-500/30 text-blue-900' : 'text-blue-600 hover:text-blue-900'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-blue-500/30 text-blue-900' : 'text-blue-600 hover:text-blue-900'
                }`}
              >
                <List size={20} />
              </button>
            </div> */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`gap-4 ${
          viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'
        }`}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-all duration-500 cursor-pointer ${
                viewMode === 'list' ? 'flex items-center gap-4 p-4' : 'aspect-square'
              }`}
              onClick={() => openModal(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`${
                  viewMode === 'list' 
                    ? 'w-24 h-24 rounded-lg object-cover' 
                    : 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                }`}
              />
              <div className={`${
                viewMode === 'list'
                  ? 'flex-1'
                  : 'absolute inset-0 bg-gradient-to-t from-blue-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'
              }`}>
                <div className={`${viewMode === 'list' ? '' : 'p-4 text-white'}`}>
                  <h3 className={`font-semibold ${viewMode === 'list' ? 'text-blue-900 text-lg mb-1' : 'text-lg mb-1'}`}>
                    {image.title}
                  </h3>
                  <p className={`text-sm ${viewMode === 'list' ? 'text-blue-600' : 'text-blue-200'}`}>
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white/80 rounded-2xl overflow-hidden border border-blue-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-900/60 to-transparent p-4 z-10">
              <div className="flex justify-between items-start">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                  <p className="text-blue-200">{selectedImage.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
