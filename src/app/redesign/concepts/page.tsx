'use client';

import { ArrowRight, Building2, Home, TrendingUp, ShieldCheck, MousePointerClick, AlertTriangle, CheckCircle2, Sparkles, Target } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto space-y-20">
          
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
              <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-sm text-red-800">
                  <strong>Key Insight:</strong> No one is leveraging the &quot;Firefighter Owned&quot; angle as a trust signal. This is a massive opportunity to differentiate.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Critical Success Factors */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg text-green-700"><CheckCircle2 className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">2. What Converts Visitors (Best Practices)</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-6">
                High-performing service company websites share four critical elements:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Instant Trust Signals</h3>
                    <p className="text-sm text-gray-600">Insurance badges, certifications, and safety credentials visible within 3 seconds of landing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MousePointerClick className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Clear Action Path</h3>
                    <p className="text-sm text-gray-600">Dual CTAs: &quot;Get Estimate&quot; (low commitment) + Phone Number (high intent). No confusion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Capacity Proof</h3>
                    <p className="text-sm text-gray-600">Photos of big equipment, large crews, and completed projects. Shows you can handle serious work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Audience Segmentation</h3>
                    <p className="text-sm text-gray-600">Separate messaging for homeowners vs. commercial/municipal buyers. Different pain points.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Current Site Audit */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700"><AlertTriangle className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">3. Where We Are Today (Current Site Weaknesses)</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-6">
                The current site has strong fundamentals (great photos, firefighter story) but lacks strategic positioning:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> What&apos;s Working
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Authentic crew photos (not stock)</li>
                    <li>✓ Firefighter story is compelling</li>
                    <li>✓ Real equipment visible</li>
                    <li>✓ Clear contact info</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Gaps to Address
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✗ Dark theme feels &quot;aggressive&quot; not &quot;professional&quot;</li>
                    <li>✗ No clear residential vs. commercial split</li>
                    <li>✗ Insurance/licensing not prominent enough</li>
                    <li>✗ Capacity (municipal-grade) not obvious</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Strategic Direction */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-700"><Target className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-gray-900">4. The Path Forward (Proposed Directions)</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-8">
                We&apos;ve developed three distinct strategic directions. Each targets your dual audience (municipal/commercial + high-end residential) but emphasizes different aspects of your brand:
              </p>

              {/* Concept Groups */}
              <div className="space-y-12">
                
                {/* GROUP 1: AUTHORITY */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Direction A: &quot;The Authority&quot;</h3>
                    <p className="text-gray-600">Corporate professionalism meets firefighter discipline. Clean, structured, trust-heavy.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Authority V1 */}
                    <Link href="/redesign/concepts/authority" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-red-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <Building2 className="w-8 h-8 text-gray-900" />
                            </div>
                            <p className="text-sm font-bold text-gray-700">Option A1</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Authority V1</h4>
                          <p className="text-sm text-gray-600 mb-3">Original clean design with structured layout</p>
                          <div className="flex items-center text-red-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Authority V2 */}
                    <Link href="/redesign/concepts/authority2" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-red-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <ShieldCheck className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm font-bold text-gray-700">Option A2</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Authority V2</h4>
                          <p className="text-sm text-gray-600 mb-3">Refined with industrial typography and grounded design</p>
                          <div className="flex items-center text-red-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Authority V3 - Crew Photo */}
                    <Link href="/redesign/concepts/authority-crew" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-red-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <ShieldCheck className="w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-sm font-bold text-gray-700">Option A3</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Authority V3 (Crew)</h4>
                          <p className="text-sm text-gray-600 mb-3">Crew-focused with large firefighter badge</p>
                          <div className="flex items-center text-red-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* GROUP 2: RESIDENTIAL */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Direction B: &quot;The Estate&quot;</h3>
                    <p className="text-gray-600">Premium residential focus. Sophisticated, protective, white-glove service.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Residential V1 */}
                    <Link href="/redesign/concepts/residential" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <Home className="w-8 h-8 text-gray-900" />
                            </div>
                            <p className="text-sm font-bold text-white">Option B1</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Estate V1 (Dark)</h4>
                          <p className="text-sm text-gray-600 mb-3">Dark premium aesthetic with red accents</p>
                          <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Residential Navy */}
                    <Link href="/redesign/concepts/residential-navy" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <Sparkles className="w-8 h-8 text-blue-900" />
                            </div>
                            <p className="text-sm font-bold text-white">Option B2</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Estate V2 (Navy)</h4>
                          <p className="text-sm text-gray-600 mb-3">Navy &amp; gold &quot;dress uniform&quot; sophistication</p>
                          <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* GROUP 3: SPECIALIST */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Direction C: &quot;The Specialist&quot;</h3>
                    <p className="text-gray-600">Technical precision. Engineered solutions for complex projects.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Specialist V1 */}
                    <Link href="/redesign/concepts/specialist" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-slate-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <Target className="w-8 h-8 text-slate-900" />
                            </div>
                            <p className="text-sm font-bold text-white">Option C1</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Specialist V1</h4>
                          <p className="text-sm text-gray-600 mb-3">Clean technical aesthetic with slate tones</p>
                          <div className="flex items-center text-slate-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Specialist Grid */}
                    <Link href="/redesign/concepts/specialist-grid" className="group">
                      <div className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-slate-500 transition-all hover:shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-slate-900 to-black flex items-center justify-center relative overflow-hidden">
                          <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                              `,
                              backgroundSize: '20px 20px'
                            }}
                          />
                          <div className="text-center relative z-10">
                            <div className="w-16 h-16 bg-red-600 rounded flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <Target className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm font-bold text-white font-mono">Option C2</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">Specialist V2 (Grid)</h4>
                          <p className="text-sm text-gray-600 mb-3">Technical grid overlay with monospace typography</p>
                          <div className="flex items-center text-slate-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Concept <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Our Recommendations */}
          <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Recommendations</h2>
            
            <p className="text-gray-600 mb-8">
              After analyzing the market and your unique positioning, here are our thoughts on each direction:
            </p>

            <div className="space-y-6">
              {/* Authority Direction */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Direction A: &quot;The Authority&quot; — Best for Municipal/Commercial Growth</h3>
                <p className="text-gray-600 mb-4">
                  This direction positions you as the professional choice for city contracts and commercial properties. The clean, corporate aesthetic signals reliability and capacity.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Strengths:</strong> Broad appeal, trust signals front and center, firefighter story integrated naturally</p>
                  <p><strong>Best for:</strong> Winning municipal RFPs, commercial property managers, HOAs</p>
                  <p><strong>Top pick:</strong> Authority V2 or V3 (Crew) — both emphasize professionalism while keeping the firefighter USP visible</p>
                </div>
              </div>

              {/* Estate Direction */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Direction B: &quot;The Estate&quot; — Best for High-End Residential</h3>
                <p className="text-gray-600 mb-4">
                  This direction speaks directly to homeowners who care deeply about their property. The premium aesthetic signals white-glove service and zero-risk execution.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Strengths:</strong> Differentiated from competitors, speaks to property protection concerns, sophisticated feel</p>
                  <p><strong>Best for:</strong> Estate properties, luxury homes, clients who value meticulous care</p>
                  <p><strong>Top pick:</strong> Estate V2 (Navy) — the navy/gold palette is more unique and memorable than the dark version</p>
                </div>
              </div>

              {/* Specialist Direction */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Direction C: &quot;The Specialist&quot; — Best for Technical Differentiation</h3>
                <p className="text-gray-600 mb-4">
                  This direction emphasizes your technical capabilities and complex project experience. It&apos;s bold and memorable, but may feel too niche for general residential.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Strengths:</strong> Highly differentiated, appeals to technical buyers, shows serious capacity</p>
                  <p><strong>Best for:</strong> Storm cleanup contracts, difficult removals, engineering-minded clients</p>
                  <p><strong>Top pick:</strong> Specialist V2 (Grid) — the grid overlay reinforces the precision messaging</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-blue-900 font-semibold mb-2">💡 Our Overall Take</p>
              <p className="text-blue-800">
                If you had to pick one, <strong>Authority V2 or V3</strong> offers the best balance for dual-audience appeal (municipal + residential). 
                However, if you want to own the high-end residential market specifically, <strong>Estate V2 (Navy)</strong> is the most differentiated and memorable option.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
              >
                Compare to Current Site
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
