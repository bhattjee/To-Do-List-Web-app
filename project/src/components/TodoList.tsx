import React from 'react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
            todo.completed
              ? 'bg-gray-50 opacity-75'
              : 'bg-white hover:shadow-md border border-gray-100'
          }`}
        >
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={() => onToggle(todo.id)}
              className={`transition-colors ${
                todo.completed ? 'text-green-500' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {todo.completed ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
            <div className="flex-1">
              <p
                className={`text-gray-800 ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.title}
              </p>
              {todo.description && (
                <p className="text-sm text-gray-500 mt-1">{todo.description}</p>
              )}
            </div>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-gray-400 hover:text-red-500 transition-colors ml-2"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;