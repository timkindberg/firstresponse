'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, TreePine, Clock, Shield } from 'lucide-react';
import { getCompanyInfo } from '@/lib/content';

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
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl">{company.name}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {company.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-emerald-500">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-500">
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
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-500 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>{company.phone}</span>
              </a>
              
              <a
                href={`mailto:${company.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-500 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>{company.email}</span>
              </a>
              
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>{company.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-emerald-500 transition-colors duration-300">
                  Tree Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-500 transition-colors duration-300">
                  Tree Pruning & Trimming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-500 transition-colors duration-300">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-500 transition-colors duration-300">
                  Stump Grinding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-500 transition-colors duration-300">
                  Storm Cleanup
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#contact"
              className="text-gray-400 hover:text-emerald-500 text-sm transition-colors duration-300"
            >
              Get Estimate
            </a>
            <a
              href="tel:911"
              className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300 font-medium"
            >
              Emergency: 911
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 