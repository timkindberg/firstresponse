'use client';

import { useImageViewer } from '@/contexts/ImageViewerContext';
import { getContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { Camera, Keyboard } from 'lucide-react';

function getGalleryImages(){
  return [
    {
      url: '/images/gallery/tree-removal-crane.jpg',
      title: 'Professional crane-assisted tree removal in action! Our team safely removes large trees using state-of-the-art equipment. #TreeRemoval #CraneWork #Professional',
    },
    {
      url: '/images/gallery/two-crane-tree-removal.jpg',
      title: 'Dual crane operation for complex tree removal. Safety and precision are our top priorities! #DualCrane #TreeService #SafetyFirst',
    },
    {
      url: '/images/gallery/debris-cleanup.jpg',
      title: 'Complete cleanup after tree removal. We leave your property spotless! #Cleanup #ProfessionalService #TreeRemoval',
    },
    {
      url: '/images/gallery/brush-cleanup.jpeg',
      title: 'Brush and debris cleanup services. Professional results every time! #BrushCleanup #LandClearing #Professional',
    },
    {
      url: '/images/gallery/crane-tree.jpeg',
      title: 'Large tree removal using professional crane equipment. Expert tree care services! #CraneWork #TreeRemoval #ExpertService',
    },
    {
      url: '/images/gallery/holding-line.jpeg',
      title: 'Precision tree work with safety lines. Our experienced team handles every job with care! #SafetyLines #PrecisionWork #TreeCare',
    }
  ];
}

const Gallery = () => {
  const { openImageViewer } = useImageViewer();
  const content = getContent();
  const { company } = content;
  
  const galleryImages = getGalleryImages();

  const handleImageClick = (index: number) => {
    openImageViewer(index);
  };

  return (
    <>
      <section id="gallery" className="relative bg-[#0F1419] section-padding overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto container-padding">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/40 rounded text-red-400 text-xs font-mono uppercase tracking-widest mb-6"
            >
              <Camera className="h-4 w-4" />
              <span>Project Gallery</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono uppercase"
            >
              Check Out Our <span className="text-red-500">Work</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 font-mono"
            >
              Professional tree services with precision and care. Click any image to view our gallery.
            </motion.p>
          </motion.div>

          {/* Perspective Deck Layout - Desktop */}
          <div className="hidden md:flex justify-start items-center min-h-[500px] lg:min-h-[600px] py-8 px-8">
            <div 
              className="relative flex items-center group/deck transition-all duration-500"
              style={{ 
                width: '100%', 
                maxWidth: '1200px',
                height: '580px',
                perspective: '1000px'
              }}
            >
              {galleryImages.map((image, index) => {
                const scale = index === 0 ? 1.5 : Math.max(0.3, 1.5 - (index * 0.2));
                const translateZ = -index * 50;
                const leftPercent = 22 + (index * 10);
                const overlayOpacity = Math.min(0.7, index * 0.15);
                const zIndex = galleryImages.length - index;
                
                return (
                  <div
                    key={image.url}
                    className="absolute cursor-pointer group transition-all duration-300"
                    style={{
                      transform: `translateZ(${translateZ}px) scale(${scale})`,
                      zIndex: zIndex,
                      left: `${leftPercent}%`,
                      top: '50%',
                      marginTop: '-200px'
                    }}
                    onClick={() => handleImageClick(index)}
                  >
                    <div 
                      className="relative w-80 h-96 rounded overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 group-hover:border-red-500/40 transition-all duration-500"
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute inset-0 bg-black transition-opacity duration-300"
                        style={{
                          opacity: overlayOpacity
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Grid Layout */}
          <div className="md:hidden px-4 py-8">
            <div className="grid grid-cols-2 gap-4 mx-auto">
              {galleryImages.slice(0, 4).map((image, index) => (
                <div
                  key={image.url}
                  className="relative aspect-square rounded overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-red-500/40 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
            {galleryImages.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => handleImageClick(0)}
                  className="text-red-500 text-base font-mono font-bold uppercase tracking-wider hover:text-red-400 transition-colors duration-300"
                >
                  View all →
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 mb-6 font-mono">
              We can deliver a professional, quality result on your next project. If you like what you see, let&apos;s chat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`sms:${company.phone}?body=Hello, I need a quote for tree services.`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-6 bg-red-600 text-white font-bold font-mono rounded hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 uppercase tracking-wider"
              >
                <Keyboard className="w-6 h-6 mr-3" />
                <span>Text Us Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
