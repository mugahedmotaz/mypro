// عنصر عادة فردية
const HabitItem = ({ name, streak, onMarkDone }) => (
  <div className="flex items-center justify-between bg-white rounded shadow p-3 mb-2">
    <span>{name}</span>
    <span className="text-green-600">🔥 {streak}</span>
    <button onClick={onMarkDone} className="bg-blue-600 text-white px-3 py-1 rounded">Mark Done</button>
  </div>
);

export default HabitItem;
