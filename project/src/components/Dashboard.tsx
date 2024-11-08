import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, CheckSquare, Calendar, Activity } from 'lucide-react';
import Navbar from './Navbar';
import TaskList from './TaskList';
import GymCalendar from './GymCalendar';
import StreakCounter from './StreakCounter';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tasks');
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <div className="pb-20">
        {activeTab === 'tasks' && <TaskList />}
        {activeTab === 'calendar' && <GymCalendar />}
        {activeTab === 'streak' && <StreakCounter />}
      </div>

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } border-t ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      } p-4`}>
        <div className="flex justify-around items-center">
          <button
            onClick={() => setIsNavOpen(true)}
            className="p-2 hover:text-indigo-600 transition-colors"
          >
            <Menu size={24} />
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`p-2 transition-colors ${
              activeTab === 'tasks' ? 'text-indigo-600' : ''
            }`}
          >
            <CheckSquare size={24} />
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`p-2 transition-colors ${
              activeTab === 'calendar' ? 'text-indigo-600' : ''
            }`}
          >
            <Calendar size={24} />
          </button>
          <button
            onClick={() => setActiveTab('streak')}
            className={`p-2 transition-colors ${
              activeTab === 'streak' ? 'text-indigo-600' : ''
            }`}
          >
            <Activity size={24} />
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default Dashboard;