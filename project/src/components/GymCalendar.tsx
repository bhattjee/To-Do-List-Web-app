import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';

const GymCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gymLogs, setGymLogs] = useState<{ date: string; completed: boolean }[]>([]);

  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleDateClick = (date: Date) => {
    const confirmed = window.confirm('Did you complete your gym task today?');
    const newLog = { date: format(date, 'yyyy-MM-dd'), completed: confirmed };
    setGymLogs(prev => [...prev.filter(log => log.date !== newLog.date), newLog]);
  };

  const getDateStatus = (date: Date) => {
    const log = gymLogs.find(log => log.date === format(date, 'yyyy-MM-dd'));
    return log?.completed;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {format(selectedDate, 'MMMM yyyy')}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold py-2">
            {day}
          </div>
        ))}
        {days.map(day => {
          const status = getDateStatus(day);
          return (
            <motion.button
              key={day.toString()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDateClick(day)}
              className={`p-2 rounded-lg ${
                status === true
                  ? 'bg-green-500 text-white'
                  : status === false
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              {format(day, 'd')}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default GymCalendar;