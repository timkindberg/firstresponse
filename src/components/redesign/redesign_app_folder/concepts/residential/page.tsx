'use client';

import { ArrowRight, Shield, Sun, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navigation variant="residential" />
      
      {/* Residential Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1120]">
        {/* Background - Deep Navy "Dress Uniform" vibe with crane image */}
        <div className="absolute inset-0 z-0">
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-transparent z-10"></div>
             {/* Background Image - Shifted to show crane */}
             <Image
               src={getImageUrl('/images/gallery/two-crane-tree-removal.jpg')}
               alt="Professional tree removal with crane"
               fill
               className="object-cover opacity-40 mix-blend-overlay"
               style={{ objectPosition: '65% center' }}
               priority
             />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 text-red-500" />
              <span>Firefighter Owned & Operated</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              Protecting Your <br/>
              <span className="text-red-500">Home & Investment.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              We provide white-glove tree removal and property clearing services. 
              Zero property damage, immaculate cleanup, and the peace of mind that comes with hiring true professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-900/20">
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 px-6 text-sm text-gray-300">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0B1120] flex items-center justify-center text-xs">★</div>
                   ))}
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-white">5-Star Rated</span>
                  <span className="text-xs">by Local Homeowners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props - "Why High Value Homes Choose Us" */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">Zero-Risk Guarantee</h3>
                <p className="text-gray-600">Fully insured with a track record of safety. We treat your lawn, fence, and home as if it were our own.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0B1120] mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">Immaculate Cleanup</h3>
                <p className="text-gray-600">We don&apos;t just remove the tree. We rake, blow, and clear all debris. You won&apos;t even know we were there.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 mb-6">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">Curb Appeal Focus</h3>
                <p className="text-gray-600">Open up your view, clear overgrown lots, and remove hazardous limbs that threaten your roof.</p>
             </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
