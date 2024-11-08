export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface GymLog {
  date: string;
  completed: boolean;
}

export type Theme = 'light' | 'dark';