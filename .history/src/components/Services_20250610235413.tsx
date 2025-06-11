'use client';

import { motion } from 'framer-motion';
import { TreeDeciduous, Scissors, Phone, Settings, Check } from 'lucide-react';
import { getServices } from '@/lib/content';

const Services = () => {
  const services = getServices();

  const getIcon = (iconName: string) => {
    const iconMap = {
      'tree-deciduous': TreeDeciduous,
      'scissors': Scissors,
      'phone': Phone,
      'gear': Settings,
    };
    return iconMap[iconName as keyof typeof iconMap] || TreeDeciduous;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Professional Tree Care
            <span className="text-emerald-600"> Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From routine maintenance to emergency services, we provide comprehensive tree care solutions for residential and commercial properties.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300"
                  >
                    <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Emergency Tree Service?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Available 24/7 for storm damage, fallen trees, and urgent tree removal needs. Fast response guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:(555) 123-4567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Emergency: (555) 123-4567</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Get Free Estimate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 