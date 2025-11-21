'use client';

import HeroRedesign from '@/components/redesign/Hero';
import TrustSection from '@/components/redesign/TrustSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AuthorityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Note: We would customize the Nav for this specific concept if needed */}
      <Navigation variant="authority" /> 
      <HeroRedesign />
      <TrustSection />
      <Footer />
    </main>
  );
}
