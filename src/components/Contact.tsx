'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Send, Shield, Flame } from 'lucide-react';
import { getContactInfo, getCompanyInfo } from '@/lib/content';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const contactInfo = getContactInfo();
  const company = getCompanyInfo();

  const [state, handleSubmit] = useForm("mwpnwgay");

  return (
    <section id="contact" className="relative bg-[#0F1419] text-white section-padding overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
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
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/40 rounded text-red-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <Shield className="h-4 w-4" />
            <span>Contact Form</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono uppercase"
          >
            <span className="text-red-500">{contactInfo.title}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono"
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
            <div className="rounded-lg p-8 border-2 border-white/10 bg-white/5 backdrop-blur-md">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-mono font-bold text-green-400">We will get back to you soon!</p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_next" value="/#contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3 font-mono uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 font-mono"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3 font-mono uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 font-mono"
                        placeholder="your@email.com"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3 font-mono uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 font-mono"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-3 font-mono uppercase tracking-wider">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded px-4 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 font-mono"
                      >
                        <option value="">Select a service</option>
                        <option value="tree-removal">Tree Removal</option>
                        <option value="tree-pruning">Tree Pruning</option>
                        <option value="stump-grinding">Stump Grinding</option>
                        <option value="land-clearing">Land Clearing</option>
                        <option value="debris-removal">Debris Removal</option>
                        <option value="emergency-service">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3 font-mono uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 resize-none font-mono"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-600 text-white font-bold font-mono px-10 py-6 rounded hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 uppercase tracking-wider flex items-center justify-center space-x-3"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
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
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.a
                href={`tel:${company.phone}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer p-6 block rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-md hover:border-red-500/40 transition-all"
              >
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-red-600 rounded flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-500 transition-colors font-mono uppercase">Call Us Now</h3>
                    <p className="text-gray-400 mb-3 font-mono">Emergency Service Available</p>
                    <p className="text-red-500 hover:text-red-400 font-semibold text-lg transition-colors duration-300 font-mono">
                      {company.phone}
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${company.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer p-6 block rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-md hover:border-red-500/40 transition-all"
              >
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-red-600 rounded flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-500 transition-colors font-mono uppercase">Email Us</h3>
                    <p className="text-gray-400 mb-3 font-mono">Get a quote or ask questions</p>
                    <p className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-300 break-all font-mono">
                      {company.email}
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-default p-6 rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-red-600 rounded flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-red-500 transition-colors font-mono uppercase">Business Hours</h3>
                    <div className="text-gray-400 space-y-2 leading-relaxed font-mono">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                      <motion.p 
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-red-500 font-bold mt-3 flex items-center space-x-2"
                      >
                        <Flame className="h-4 w-4" />
                        <span>Emergency Response</span>
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
