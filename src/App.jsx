import React, { useState } from 'react';

const features = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg',
    title: 'لوحة تحكم ذكية',
    desc: 'نظرة شاملة على إنتاجيتك اليومية والأسبوعية مع إحصائيات بصرية جذابة.'
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4dd.svg',
    title: 'تتبع العادات',
    desc: 'أنشئ عادات جديدة، راقب التزامك، وحقق أهدافك بخطوات بسيطة وواجهة تفاعلية.'
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c9.svg',
    title: 'تقدم مرئي',
    desc: 'تابع تقدمك عبر مخططات زمنية ولوحات تحفيزية تفاعلية بألوان هادئة.'
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg',
    title: 'تطوير العقلية',
    desc: 'اقتباسات يومية وتمارين تأمل لتعزيز التفكير الإيجابي وتحفيز الذات.'
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg',
    title: 'مساعد ذكي',
    desc: 'تفاعل مع مساعد ذكي يقترح عادات جديدة ويحفزك لتحقيق المزيد.'
  },
];

const initialHabits = [
  { name: 'شرب الماء', icon: '💧', completed: false },
  { name: 'قراءة 10 دقائق', icon: '📚', completed: true },
  { name: 'رياضة 20 دقيقة', icon: '🏃‍♂️', completed: false },
  { name: 'تأمل', icon: '🧘‍♂️', completed: false },
];

const App = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-emerald-50 flex flex-col justify-between relative overflow-x-hidden">
      {/* Header */}
      <header className="w-full py-8 px-4 flex flex-col items-center bg-white/70 shadow-sm backdrop-blur-md border-b border-blue-100 z-10">
        <div className="flex items-center gap-4 mb-2">
          <img src="https://img.icons8.com/fluency/60/checked-checkbox.png" alt="logo" className="w-14 h-14 drop-shadow" />
          <span className="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight">منصة الإنتاجية</span>
        </div>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-xl">
          أنشئ عاداتك، راقب تقدمك، وارتقِ بذاتك مع أدوات احترافية وألوان هادئة وتصميم عصري.
        </p>
      </header>
      {/* Features Grid */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-200">
              <img src={f.icon} alt="icon" className="w-14 h-14 mb-4" />
              <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">{f.title}</h2>
              <p className="text-gray-600 text-center text-base">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* Habits Tracker Section */}
        <section className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-8 border-t-4 border-emerald-200 flex flex-col gap-8 mb-16">
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
        </section>
      </main>
      {/* Decorative SVG Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-32 z-0" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e0e7ff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm relative z-10 mt-10">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - منصة الإنتاجية العربية
      </footer>
    </div>
  );
};

export default App;
