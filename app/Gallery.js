"use client"
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, List, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Gallery = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  // Sample media data with mixed images and videos
  const mediaItems = [
    {
      id: 1,
      src: '/images/gallery/new/img1.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 2,
     src: '/images/gallery/new/img2.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 3,
     src: '/images/gallery/new/img3.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 4,
    src: '/images/gallery/new/img4.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 5,
      src: '/images/gallery/new/img5.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 6,
     src: '/images/gallery/new/img6.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 7,
   src: '/images/gallery/new/img7.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 8,
      src: '/images/gallery/new/img8.jpeg',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 9,
      src: '/images/gallery/new/video1.mp4',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    },
    {
      id: 10,
      src: '/images/gallery/new/video2.mp4',
      // alt: 'Mountain landscape',
      // title: 'Serene Mountains',
      // category: 'Nature'
    }
  ];

  // Function to detect media type from file extension or explicit type
  const getMediaType = (item) => {
    if (item.type) return item.type;
    
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv'];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
    
    const src = item.src.toLowerCase();
    
    if (videoExtensions.some(ext => src.includes(ext))) return 'video';
    if (imageExtensions.some(ext => src.includes(ext))) return 'image';
    
    // Default to image if can't determine
    return 'image';
  };

  const openModal = (media) => {
    setSelectedMedia(media);
    if (getMediaType(media) === 'video') {
      setIsVideoPlaying(false);
    }
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsVideoPlaying(false);
  };

  const nextMedia = () => {
    if (!selectedMedia) return;
    const currentIndex = mediaItems.findIndex(item => item.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setSelectedMedia(mediaItems[nextIndex]);
    setIsVideoPlaying(false);
  };

  const prevMedia = () => {
    if (!selectedMedia) return;
    const currentIndex = mediaItems.findIndex(item => item.id === selectedMedia.id);
    const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setSelectedMedia(mediaItems[prevIndex]);
    setIsVideoPlaying(false);
  };

  const toggleVideoPlayback = () => {
    const video = document.getElementById('modal-video');
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    const video = document.getElementById('modal-video');
    if (video) {
      video.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const MediaThumbnail = ({ item, index, className }) => {
    const mediaType = getMediaType(item);
    
    if (mediaType === 'video') {
      return (
        <div className={`relative ${className}`}>
          <video
            className="w-full h-full object-cover"
            muted
            preload="metadata"
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-600/80 rounded-full p-3 backdrop-blur-sm">
              <Play size={24} className="text-white ml-1" />
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <img
        src={item.src}
        alt={item.alt}
        className={className}
      />
    );
  };

  return (
    <section id='gallery' className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Media Gallery
            </h1>
            <div className="flex gap-2 bg-blue-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-blue-500 hover:text-blue-600'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-blue-500 hover:text-blue-600'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`gap-4 ${
          viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'
        }`}>
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-all duration-500 cursor-pointer ${
                viewMode === 'list' ? 'flex items-center gap-4 p-4' : 'aspect-square'
              }`}
              onClick={() => openModal(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MediaThumbnail
                item={item}
                index={index}
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
                    {item.title}
                  </h3>
                  <p className={`text-sm ${viewMode === 'list' ? 'text-blue-600' : 'text-blue-200'}`}>
                    {item.category} • {getMediaType(item) === 'video' ? 'Video' : 'Image'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white/80 rounded-2xl overflow-hidden border border-blue-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-900/60 to-transparent p-4 z-10">
              <div className="flex justify-between items-start">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">{selectedMedia.title}</h3>
                  <p className="text-blue-200">
                    {selectedMedia.category} • {getMediaType(selectedMedia) === 'video' ? 'Video' : 'Image'}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Media Content */}
            {getMediaType(selectedMedia) === 'video' ? (
              <div className="relative">
                <video
                  id="modal-video"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  controls={false}
                  muted={isVideoMuted}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <button
                    onClick={toggleVideoPlayback}
                    className="text-white/80 hover:text-white transition-colors p-3 rounded-full bg-blue-900/50 hover:bg-blue-900/70"
                  >
                    {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button
                    onClick={toggleVideoMute}
                    className="text-white/80 hover:text-white transition-colors p-3 rounded-full bg-blue-900/50 hover:bg-blue-900/70"
                  >
                    {isVideoMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
              </div>
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}

            {/* Navigation Buttons */}
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;