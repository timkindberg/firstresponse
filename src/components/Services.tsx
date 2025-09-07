'use client';

import { getCompanyInfo, getServices } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Flame, Phone } from 'lucide-react';
import { useRef } from 'react';

// Service Card Component with Parallax Effect
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
      whileHover={{ y: -12, scale: 1.03 }}
      className="card-premium group cursor-pointer relative overflow-hidden"
    >
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Service Image/Video with Parallax Effect */}
      <div className="relative h-72 lg:h-96 overflow-hidden rounded-t-3xl">
        {service.video ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.video
              style={{ y }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              autoPlay={service.video.autoplay}
              muted={service.video.muted}
              loop={service.video.loop}
              playsInline
              poster={getImageUrl(service.image)}
            >
              <source src={getImageUrl(service.video.src)} type="video/mp4" />
              {/* Fallback to image if video fails to load */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${getImageUrl(service.image)}')`, ...service.imageStyles }}
              />
            </motion.video>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ 
              backgroundImage: `url('${getImageUrl(service.image)}')`, 
              ...service.imageStyles,
              y
            }}
          />
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Premium Card Content */}
      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-red-400 transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          {service.shortDescription}
        </p>
        
        {/* Enhanced Features List */}
        <ul className="space-y-3">
          {service.features.slice(0, 4).map((feature: string, featureIndex: number) => (
            <motion.li 
              key={featureIndex} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
              className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex-shrink-0"></div>
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        {/* Enhanced CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/25 group-hover:shadow-xl"
        >
          <span>Get Free Estimate</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = getServices();
  const company = getCompanyInfo();

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

  return (
    <section id="services" className="relative bg-gradient-to-br from-gray-900 via-black to-red-950 section-padding overflow-hidden">
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
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6"
          >
            <Flame className="h-4 w-4" />
            <span>Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Professional <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Tree Care Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From routine maintenance to emergency services, we provide comprehensive tree care solutions for residential and commercial properties throughout greater Cincinnati.
          </motion.p>
        </motion.div>

        {/* Premium Services Grid with Parallax */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Enhanced Emergency CTA */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background with parallax effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M40%2040L20%2020h40L40%2040zM40%2040L20%2060h40L40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse"
            >
              <Phone className="w-10 h-10 text-black" />
            </motion.div>

            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Emergency Tree Service?
            </h3>
            
            <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-3xl mx-auto">
              Swift response for storm damage, fallen trees, and urgent tree removal needs. 
              Fast response guaranteed by Cincinnati&apos;s finest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href={`tel:${company.phone}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency flex items-center justify-center space-x-3 text-xl font-bold px-10 py-5"
              >
                <Phone className="w-6 h-6 hidden md:block" />
                <span>
                  Emergency:
                  <br className="block sm:hidden" />
                  {' '}{company.phone}
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5 hidden md:block" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;