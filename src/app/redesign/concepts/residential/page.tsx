'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import { Shield, CheckCircle, Home as HomeIcon, Star } from 'lucide-react';

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      <Navigation variant="residential" />

      {/* Hero Section - Full Width with Overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl('/images/gallery/old-tree-removal-1.jpg')}
            alt="Professional tree removal on residential property"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/95 to-[#0B1120]/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600/20 border-2 border-red-500/40 text-red-300 text-sm font-bold mb-8 backdrop-blur-sm">
                <Shield className="w-5 h-5" />
                <span>FIREFIGHTER OWNED & OPERATED</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                PREMIUM TREE CARE<br />
                FOR DISCERNING<br />
                <span className="text-red-500">HOMEOWNERS</span>
              </h1>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-10 shadow-2xl">
                <p className="text-2xl text-white font-semibold mb-3 leading-tight">
                  Experience unparalleled professionalism and meticulous care.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We protect your landscape and investment with firefighter precision. Zero property damage, immaculate cleanup, and the peace of mind that comes with hiring true professionals.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 hover:scale-105"
                >
                  GET FREE ESTIMATE
                </a>
                <a
                  href="tel:5132937930"
                  className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-white/10 border-3 border-white/30 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105"
                >
                  (513) 293-7930
                </a>
              </div>

              {/* Trust Badges - On Glass Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <HomeIcon className="w-7 h-7 text-red-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">Property</p>
                  <p className="text-xs text-gray-300">Protection</p>
                </div>

                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="w-14 h-14 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">Zero-Damage</p>
                  <p className="text-xs text-gray-300">Guarantee</p>
                </div>

                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-7 h-7 text-yellow-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">5-Star</p>
                  <p className="text-xs text-gray-300">Rated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent z-[5]" />
      </section>

      <Footer />
    </main>
  );
}
