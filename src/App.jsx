import React from 'react';

const App = () => (
 <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
  <h1 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow">مرحباً بك في تطبيق الإنتاجية</h1>
  <h2 className="text-lg text-gray-600 mb-8">تجربة احترافية مع React + Tailwind CSS</h2>
  <div className="flex gap-4">
   <button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">لوحة التحكم</button>
   <button className="px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">العادات</button>
   <button className="px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition">العقلية</button>
  </div>
  <div className="mt-12 text-gray-400 text-xs">&copy; 2025 تطبيق الإنتاجية</div>
 </div>
);

export default App;
