# Simple To-Do List Web app

A simple to-do list application built with React, TypeScript, and Vite. This app helps you manage tasks, track gym workouts, and maintain productivity streaks with a beautiful, animated interface.

## Features

- **Task Management**: Add, complete, and delete tasks with descriptions
- **Gym Calendar**: Track your workout completion with a visual calendar
- **Streak Counter**: Monitor your productivity streak (currently displays a 7-day streak)
- **Dark/Light Theme**: Toggle between dark and light modes
- **Animated UI**: Smooth transitions and animations using Framer Motion
- **Responsive Design**: Mobile-friendly with bottom navigation
- **Landing Page**: Animated introduction screen

## Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **TailwindCSS 3.4.1** - Styling
- **Framer Motion 11.0.8** - Animations
- **Lucide React 0.344.0** - Icons
- **date-fns 3.3.1** - Date manipulation

## Project Structure

```
to_do_list_clone/
├── project/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTodo.tsx       # Add new task modal
│   │   │   ├── Dashboard.tsx     # Main dashboard with navigation
│   │   │   ├── GymCalendar.tsx   # Gym workout tracker
│   │   │   ├── LandingPage.tsx   # Animated landing screen
│   │   │   ├── Navbar.tsx        # Side navigation menu
│   │   │   ├── StreakCounter.tsx # Productivity streak display
│   │   │   ├── TaskList.tsx      # Task management interface
│   │   │   └── TodoList.tsx      # Individual todo item component
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx  # Theme provider (dark/light)
│   │   ├── App.tsx               # Main application component
│   │   ├── main.tsx              # Application entry point
│   │   └── types.ts              # TypeScript type definitions
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd project
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

1. **Landing Page**: The app starts with a 2-second animated landing page
2. **Dashboard**: Main interface with bottom navigation
3. **Tasks Tab**: 
   - Click the `+` button to add new tasks
   - Click the circle icon to mark tasks as complete
   - Click the trash icon to delete tasks
4. **Calendar Tab**: 
   - Click on any date to log gym workout completion
   - Green = completed, Red = not completed
5. **Streak Tab**: View your current productivity streak
6. **Theme**: Toggle between dark and light mode using the menu button

## Security Note

This application does not use any external APIs, authentication, or store sensitive data. All data is stored in-memory and will be lost on page refresh. No API keys, secrets, or sensitive information are hardcoded in the source code.

## Future Enhancements

- Local storage persistence for tasks and gym logs
- User authentication and cloud sync
- More sophisticated streak calculation
- Task categories and priorities
- Due dates and reminders
- Export/import functionality

## License

MIT Release
This project is open source and available for educational purposes.
