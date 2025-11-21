'use client';

import { ArrowRight, Building2, BoxSelect, Home } from 'lucide-react';
import Link from 'next/link';

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Concept Gallery</h1>
          <p className="text-xl text-gray-600">
            Select a design direction to view the interactive prototype.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Concept 1 */}
          <Link href="/redesign/concepts/authority" className="group">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-48 bg-gray-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                <Building2 className="w-20 h-20 text-gray-400 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Authority</h3>
                <p className="text-sm font-semibold text-red-600 mb-4 uppercase tracking-wider">Target: City & Commercial</p>
                <p className="text-gray-600 mb-6">
                  Clean, corporate, and structured. Emphasizes capacity, insurance, and reliability. Best for winning government contracts.
                </p>
                <div className="flex items-center text-red-600 font-bold group-hover:translate-x-2 transition-transform">
                  View Prototype <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Concept 2 */}
          <Link href="/redesign/concepts/residential" className="group">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-48 bg-[#0B1120] flex items-center justify-center group-hover:bg-[#151e32] transition-colors">
                <Home className="w-20 h-20 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Estate</h3>
                <p className="text-sm font-semibold text-blue-900 mb-4 uppercase tracking-wider">Target: High-End Residential</p>
                <p className="text-gray-600 mb-6">
                  Premium, safe, and immaculate. Focuses on property protection, curb appeal, and white-glove service. Best for homeowners who value peace of mind.
                </p>
                <div className="flex items-center text-blue-900 font-bold group-hover:translate-x-2 transition-transform">
                  View Prototype <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Concept 3 */}
          <Link href="/redesign/concepts/specialist" className="group">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-48 bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                <BoxSelect className="w-20 h-20 text-slate-400 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Specialist</h3>
                <p className="text-sm font-semibold text-slate-600 mb-4 uppercase tracking-wider">Target: Complex & Technical</p>
                <p className="text-gray-600 mb-6">
                  Technical, disciplined, and precise. Emphasizes advanced rigging, crane operations, and zero-impact removal. Best for difficult residential & city jobs.
                </p>
                <div className="flex items-center text-slate-900 font-bold group-hover:translate-x-2 transition-transform">
                  View Prototype <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
