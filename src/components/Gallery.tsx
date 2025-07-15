'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Grid, TreeDeciduous, Scissors, Phone, Settings, Flame } from 'lucide-react';
import { getGalleryData } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';

const Gallery = () => {
  const galleryData = getGalleryData();
  const [activeFilter, setActiveFilter] = useState('all');

  const getIcon = (iconName: string) => {
    const iconMap = {
      'grid': Grid,
      'tree': TreeDeciduous,
      'scissors': Scissors,
      'phone': Phone,
      'cog': Settings,
    };
    return iconMap[iconName as keyof typeof iconMap] || Grid;
  };

  const filteredImages = activeFilter === 'all' 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === activeFilter);

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
    <section id="gallery" className="relative bg-gradient-to-br from-gray-900 via-black to-red-950 section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(185,28,28,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(239,68,68,0.02)_50%,transparent_75%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6"
          >
            <Flame className="h-4 w-4" />
            <span>Our Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            See Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Professional Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {galleryData.subtitle}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-wrap justify-center gap-4 mb-12 hidden md:flex"
        >
          {galleryData.categories.map((category) => {
            const IconComponent = getIcon(category.icon);
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-6 py-4 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500/50 shadow-lg shadow-red-500/25'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-red-500/30'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className={`h-5 w-5 transition-colors ${
                    activeFilter === category.id ? 'text-white' : 'text-gray-400 group-hover:text-red-400'
                  }`} />
                  <span>{category.name}</span>
                </div>
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${activeFilter}`}
              variants={itemVariants}
              layout
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="relative">
                <img
                  src={getImageUrl(image.url)}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="glass-fire rounded-full p-4"
                  >
                    <Eye className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <motion.span 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-flex items-center space-x-1 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-full border border-red-500/20"
                  >
                    <Flame className="h-3 w-3" />
                    <span>{galleryData.categories.find(cat => cat.id === image.category)?.name || image.category}</span>
                  </motion.span>
                </div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/20 via-transparent to-red-600/20 blur-sm"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{image.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery; 