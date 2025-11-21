'use client';

import { Shield, Users, Truck, Clock, TreePine, Building2 } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured & Licensed",
      description: "Comprehensive liability and workers' comp coverage for your peace of mind."
    },
    {
      icon: Users,
      title: "Firefighter Owned",
      description: "Built on the values of safety, discipline, and public service."
    },
    {
      icon: Truck,
      title: "Commercial Capacity",
      description: "Heavy-duty equipment to handle municipal projects and land clearing."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Rapid mobilization for storm damage and hazardous situations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            The Standard in Tree Care Safety
          </h2>
          <p className="text-lg text-gray-600">
            We don&apos;t just cut trees. We manage risk. Whether it&apos;s a delicate removal over a historic home or a city-wide storm cleanup, we bring professional rigor to every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Capabilities Split */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Residential */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 relative overflow-hidden group hover:border-red-100 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Home className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-2 block">Residential</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Homeowners</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2"><CheckIcon /> Precision Pruning & Trimming</li>
                <li className="flex items-center gap-2"><CheckIcon /> Zero-Impact Tree Removal</li>
                <li className="flex items-center gap-2"><CheckIcon /> Stump Grinding & Cleanup</li>
              </ul>
              <a href="#contact" className="text-red-600 font-bold hover:text-red-700 inline-flex items-center">
                View Residential Services <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Commercial */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Building2 className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
              <span className="text-red-400 font-bold tracking-wider text-sm uppercase mb-2 block">Commercial & Municipal</span>
              <h3 className="text-2xl font-bold text-white mb-4">For Businesses & Cities</h3>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center gap-2"><CheckIcon /> Right-of-Way Maintenance</li>
                <li className="flex items-center gap-2"><CheckIcon /> Large Scale Land Clearing</li>
                <li className="flex items-center gap-2"><CheckIcon /> Disaster Recovery Contracts</li>
              </ul>
              <a href="#contact" className="text-white font-bold hover:text-red-200 inline-flex items-center">
                Request Commercial Proposal <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />;
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function Home(props: React.SVGProps<SVGSVGElement>) {
  return <TreePine {...props} />;
}
