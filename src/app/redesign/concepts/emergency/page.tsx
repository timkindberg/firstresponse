'use client';

import { Phone, Siren, Zap, HardHat } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-white font-sans">
      <Navigation />
      
      {/* Emergency Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Dark Tech Background */}
        <div className="absolute inset-0 bg-[#0F1115]">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/50 text-red-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                <Siren className="w-3 h-3" />
                24/7 Rapid Response Unit
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                We Handle The <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Impossible</span>
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-xl border-l-4 border-red-600 pl-6">
                When storms hit or trees fail, seconds count. First Response brings heavy equipment and firefighter precision to clear the danger immediately.
              </p>

              <div className="flex flex-col gap-4">
                <button className="w-full md:w-auto px-8 py-5 bg-red-600 text-white text-lg font-bold uppercase tracking-wider hover:bg-red-700 transition-all flex items-center justify-center gap-3 skew-x-[-10deg]">
                  <span className="skew-x-[10deg] flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Call Emergency Dispatch
                  </span>
                </button>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" /> 60-Min Response</span>
                  <span className="flex items-center gap-1"><ShieldIcon /> Fully Insured</span>
                </div>
              </div>
            </div>

            {/* Right Side: "Stats" or "Dashboard" look */}
            <div className="relative border border-gray-800 bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <div className="text-4xl font-black text-white">100%</div>
                   <div className="text-xs uppercase tracking-widest text-gray-500">Safety Rating</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black text-red-500">0</div>
                   <div className="text-xs uppercase tracking-widest text-gray-500">Property Damage</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black text-white">24/7</div>
                   <div className="text-xs uppercase tracking-widest text-gray-500">Availability</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black text-red-500">15+</div>
                   <div className="text-xs uppercase tracking-widest text-gray-500">Heavy Machines</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                    <HardHat className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Municipal Contract Ready</div>
                    <div className="text-sm text-gray-500">Licensed for city & state projects</div>
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

function ShieldIcon() {
    return (
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
}
