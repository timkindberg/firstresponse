'use client';

import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getInstagramPosts, getInstagramUser, formatInstagramDate, truncateCaption, type InstagramPost, type InstagramUser } from '@/lib/instagram';

const InstagramSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [user, setUser] = useState<InstagramUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        setLoading(true);
        const [postsData, userData] = await Promise.all([
          getInstagramPosts(6),
          getInstagramUser()
        ]);
        setPosts(postsData);
        setUser(userData);
      } catch (err) {
        console.error('Instagram fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
  };

  if (loading) {
    return (
      <section id="instagram" className="relative bg-[linear-gradient(to_bottom_right,theme(colors.black),#1a2a5c)] section-padding overflow-hidden">
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[radial-gradient(circle_at_30%_107%,rgba(253,244,151,0.2)_0%,rgba(253,244,151,0.2)_5%,rgba(253,89,73,0.2)_45%,rgba(214,36,159,0.2)_60%,rgba(40,90,235,0.2)_90%)] backdrop-blur-sm border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
              <Instagram className="h-4 w-4" />
              <span>Loading Instagram Posts...</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              See Our Work on <span className="bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] bg-clip-text text-transparent">Instagram</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="relative bg-[linear-gradient(to_bottom_right,theme(colors.black),#1a2a5c)] section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_107%,rgba(253,244,151,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(40,90,235,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(214,36,159,0.02)_50%,transparent_75%)]"></div>
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[radial-gradient(circle_at_30%_107%,rgba(253,244,151,0.2)_0%,rgba(253,244,151,0.2)_5%,rgba(253,89,73,0.2)_45%,rgba(214,36,159,0.2)_60%,rgba(40,90,235,0.2)_90%)] backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow Our Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            See Our Work on <span className="bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] bg-clip-text text-transparent">Instagram</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Follow our latest projects, behind-the-scenes content, and professional tree service work
          </motion.p>

        </motion.div>

        {/* Instagram Posts Grid */}
        {posts.length > 0 && <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10"
            >
              <div className="relative">
                <img
                  src={post.media_url}
                  alt="Instagram post"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Instagram-style overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Instagram link overlay */}
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_107%,rgba(253,244,151,0.2)_0%,rgba(253,244,151,0.2)_5%,rgba(253,89,73,0.2)_45%,rgba(214,36,159,0.2)_60%,rgba(40,90,235,0.2)_90%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                  >
                    <Instagram className="h-8 w-8 text-white" />
                  </motion.div>
                </a>

                {/* Media type indicator */}
                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">VIDEO</span>
                  </div>
                )}
                {post.media_type === 'CAROUSEL_ALBUM' && (
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">CAROUSEL</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] rounded-full flex items-center justify-center">
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">
                      {user?.username || 'first_response_tree_service'}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">{formatInstagramDate(post.timestamp)}</span>
                </div>
                
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {truncateCaption(post.caption || '')}
                </p>
                
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                >
                  <span>View on Instagram</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of our work? Follow us for daily updates and behind-the-scenes content!
          </p>
          <a
            href="https://www.instagram.com/first_response_tree_service/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-blue-500/30 hover:border-blue-500/60 text-blue-400 hover:text-blue-300 font-medium rounded-full transition-all duration-300 hover:bg-blue-500/10"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow Our Instagram</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramSection;
