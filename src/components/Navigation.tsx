'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Flame, Shield } from 'lucide-react';
import { getCompanyInfo } from '@/lib/content';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const company = getCompanyInfo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark shadow-2xl border-b border-red-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-container container-padding">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex items-center space-x-4 justify-start w-60 h-28 relative mt-4">
            <Image
              src="/First Response Min Logo.svg"
              alt="First Response Tree Service Logo"
              fill
              priority
              className="object-contain relative z-10 drop-shadow-2xl"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative text-sm xl:text-base font-medium transition-all duration-300 hover:text-red-400 group ${
                  isScrolled ? 'text-gray-200' : 'text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            {/* Emergency Call Button */}
            <motion.a
              href={`tel:${company.phone}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-emergency flex items-center space-x-2 text-sm xl:text-base font-bold"
            >
              <Phone size={18} />
              <span>Emergency Call</span>
            </motion.a>

            {/* Firefighter Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden xl:flex items-center space-x-2 glass-fire px-3 py-2 rounded-full"
            >
              <Flame className="w-4 h-4 text-red-400" />
              <Shield className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'glass-dark text-white hover:bg-red-500/20' 
                  : 'glass-light text-white hover:bg-white/20'
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="glass-dark rounded-2xl mt-4 p-6 border border-red-500/20 shadow-2xl">
            <div className="space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block text-white hover:text-red-400 font-medium text-lg transition-all duration-300 py-2 px-4 rounded-xl hover:bg-red-500/10 group"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.name}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-red-500/20 space-y-4">
                <motion.a
                  href={`tel:${company.phone}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="btn-emergency flex items-center justify-center space-x-3 w-full text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} />
                  <span>Emergency: {company.phone}</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="btn-ghost flex items-center justify-center space-x-3 w-full text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Free Estimate</span>
                </motion.a>
              </div>

              {/* Mobile Firefighter Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center justify-center space-x-3 glass-fire px-4 py-3 rounded-xl"
              >
                <Flame className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">Firefighter Owned & Operated</span>
                <Shield className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 