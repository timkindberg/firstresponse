'use client';

import { getCompanyInfo, getServices, Service } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Wrench } from 'lucide-react';
import { useRef } from 'react';
import { useImageViewer } from '@/contexts/ImageViewerContext';

// Service Card Component with Technical Styling
const ServiceCard = ({ service, index, onImageClick }: { service: Service; index: number; onImageClick: () => void }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.1']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -215]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group cursor-pointer relative overflow-hidden rounded border-2 border-white/10 bg-white/5 backdrop-blur-md hover:border-red-500/40 transition-all"
    >
      {/* Service Image with Parallax Effect */}
      <div className="h-[24rem] overflow-hidden">
        <div 
          className="relative h-[34rem] overflow-hidden cursor-pointer"
          onClick={onImageClick}
        >
          {service.video ? (
            <motion.div className="absolute inset-0 w-full h-full">
              <motion.video
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                autoPlay={service.video.autoplay}
                muted={service.video.muted}
                loop={service.video.loop}
                playsInline
                poster={getImageUrl(service.image)}
              >
                <source src={getImageUrl(service.video.src)} type="video/mp4" />
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url('${getImageUrl(service.image)}')`, 
                    ...service.imageStyles,
                    y,
                  }}
                />
              </motion.video>
            </motion.div>
          ) : (
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('${getImageUrl(service.image)}')`, 
                ...service.imageStyles,
                y,
              }}
              whileHover={{ scale: 1.1 }}
            />
          )}
          <div className="absolute inset-0 bg-[#0F1419]/10 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      </div>

      {/* Technical Card Content */}
      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 font-mono group-hover:text-red-500 transition-colors duration-300 uppercase tracking-wider">
          {service.name}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed text-base font-mono">
          {service.shortDescription}
        </p>
        
        {/* Technical Features List */}
        <ul className="space-y-3 mb-6">
          {service.features.slice(0, 4).map((feature: string, featureIndex: number) => (
            <motion.li 
              key={featureIndex} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
              className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm font-mono">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        {/* Technical CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 text-white font-bold font-mono rounded hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-600/40 uppercase tracking-wider text-sm"
        >
          <span>Get Estimate</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = getServices();
  const company = getCompanyInfo();
  const { allImages, openImageViewer } = useImageViewer();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleImageClick = (serviceId: string) => {
    const globalIndex = allImages.findIndex(img => img.id === `service-${serviceId}`);
    if (globalIndex !== -1) {
      openImageViewer(globalIndex);
    }
  };

  return (
    <section id="services" className="relative bg-[#0F1419] section-padding overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[2]">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/40 rounded text-red-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <Wrench className="h-4 w-4" />
            <span>Service Catalog</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono uppercase"
          >
            Professional <span className="text-red-500">Tree Care</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono"
          >
            From routine maintenance to emergency services, we provide comprehensive tree care solutions for residential and commercial properties throughout greater Cincinnati.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onImageClick={() => handleImageClick(service.id)} />
          ))}
        </motion.div>

        {/* Emergency CTA */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded border-2 border-red-500/40 bg-red-600/10 backdrop-blur-md"
        >
          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-red-600 rounded flex items-center justify-center mx-auto mb-8"
            >
              <Phone className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
              Emergency Tree Service?
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-mono">
              Swift response for storm damage, fallen trees, and urgent tree removal needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href={`tel:${company.phone}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-6 bg-red-600 text-white font-bold font-mono rounded hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 uppercase tracking-wider"
              >
                <Phone className="w-6 h-6 mr-3" />
                <span>{company.phone}</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-6 bg-white/10 hover:bg-white/20 text-white font-mono font-semibold rounded transition-all border-2 border-white/20 hover:border-white/40 backdrop-blur-sm uppercase tracking-wider"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
