import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    // Check localStorage or system preference
    if (typeof localStorage !== 'undefined' && localStorage.theme) {
      return localStorage.theme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-purple-900 shadow-soft backdrop-blur hover:shadow-softLg transition-all"
      onClick={() => setDark(!dark)}
      aria-label="Toggle Dark Mode"
    >
      {dark ? (
        <FaSun className="text-yellow-500" size={20} />
      ) : (
        <FaMoon className="text-purple-600" size={20} />
      )}
    </motion.button>
  );
}