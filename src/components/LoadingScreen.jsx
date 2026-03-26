import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-pastelLavender via-pastelPurple to-pastelPink flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute w-96 h-96 bg-white/30 rounded-full blur-3xl top-10 left-10 animate-blob1"></div>
      <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl bottom-10 right-10 animate-blob2"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative z-10 text-center"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Animated Logo */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 3, repeat: Infinity }, scale: { duration: 2, repeat: Infinity } }}
            className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-softLg"
          >
            <span className="text-4xl font-bold text-white">S</span>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold text-purple-900 mb-2">Welcome</h1>
            <p className="text-purple-700 font-medium">Loading your portfolio...</p>
          </motion.div>

          {/* Animated Loading Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-soft"
          ></motion.div>

          {/* Dots Animation */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                className="w-3 h-3 bg-purple-600 rounded-full"
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}