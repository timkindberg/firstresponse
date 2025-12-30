'use client';

import { getCompanyInfo } from '@/lib/content';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Shield } from 'lucide-react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';

const Footer = () => {
  const company = getCompanyInfo();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0B0E12] text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto container-padding section-padding"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            {/* Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Image
                src={getImageUrl('/first-response-tree-service-cross-graphic-white.png')}
                alt="First Response Tree Service"
                width={120}
                height={120}
                className="w-28 h-28"
              />
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-md font-mono">
              {company.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-red-500">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-mono">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-red-500">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-mono">Emergency Service</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4 font-mono uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${company.phone}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors duration-300 font-mono"
              >
                <Phone className="h-4 w-4" />
                <span>{company.phone}</span>
              </a>
              <a 
                href={`mailto:${company.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors duration-300 font-mono"
              >
                <Mail className="h-4 w-4" />
                <span>{company.email}</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/4hqEeAyprsrd2YBJ6" 
                className="flex items-start space-x-2 text-gray-400 hover:text-red-500 transition-colors duration-300 font-mono"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>{company.address}</span>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4 font-mono uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300 font-mono">
                  Tree Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300 font-mono">
                  Tree Pruning & Trimming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300 font-mono">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300 font-mono">
                  Stump Grinding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300 font-mono">
                  Storm Cleanup
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0 font-mono">
            © 2025 {company.name}. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <a 
              href="#contact" 
              className="text-red-500 hover:text-red-400 font-medium text-sm transition-colors duration-300 font-mono uppercase tracking-wider"
            >
              Get Estimate
            </a>
            <a 
              href="/privacy_policy" 
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-300 font-mono"
            >
              Privacy Policy
            </a>
            <a 
              href="tel:911" 
              className="text-yellow-500 hover:text-yellow-400 font-medium text-sm transition-colors duration-300 font-mono"
            >
              For Life-Threatening Emergencies: 911
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
