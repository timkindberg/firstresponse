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
      <section id="instagram" className="relative bg-[linear-gradient(to_bottom_right,theme(colors.black),theme(colors.gray.900))] section-padding overflow-hidden">
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/40 rounded text-red-400 text-xs font-mono uppercase tracking-widest mb-6">
              <Instagram className="h-4 w-4" />
              <span>Loading Posts...</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-6">
              FIELD <span className="text-red-500">OPERATIONS</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="relative bg-[linear-gradient(to_bottom_right,theme(colors.black),theme(colors.gray.900))] section-padding overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/40 rounded text-red-400 text-xs font-mono uppercase tracking-widest mb-8"
          >
            <Instagram className="h-5 w-5" />
            <span>Live Field Operations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-6"
          >
            FOLLOW US ON <span className="text-red-500">INSTAGRAM</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono"
          >
            Real-time project updates and behind-the-scenes technical operations
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
              className="card-premium group"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={post.media_url}
                  alt="Instagram post"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Instagram link overlay */}
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="bg-red-600 rounded p-4"
                  >
                    <Instagram className="h-8 w-8 text-white" />
                  </motion.div>
                </a>

                {/* Media type indicator */}
                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-4 left-4 bg-red-600/80 backdrop-blur-sm rounded px-3 py-1">
                    <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">VIDEO</span>
                  </div>
                )}
                {post.media_type === 'CAROUSEL_ALBUM' && (
                  <div className="absolute top-4 left-4 bg-red-600/80 backdrop-blur-sm rounded px-3 py-1">
                    <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">ALBUM</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm font-mono">
                      {user?.username || 'first_response_tree_service'}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs font-mono">{formatInstagramDate(post.timestamp)}</span>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-4 font-mono">
                  {truncateCaption(post.caption || '')}
                </p>
                
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-red-400 hover:text-red-300 text-sm font-mono font-medium transition-colors duration-300 uppercase tracking-wider"
                >
                  <span>View Post</span>
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
          <p className="text-gray-400 mb-6 font-mono">
            Daily operational updates and technical field documentation
          </p>
          <a
            href="https://www.instagram.com/first_response_tree_service/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-red-500/30 hover:border-red-500/60 bg-red-600/10 hover:bg-red-600/20 text-red-400 hover:text-red-300 font-bold rounded transition-all duration-300 backdrop-blur-sm font-mono uppercase tracking-wider"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow on Instagram</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramSection;
