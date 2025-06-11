'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Eye } from 'lucide-react';
import { getGalleryData } from '@/lib/content';

const Gallery = () => {
  const galleryData = getGalleryData();
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample gallery images - in real implementation, these would come from the CMS
  const sampleImages = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tree removal service',
      category: 'Tree Removal'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tree pruning work',
      category: 'Pruning'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1612182062546-0ba1a7f9f7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Emergency tree service',
      category: 'Emergency Response'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1574263867128-6e4b999c8b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Stump grinding service',
      category: 'Stump Grinding'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1508004680771-708b02aabdc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional tree care',
      category: 'Tree Removal'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1592839404241-7aecb0c45c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tree trimming expertise',
      category: 'Pruning'
    }
  ];

  const categories = ['All', ...galleryData.categories];
  const filteredImages = activeFilter === 'All' 
    ? sampleImages 
    : sampleImages.filter(img => img.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="gallery" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium mb-4"
          >
            {galleryData.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            See Our <span className="text-emerald-600">Professional Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {galleryData.description}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>{category}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${activeFilter}`}
              variants={itemVariants}
              layout
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                  >
                    <Eye className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.alt}</h3>
                <p className="text-sm text-gray-600">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery; 