import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const StreakCounter: React.FC = () => {
  // This would normally be calculated based on actual task completion data
  const currentStreak = 7;

  return (
    <div className="p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Flame size={48} className="mx-auto mb-4" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-2">
          {currentStreak} Day Streak!
        </h2>
        <p className="text-orange-100">
          Keep going! You're doing great!
        </p>
      </motion.div>
    </div>
  );
};

export default StreakCounter;