'use client';

import { useState } from 'react';
import { Save, Edit, Eye } from 'lucide-react';
import { getContent } from '@/lib/content';
import Image from 'next/image';

const AdminPage = () => {
  const [content, setContent] = useState(getContent());
  const [activeSection, setActiveSection] = useState('company');
  const [isEditing, setIsEditing] = useState(false);

  const sections = [
    { id: 'company', name: 'Company Info', icon: Save },
    { id: 'hero', name: 'Hero Section', icon: Eye },
    { id: 'services', name: 'Services', icon: Edit },
    { id: 'contact', name: 'Contact', icon: Save },
  ];

  const handleSave = () => {
    // In a real implementation, this would save to your backend/CMS
    localStorage.setItem('treeServiceContent', JSON.stringify(content));
    alert('Content saved successfully!');
    setIsEditing(false);
  };

  const updateContent = (section: string, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="First Response Tree Service Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Content Manager</h1>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isEditing 
                    ? 'bg-gray-200 text-gray-700' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {isEditing ? 'Cancel' : 'Edit Content'}
              </button>
              
              {isEditing && (
                <button
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Save Changes
                </button>
              )}
              
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                View Site
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{section.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {/* Company Info Section */}
              {activeSection === 'company' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={content.company.name}
                        onChange={(e) => updateContent('company', 'name', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={content.company.phone}
                        onChange={(e) => updateContent('company', 'phone', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={content.company.email}
                        onChange={(e) => updateContent('company', 'email', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={content.company.address}
                        onChange={(e) => updateContent('company', 'address', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tagline
                      </label>
                      <input
                        type="text"
                        value={content.company.tagline}
                        onChange={(e) => updateContent('company', 'tagline', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={content.company.description}
                        onChange={(e) => updateContent('company', 'description', e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Hero Section */}
              {activeSection === 'hero' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Main Title
                      </label>
                      <input
                        type="text"
                        value={content.hero.title}
                        onChange={(e) => updateContent('hero', 'title', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subtitle
                      </label>
                      <textarea
                        value={content.hero.subtitle}
                        onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Call to Action Button Text
                      </label>
                      <input
                        type="text"
                        value={content.hero.ctaButton}
                        onChange={(e) => updateContent('hero', 'ctaButton', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Services Section */}
              {activeSection === 'services' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
                  <div className="space-y-6">
                    {content.services.map((service, index) => (
                      <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {service.name}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Service Name
                            </label>
                            <input
                              type="text"
                              value={service.name}
                              onChange={(e) => {
                                const updatedServices = [...content.services];
                                updatedServices[index] = { ...service, name: e.target.value };
                                setContent(prev => ({ ...prev, services: updatedServices }));
                              }}
                              disabled={!isEditing}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Short Description
                            </label>
                            <textarea
                              value={service.shortDescription}
                              onChange={(e) => {
                                const updatedServices = [...content.services];
                                updatedServices[index] = { ...service, shortDescription: e.target.value };
                                setContent(prev => ({ ...prev, services: updatedServices }));
                              }}
                              disabled={!isEditing}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {activeSection === 'contact' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Title
                      </label>
                      <input
                        type="text"
                        value={content.contact.title}
                        onChange={(e) => updateContent('contact', 'title', e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Description
                      </label>
                                              <textarea
                          value={content.contact.subtitle}
                          onChange={(e) => updateContent('contact', 'subtitle', e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 