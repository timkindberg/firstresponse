'use client';

import { ArrowRight, Building2, BoxSelect, Home, TrendingUp, ShieldCheck, MousePointerClick, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header / Report Title */}
      <div className="bg-white border-b border-gray-200 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-red-600 font-bold tracking-widest text-sm uppercase mb-4">Website Redesign Strategy</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Elevating First Response: <br/>
              <span className="text-gray-500">From &quot;Local Crew&quot; to &quot;Market Leader&quot;</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A comprehensive analysis of the current digital landscape, competitor weaknesses, and a strategic roadmap to dominate the Cincinnati tree care market.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Section 1: Market Analysis */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-700"><TrendingUp className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">1. The Cincinnati Standard (Competitor Analysis)</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-6">
                We analyzed top-rated local competitors (Lefke, Marvin&apos;s, etc.) and national benchmarks. The market is currently split into three distinct categories:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">The &quot;Arborist&quot;</h3>
                  <p className="text-sm text-gray-600">Heavy use of green/brown. Focuses on &quot;tree health.&quot; Feels safe but low-energy.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">The &quot;Corporate&quot;</h3>
                  <p className="text-sm text-gray-600">Blue/White stock photos. Feels insured but impersonal. Easy to forget.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">The &quot;Local Guy&quot;</h3>
                  <p className="text-sm text-gray-600">Simple sites, photos of trucks. Feels authentic but risky (insurance?).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Best Practices */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg text-green-700"><ShieldCheck className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">2. Critical Success Factors</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">To convert high-value clients, a modern tree service site must answer three questions in under 5 seconds:</p>
              <ul className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">
                <li className="p-6 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">Can I trust them?</span>
                    <span className="text-gray-500 text-sm">Must show visible Insurance badges, 5-Star ratings, and uniformed crews immediately.</span>
                  </div>
                </li>
                <li className="p-6 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">Will they wreck my yard?</span>
                    <span className="text-gray-500 text-sm">&quot;White space&quot; in design subconsciously conveys cleanliness. Dark/cluttered sites imply a messy job site.</span>
                  </div>
                </li>
                <li className="p-6 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">How do I start?</span>
                    <span className="text-gray-500 text-sm">Two clear paths: &quot;Emergency/Now&quot; (Phone) vs &quot;Estimate/Later&quot; (Form).</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Current Site Audit */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700"><AlertTriangle className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">3. Current Site Audit</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-4">Strengths to Keep</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Identity:</strong> &quot;Firefighter Owned&quot; is a massive trust asset.</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Tech Foundation:</strong> Current website is built on modern, fast, and SEO-ready technology.</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Brand Colors:</strong> Red/Gold is distinctive and visible.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-4">Weaknesses to Fix</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-red-500">!</span> <strong>Tone:</strong> Dark/Red theme feels &quot;aggressive&quot; or &quot;gaming&quot; oriented. Scares off residential pruning clients.</li>
                  <li className="flex gap-2"><span className="text-red-500">!</span> <strong>Trust Gap:</strong> Missing visual &quot;Licensed & Insured&quot; badges and Review widgets.</li>
                  <li className="flex gap-2"><span className="text-red-500">!</span> <strong>Clarity:</strong> Services are buried; needs to look like an established infrastructure company.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: The Strategy */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg text-red-700"><MousePointerClick className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">4. Proposed Directions</h2>
            </div>
            <p className="text-gray-600 mb-8">
              We have developed three distinct strategic concepts. Each targets a specific market segment while retaining the core &quot;Firefighter/First Response&quot; identity.
            </p>

            {/* Concept Grid */}
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Concept 1 */}
              <Link href="/redesign/concepts/authority" className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-red-200 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors border-b border-gray-100">
                    <Building2 className="w-16 h-16 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">The Authority (V1)</h3>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                      Original Concept
                    </span>
                    <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                      Clean, corporate, and structured. Emphasizes capacity, insurance, and reliability.
                    </p>
                    <div className="flex items-center text-red-600 font-bold text-sm mt-auto group-hover:translate-x-2 transition-transform">
                      View Concept <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Concept 1 V2 */}
              <Link href="/redesign/concepts/authority2" className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm border-2 border-red-100 overflow-hidden hover:shadow-xl hover:border-red-300 transition-all duration-300 h-full flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                    Recommended
                  </div>
                  <div className="h-48 bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors border-b border-gray-100">
                    <Building2 className="w-16 h-16 text-gray-600 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">The Authority (V2)</h3>
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                      Refined & Tightened
                    </span>
                    <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                      <strong>Strategy:</strong> &quot;Industrial Strength.&quot;<br/>
                      Bold Sans-Serif fonts, structured layout, and industrial design. The strongest option for commercial trust.
                    </p>
                    <div className="flex items-center text-red-600 font-bold text-sm mt-auto group-hover:translate-x-2 transition-transform">
                      View Concept <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Concept 2 */}
              <Link href="/redesign/concepts/residential" className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-[#0B1120] flex items-center justify-center group-hover:bg-[#151e32] transition-colors border-b border-gray-100">
                    <Home className="w-16 h-16 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">The Estate</h3>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                      For High-End Residential
                    </span>
                    <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                      <strong>Strategy:</strong> &quot;Protecting Investment.&quot;<br/>
                      Premium, safe, and immaculate. Uses deep Navy and White (&quot;Dress Uniform&quot; colors). Focuses on curb appeal, property protection, and white-glove cleanup.
                    </p>
                    <div className="flex items-center text-blue-900 font-bold text-sm mt-auto group-hover:translate-x-2 transition-transform">
                      View Concept <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Concept 3 */}
              <Link href="/redesign/concepts/specialist" className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors border-b border-gray-100">
                    <BoxSelect className="w-16 h-16 text-slate-400 group-hover:text-slate-700 transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">The Specialist</h3>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                      For Complex Technical
                    </span>
                    <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                      <strong>Strategy:</strong> &quot;Zero Impact.&quot;<br/>
                      Technical, disciplined, and precise. Uses grid layouts and monospace fonts. Best for difficult removals (cranes, tight access) where skill &gt; speed.
                    </p>
                    <div className="flex items-center text-slate-900 font-bold text-sm mt-auto group-hover:translate-x-2 transition-transform">
                      View Concept <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}