'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Shield, Clock } from 'lucide-react';
import { getContent } from '@/lib/content';
import { useState, useEffect } from 'react';

const Hero = () => {
  const content = getContent();
  const { hero, company } = content;
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: number, duration: number}>>([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration issues
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  const getFeatureIcon = (iconName: string) => {
    const iconMap = {
      'shield-check': Shield,
      'clock': Clock,
      'star': Star,
    };
    return iconMap[iconName as keyof typeof iconMap] || Star;
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              y: [-10, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto container-padding text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
        >
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">Trusted Local Tree Service</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {hero.title.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className={index === 1 ? 'text-emerald-400' : ''}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-emerald-300 mb-12 font-medium"
        >
          {company.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>{hero.ctaButton}</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href={`tel:${company.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/20"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
        >
          {hero.features.map((feature, index) => {
            const IconComponent = getFeatureIcon(feature.icon);
            
            return (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">{feature.value}</span>
                </div>
                <span className="text-sm">{feature.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 