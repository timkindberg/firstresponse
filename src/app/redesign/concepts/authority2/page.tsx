'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, CheckCircle, Building2, Home as HomeIcon } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TrustSection from '@/components/redesign/TrustSection';

export default function AuthorityPageV2() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navigation variant="authority" />
      
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Subtle Tree Background + Grid - Adds Depth & Structure */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${getImageUrl('/images/gallery/two-crane-tree-removal.jpg')}')`,
              backgroundPosition: 'center 60%',
              filter: 'grayscale(100%)',
              opacity: 0.08
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {/* Official Badge Style */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm mb-8">
                <Shield className="w-3 h-3 text-red-500" />
                <span>Firefighter Owned & Operated</span>
              </div>

              {/* Sans-Serif Headline - More Industrial/Modern */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                Professional <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Tree Care</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed border-l-4 border-red-600 pl-6">
                The trusted partner for municipalities, commercial properties, and discerning homeowners in Greater Cincinnati.
              </p>

              {/* Structured CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                >
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="tel:5132937930" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-sm hover:border-gray-900 transition-all"
                >
                  <Phone className="w-5 h-5 ml-2 mr-2 text-red-600" />
                  (513) 293-7930
                </a>
              </div>

              {/* Trust Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700"><CheckCircle className="w-4 h-4" /></div>
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700"><CheckCircle className="w-4 h-4" /></div>
                  <span>Municipal Grade Capacity</span>
                </div>
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-5 h-5 text-gray-400" />
                  <span>Residential & Commercial</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <span>HOA & Property Mgmt</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Grounded Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Gray Block Anchor */}
              <div className="absolute top-8 right-[-100px] w-full h-full bg-gray-100 rounded-l-3xl -z-10"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-200 border-4 border-white">
                <Image 
                  src={getImageUrl('/images/gallery/two-crane-tree-removal.jpg')} 
                  alt="Professional Tree Removal Team with Cranes" 
                  width={800} 
                  height={900} 
                  className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-700"
                />
                
                {/* Info Badge - Square/Official Look */}
                <div className="absolute bottom-0 left-0 bg-gray-900 text-white p-6 min-w-[240px]">
                  <div className="flex items-center gap-3 mb-1">
                    <Shield className="w-5 h-5 text-red-500" />
                    <p className="font-bold uppercase tracking-wider text-xs text-gray-400">Safety Rating</p>
                  </div>
                  <p className="text-2xl font-bold">100% Incident Free</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustSection />
      <Footer />
    </main>
  );
}
