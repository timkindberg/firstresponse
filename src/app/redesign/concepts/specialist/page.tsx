'use client';

import { ArrowRight, Ruler, ShieldCheck, HardHat, BoxSelect } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SpecialistPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation variant="specialist" />
      
      {/* Specialist Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-slate-50">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            opacity: 0.2 
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-md text-slate-600 text-sm font-mono uppercase tracking-wider">
                <BoxSelect className="w-4 h-4 text-red-600" />
                <span>Precision Removal Operations</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Complex Removals. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Zero Impact.</span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                We bring firefighter discipline to the most difficult tree scenarios. Using advanced rigging and crane operations to protect your property where others can&apos;t.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-md hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20">
                  Request Technical Assessment <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-md hover:border-slate-300 hover:bg-slate-50 transition-all">
                  View Capability Statement
                </button>
              </div>
            </div>

            {/* Right Side: Technical Illustration / "Blueprint" look */}
            <div className="relative bg-white p-8 rounded-xl shadow-2xl shadow-slate-200 border border-slate-100">
              {/* Decorative Technical Elements */}
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-400">REF: FR-2025-OH</div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Ruler className="w-6 h-6 text-red-600 mb-2" />
                  <div className="font-bold text-slate-900">Precision Rigging</div>
                  <div className="text-xs text-slate-500 mt-1">Controlled descent systems</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <HardHat className="w-6 h-6 text-red-600 mb-2" />
                  <div className="font-bold text-slate-900">Safety Protocols</div>
                  <div className="text-xs text-slate-500 mt-1">OSHA & ANSI Z133 Compliant</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-red-600 mb-2" />
                  <div className="font-bold text-slate-900">Fully Insured</div>
                  <div className="text-xs text-slate-500 mt-1">$2M General Liability</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <BoxSelect className="w-6 h-6 text-red-600 mb-2" />
                  <div className="font-bold text-slate-900">Tight Access</div>
                  <div className="text-xs text-slate-500 mt-1">Zero-footprint machinery</div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Residential Rating</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-red-600 rounded-full"></div>)}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Municipal Capacity</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-red-600 rounded-full"></div>)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
