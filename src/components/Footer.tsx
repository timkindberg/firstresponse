'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { getCompanyInfo } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

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
    <footer className="bg-gray-900 text-white">
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
            <div className="flex items-center space-x-3 mb-4 -ml-10">
              <div className="flex items-start relative w-full max-w-96 h-[250px]">
                              <Image
                src={getImageUrl("/First Response Logo.svg")}
                alt="First Response Tree Service Logo"
                fill
                className="object-contain"
              />
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {company.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-red-500">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-red-500">
                <Clock className="h-5 w-5" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${company.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>{company.phone}</span>
              </a>
              <a 
                href={`mailto:${company.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>{company.email}</span>
              </a>
              <a href="https://maps.app.goo.gl/4hqEeAyprsrd2YBJ6" className="flex items-start space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>{company.address}</span>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300">
                  Tree Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300">
                  Tree Pruning & Trimming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300">
                  Stump Grinding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-300">
                  Storm Cleanup
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 {company.name}. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#contact" 
              className="text-red-500 hover:text-red-400 font-medium text-sm transition-colors duration-300"
            >
              Get Estimate
            </a>
            <a 
              href="tel:911" 
              className="text-yellow-500 hover:text-yellow-400 font-medium text-sm transition-colors duration-300"
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