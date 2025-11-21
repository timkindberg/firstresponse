'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, CheckCircle, Building2, Home as HomeIcon } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

export default function HeroRedesign() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Image with Light Overlay - The key difference for "Corporate/Trust" vibe */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getImageUrl('/tree-line.jpg')}')`,
            backgroundPosition: 'center 60%',
            filter: 'grayscale(100%)', // Black and white photo for professionalism
            opacity: 0.15 // Very subtle
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Trust Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 font-semibold text-sm mb-6">
              <Shield className="w-4 h-4 fill-red-100" />
              <span>Firefighter Owned & Operated</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
              Professional Tree Care for <span className="text-red-600">Cincinnati</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The trusted partner for homeowners, businesses, and municipalities. We bring firefighter discipline and safety standards to every job site.
            </p>

            {/* Dual CTAs - Residential vs Commercial */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:5132937930" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all"
              >
                <Phone className="w-5 h-5 ml-2 mr-2 text-red-600" />
                (513) 293-7930
              </a>
            </div>

            {/* Capabilities / Trust Badges */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Municipal Grade Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <HomeIcon className="w-5 h-5 text-gray-400" />
                <span>High-Value Residential</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gray-400" />
                <span>Commercial Contracts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Authority */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200">
              <Image 
                src={getImageUrl('/images/gallery/two-crane-tree-removal.jpg')} 
                alt="Professional Tree Removal Team with Cranes" 
                width={600} 
                height={700} 
                className="object-cover w-full h-full"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Safety First</p>
                    <p className="text-sm text-gray-500">Zero Property Damage</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  &quot;First Response treated our property with the same care they treat their own.&quot;
                </p>
              </div>
            </div>

            {/* Background accent graphic */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gray-50 rounded-3xl transform rotate-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
