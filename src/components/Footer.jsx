import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white/80 dark:bg-purple-900/80 backdrop-blur border-t border-gray-200 dark:border-purple-700 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-4">Saurav Kumar</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Full Stack Developer & AI/ML Enthusiast building beautiful, interactive web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-purple-500/20 dark:bg-purple-700/20 rounded-full text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-purple-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Saurav Kumar. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
              Designed & Developed with ❤️ using React, Three.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}