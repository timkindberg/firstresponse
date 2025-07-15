'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Clock, Award } from 'lucide-react';
import { getContent } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Image from 'next/image';


const Hero = () => {
  const content = getContent();
  const { company } = content;
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: number, duration: number, size: number}>>([]);

  useEffect(() => {
    // Generate enhanced particles on client side only
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 4, // Slower particles
      size: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Linear Background Gradient (top to bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-red-950">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M40%2040L20%2020h40L40%2040zM40%2040L20%2060h40L40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        {/* Linear gradient glow from top extending below logo area */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/15 via-red-800/10 to-transparent" style={{
          background: 'linear-gradient(to bottom, rgba(185, 28, 28, 0.15) 0%, rgba(220, 38, 38, 0.1) 35%, rgba(239, 68, 68, 0.08) 60%, transparent 100%)'
        }}></div>
      </div>

      {/* Slower Floating Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: index % 3 === 0 
              ? 'rgba(220, 38, 38, 0.3)' 
              : index % 3 === 1 
                ? 'rgba(251, 191, 36, 0.25)' 
                : 'rgba(255, 255, 255, 0.15)',
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-container container-padding text-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo - Positioned Lower, Slightly Bigger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 80 }}
            className="flex justify-center mt-8 mb-6 w-full"
          >
            <div className="flex justify-center relative w-full">
              <div className="relative w-full min-h-[240px] mt-12 md:w-[480px] md:h-[280px] xl:w-[520px] xl:h-[305px] lg:mt-24">
                {/* Slower, More Subtle Glowing Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full blur-3xl"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{ 
                    duration: 6, // Much slower
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full blur-2xl"
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1.05, 0.95, 1.05]
                  }}
                  transition={{ 
                    duration: 8, // Even slower
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
                <Image
                  src={getImageUrl("/First Response Logo.svg")}
                  alt="First Response Tree Service Logo"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Smaller Main Heading - Tighter Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-3"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <div className="flex flex-row gap-3 items-center justify-center">
                <motion.span 
                  className=""
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Professional
                </motion.span>
                <motion.span 
                  className="text-gradient-fire bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Excellence
                </motion.span>
              </div>
              <motion.span 
                className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 font-normal"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                When You Need It Most
              </motion.span>
            </h1>
          </motion.div>

          {/* Compact Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Serving all of greater Cincinnati with expert emergency response and professional care
          </motion.p>

          {/* Compact Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto italic font-light"
          >
            &ldquo;{company.tagline}&rdquo;
          </motion.p>

          {/* CTA Buttons - Higher Priority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group btn-fire flex items-center space-x-3 text-lg font-semibold shadow-2xl relative overflow-hidden"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href={`tel:${company.phone}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group btn-emergency flex items-center space-x-3 text-lg font-bold"
            >
              <Phone className="w-6 h-6" />
              <span>Emergency Call</span>
            </motion.a>
          </motion.div>

          {/* Compact Stats/Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, value: "15+", label: "Years Experience", color: "text-yellow-400" },
              { icon: Clock, value: "24/7", label: "Emergency Service", color: "text-red-400" },
              { icon: Shield, value: "★★★★★", label: "Fully Insured", color: "text-green-400" }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="card-glass p-6 text-center group cursor-pointer"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white font-display">
                      {feature.value}
                    </div>
                    <div className="text-gray-300 font-medium text-sm">
                      {feature.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
          <span className="text-white/50 text-xs font-medium tracking-wider">SCROLL</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 