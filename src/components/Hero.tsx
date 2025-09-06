'use client';

import { getContent } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Keyboard, Phone, Shield } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const content = getContent();
  const { company } = content;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Linear Background Gradient (top to bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-red-950">
        {/* Very Faint Tree Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getImageUrl('/tree-line-2.jpg')}')`,
            backgroundPosition: 'center 200px', // Shift image downward by 60px
            mask: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.8) 100%)',
            WebkitMask: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.8) 100%)',
            filter: 'saturate(.5)',
            mixBlendMode: 'luminosity',
          }}
        ></div>
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M40%2040L20%2020h40L40%2040zM40%2040L20%2060h40L40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        {/* Linear gradient glow from top extending below logo area */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/15 via-red-800/10 to-transparent" style={{
          background: 'linear-gradient(to bottom, rgba(185, 28, 28, 0.15) 0%, rgba(220, 38, 38, 0.1) 35%, rgba(239, 68, 68, 0.08) 60%, transparent 100%)'
        }}></div>
      </div>


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
              <div className="relative w-full min-h-[240px] mt-12 md:w-[720px] md:h-[280px] xl:w-[790px] xl:h-[305px] lg:mt-24 rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl("/logo4.png")}
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
            Serving all of greater Cincinnati with expert tree care and professional service
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
  className="group btn-emergency flex items-center space-x-3 text-lg font-bold"
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
    </section>
  );
};

export default Hero; 