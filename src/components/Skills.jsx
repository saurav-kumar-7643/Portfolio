import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const SkillCategory = ({ title, skills }) => (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">{skill.level}%</span>
            </div>
            <motion.div
              className="w-full bg-white/50 dark:bg-purple-900/50 rounded-full h-2 overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <SkillCategory title="Frontend" skills={skillsData.frontend} />
            <SkillCategory title="Backend" skills={skillsData.backend} />
            <SkillCategory title="Machine Learning" skills={skillsData.ml} />
            <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}