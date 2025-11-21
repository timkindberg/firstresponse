'use client';

import HeroRedesign from '@/components/redesign/Hero';
import TrustSection from '@/components/redesign/TrustSection';

export default function RedesignPage() {
  return (
    <main className="min-h-screen bg-white">
        {/* We reuse the Nav/Footer for now, but the content in between is new */}
      <HeroRedesign />
      <TrustSection />
    </main>
  );
}
