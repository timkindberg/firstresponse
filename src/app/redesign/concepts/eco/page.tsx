'use client';

import { ArrowRight, Leaf, TreePine, Flower2, Sun } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EcoPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] font-sans">
      <Navigation variant="eco" />
      
      {/* Eco Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background: Soft Organic Gradient */}
        <div className="absolute inset-0 bg-[#FDFCF8]">
            {/* Abstract Leaf Pattern Overlay could go here */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-800 border border-green-100 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Preserving Cincinnati&apos;s Urban Canopy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2C3E2C] mb-8 leading-tight">
              Tree Care, <br/>
              <span className="italic text-[#4A6741]">Rooted in Respect.</span>
            </h1>
            
            <p className="text-xl text-[#5F6F5F] mb-10 max-w-2xl mx-auto leading-relaxed">
              We are firefighter-owned arborists dedicated to the health of your trees and the safety of your home. Holistic pruning, preservation, and low-impact removal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#4A6741] text-white rounded-full font-medium hover:bg-[#3A5233] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/10">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-[#EBE9E0] text-[#2C3E2C] rounded-full font-medium hover:bg-[#E0DED4] transition-colors flex items-center justify-center gap-2">
                Our Care Process
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: TreePine, title: "Tree Preservation", desc: "Expert pruning to extend the life of your trees." },
              { icon: Sun, title: "Plant Health Care", desc: "Diagnosis and treatment for sick or struggling trees." },
              { icon: Flower2, title: "Low-Impact Removal", desc: "Advanced rigging to protect your landscape during removal." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#EBE9E0] text-center hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#4A6741] mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-[#2C3E2C] mb-2">{item.title}</h3>
                <p className="text-[#5F6F5F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}