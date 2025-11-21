'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import { Shield, CheckCircle, Clock } from 'lucide-react';

export default function AuthorityCrewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation variant="authority" />

      {/* Hero Section - Full Width Image with Overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl('/images/gallery/two-crane-tree-removal.jpg')}
            alt="Professional Tree Service Crew with Crane Equipment"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient Overlay - Left to Right for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            
            {/* Firefighter Badge - Large & Prominent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white shadow-2xl border-2 border-red-100">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-red-800 uppercase tracking-widest">Firefighter</p>
                  <p className="text-lg font-black text-red-900">Owned &amp; Operated</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-6">
                MUNICIPAL<br />
                GRADE TREE<br />
                SERVICES
              </h1>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
                <p className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                  Trusted by Commercial &amp; Residential Properties
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We bring firefighter discipline and safety standards to every job site. From city contracts to estate properties, we deliver professional results without compromise.
                </p>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 hover:scale-105"
                >
                  GET FREE ESTIMATE
                </a>
                <a
                  href="tel:5132937930"
                  className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-gray-900 bg-white border-4 border-gray-900 rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:scale-105"
                >
                  (513) 293-7930
                </a>
              </div>

              {/* Trust Badges - Horizontal on White Cards */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">Fully Licensed</p>
                    <p className="text-xs text-gray-500">&amp; Insured</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">Safety Certified</p>
                    <p className="text-xs text-gray-500">Zero Incidents</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">24/7 Emergency</p>
                    <p className="text-xs text-gray-500">Response</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5]" />
      </section>

      <Footer />
    </main>
  );
}
