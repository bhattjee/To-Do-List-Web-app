import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Todo } from '../types';

const TaskList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  const handleAddTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo]);
    setShowAddTodo(false);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddTodo(true)}
          className="shine bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {showAddTodo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AddTodo
              onAdd={handleAddTodo}
              onClose={() => setShowAddTodo(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {todos.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No tasks yet. Add your first task!</p>
        </div>
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      )}
    </div>
  );
};

export default TaskList;