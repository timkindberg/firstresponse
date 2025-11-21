'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import { CheckCircle, Shield, Sparkles } from 'lucide-react';

export default function ResidentialNavyPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation variant="residential-navy" />

      {/* Hero Section - Full Width with Overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl('/images/gallery/old-tree-removal-1.jpg')}
            alt="Professional crew working on residential property"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark Navy Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400/20 border-2 border-yellow-400/40 text-yellow-300 text-sm font-bold mb-8 backdrop-blur-sm">
                <Shield className="w-5 h-5" />
                <span>WHITE-GLOVE TREE CARE SERVICES</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-8">
                PROTECTING<br />
                YOUR<br />
                PROPERTY<br />
                WITH<br />
                <span className="text-yellow-400">PRECISION</span>
              </h1>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-10 shadow-2xl">
                <p className="text-2xl text-white font-semibold mb-3 leading-tight">
                  Experience unparalleled professionalism and meticulous care.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our firefighter-trained crews treat your landscape with the respect it deserves. From estate properties to luxury homes, we deliver white-glove service every time.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-[#0A1628] bg-yellow-400 rounded-xl hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/30 hover:scale-105"
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
                  <div className="w-14 h-14 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">Property</p>
                  <p className="text-xs text-gray-300">Protection</p>
                </div>

                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="w-14 h-14 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">Clean Job</p>
                  <p className="text-xs text-gray-300">Site Promise</p>
                </div>

                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="w-14 h-14 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">Certified</p>
                  <p className="text-xs text-gray-300">Arborists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Badge - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-12 right-12 bg-white rounded-2xl p-8 shadow-2xl max-w-sm hidden lg:block z-20"
        >
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-10 h-10 text-[#0A1628]" />
            </div>
            <div>
              <p className="font-black text-gray-900 text-2xl mb-1">Zero Damage</p>
              <p className="text-base text-gray-600 font-semibold">100% Guarantee</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent z-[5]" />
      </section>

      <Footer />
    </main>
  );
}
