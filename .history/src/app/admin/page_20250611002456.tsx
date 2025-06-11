'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Edit, Eye, TreePine } from 'lucide-react';
import { getContent } from '@/lib/content';

const AdminPage = () => {
  const [content, setContent] = useState(getContent());
  const [activeSection, setActiveSection] = useState('company');
  const [isEditing, setIsEditing] = useState(false);

  const sections = [
    { id: 'company', name: 'Company Info', icon: TreePine },
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

  const updateContent = (section: string, field: string, value: any) => {
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
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-emerald-600" />
              <h1 className="text-xl font-bold text-gray-900">Content Manager</h1>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isEditing 
                    ? 'bg-gray-200 text-gray-700' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
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
              
              <a
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                View Site
              </a>
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
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
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
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              {/* Company Info */}
              {activeSection === 'company' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
                  
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
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
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
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={content.company.email}
                        onChange={(e) => updateContent('company', 'email', e.target.value)}
                        disabled={!isEditing}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
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
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tagline
                    </label>
                    <input
                      type="text"
                      value={content.company.tagline}
                      onChange={(e) => updateContent('company', 'tagline', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={content.company.description}
                      onChange={(e) => updateContent('company', 'description', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>
              )}

              {/* Hero Section */}
              {activeSection === 'hero' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Hero Section</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Title
                    </label>
                    <input
                      type="text"
                      value={content.hero.title}
                      onChange={(e) => updateContent('hero', 'title', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <textarea
                      rows={2}
                      value={content.hero.subtitle}
                      onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Call-to-Action Button Text
                    </label>
                    <input
                      type="text"
                      value={content.hero.ctaButton}
                      onChange={(e) => updateContent('hero', 'ctaButton', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>
              )}

              {/* Services */}
              {activeSection === 'services' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                  <p className="text-gray-600">Manage your service offerings and descriptions.</p>
                  
                  <div className="grid gap-6">
                    {content.services.map((service, index) => (
                      <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Service Name
                            </label>
                            <input
                              type="text"
                              value={service.name}
                              onChange={(e) => {
                                const newServices = [...content.services];
                                newServices[index].name = e.target.value;
                                setContent(prev => ({ ...prev, services: newServices }));
                              }}
                              disabled={!isEditing}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Short Description
                            </label>
                            <textarea
                              rows={2}
                              value={service.shortDescription}
                              onChange={(e) => {
                                const newServices = [...content.services];
                                newServices[index].shortDescription = e.target.value;
                                setContent(prev => ({ ...prev, services: newServices }));
                              }}
                              disabled={!isEditing}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Description
                          </label>
                          <textarea
                            rows={3}
                            value={service.fullDescription}
                            onChange={(e) => {
                              const newServices = [...content.services];
                              newServices[index].fullDescription = e.target.value;
                              setContent(prev => ({ ...prev, services: newServices }));
                            }}
                            disabled={!isEditing}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              {activeSection === 'contact' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Contact Section</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={content.contact.title}
                      onChange={(e) => updateContent('contact', 'title', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <textarea
                      rows={3}
                      value={content.contact.subtitle}
                      onChange={(e) => updateContent('contact', 'subtitle', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 