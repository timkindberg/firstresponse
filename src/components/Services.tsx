'use client';

import { motion } from 'framer-motion';
import { TreeDeciduous, Phone, Settings, Check, Leaf, Truck, ArrowRight, Flame, Axe, Trees, CloudLightning, MemoryStick } from 'lucide-react';
import { getServices, getCompanyInfo } from '@/lib/content';
import { getImageUrl } from '@/lib/utils';

const Services = () => {
  const services = getServices();
  const company = getCompanyInfo();

  const getIcon = (iconName: string) => {
    const iconMap = {
      'tree': Axe,
      'scissors': Trees,
      'phone': CloudLightning,
      'leaf': Leaf,
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
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-900 via-black to-red-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-container container-padding relative z-10"
      >
        {/* Enhanced Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 glass-fire px-6 py-3 rounded-full mb-6"
          >
            <Flame className="w-5 h-5 text-red-400" />
            <span className="text-white font-semibold">Our Services</span>
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional Tree Care{' '}
            <span className="text-gradient-fire bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From routine maintenance to emergency services, we provide comprehensive tree care solutions for residential and commercial properties throughout greater Cincinnati.
          </motion.p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="card-premium group cursor-pointer relative overflow-hidden"
              >
                {/* Premium Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image with Overlay */}
                <div className="relative h-56 lg:h-64 overflow-hidden rounded-t-3xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${getImageUrl(service.image)}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Emergency Badge for Emergency Service */}
                  {service.id === 'emergency-service' && (
                    <div className="absolute top-6 right-6 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      24/7
                    </div>
                  )}
                </div>

                {/* Premium Card Content */}
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-red-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {service.shortDescription}
                  </p>
                  
                  {/* Enhanced Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Premium CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-fire flex items-center justify-center space-x-3 group-hover:shadow-fire-lg"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border border-red-500/0 group-hover:border-red-500/30 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Emergency CTA */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background with parallax effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M40%2040L20%2020h40L40%2040zM40%2040L20%2060h40L40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse"
            >
              <Phone className="w-10 h-10 text-black" />
            </motion.div>

            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Emergency Tree Service?
            </h3>
            
            <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-3xl mx-auto">
                             Available 24/7 for storm damage, fallen trees, and urgent tree removal needs. 
               Fast response guaranteed by Cincinnati&rsquo;s finest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href={`tel:${company.phone}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency flex items-center justify-center space-x-3 text-xl font-bold px-10 py-5"
              >
                <Phone className="w-6 h-6 hidden md:block" />
                <span>
                  Emergency:
                  <br className="block sm:hidden" />
                  {company.phone}
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5 hidden md:block" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services; 