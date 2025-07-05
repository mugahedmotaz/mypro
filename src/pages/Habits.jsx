import React, { useState } from 'react';

const initialHabits = [
  { name: 'شرب الماء', icon: '💧', completed: false },
  { name: 'قراءة 10 دقائق', icon: '📚', completed: true },
  { name: 'رياضة 20 دقيقة', icon: '🏃‍♂️', completed: false },
  { name: 'تأمل', icon: '🧘‍♂️', completed: false },
];

const Habits = () => {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState('');
  const [newIcon, setNewIcon] = useState('✨');

  const toggleHabit = idx => {
    setHabits(habits.map((h, i) => i === idx ? { ...h, completed: !h.completed } : h));
  };

  const addHabit = e => {
    e.preventDefault();
    if (!newHabit.trim()) return;
    setHabits([...habits, { name: newHabit, icon: newIcon, completed: false }]);
    setNewHabit('');
    setNewIcon('✨');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-sky-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-2xl w-full bg-white/90 rounded-3xl shadow-2xl p-8 border-t-4 border-emerald-200 flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700 text-center mb-2">تتبع العادات اليومية</h1>
        <form onSubmit={addHabit} className="flex flex-col md:flex-row gap-3 items-center justify-center mb-6">
          <input
            type="text"
            placeholder="عادة جديدة..."
            className="border border-emerald-200 rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-200 text-right"
            value={newHabit}
            onChange={e => setNewHabit(e.target.value)}
            dir="rtl"
          />
          <input
            type="text"
            maxLength={2}
            className="border border-emerald-200 rounded px-2 py-2 w-16 text-center text-xl"
            value={newIcon}
            onChange={e => setNewIcon(e.target.value)}
          />
          <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-full shadow transition-all">إضافة</button>
        </form>
        <ul className="flex flex-col gap-4">
          {habits.length === 0 && (
            <li className="text-center text-gray-400">لا توجد عادات بعد، أضف عادة جديدة!</li>
          )}
          {habits.map((habit, idx) => (
            <li key={idx} className={`flex items-center justify-between bg-emerald-50 rounded-xl px-4 py-3 shadow-sm border ${habit.completed ? 'opacity-60' : ''}`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{habit.icon}</span>
                <span className={`text-lg font-bold ${habit.completed ? 'line-through text-gray-400' : 'text-emerald-800'}`}>{habit.name}</span>
              </div>
              <button
                onClick={() => toggleHabit(idx)}
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${habit.completed ? 'bg-emerald-400 border-emerald-400' : 'bg-white border-emerald-300'} transition-all`}
                title={habit.completed ? 'إلغاء الإنجاز' : 'إنجاز'}
              >
                {habit.completed ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <span className="text-emerald-500 font-bold">✓</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Habits;
