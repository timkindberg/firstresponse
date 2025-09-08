'use client';

import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';
import { useImageViewer } from '@/contexts/ImageViewerContext';
import { getImageUrl } from '@/lib/utils';

const Gallery = () => {
  const { openImageViewer } = useImageViewer();
  
  // Add custom animation styles
  const animationStyles = `
    @keyframes cardWave {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    .card-wave {
      animation: cardWave 0.6s ease-in-out;
    }
  `;
  
  // Select 5-6 images for the fanned layout
  const galleryImages = [
    {
      id: "gallery-1",
      url: "/images/gallery/old-tree-removal-1.jpg",
      title: "Large Tree Removal",
      description: "Professional tree removal service"
    },
    {
      id: "gallery-2", 
      url: "/images/gallery/old-cut-trunk.jpg",
      title: "Crown Thinning",
      description: "Expert pruning service"
    },
    {
      id: "gallery-3",
      url: "/images/gallery/old-tree-removal-2.jpg", 
      title: "Professional Removal",
      description: "Safe tree removal"
    },
    {
      id: "gallery-4",
      url: "/images/gallery/old-tough-access.jpg",
      title: "Tough Access",
      description: "Challenging tree removal"
    },
    {
      id: "gallery-5",
      url: "/images/gallery/old-trunk-moving.jpg",
      title: "Trunk Moving",
      description: "Heavy trunk removal"
    },
    {
      id: "gallery-6",
      url: "/images/gallery/old-wood-chipping.jpg",
      title: "Wood Chipping",
      description: "Cleanup and chipping"
    }
  ];

  const handleImageClick = (index: number) => {
    openImageViewer(index);
  };


  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <section id="gallery" className="relative bg-[linear-gradient(to_bottom_right,theme(colors.black),theme(colors.gray.800))] section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(185,28,28,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(239,68,68,0.01)_50%,transparent_75%)]"></div>
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6"
          >
            <Camera className="h-4 w-4" />
            <span>Our Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Check Out Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Professional tree services with precision and care. Click any image to view our gallery.
          </motion.p>
        </motion.div>

        {/* Fanned Card Layout */}
        <div className="flex justify-center items-center min-h-[600px] py-8">
          <div 
            className="relative flex items-end justify-center group/deck transition-all duration-500 group-hover/deck:shadow-[0_0_50px_rgba(239,68,68,0.3)]"
            style={{ width: '1000px', height: '500px' }}
          >
            {galleryImages.map((image, index) => {
              const rotation = (index - (galleryImages.length - 1) / 2) * 12; // Fan spread
              const zIndex = galleryImages.length - index; // Stack order
              const translateX = (index - (galleryImages.length - 1) / 2) * 90; // Increased horizontal spread
              const centerIndex = (galleryImages.length - 1) / 2;
              const distanceFromCenter = Math.abs(index - centerIndex);
              const maxDistance = centerIndex;
              const arcOffset = (maxDistance - distanceFromCenter) * 25; // More pronounced arc - center cards much higher
              
              return (
                <div
                  key={image.id}
                  className="absolute cursor-pointer group transition-all duration-300"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${-arcOffset}px) rotate(${rotation}deg)`,
                    zIndex: zIndex,
                    transformOrigin: 'bottom center',
                    left: '50%',
                    marginLeft: '-160px', // Half of new card width (320px / 2)
                    bottom: '0px'
                  }}
                  onClick={() => handleImageClick(index)}
                >
                  <div 
                    className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-red-500/30 transition-all duration-500 group-hover/deck:card-wave"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <img
                      src={getImageUrl(image.url)}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of our work? Check out our full gallery or follow us on Instagram!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              <span>Get Your Free Estimate</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#instagram"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-red-300 font-medium rounded-full transition-all duration-300 hover:bg-red-500/10"
            >
              <Camera className="h-5 w-5" />
              <span>View Instagram Gallery</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Gallery;