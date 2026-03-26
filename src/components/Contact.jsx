import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual backend)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);

      // Reset submission message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Got a project in mind? I'd love to hear from you. Feel free to get in touch!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/70 dark:bg-purple-900/70 rounded-xl p-6 shadow-soft backdrop-blur">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <FaEnvelope className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href="mailto:saurav@example.com" className="text-lg font-semibold text-purple-700 dark:text-purple-300 hover:text-pink-500 transition-colors">
                      saurav@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-purple-900/70 rounded-xl p-6 shadow-soft backdrop-blur">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <FaPhone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="text-lg font-semibold text-purple-700 dark:text-purple-300">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether you have a question or just want to say hi, I'm always happy to connect. 
                I typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-purple-900/80 border border-purple-200 dark:border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-purple-900/80 border border-purple-200 dark:border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/80 dark:bg-purple-900/80 border border-purple-200 dark:border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-softLg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg text-center font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}