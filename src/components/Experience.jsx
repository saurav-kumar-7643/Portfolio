import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform md:translate-x-[-50%]"></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {experienceData.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'}`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute ${
                      idx % 2 === 0 ? 'left-2' : 'md:left-1/2'
                    } md:left-1/2 w-14 h-14 bg-white dark:bg-purple-900 border-4 border-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-soft transform md:translate-x-[-50%]`}
                  >
                    {item.type === 'work' ? (
                      <FaBriefcase className="text-purple-600 dark:text-purple-400" size={20} />
                    ) : (
                      <FaGraduationCap className="text-purple-600 dark:text-purple-400" size={20} />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-24 md:ml-0 bg-white/70 dark:bg-purple-900/70 rounded-xl p-6 shadow-soft backdrop-blur">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold text-pink-500 whitespace-nowrap ml-2">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}