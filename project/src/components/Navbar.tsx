import React from 'react';
import { motion } from 'framer-motion';
import { X, Moon, Sun, Star, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'all', name: 'All', color: 'bg-gray-500' },
  { id: 'work', name: 'Work', color: 'bg-blue-500' },
  { id: 'personal', name: 'Personal', color: 'bg-green-500' },
  { id: 'wishlist', name: 'Wishlist', color: 'bg-purple-500' },
  { id: 'birthday', name: 'Birthday', color: 'bg-pink-500' },
];

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', damping: 20 }}
      className={`fixed inset-y-0 left-0 w-64 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } shadow-xl z-50`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:text-indigo-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Star size={20} />
              <span>Pro Version</span>
              <span className="text-sm text-indigo-600 ml-auto">Coming Soon</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Categories</h3>
            {categories.map(category => (
              <div
                key={category.id}
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <span>{category.name}</span>
              </div>
            ))}
            <button className="w-full text-left p-2 text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              + Add Category
            </button>
          </div>

          <div className="space-y-2">
            <div
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
              <span>Theme</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <MessageSquare size={20} />
              <span>Feedback</span>
              <span className="text-sm text-indigo-600 ml-auto">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;