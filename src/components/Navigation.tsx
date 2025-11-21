'use client';

import { getCompanyInfo } from '@/lib/content';
import { motion } from 'framer-motion';
import { Flame, Menu, Phone, Shield, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  variant?: 'default' | 'authority' | 'eco' | 'specialist' | 'residential' | 'residential-navy' | 'specialist-grid';
}

const Navigation = ({ variant = 'default' }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRedesign, setIsRedesign] = useState(false);
  const company = getCompanyInfo();

  useEffect(() => {
    const handleScroll = () => {
      // Use a higher scroll threshold (400) for sm/md screens, else 50
      const width = window.innerWidth;
      const isSmallOrMedium = width < 1024; // Tailwind md: 768, lg: 1024
      setIsScrolled(window.scrollY > (isSmallOrMedium ? 350 : 50));
    };
    
    setIsRedesign(window.location.pathname.includes('/redesign'));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock/unlock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Follow Us', href: '#instagram' },
    { name: 'Free Estimate', href: '#contact' },
  ];

  const handleSectionScroll = (href: string) => {
    setIsOpen(false);
    
    if (window.location.pathname.includes('/redesign')) {
      window.location.href = href.startsWith('#') ? `/${href}` : href;
      return;
    }
    
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navHeight = 80;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  // Theme Configurations
  const themes = {
    default: {
      navBg: isScrolled || isRedesign ? 'glass-dark shadow-2xl border-b border-red-500/20' : 'bg-transparent',
      textColor: isScrolled ? 'text-gray-200' : 'text-white',
      hoverColor: 'hover:text-red-400',
      buttonClass: 'btn-emergency text-gray-900',
      logoText: 'text-white',
      mobileMenuBg: 'glass-dark border-red-500/20',
      mobileText: 'text-white hover:text-red-400',
      mobileButton: 'btn-emergency text-gray-900',
      iconColor: 'text-white',
    },
    authority: {
      navBg: 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100',
      textColor: 'text-gray-700',
      hoverColor: 'hover:text-red-600',
      buttonClass: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20',
      logoText: 'text-gray-900',
      mobileMenuBg: 'bg-white border-gray-100 shadow-xl',
      mobileText: 'text-gray-700 hover:text-red-600',
      mobileButton: 'bg-red-600 text-white',
      iconColor: 'text-gray-600',
    },
    eco: {
      navBg: 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm border-b border-green-100',
      textColor: 'text-[#2C3E2C]',
      hoverColor: 'hover:text-[#4A6741]',
      buttonClass: 'bg-[#4A6741] text-white hover:bg-[#3A5233] shadow-lg shadow-green-900/10',
      logoText: 'text-[#2C3E2C]',
      mobileMenuBg: 'bg-[#FDFCF8] border-green-100 shadow-xl',
      mobileText: 'text-[#2C3E2C] hover:text-[#4A6741]',
      mobileButton: 'bg-[#4A6741] text-white',
      iconColor: 'text-[#2C3E2C]',
    },
    specialist: {
      navBg: 'bg-slate-50/95 backdrop-blur-md shadow-sm border-b border-slate-200',
      textColor: 'text-slate-700',
      hoverColor: 'hover:text-red-700',
      buttonClass: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20',
      logoText: 'text-slate-900',
      mobileMenuBg: 'bg-slate-50 border-slate-200 shadow-xl',
      mobileText: 'text-slate-700 hover:text-red-700',
      mobileButton: 'bg-slate-900 text-white',
      iconColor: 'text-slate-700',
    },
    residential: {
      navBg: 'bg-[#0B1120]/95 backdrop-blur-md shadow-sm border-b border-white/10',
      textColor: 'text-gray-200',
      hoverColor: 'hover:text-white',
      buttonClass: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-900/20',
      logoText: 'text-white',
      mobileMenuBg: 'bg-[#0B1120] border-gray-800 shadow-xl',
      mobileText: 'text-gray-300 hover:text-white',
      mobileButton: 'bg-red-600 text-white',
      iconColor: 'text-white',
    },
    'residential-navy': {
      navBg: 'bg-[#0A1628]/95 backdrop-blur-md shadow-sm border-b border-yellow-400/20',
      textColor: 'text-gray-200',
      hoverColor: 'hover:text-yellow-400',
      buttonClass: 'bg-yellow-400 text-[#0A1628] hover:bg-yellow-300 shadow-lg shadow-yellow-400/20 font-bold',
      logoText: 'text-white',
      mobileMenuBg: 'bg-[#0A1628] border-yellow-400/20 shadow-xl',
      mobileText: 'text-gray-300 hover:text-yellow-400',
      mobileButton: 'bg-yellow-400 text-[#0A1628] font-bold',
      iconColor: 'text-yellow-400',
    },
    'specialist-grid': {
      navBg: 'bg-[#0F1419]/95 backdrop-blur-md shadow-sm border-b border-white/10',
      textColor: 'text-gray-300',
      hoverColor: 'hover:text-red-500',
      buttonClass: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30 font-mono uppercase tracking-wider',
      logoText: 'text-white',
      mobileMenuBg: 'bg-[#0F1419] border-white/10 shadow-xl',
      mobileText: 'text-gray-400 hover:text-red-500',
      mobileButton: 'bg-red-600 text-white font-mono',
      iconColor: 'text-gray-400',
    }
  };

  const currentTheme = themes[variant];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${currentTheme.navBg}`}
    >
      <div className="max-container container-padding">
        <div className="flex justify-between items-center h-20 lg:h-24">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-full items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleSectionScroll(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative text-sm xl:text-base font-medium transition-all duration-300 ${currentTheme.hoverColor} group ${currentTheme.textColor}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}></span>
              </motion.button>
            ))}

            <div className="flex flex-grow h-full relative"></div>

            {/* Call Button */}
            <motion.a
              href={`tel:${company.phone}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${currentTheme.buttonClass} flex items-center space-x-2 text-sm xl:text-base font-bold px-6 py-3 rounded-lg transition-all`}
            >
              <Phone size={18} />
              <span>Call Us Now</span>
            </motion.a>

            {/* Firefighter Badge (Only visible on Default/Authority) */}
            {variant !== 'eco' && (
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className={`hidden xl:flex items-center space-x-2 px-3 py-2 rounded-full ${variant === 'default' ? 'glass-fire' : 'bg-red-50 border border-red-100'}`}
              >
                <Flame className="w-4 h-4 text-red-500" />
                <Shield className="w-4 h-4 text-yellow-500" />
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-all duration-300 ${currentTheme.iconColor}`}
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
          <div className={`${currentTheme.mobileMenuBg} rounded-2xl mt-4 p-6 border shadow-2xl`}>
            <div className="space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`block font-medium text-lg transition-all duration-300 py-2 px-4 rounded-xl group w-full text-left ${currentTheme.mobileText}`}
                    onClick={() => handleSectionScroll(item.href)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${variant === 'eco' ? 'bg-green-600' : 'bg-red-500'}`}></div>
                      <span>{item.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className={`pt-4 border-t space-y-4 ${variant === 'eco' ? 'border-green-100' : 'border-gray-100'}`}>
                <motion.a
                  href={`tel:${company.phone}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className={`${currentTheme.mobileButton} flex items-center justify-center space-x-3 w-full text-lg font-bold px-6 py-3 rounded-xl`}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} />
                  <span>Call Us Now: {company.phone}</span>
                </motion.a>

                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className={`flex items-center justify-center space-x-3 w-full text-lg font-semibold ${currentTheme.textColor}`}
                  onClick={() => handleSectionScroll('#contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Free Estimate</span>
                </motion.button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;