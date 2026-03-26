import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../data/navigation';

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active based on scroll position
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-purple-900/90 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Saurav Kumar
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  active === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-soft'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-pastelPurple/50 dark:hover:bg-purple-800/50'
                }`}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/95 dark:bg-purple-900/95 backdrop-blur border-b border-gray-200 dark:border-purple-800"
        >
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                    active === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-pastelPurple/50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}