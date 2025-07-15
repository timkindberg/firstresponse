'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Flame, Shield } from 'lucide-react';
import { getContactInfo, getCompanyInfo } from '@/lib/content';

const Contact = () => {
  const contactInfo = getContactInfo();
  const company = getCompanyInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-gray-900 via-black to-red-950 text-white section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(185,28,28,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(239,68,68,0.03)_50%,transparent_75%)]"></div>
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-600/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6"
          >
            <Shield className="h-4 w-4" />
            <span>Contact Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">{contactInfo.title}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {contactInfo.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-fire rounded-3xl p-8 border border-red-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-3">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="tree-removal">Tree Removal</option>
                      <option value="tree-pruning">Tree Pruning</option>
                      <option value="emergency-service">Emergency Service</option>
                      <option value="stump-grinding">Stump Grinding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-fire w-full flex items-center justify-center space-x-3 group"
                >
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="h-5 w-5" />
                  </motion.div>
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Emergency Call Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative mb-8"
            >
              <motion.a
                href={`tel:${company.phone}`}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 border border-red-500/20"
              >
                <div className="flex items-center justify-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Phone className="h-8 w-8" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Emergency Call</div>
                    <div className="text-xl opacity-90">{company.phone}</div>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.a
                href={`tel:${company.phone}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-premium group cursor-pointer p-6 block"
              >
                <div className="flex items-start space-x-5">
                  <div 
                    className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25"
                  >
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-400 transition-colors">Call Us Now</h3>
                    <p className="text-gray-300 mb-3">24/7 Emergency Service Available</p>
                    <p className="text-red-400 hover:text-red-300 font-semibold text-lg transition-colors duration-300">
                      {company.phone}
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${company.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-premium group cursor-pointer p-6 block"
              >
                <div className="flex items-start space-x-5">
                  <div 
                    className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25"
                  >
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-400 transition-colors">Email Us</h3>
                    <p className="text-gray-300 mb-3">Get a quote or ask questions</p>
                    <p className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-300 break-all">
                      {company.email}
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`https://maps.app.goo.gl/4hqEeAyprsrd2YBJ6`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-premium group cursor-pointer p-6 block"
              >
                <div className="flex items-start space-x-5">
                  <div 
                    className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25"
                  >
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-400 transition-colors">Visit Us</h3>
                    <p className="text-gray-300 mb-3">Service Area & Office</p>
                    <p className="text-red-400 leading-relaxed">{company.address}</p>
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-premium group cursor-default p-6"
              >
                <div className="flex items-start space-x-5">
                  <div 
                    className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/25"
                  >
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-400 transition-colors">Business Hours</h3>
                    <div className="text-gray-300 space-y-2 leading-relaxed">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                      <motion.p 
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-red-400 font-bold mt-3 flex items-center space-x-2"
                      >
                        <Flame className="h-4 w-4" />
                        <span>24/7 Emergency Response</span>
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 