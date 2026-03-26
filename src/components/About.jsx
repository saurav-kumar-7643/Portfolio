import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hey! I'm Saurav Kumar, a passionate full-stack developer and AI/ML enthusiast from India. 
                I fell in love with coding at 15, and since then, I've been on an amazing journey of building 
                things that matter.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently, I'm focused on creating interactive web experiences, diving deep into machine learning, 
                and exploring the intersection of AI and web development. I love solving complex problems with elegant solutions.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me learning new technologies, contributing to open source, 
                or writing about tech on my blog. I'm always up for collaborating on exciting projects!
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My mission is to leverage technology to create meaningful impact and build products that users absolutely love.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-12">
            {[
              { number: '50+', label: 'Projects' },
              { number: '100+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Exp.' },
              { number: '20+', label: 'Technologies' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 dark:bg-purple-800/60 rounded-2xl p-6 text-center shadow-soft backdrop-blur"
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}