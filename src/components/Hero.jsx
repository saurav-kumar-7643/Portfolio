import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import ThreeDScene from './ThreeDScene';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 md:pt-32 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div className="space-y-6 z-10">
          <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Hi, I'm Saurav Kumar
            </h1>
          </motion.div>

          <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-300">
              Full Stack Developer | AI/ML Enthusiast
            </h2>
          </motion.div>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            I build web apps, machine learning projects, and interactive user experiences. Passionate about creating elegant solutions to complex problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 45px rgba(205, 180, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-soft hover:shadow-softLg transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-8 py-4 rounded-full font-semibold hover:bg-pastelPink dark:hover:bg-purple-700 transition-all shadow-soft"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-6 pt-4"
          >
            {[
              { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaEnvelope, url: 'mailto:saurav@example.com', label: 'Email' },
              { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
            ].map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/50 dark:bg-purple-800/50 rounded-full text-purple-600 dark:text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all shadow-soft"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Scene */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hidden md:flex justify-center items-center"
        >
          <ThreeDScene />
        </motion.div> */}
       <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 1 }}
  className="hidden md:flex justify-center items-center"
>
  <ThreeDScene />
</motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}