'use client';

import { getContent } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Wrench, Keyboard, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const content = getContent();
  const { company } = content;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[2]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl('/images/gallery/tree-removal-crane.jpg')}
          alt="Crane-Assisted Tree Removal"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Softer Gradient - More transparent on left to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419]/80 via-[#0F1419]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Technical Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded bg-red-600/20 border-2 border-red-500/40 text-red-400 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-sm">
              <Wrench className="w-5 h-5" />
              <span>Professional Tree Care Services</span>
            </div>

            {/* Main Heading with Emblem */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10">
              {/* Emblem Logo - Stacks on mobile, side-by-side on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  {/* White logo - clean and crisp */}
                  <Image
                    src={getImageUrl('/first-response-tree-service-cross-graphic-white.png')}
                    alt="First Response Tree Service"
                    width={300}
                    height={300}
                    className="w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 relative z-10"
                  />
                </div>
              </motion.div>
              
              {/* Heading Text - Centered on mobile, left-aligned on desktop */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-white leading-none text-center md:text-left">
                ENGINEERED<br />
                TREE CARE<br />
                <span className="text-red-500">SOLUTIONS</span>
              </h1>
            </div>

            {/* Description Card */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg border-2 border-white/10 mb-12 shadow-2xl">
              <p className="text-2xl text-white font-bold mb-3 leading-tight font-mono">
              {company.tagline}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-mono">
                Our trained crews execute technically challenging projects with minimal property impact. Municipal-grade capacity meets residential precision.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary: Text Us */}
              <a
                href={`sms:${company.phone}?body=Hello, I need a quote for tree services.`}
                className="inline-flex items-center justify-center px-10 py-6 text-base font-bold text-white bg-red-600 rounded hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 font-mono uppercase tracking-wider hover:scale-105"
              >
                <Keyboard className="w-5 h-5 mr-3" />
                TEXT US
              </a>
              
              {/* Secondary: Call Us */}
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center justify-center px-10 py-6 text-base font-bold text-white bg-transparent border-2 border-white/30 rounded hover:border-white/50 transition-all font-mono uppercase tracking-wider backdrop-blur-sm hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span>CALL US<span className="hidden sm:inline"> @ {company.phone}</span></span>
              </a>
              
              {/* Secondary: Email Us */}
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center px-10 py-6 text-base font-bold text-white bg-transparent border-2 border-white/30 rounded hover:border-white/50 transition-all font-mono uppercase tracking-wider backdrop-blur-sm hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-3" />
                EMAIL US
              </a>
            </div>

            {/* Technical Capability Badges */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 border-2 border-white/10 rounded-lg backdrop-blur-md">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Firefighter</p>
                  <p className="text-base font-bold text-white font-mono">Owned &amp; Operated</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 border-2 border-white/10 rounded-lg backdrop-blur-md">
                <div className="w-14 h-14 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Storm Cleanup</p>
                  <p className="text-base font-bold text-white font-mono">Capacity</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 border-2 border-white/10 rounded-lg backdrop-blur-md">
                <div className="w-14 h-14 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Safety Protocols</p>
                  <p className="text-base font-bold text-white font-mono">Implemented</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Corner Accents - Hidden on mobile to prevent overlap */}
      <div className="hidden lg:block absolute top-32 left-12 w-16 h-16 border-t-4 border-l-4 border-red-500 z-[1]" />
      <div className="hidden lg:block absolute bottom-24 right-12 w-16 h-16 border-b-4 border-r-4 border-red-500 z-[1]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1419] to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
