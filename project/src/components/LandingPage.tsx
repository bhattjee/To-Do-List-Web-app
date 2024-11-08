import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-gray-900 dark:to-indigo-900 flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Make Today Count
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Every small step leads to big achievements
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;