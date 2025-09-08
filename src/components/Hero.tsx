'use client';

import { getContent } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Keyboard, Phone, Shield } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts'

const Hero = () => {
  const content = getContent();
  const { company } = content;

  const isMobile = useMediaQuery('(max-width: 768px)');


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Linear Background Gradient (top to bottom) */}
      <div className="absolute inset-0 bg-black">
        {/* Very Faint Tree Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getImageUrl('/tree-line.jpg')}')`,
            backgroundPosition: 'center 200px', // Shift image downward by 60px
            mask: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.8) 100%)',
            WebkitMask: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.8) 100%)',
            filter: 'saturate(.5)',
            mixBlendMode: 'luminosity',
          }}
        ></div>
        
        {/* Linear gradient glow from top extending below logo area */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/15 via-red-800/10 to-transparent" style={{
          background: 'linear-gradient(to bottom, rgba(185, 28, 28, 0.15) 0%, rgba(220, 38, 38, 0.1) 35%, rgba(239, 68, 68, 0.08) 60%, transparent 100%)'
        }}></div>
      </div>


      <div className="relative z-10 max-container container-padding text-center pb-16">
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
            className="flex justify-center mt-16 sm:mt-24md:mt-8 mb-0 md:mb-6 w-full"
          >
            <div className="flex justify-center w-full">
              <div className="relative mt-12 lg:mt-24 w-full md:w-[720px] xl:w-[790px] rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl("/logo-no-bg.png")}
                  alt="First Response Tree Service Logo"
                  width={790}
                  height={305}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{
                    // @ts-expect-error --bc is a css variable
                    '--bc': '#a2a2a2',
                    filter: isMobile
                      ? 'drop-shadow(var(--bc) 1px 1px 0px)'
                      : 'drop-shadow(var(--bc) 1px 1px 0px) drop-shadow(var(--bc) -1px -1px 0px) drop-shadow(var(--bc) 1px -1px 0px) drop-shadow(var(--bc) -1px 1px 0px)'
                  }}
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
            <h1 className="font-display text-4xl md:text-5xl xl:text-7xl font-bold text-white leading-tight">
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 mb-2">
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
                className="block text-3xl md:text-3xl lg:text-4xl xl:text-6xl text-gray-300 font-normal"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                When You Need It Most
              </motion.span>
            </h1>
          </motion.div>

          <div className="space-y-2">
            {/* Compact Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Serving all of greater Cincinnati with expert tree care and professional service
            </motion.p>

            {/* Compact Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-xl xl:text-2xl text-gray-400 max-w-2xl mx-auto italic font-light"
            >
              &ldquo;{company.tagline}&rdquo;
            </motion.p> 
          </div>

          {/* CTA Buttons - Higher Priority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center pt-6 items-stretch lg:items-center"
          >

            <motion.a
              href={`tel:${company.phone}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group btn-fire flex items-center space-x-3 text-lg font-bold"
            >
              <Phone className="w-6 h-6" />
              <span>Call Us Now</span>
            </motion.a>

            <motion.a
              href={`sms:${company.phone}?body=Hello, I need a quote for tree services.`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="order-[-1] sm:order-none group btn-emergency flex items-center space-x-3 text-lg font-bold"
            >
              <Keyboard className="w-6 h-6" />
              <span>Text Us Now</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group btn-fire flex items-center space-x-3 text-lg font-semibold shadow-2xl relative overflow-hidden"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Compact Stats/Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, value: "25+", label: "Years Experience", color: "text-yellow-400" },
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
                    <div className="text-3xl md:text-3xl font-bold text-white font-display">
                      {feature.value}
                    </div>
                    <div className="text-gray-300 font-medium text-lg">
                      {feature.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 